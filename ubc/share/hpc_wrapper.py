#!/arc/software/spack-2021/spack/opt/spack/linux-centos7-skylake_avx512/gcc-9.4.0/python-3.8.10-gdthw5ahkql24mqrkzq4x6bnkwlvx537/bin/python
#########################################################################################
# setup

import os
from pathlib import Path
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

    _read_paths = [
        "/project/6004975/phyberos/fosmids/data/Fosmids/Beaver_cecum/2nd_hits/EKL/Raw_Data/EKL_Cecum_ligninases_pool_secondary_hits.fastq.gz",
        "/project/6004975/phyberos/fosmids/data/Fosmids/Beaver_cecum/2nd_hits/EOL/Raw_Data/EOL_Cecum_ligninases_pool_secondary_hits.fastq.gz",
        "/project/6004975/phyberos/fosmids/data/Fosmids/Beaver_colon/2nd_hits/EKL/Raw_Data/EKL_Colon_ligninases_pool_secondary_hits.fastq.gz",
        "/project/6004975/phyberos/fosmids/data/Fosmids/Beaver_colon/2nd_hits/EOL/Raw_Data/EOL_Colon_ligninases_pool_secondary_hits.fastq.gz",
    ]

    for assembler in "megahit, spades_meta, spades_isolate, spades_sc".split(", "):
        for reads in _read_paths:
            rpath = Path(reads)
            _root = rpath.parents[2]
            
            beaver_loc = rpath.parents[3].name
            x = rpath.parents[1].name
            context.append(dict(
                name=f"{beaver_loc}-{x}-{assembler}",
                reads=str(reads),
                ends=str(_root.parent.joinpath("endseqs.fasta")),
                assembler=assembler,
            ))

    return context

def RunJob(DATA, OUT_DIR, cpus, mem):
    zipped_reads = Path(DATA["reads"])
    ends = Path(DATA["ends"])
    assembler = DATA["assembler"]
    NAME = DATA["name"]

    IMAGE = "fabfos.sif"
    FFWS = "ffws"
    os.system(f"""\
        date

        echo "gather inputs"
        cp /project/6004975/phyberos/fosmids/main/fabfos/{IMAGE} ./{IMAGE}
        cp /project/6004975/phyberos/fosmids/main/fabfos/ecoli_k12_mg1655.fasta ./backbone.fa
        cp /project/6004975/phyberos/fosmids/main/fabfos/pcc1.fasta ./vector.fa
        mkdir -p reads
        cp {zipped_reads} ./reads.fq.gz
        pigz -kdc -p {cpus} ./reads.fq.gz >./reads/{NAME}.fq
        cp {ends} ./ends.fa
        mkdir -p ./{FFWS}

        find .
    """)

    os.system(f"""\
        echo "starting"
        singularity run -B ./:/ws {IMAGE} \
            fabfos --threads {cpus} --overwrite \
                --output /ws/{NAME} \
                --assembler {assembler} \
                -i --reads /ws/reads/{NAME}.fq \
                -b /ws/backbone.fa \
                --vector /ws/vector.fa \
                --ends /ws/ends.fa \
                --ends-name-regex "\\w+_\\d+" \
                --ends-fw-flag "FW"
    """)

    os.system(f"""\
        echo "gathering results"

        mkdir -p {OUT_DIR}/{NAME}
        cp -Lr ./{NAME} {OUT_DIR}/{NAME}

        date
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
