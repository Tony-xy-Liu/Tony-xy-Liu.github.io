#!/arc/software/spack-2021/spack/opt/spack/linux-centos7-skylake_avx512/gcc-9.4.0/python-3.8.10-gdthw5ahkql24mqrkzq4x6bnkwlvx537/bin/python
#########################################################################################
# setup

_VER    = "4.1"

NAME    = "job_name"
CPU     = 2
MEM     = 32
TIME    = "2:00:00"

# sockeye
USER    = "txyliu"
ALLOC   = "st-shallam-1"
TEMP_VAR= "SLURM_TMPDIR"
ARR_VAR = "SLURM_ARRAY_TASK_ID"
CONSTRAINT = None
# CONSTRAINT = '[cascade]'

# cedar
# USER    = "phyberos"
# ALLOC   = "rpp-shallam"
# TEMP_VAR= "SLURM_TMPDIR"
# ARR_VAR = "SLURM_ARRAY_TASK_ID"
# CONSTRAINT = None
# # CONSTRAINT = '[cascade]'

# returns a list of dict
# each dict holds information for the job as is given to RunJob()
def MakeJobs():
    context = []

    _root = Path("/home/txyliu/project/data/sg_fasta")
    for i, f in enumerate(os.listdir(_root)):
        print(i, end="\r")
        fpath = _root.joinpath(f)
        name = f.split(".")[0].replace(" ", "_")
        context.append(dict(
            name=name,
            genome=str(fpath),
            image="/home/txyliu/project/data/sgrnable.sif",
            gfp="/home/txyliu/project/data/gfp.fa",
        ))
    return context

def RunJob(DATA, OUT_DIR, cpus, mem):
    name, genome, IMG, gfp = [DATA[k] for k in "name, genome, image, gfp".split(", ")]
    os.system(f"""\
    echo "setting up"
    date

    cp {gfp} ./gfp.fa
    cp {genome} ./genome.fa.gz
    pigz -d ./genome.fa.gz

    find .
    du -sh *
    """)

    out = OUT_DIR.joinpath(name)
    os.system(f"""\
    echo "---"
    echo "genome: {name}"
    echo "running"
    date

    singularity run -c -B ./:/ws {IMG} \
        sgrnable \
        -g /ws/genome.fa /ws/gfp.fa \
        -t /ws/gfp.fa \
        -o /ws/out

    echo "---"
    echo "copying back results"
    date

    mkdir -p {out}
    cp -r ./out/* {out}/
    find .
    du -sh *
    """)

#########################################################################################
# hpc submit

# if this script is called directly, then submit witn _INNER flag
# if _INNER is in the arguments, then I'm running on a compute node
# so continue with workflow
import os, sys, stat
import json
import time
import uuid
from pathlib import Path
from datetime import datetime
_INNER = "inner"
SCRIPT = os.path.abspath(__file__)
SCRIPT_DIR = Path("/".join(SCRIPT.split("/")[:-1]))

if not (len(sys.argv)>1 and sys.argv[1] == _INNER):
    now = datetime.now() 
    date_time = now.strftime("%Y-%m-%d-%H-%M")
    run_id = f'{uuid.uuid4().hex[:3]}'
    print("run:", NAME)
    print("run id:", run_id)
    OUT_DIR = Path(f"/home/{USER}/scratch/runs/{run_id}.{NAME}.{date_time}")
    internals_folder = OUT_DIR.joinpath(f"_internals")
    logs_folder = OUT_DIR.joinpath(f"_logs")

    context = MakeJobs()

    # ---------------------------------------------------------------------------------
    # prep commands & workspaces

    if len(context) == 0:
        print(f"no jobs, stopping")
        exit()

    os.makedirs(internals_folder)
    os.makedirs(logs_folder)
    os.chdir(internals_folder)

    run_context_path = internals_folder.joinpath("context.json")
    with open(run_context_path, "w") as j:
        json.dump(context, j, indent=4)

    os.makedirs(OUT_DIR, exist_ok=True)

    # ---------------------------------------------------------------------------------
    # submit

    print(f"N: {len(context)}")
    notes_file = f"notes.{run_id}.txt"
    run_cmd = f"python {SCRIPT} {_INNER} {run_context_path} {OUT_DIR} {CPU} {MEM} {TIME} {run_id}"

    #########
    # slurm
    arr_param = f"--array=0-{len(context)-1}" if len(context)>1 else " "
    cons_param = f"--constraint={CONSTRAINT}" if CONSTRAINT is not None else " "
    sub_cmd = f"""\
    sbatch --job-name "{run_id}-{NAME}" \
        --account {ALLOC} \
        --error {logs_folder}/err.%a.log --output {logs_folder}/out.%a.log \
        --cpus-per-task={CPU} --mem={MEM}G --time={TIME} \
        {cons_param} \
        {arr_param} \
        --wrap="{run_cmd}" &>> {internals_folder}/{notes_file}
    """.replace("  ", "")
    # ln -s {internals_folder} {SCRIPT_DIR}/{NAME}.{date_time}.{run_id}
    #########
    with open(notes_file, "w") as log:
        log.writelines(l+"\n" for l in [
            f"name: {NAME}",
            f"id: {run_id}",
            f"array size: {len(context)}",
            f"output folder: {OUT_DIR}",
            f"submit command:",
            sub_cmd,
            "",
        ])
    os.system(f"ln -s {OUT_DIR} {SCRIPT_DIR}/{OUT_DIR.name}")
    if not (len(sys.argv)>1 and sys.argv[1] in ["--mock", "mock", "-m"]):
        os.chdir(OUT_DIR)
        os.system(sub_cmd)
        try:
            with open(f"{internals_folder}/{notes_file}") as f:
                notes = [l for l in f.readlines() if l != "\n"]
                jid = notes[-1][:-1]
                print(f"scheduler id: {jid}")
        except:
            pass
        print("submitted")

    exit() # the outer script

#########################################################################################
# on the compute node...

_, run_context_path, _out_dir, cpus, mem, given_time, run_id = sys.argv[1:] # first is just path to this script
setup_errs = []
if ARR_VAR in os.environ:
    job_i = int(os.environ[ARR_VAR])
else:
    _e = f'echo "not in array, defaulting to the first context"'
    setup_errs.append(_e)
    os.system(_e)
    job_i = 0
with open(run_context_path) as f:
    run_context = json.load(f)
assert run_context is not None
DATA = run_context[job_i]
OUT_DIR = Path(_out_dir)

def _print(x):
    now = datetime.now() 
    date_time = now.strftime("%H:%M:%S")
    os.system(f"""echo "{date_time}> {x}" """)
for _e in setup_errs:
    _print(_e)
_print(f"job:{job_i+1}/{len(run_context)} cpu:{cpus} mem:{mem} time:{given_time} script_ver:{_VER}")
_print("-"*50)

# ---------------------------------------------------------------------------------------
# setup workspace in local scratch

salt = uuid.uuid4().hex
WS = Path(os.environ.get(TEMP_VAR, '/tmp')).joinpath(f"{NAME}-{salt}"); os.makedirs(WS)
os.chdir(WS)

RunJob(DATA, OUT_DIR, cpus, mem)

# ---------------------------------------------------------------------------------------
# done
_print('done')
