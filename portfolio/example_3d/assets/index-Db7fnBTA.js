(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Ov="modulepreload",Fv=function(s){return"/portfolio/example_3d/"+s},Vm={},Nv=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=o(e.map(c=>{if(c=Fv(c),c in Vm)return;Vm[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Ov,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},zv=[{from:"ab48",to:"outliers",direction:"both",duration:1500,easing:"easeInOut",tracks:[{type:"property",target:"umapCloud",property:"highlight"},{type:"property",target:"umapCloud",property:"outlierMode"},{type:"property",target:"umapCloud",property:"splitT"}]}],Bv=Object.freeze(Object.defineProperty({__proto__:null,transitions:zv},Symbol.toStringTag,{value:"Module"})),kv=[{from:"ab48",to:"sample-overview",direction:"both",duration:1200,easing:"easeInOut",tracks:[]}],Gv=Object.freeze(Object.defineProperty({__proto__:null,transitions:kv},Symbol.toStringTag,{value:"Module"})),Vv=[{from:"clustering",to:"pcoa-pair",direction:"both",duration:1200,easing:"quinticInOut",deferVisibility:!0,keepVisible:["clusteringGroup"],tracks:[{type:"property",target:"ordinationMorphCloud",property:"pairSplitT",from:1,to:1}],onStart(s){if(s.fromScene.name==="clustering"){const t=s.registry.tryResolve("perspCamera");t&&t.position.set(8,6,12)}}}],Hv=Object.freeze(Object.defineProperty({__proto__:null,transitions:Vv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="172",pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},__=0,hf=1,y_=2,Wv=3,Xv=0,Ep=1,x_=2,li=3,ns=0,vn=1,Fe=2,ji=0,mr=1,Es=2,uf=3,df=4,v_=5,_s=100,M_=101,b_=102,S_=103,w_=104,E_=200,A_=201,T_=202,C_=203,Qc=204,th=205,R_=206,P_=207,I_=208,L_=209,D_=210,U_=211,O_=212,F_=213,N_=214,eh=0,nh=1,ih=2,wr=3,sh=4,rh=5,oh=6,ah=7,dl=0,z_=1,B_=2,Ji=0,k_=1,G_=2,V_=3,H_=4,W_=5,X_=6,$_=7,ff="attached",q_="detached",jh=300,is=301,As=302,Xa=303,$a=304,Vo=306,qa=1e3,Vn=1001,Ya=1002,Ze=1003,Ap=1004,$v=1004,xo=1005,qv=1005,be=1006,va=1007,Yv=1007,_i=1008,Zv=1008,Ei=1009,Tp=1010,Cp=1011,No=1012,Jh=1013,ss=1014,Cn=1015,Ho=1016,Qh=1017,tu=1018,Er=1020,Rp=35902,Pp=1021,Ip=1022,yn=1023,Lp=1024,Dp=1025,gr=1026,Ar=1027,eu=1028,fl=1029,Up=1030,nu=1031,Kv=1032,iu=1033,Ma=33776,ba=33777,Sa=33778,wa=33779,lh=35840,ch=35841,hh=35842,uh=35843,dh=36196,fh=37492,ph=37496,mh=37808,gh=37809,_h=37810,yh=37811,xh=37812,vh=37813,Mh=37814,bh=37815,Sh=37816,wh=37817,Eh=37818,Ah=37819,Th=37820,Ch=37821,Ea=36492,Rh=36494,Ph=36495,Op=36283,Ih=36284,Lh=36285,Dh=36286,Y_=2200,Z_=2201,K_=2202,Za=2300,Uh=2301,kc=2302,sr=2400,rr=2401,Ka=2402,su=2500,Fp=2501,jv=0,Jv=1,Qv=2,j_=3200,J_=3201,tM=3202,eM=3203,Ts=0,Q_=1,Hi="",Ae="srgb",Tr="srgb-linear",ja="linear",pe="srgb",nM=0,js=7680,iM=7681,sM=7682,rM=7683,oM=34055,aM=34056,lM=5386,cM=512,hM=513,uM=514,dM=515,fM=516,pM=517,mM=518,pf=519,ty=512,ey=513,ny=514,Np=515,iy=516,sy=517,ry=518,oy=519,Ja=35044,gM=35048,_M=35040,yM=35045,xM=35049,vM=35041,MM=35046,bM=35050,SM=35042,wM="100",mf="300 es",Qn=2e3,Qa=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hm=1234567;const _r=Math.PI/180,zo=180/Math.PI;function Fn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Xt(s,t,e){return Math.max(t,Math.min(e,s))}function zp(s,t){return(s%t+t)%t}function EM(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function AM(s,t,e){return s!==t?(e-s)/(t-s):0}function Aa(s,t,e){return(1-e)*s+e*t}function TM(s,t,e,n){return Aa(s,t,1-Math.exp(-e*n))}function CM(s,t=1){return t-Math.abs(zp(s,t*2)-t)}function RM(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function PM(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function IM(s,t){return s+Math.floor(Math.random()*(t-s+1))}function LM(s,t){return s+Math.random()*(t-s)}function DM(s){return s*(.5-Math.random())}function UM(s){s!==void 0&&(Hm=s);let t=Hm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function OM(s){return s*_r}function FM(s){return s*zo}function NM(s){return(s&s-1)===0&&s!==0}function zM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function BM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kM(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ru={DEG2RAD:_r,RAD2DEG:zo,generateUUID:Fn,clamp:Xt,euclideanModulo:zp,mapLinear:EM,inverseLerp:AM,lerp:Aa,damp:TM,pingpong:CM,smoothstep:RM,smootherstep:PM,randInt:IM,randFloat:LM,randFloatSpread:DM,seededRandom:UM,degToRad:OM,radToDeg:FM,isPowerOfTwo:NM,ceilPowerOfTwo:zM,floorPowerOfTwo:BM,setQuaternionFromProperEuler:kM,normalize:qt,denormalize:_n};class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,r,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],x=i[1],v=i[4],y=i[7],b=i[2],w=i[5],E=i[8];return r[0]=o*_+a*x+l*b,r[3]=o*g+a*v+l*w,r[6]=o*m+a*y+l*E,r[1]=c*_+h*x+u*b,r[4]=c*g+h*v+u*w,r[7]=c*m+h*y+u*E,r[2]=d*_+f*x+p*b,r[5]=d*g+f*v+p*w,r[8]=d*m+f*y+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vu.makeScale(t,e)),this}rotate(t){return this.premultiply(Vu.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vu=new $t;function ay(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const GM={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function vo(s,t){return new GM[s](t)}function tl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ly(){const s=tl("canvas");return s.style.display="block",s}const Wm={};function po(s){s in Wm||(Wm[s]=!0,console.warn(s))}function VM(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function HM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function WM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xm=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$m=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XM(){const s={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(i.r=Ao(i.r),i.g=Ao(i.g),i.b=Ao(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hi?ja:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Tr]:{primaries:t,whitePoint:n,transfer:ja,toXYZ:Xm,fromXYZ:$m,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Xm,fromXYZ:$m,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),s}const ie=XM();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ao(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gr;class cy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gr===void 0&&(Gr=tl("canvas")),Gr.width=t.width,Gr.height=t.height;const n=Gr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $M=0;class or{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hu(i[o].image)):r.push(Hu(i[o]))}else r=Hu(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Hu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qM=0;class Ce extends Ti{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=Vn,i=Vn,r=be,o=_i,a=yn,l=Ei,c=Ce.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Fn(),this.name="",this.source=new or(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qa:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qa:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=jh;Ce.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,i=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(f+1)/2,b=(m+1)/2,w=(h+d)/4,E=(u+_)/4,T=(p+g)/4;return v>y&&v>b?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=E/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=T/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=T/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ou extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new or(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pl extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class YM extends Ai{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new pl(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class au extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZM extends Ai{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new au(null,t,e,n),this.texture.isRenderTargetTexture=!0}}let rn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-a;const m=l*d+c*f+h*p+u*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,m*x);g=Math.sin(g*w)/b,a=Math.sin(a*w)/b}const y=a*x;if(l=l*g+d*y,c=c*g+f*y,h=h*g+p*y,u=u*g+_*y,g===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class hy{constructor(t=0,e=0,n=0){hy.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qm.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wu.copy(this).projectOnVector(t),this.sub(Wu)}reflect(t){return this.sub(Wu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Wu=new A,qm=new rn;let Re=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rl.copy(n.boundingBox)),Rl.applyMatrix4(t.matrixWorld),this.union(Rl)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),Pl.subVectors(this.max,$o),Vr.subVectors(t.a,$o),Hr.subVectors(t.b,$o),Wr.subVectors(t.c,$o),as.subVectors(Hr,Vr),ls.subVectors(Wr,Hr),Ds.subVectors(Vr,Wr);let e=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Ds.z,Ds.y,as.z,0,-as.x,ls.z,0,-ls.x,Ds.z,0,-Ds.x,-as.y,as.x,0,-ls.y,ls.x,0,-Ds.y,Ds.x,0];return!Xu(e,Vr,Hr,Wr,Pl)||(e=[1,0,0,0,1,0,0,0,1],!Xu(e,Vr,Hr,Wr,Pl))?!1:(Il.crossVectors(as,ls),e=[Il.x,Il.y,Il.z],Xu(e,Vr,Hr,Wr,Pl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};const Ri=[new A,new A,new A,new A,new A,new A,new A,new A],$n=new A,Rl=new Re,Vr=new A,Hr=new A,Wr=new A,as=new A,ls=new A,Ds=new A,$o=new A,Pl=new A,Il=new A,Us=new A;function Xu(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Us.fromArray(s,r);const a=i.x*Math.abs(Us.x)+i.y*Math.abs(Us.y)+i.z*Math.abs(Us.z),l=t.dot(Us),c=e.dot(Us),h=n.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const KM=new Re,qo=new A,$u=new A;let We=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):KM.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const e=qo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(qo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($u.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add($u)),this.expandByPoint(qo.copy(t.center).sub($u))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Pi=new A,qu=new A,Ll=new A,cs=new A,Yu=new A,Dl=new A,Zu=new A;class Lr{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qu.copy(t).add(e).multiplyScalar(.5),Ll.copy(e).sub(t).normalize(),cs.copy(this.origin).sub(qu);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ll),a=cs.dot(this.direction),l=-cs.dot(Ll),c=cs.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qu).addScaledVector(Ll,d),f}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,i,r){Yu.subVectors(e,t),Dl.subVectors(n,t),Zu.crossVectors(Yu,Dl);let o=this.direction.dot(Zu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,t);const l=a*this.direction.dot(Dl.crossVectors(cs,Dl));if(l<0)return null;const c=a*this.direction.dot(Yu.cross(cs));if(c<0||l+c>o)return null;const h=-a*cs.dot(Zu);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,_,g){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,_,g)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Xr.setFromMatrixColumn(t,0).length(),r=1/Xr.setFromMatrixColumn(t,1).length(),o=1/Xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jM,t,JM)}lookAt(t,e,n){const i=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),hs.crossVectors(n,In),hs.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),hs.crossVectors(n,In)),hs.normalize(),Ul.crossVectors(In,hs),i[0]=hs.x,i[4]=Ul.x,i[8]=In.x,i[1]=hs.y,i[5]=Ul.y,i[9]=In.y,i[2]=hs.z,i[6]=Ul.z,i[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],x=n[3],v=n[7],y=n[11],b=n[15],w=i[0],E=i[4],T=i[8],S=i[12],M=i[1],P=i[5],O=i[9],U=i[13],D=i[2],z=i[6],F=i[10],X=i[14],H=i[3],V=i[7],K=i[11],rt=i[15];return r[0]=o*w+a*M+l*D+c*H,r[4]=o*E+a*P+l*z+c*V,r[8]=o*T+a*O+l*F+c*K,r[12]=o*S+a*U+l*X+c*rt,r[1]=h*w+u*M+d*D+f*H,r[5]=h*E+u*P+d*z+f*V,r[9]=h*T+u*O+d*F+f*K,r[13]=h*S+u*U+d*X+f*rt,r[2]=p*w+_*M+g*D+m*H,r[6]=p*E+_*P+g*z+m*V,r[10]=p*T+_*O+g*F+m*K,r[14]=p*S+_*U+g*X+m*rt,r[3]=x*w+v*M+y*D+b*H,r[7]=x*E+v*P+y*z+b*V,r[11]=x*T+v*O+y*F+b*K,r[15]=x*S+v*U+y*X+b*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],x=u*g*c-_*d*c+_*l*f-a*g*f-u*l*m+a*d*m,v=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,y=h*_*c-p*u*c+p*a*f-o*_*f-h*a*m+o*u*m,b=p*u*l-h*_*l-p*a*d+o*_*d+h*a*g-o*u*g,w=e*x+n*v+i*y+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=x*E,t[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*m-n*d*m)*E,t[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*m+n*l*m)*E,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*E,t[4]=v*E,t[5]=(h*g*r-p*d*r+p*i*f-e*g*f-h*i*m+e*d*m)*E,t[6]=(p*l*r-o*g*r-p*i*c+e*g*c+o*i*m-e*l*m)*E,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*E,t[8]=y*E,t[9]=(p*u*r-h*_*r-p*n*f+e*_*f+h*n*m-e*u*m)*E,t[10]=(o*_*r-p*a*r+p*n*c-e*_*c-o*n*m+e*a*m)*E,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*E,t[12]=b*E,t[13]=(h*_*i-p*u*i+p*n*d-e*_*d-h*n*g+e*u*g)*E,t[14]=(p*a*i-o*_*i-p*n*l+e*_*l+o*n*g-e*a*g)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,g=o*u,m=a*u,x=l*c,v=l*h,y=l*u,b=n.x,w=n.y,E=n.z;return i[0]=(1-(_+m))*b,i[1]=(f+y)*b,i[2]=(p-v)*b,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(d+m))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(p+v)*E,i[9]=(g-x)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Xr.set(i[0],i[1],i[2]).length();const o=Xr.set(i[4],i[5],i[6]).length(),a=Xr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],qn.copy(this);const c=1/r,h=1/o,u=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,e.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Qn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,p;if(a===Qn)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Qa)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Qn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h;let p,_;if(a===Qn)p=(o+r)*u,_=-2*u;else if(a===Qa)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xr=new A,qn=new kt,jM=new A(0,0,0),JM=new A(1,1,1),hs=new A,Ul=new A,In=new A,Ym=new kt,Zm=new rn;class Nn{constructor(t=0,e=0,n=0,i=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ym.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ym,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zm.setFromEuler(this),this.setFromQuaternion(Zm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let QM=0;const Km=new A,$r=new rn,Ii=new kt,Ol=new A,Yo=new A,t1=new A,e1=new rn,jm=new A(1,0,0),Jm=new A(0,1,0),Qm=new A(0,0,1),t0={type:"added"},n1={type:"removed"},qr={type:"childadded",child:null},Ku={type:"childremoved",child:null};class oe extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oe.DEFAULT_UP.clone();const t=new A,e=new Nn,n=new rn,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new $t}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(jm,t)}rotateY(t){return this.rotateOnAxis(Jm,t)}rotateZ(t){return this.rotateOnAxis(Qm,t)}translateOnAxis(t,e){return Km.copy(t).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jm,t)}translateY(t){return this.translateOnAxis(Jm,t)}translateZ(t){return this.translateOnAxis(Qm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ol.copy(t):Ol.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Yo,Ol,this.up):Ii.lookAt(Ol,Yo,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),$r.setFromRotationMatrix(Ii),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(t0),qr.child=t,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n1),Ku.child=t,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(t0),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,t1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}oe.DEFAULT_UP=new A(0,1,0);oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new A,Li=new A,ju=new A,Di=new A,Yr=new A,Zr=new A,e0=new A,Ju=new A,Qu=new A,td=new A,ed=new Jt,nd=new Jt,id=new Jt;class Tn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Yn.subVectors(t,e),i.cross(Yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Yn.subVectors(i,e),Li.subVectors(n,e),ju.subVectors(t,e);const o=Yn.dot(Yn),a=Yn.dot(Li),l=Yn.dot(ju),c=Li.dot(Li),h=Li.dot(ju),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ed.setScalar(0),nd.setScalar(0),id.setScalar(0),ed.fromBufferAttribute(t,e),nd.fromBufferAttribute(t,n),id.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ed,r.x),o.addScaledVector(nd,r.y),o.addScaledVector(id,r.z),o}static isFrontFacing(t,e,n,i){return Yn.subVectors(n,e),Li.subVectors(t,e),Yn.cross(Li).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Yn.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Yr.subVectors(i,n),Zr.subVectors(r,n),Ju.subVectors(t,n);const l=Yr.dot(Ju),c=Zr.dot(Ju);if(l<=0&&c<=0)return e.copy(n);Qu.subVectors(t,i);const h=Yr.dot(Qu),u=Zr.dot(Qu);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Yr,o);td.subVectors(t,r);const f=Yr.dot(td),p=Zr.dot(td);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Zr,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return e0.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(e0,a);const m=1/(g+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Yr,o).addScaledVector(Zr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function sd(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class at{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=zp(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sd(o,r,t+1/3),this.g=sd(o,r,t),this.b=sd(o,r,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=uy[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return ie.fromWorkingColorSpace(Je.copy(this),t),Math.round(Xt(Je.r*255,0,255))*65536+Math.round(Xt(Je.g*255,0,255))*256+Math.round(Xt(Je.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Je.copy(this),e);const n=Je.r,i=Je.g,r=Je.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ae){ie.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,i=Je.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(us),this.setHSL(us.h+t,us.s+e,us.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(us),t.getHSL(Fl);const n=Aa(us.h,Fl.h,e),i=Aa(us.s,Fl.s,e),r=Aa(us.l,Fl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new at;at.NAMES=uy;let i1=0;class an extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=mr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=th,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==ns&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qc&&(n.blendSrc=this.blendSrc),this.blendDst!==th&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class re extends an{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Wi=s1();function s1(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function En(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Xt(s,-65504,65504),Wi.floatView[0]=s;const t=Wi.uint32View[0],e=t>>23&511;return Wi.baseTable[e]+((t&8388607)>>Wi.shiftTable[e])}function da(s){const t=s>>10;return Wi.uint32View[0]=Wi.mantissaTable[Wi.offsetTable[t]+(s&1023)]+Wi.exponentTable[t],Wi.floatView[0]}const r1={toHalfFloat:En,fromHalfFloat:da},De=new A,Nl=new Q;class gt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nl.fromBufferAttribute(this,e),Nl.applyMatrix3(t),this.setXY(e,Nl.x,Nl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class o1 extends gt{constructor(t,e,n){super(new Int8Array(t),e,n)}}class a1 extends gt{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class l1 extends gt{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class c1 extends gt{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Bp extends gt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class h1 extends gt{constructor(t,e,n){super(new Int32Array(t),e,n)}}class kp extends gt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class u1 extends gt{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=da(this.array[t*this.itemSize]);return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize]=En(e),this}getY(t){let e=da(this.array[t*this.itemSize+1]);return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+1]=En(e),this}getZ(t){let e=da(this.array[t*this.itemSize+2]);return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+2]=En(e),this}getW(t){let e=da(this.array[t*this.itemSize+3]);return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+3]=En(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array)),this.array[t+0]=En(e),this.array[t+1]=En(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[t+0]=En(e),this.array[t+1]=En(n),this.array[t+2]=En(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[t+0]=En(e),this.array[t+1]=En(n),this.array[t+2]=En(i),this.array[t+3]=En(r),this}}class ht extends gt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let d1=0;const kn=new kt,rd=new oe,Kr=new A,Ln=new Re,Zo=new Re,Be=new A;class _t extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ay(t)?kp:Bp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return rd.lookAt(t),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Re);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new We);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(Ln.min,Zo.min),Ln.expandByPoint(Be),Be.addVectors(Ln.max,Zo.max),Ln.expandByPoint(Be)):(Ln.expandByPoint(Zo.min),Ln.expandByPoint(Zo.max))}Ln.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(t,c),Be.add(Kr)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new A,l[T]=new A;const c=new A,h=new A,u=new A,d=new Q,f=new Q,p=new Q,_=new A,g=new A;function m(T,S,M){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[T].add(_),a[S].add(_),a[M].add(_),l[T].add(g),l[S].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let T=0,S=x.length;T<S;++T){const M=x[T],P=M.start,O=M.count;for(let U=P,D=P+O;U<D;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new A,y=new A,b=new A,w=new A;function E(T){b.fromBufferAttribute(i,T),w.copy(b);const S=a[T];v.copy(S),v.sub(b.multiplyScalar(b.dot(S))).normalize(),y.crossVectors(w,S);const P=y.dot(l[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,P)}for(let T=0,S=x.length;T<S;++T){const M=x[T],P=M.start,O=M.count;for(let U=P,D=P+O;U<D;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _t,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n0=new kt,Os=new Lr,zl=new We,i0=new A,Bl=new A,kl=new A,Gl=new A,od=new A,Vl=new A,s0=new A,Hl=new A;class Nt extends oe{constructor(t=new _t,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Vl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(od.fromBufferAttribute(u,t),o?Vl.addScaledVector(od,h):Vl.addScaledVector(od.sub(e),h))}e.add(Vl)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zl.copy(n.boundingSphere),zl.applyMatrix4(r),Os.copy(t.ray).recast(t.near),!(zl.containsPoint(Os.origin)===!1&&(Os.intersectSphere(zl,i0)===null||Os.origin.distanceToSquared(i0)>(t.far-t.near)**2))&&(n0.copy(r).invert(),Os.copy(t.ray).applyMatrix4(n0),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Os)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,b=v;y<b;y+=3){const w=a.getX(y),E=a.getX(y+1),T=a.getX(y+2);i=Wl(this,m,t,n,c,h,u,w,E,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=Wl(this,o,t,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,b=v;y<b;y+=3){const w=y,E=y+1,T=y+2;i=Wl(this,m,t,n,c,h,u,w,E,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const x=g,v=g+1,y=g+2;i=Wl(this,o,t,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function f1(s,t,e,n,i,r,o,a){let l;if(t.side===vn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ns,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Hl);return c<e.near||c>e.far?null:{distance:c,point:Hl.clone(),object:s}}function Wl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Bl),s.getVertexPosition(l,kl),s.getVertexPosition(c,Gl);const h=f1(s,t,e,n,Bl,kl,Gl,s0);if(h){const u=new A;Tn.getBarycoord(s0,Bl,kl,Gl,u),i&&(h.uv=Tn.getInterpolatedAttribute(i,a,l,c,u,new Q)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,u,new Q)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new A,materialIndex:0};Tn.getNormal(Bl,kl,Gl,d.normal),h.face=d,h.barycoord=u}return h}class Dr extends _t{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function p(_,g,m,x,v,y,b,w,E,T,S){const M=y/E,P=b/T,O=y/2,U=b/2,D=w/2,z=E+1,F=T+1;let X=0,H=0;const V=new A;for(let K=0;K<F;K++){const rt=K*P-U;for(let xt=0;xt<z;xt++){const Gt=xt*M-O;V[_]=Gt*x,V[g]=rt*v,V[m]=D,c.push(V.x,V.y,V.z),V[_]=0,V[g]=0,V[m]=w>0?1:-1,h.push(V.x,V.y,V.z),u.push(xt/E),u.push(1-K/T),X+=1}}for(let K=0;K<T;K++)for(let rt=0;rt<E;rt++){const xt=d+rt+z*K,Gt=d+rt+z*(K+1),j=d+(rt+1)+z*(K+1),ut=d+(rt+1)+z*K;l.push(xt,Gt,ut),l.push(Gt,j,ut),H+=6}a.addGroup(f,H,S),f+=H,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(s){const t={};for(let e=0;e<s.length;e++){const n=Bo(s[e]);for(const i in n)t[i]=n[i]}return t}function p1(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function dy(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const cu={clone:Bo,merge:hn};var m1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ye extends an{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m1,this.fragmentShader=g1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bo(t.uniforms),this.uniformsGroups=p1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hu extends oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ds=new A,r0=new Q,o0=new Q;class Ie extends hu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,e){return this.getViewBounds(t,r0,o0),e.subVectors(o0,r0)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const jr=-90,Jr=1;class fy extends oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ie(jr,Jr,t,e);i.layers=this.layers,this.add(i);const r=new Ie(jr,Jr,t,e);r.layers=this.layers,this.add(r);const o=new Ie(jr,Jr,t,e);o.layers=this.layers,this.add(o);const a=new Ie(jr,Jr,t,e);a.layers=this.layers,this.add(a);const l=new Ie(jr,Jr,t,e);l.layers=this.layers,this.add(l);const c=new Ie(jr,Jr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ml extends Ce{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class py extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ml(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Dr(5,5,5),r=new ye({name:"CubemapFromEquirect",uniforms:Bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:ji});r.uniforms.tEquirect.value=e;const o=new Nt(i,r),a=e.minFilter;return e.minFilter===_i&&(e.minFilter=be),new fy(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class uu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(t),this.density=e}clone(){return new uu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class du{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new at(t),this.near=e,this.far=n}clone(){return new du(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gp extends oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new A;class On{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new gt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new On(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class os extends an{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qr;const Ko=new A,to=new A,eo=new A,no=new Q,jo=new Q,my=new kt,Xl=new A,Jo=new A,$l=new A,a0=new Q,ad=new Q,l0=new Q;class Cs extends oe{constructor(t=new os){if(super(),this.isSprite=!0,this.type="Sprite",Qr===void 0){Qr=new _t;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fu(e,5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute("position",new On(n,3,0,!1)),Qr.setAttribute("uv",new On(n,2,3,!1))}this.geometry=Qr,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),my.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-eo.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ql(Xl.set(-.5,-.5,0),eo,o,to,i,r),ql(Jo.set(.5,-.5,0),eo,o,to,i,r),ql($l.set(.5,.5,0),eo,o,to,i,r),a0.set(0,0),ad.set(1,0),l0.set(1,1);let a=t.ray.intersectTriangle(Xl,Jo,$l,!1,Ko);if(a===null&&(ql(Jo.set(-.5,.5,0),eo,o,to,i,r),ad.set(0,1),a=t.ray.intersectTriangle(Xl,$l,Jo,!1,Ko),a===null))return;const l=t.ray.origin.distanceTo(Ko);l<t.near||l>t.far||e.push({distance:l,point:Ko.clone(),uv:Tn.getInterpolation(Ko,Xl,Jo,$l,a0,ad,l0,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ql(s,t,e,n,i,r){no.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(jo.x=r*no.x-i*no.y,jo.y=i*no.x+r*no.y):jo.copy(no),s.copy(t),s.x+=jo.x,s.y+=jo.y,s.applyMatrix4(my)}const Yl=new A,c0=new A;class gy extends oe{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Yl.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Yl);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Yl.setFromMatrixPosition(t.matrixWorld),c0.setFromMatrixPosition(this.matrixWorld);const n=Yl.distanceTo(c0)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}const h0=new A,u0=new Jt,d0=new Jt,_1=new A,f0=new kt,Zl=new A,ld=new We,p0=new kt,cd=new Lr;class _y extends Nt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ff,this.bindMatrix=new kt,this.bindMatrixInverse=new kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Re),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Zl),this.boundingBox.expandByPoint(Zl)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new We),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Zl),this.boundingSphere.expandByPoint(Zl)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ld.copy(this.boundingSphere),ld.applyMatrix4(i),t.ray.intersectsSphere(ld)!==!1&&(p0.copy(i).invert(),cd.copy(t.ray).applyMatrix4(p0),!(this.boundingBox!==null&&cd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,cd)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Jt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ff?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===q_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;u0.fromBufferAttribute(i.attributes.skinIndex,t),d0.fromBufferAttribute(i.attributes.skinWeight,t),h0.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=d0.getComponent(r);if(o!==0){const a=u0.getComponent(r);f0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(_1.copy(h0).applyMatrix4(f0),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Vp extends oe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xi extends Ce{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Ze,h=Ze,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const m0=new kt,y1=new kt;class pu{constructor(t=[],e=[]){this.uuid=Fn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new kt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:y1;m0.multiplyMatrices(a,e[r]),m0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new pu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new xi(e,t,t,yn,Cn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Vp),this.bones.push(o),this.boneInverses.push(new kt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class ko extends gt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const io=new kt,g0=new kt,Kl=[],_0=new Re,x1=new kt,Qo=new Nt,ta=new We;class Hp extends Nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,x1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Re),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,io),_0.copy(t.boundingBox).applyMatrix4(io),this.boundingBox.union(_0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new We),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,io),ta.copy(t.boundingSphere).applyMatrix4(io),this.boundingSphere.union(ta)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),t.ray.intersectsSphere(ta)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,io),g0.multiplyMatrices(n,io),Qo.matrixWorld=g0,Qo.raycast(t,Kl);for(let o=0,a=Kl.length;o<a;o++){const l=Kl[o];l.instanceId=r,l.object=this,e.push(l)}Kl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xi(new Float32Array(i*this.count),i,this.count,eu,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const hd=new A,v1=new A,M1=new $t;class ki{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=hd.subVectors(n,e).cross(v1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||M1.getNormalMatrix(t),i=this.coplanarPoint(hd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new We,jl=new A;class gl{constructor(t=new ki,e=new ki,n=new ki,i=new ki,r=new ki,o=new ki){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],_=i[10],g=i[11],m=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,g-f,y-m).normalize(),n[1].setComponents(l+r,d+c,g+f,y+m).normalize(),n[2].setComponents(l+o,d+h,g+p,y+x).normalize(),n[3].setComponents(l-o,d-h,g-p,y-x).normalize(),n[4].setComponents(l-a,d-u,g-_,y-v).normalize(),e===Qn)n[5].setComponents(l+a,d+u,g+_,y+v).normalize();else if(e===Qa)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(jl.x=i.normal.x>0?t.max.x:t.min.x,jl.y=i.normal.y>0?t.max.y:t.min.y,jl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(jl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ud(s,t){return s-t}function b1(s,t){return s.z-t.z}function S1(s,t){return t.z-s.z}class w1{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Sn=new kt,E1=new at(1,1,1),dd=new gl,Jl=new Re,Ns=new We,ea=new A,y0=new A,A1=new A,fd=new w1,Qe=new Nt,Ql=[];function T1(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function zs(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class yy extends Nt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,i){super(new _t,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new xi(e,t,t,yn,Cn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new xi(e,t,t,fl,ss);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new xi(e,t,t,yn,Cn);n.colorSpace=ie.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new gt(h,l,c);e.setAttribute(r,u)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new gt(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Re);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Sn),this.getBoundingBoxAt(r,Jl).applyMatrix4(Sn),t.union(Jl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new We);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Sn),this.getBoundingSphereAt(r,Ns).applyMatrix4(Sn),t.union(Ns)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(ud),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Sn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(E1.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(ud),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const u=e.getAttribute(h),d=n.getAttribute(h);T1(u,d,l);const f=u.itemSize;for(let p=u.count,_=c;p<_;p++){const g=l+p;for(let m=0;m<f;m++)d.setComponent(g,m,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){const h=a.indexStart,u=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,l+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,p=f.array,_=t-u;for(let g=h;g<h+d;g++)p[g]=p[g]+_;f.array.copyWithin(e,h,h+d),f.addUpdateRange(e,d),c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(const f in d){const p=d[f],{array:_,itemSize:g}=p;_.copyWithin(t*g,h*g,(h+u)*g),p.addUpdateRange(t*g,u*g)}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new Re,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(ea.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new We;this.getBoundingBoxAt(t,Jl),Jl.getCenter(r.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;o&&(u=o.getX(u)),ea.fromBufferAttribute(a,u),l=Math.max(l,r.center.distanceToSquared(ea))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(ud);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);zs(this._multiDrawCounts,i),zs(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),zs(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),zs(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),zs(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new _t,this._initializeGeometry(r));const o=this.geometry;r.index&&zs(r.index.array,o.index.array);for(const a in r.attributes)zs(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Qe.material=this.material,Qe.geometry.index=o.index,Qe.geometry.attributes=o.attributes,Qe.geometry.boundingBox===null&&(Qe.geometry.boundingBox=new Re),Qe.geometry.boundingSphere===null&&(Qe.geometry.boundingSphere=new We);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=i[c];Qe.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Qe.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Qe.geometry.boundingBox),this.getBoundingSphereAt(c,Qe.geometry.boundingSphere),Qe.raycast(t,Ql);for(let u=0,d=Ql.length;u<d;u++){const f=Ql[u];f.object=this,f.batchId=a,e.push(f)}Ql.length=0}Qe.material=null,Qe.geometry.index=null,Qe.geometry.attributes={},Qe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data;d&&(Sn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),dd.setFromProjectionMatrix(Sn,t.coordinateSystem));let _=0;if(this.sortObjects){Sn.copy(this.matrixWorld).invert(),ea.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Sn),y0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Sn);for(let x=0,v=l.length;x<v;x++)if(l[x].visible&&l[x].active){const y=l[x].geometryIndex;this.getMatrixAt(x,Sn),this.getBoundingSphereAt(y,Ns).applyMatrix4(Sn);let b=!1;if(d&&(b=!dd.intersectsSphere(Ns)),!b){const w=u[y],E=A1.subVectors(Ns.center,ea).dot(y0);fd.push(w.start,w.count,E,x)}}const g=fd.list,m=this.customSort;m===null?g.sort(r.transparent?S1:b1):m.call(this,g,n);for(let x=0,v=g.length;x<v;x++){const y=g[x];c[_]=y.start*a,h[_]=y.count,p[_]=y.index,_++}fd.reset()}else for(let g=0,m=l.length;g<m;g++)if(l[g].visible&&l[g].active){const x=l[g].geometryIndex;let v=!1;if(d&&(this.getMatrixAt(g,Sn),this.getBoundingSphereAt(x,Ns).applyMatrix4(Sn),v=!dd.intersectsSphere(Ns)),!v){const y=u[x];c[_]=y.start*a,h[_]=y.count,p[_]=g,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}}class Yt extends an{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oh=new A,Fh=new A,x0=new kt,na=new Lr,tc=new We,pd=new A,v0=new A;class Mn extends oe{constructor(t=new _t,e=new Yt){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Oh.fromBufferAttribute(e,i-1),Fh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Oh.distanceTo(Fh);t.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(i),tc.radius+=r,t.ray.intersectsSphere(tc)===!1)return;x0.copy(i).invert(),na.copy(t.ray).applyMatrix4(x0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){const m=h.getX(_),x=h.getX(_+1),v=ec(this,t,na,l,m,x);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=ec(this,t,na,l,_,g);m&&e.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){const m=ec(this,t,na,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=ec(this,t,na,l,p-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ec(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(Oh.fromBufferAttribute(o,i),Fh.fromBufferAttribute(o,r),e.distanceSqToSegment(Oh,Fh,pd,v0)>n)return;pd.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(pd);if(!(l<t.near||l>t.far))return{distance:l,point:v0.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const M0=new A,b0=new A;class te extends Mn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)M0.fromBufferAttribute(e,i),b0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+M0.distanceTo(b0);t.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xy extends Mn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class el extends an{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const S0=new kt,gf=new Lr,nc=new We,ic=new A;class on extends oe{constructor(t=new _t,e=new el){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(i),nc.radius+=r,t.ray.intersectsSphere(nc)===!1)return;S0.copy(i).invert(),gf.copy(t.ray).applyMatrix4(S0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const g=c.getX(p);ic.fromBufferAttribute(u,g),w0(ic,g,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)ic.fromBufferAttribute(u,p),w0(ic,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function w0(s,t,e,n,i,r,o){const a=gf.distanceSqToPoint(s);if(a<e){const l=new A;gf.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ce extends oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class C1 extends Ce{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:be,this.magFilter=r!==void 0?r:be,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class R1 extends Ce{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ze,this.minFilter=Ze,this.generateMipmaps=!1,this.needsUpdate=!0}}class mu extends Ce{constructor(t,e,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class P1 extends mu{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Vn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class I1 extends mu{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,is),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class Ur extends Ce{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wp extends Ce{constructor(t,e,n,i,r,o,a,l,c,h=gr){if(h!==gr&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gr&&(n=ss),n===void 0&&h===Ar&&(n=Er),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Q:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],r=[],o=[],a=new A,l=new kt;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Xt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Xt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gu extends ni{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Q){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vy extends gu{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xp(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const sc=new A,md=new Xp,gd=new Xp,_d=new Xp;class My extends ni{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(sc.subVectors(i[0],i[1]).add(i[0]),c=sc);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(sc.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=sc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),md.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),gd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),_d.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(md.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),gd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_d.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(md.calc(l),gd.calc(l),_d.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function E0(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function L1(s,t){const e=1-s;return e*e*t}function D1(s,t){return 2*(1-s)*s*t}function U1(s,t){return s*s*t}function Ta(s,t,e,n){return L1(s,t)+D1(s,e)+U1(s,n)}function O1(s,t){const e=1-s;return e*e*e*t}function F1(s,t){const e=1-s;return 3*e*e*s*t}function N1(s,t){return 3*(1-s)*s*s*t}function z1(s,t){return s*s*s*t}function Ca(s,t,e,n,i){return O1(s,t)+F1(s,e)+N1(s,n)+z1(s,i)}class $p extends ni{constructor(t=new Q,e=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Q){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ca(t,i.x,r.x,o.x,a.x),Ca(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class by extends ni{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ca(t,i.x,r.x,o.x,a.x),Ca(t,i.y,r.y,o.y,a.y),Ca(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qp extends ni{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sy extends ni{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yp extends ni{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ta(t,i.x,r.x,o.x),Ta(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zp extends ni{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ta(t,i.x,r.x,o.x),Ta(t,i.y,r.y,o.y),Ta(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kp extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(E0(a,l.x,c.x,h.x,u.x),E0(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Q().fromArray(i))}return this}}var Nh=Object.freeze({__proto__:null,ArcCurve:vy,CatmullRomCurve3:My,CubicBezierCurve:$p,CubicBezierCurve3:by,EllipseCurve:gu,LineCurve:qp,LineCurve3:Sy,QuadraticBezierCurve:Yp,QuadraticBezierCurve3:Zp,SplineCurve:Kp});class wy extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Nh[i.type]().fromJSON(i))}return this}}class nl extends wy{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qp(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Yp(this.currentPoint.clone(),new Q(t,e),new Q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new $p(this.currentPoint.clone(),new Q(t,e),new Q(n,i),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Kp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new gu(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _l extends _t{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Xt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new A,d=new Q,f=new A,p=new A,_=new A;let g=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let x=0;x<=e;x++){const v=n+x*h*i,y=Math.sin(v),b=Math.cos(v);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*y,u.y=t[w].y,u.z=t[w].x*b,o.push(u.x,u.y,u.z),d.x=x/e,d.y=w/(t.length-1),a.push(d.x,d.y);const E=l[3*w+0]*y,T=l[3*w+1],S=l[3*w+0]*b;c.push(E,T,S)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){const y=v+x*t.length,b=y,w=y+t.length,E=y+t.length+1,T=y+1;r.push(b,w,T),r.push(E,T,w)}this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("uv",new ht(a,2)),this.setAttribute("normal",new ht(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.points,t.segments,t.phiStart,t.phiLength)}}class _u extends _l{constructor(t=1,e=1,n=4,i=8){const r=new nl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new _u(t.radius,t.length,t.capSegments,t.radialSegments)}}class ti extends _t{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new A,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Or extends _t{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function x(){const y=new A,b=new A;let w=0;const E=(e-t)/n;for(let T=0;T<=r;T++){const S=[],M=T/r,P=M*(e-t)+t;for(let O=0;O<=i;O++){const U=O/i,D=U*l+a,z=Math.sin(D),F=Math.cos(D);b.x=P*z,b.y=-M*n+g,b.z=P*F,u.push(b.x,b.y,b.z),y.set(z,E,F).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-M),S.push(p++)}_.push(S)}for(let T=0;T<i;T++)for(let S=0;S<r;S++){const M=_[S][T],P=_[S+1][T],O=_[S+1][T+1],U=_[S][T+1];(t>0||S!==0)&&(h.push(M,P,U),w+=3),(e>0||S!==r-1)&&(h.push(P,O,U),w+=3)}c.addGroup(m,w,0),m+=w}function v(y){const b=p,w=new Q,E=new A;let T=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;const P=p;for(let O=0;O<=i;O++){const D=O/i*l+a,z=Math.cos(D),F=Math.sin(D);E.x=S*F,E.y=g*M,E.z=S*z,u.push(E.x,E.y,E.z),d.push(0,M,0),w.x=z*.5+.5,w.y=F*.5*M+.5,f.push(w.x,w.y),p++}for(let O=0;O<i;O++){const U=b+O,D=P+O;y===!0?h.push(D,D+1,U):h.push(D+1,D,U),T+=3}c.addGroup(m,T,y===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yu extends Or{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new yu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends _t{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new A,y=new A,b=new A;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],y),f(e[w+2],b),l(v,y,b,x)}function l(x,v,y,b){const w=b+1,E=[];for(let T=0;T<=w;T++){E[T]=[];const S=x.clone().lerp(y,T/w),M=v.clone().lerp(y,T/w),P=w-T;for(let O=0;O<=P;O++)O===0&&T===w?E[T][O]=S:E[T][O]=S.clone().lerp(M,O/P)}for(let T=0;T<w;T++)for(let S=0;S<2*(w-T)-1;S++){const M=Math.floor(S/2);S%2===0?(d(E[T][M+1]),d(E[T+1][M]),d(E[T][M])):(d(E[T][M+1]),d(E[T+1][M+1]),d(E[T+1][M]))}}function c(x){const v=new A;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(x),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const x=new A;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const y=g(x)/2/Math.PI+.5,b=m(x)/Math.PI+.5;o.push(y,1-b)}p(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],b=o[x+4],w=Math.max(v,y,b),E=Math.min(v,y,b);w>.9&&E<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,v){const y=x*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function p(){const x=new A,v=new A,y=new A,b=new A,w=new Q,E=new Q,T=new Q;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),w.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),T.set(o[M+4],o[M+5]),b.copy(x).add(v).add(y).divideScalar(3);const P=g(b);_(w,M+0,x,P),_(E,M+2,v,P),_(T,M+4,y,P)}}function _(x,v,y,b){b<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=b/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.vertices,t.indices,t.radius,t.details)}}class xu extends Rs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xu(t.radius,t.detail)}}const rc=new A,oc=new A,yd=new A,ac=new Tn;class Fr extends _t{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(_r*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:g,c:m}=ac;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),ac.getNormal(yd),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=u[x],b=u[v],w=ac[h[x]],E=ac[h[v]],T=`${y}_${b}`,S=`${b}_${y}`;S in d&&d[S]?(yd.dot(d[S].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(E.x,E.y,E.z)),d[S]=null):T in d||(d[T]={index0:c[x],index1:c[v],normal:yd.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:g}=d[p];rc.fromBufferAttribute(a,_),oc.fromBufferAttribute(a,g),f.push(rc.x,rc.y,rc.z),f.push(oc.x,oc.y,oc.z)}this.setAttribute("position",new ht(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class vi extends nl{constructor(t){super(t),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new nl().fromJSON(i))}return this}}const B1={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Ey(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=W1(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let p=e;p<i;p+=e)u=s[p],d=s[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return il(r,o,e,a,l,f,0),o}};function Ey(s,t,e,n,i){let r,o;if(i===eb(s,t,e,n)>0)for(r=t;r<e;r+=n)o=A0(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=A0(r,s[r],s[r+1],o);return o&&vu(o,o.next)&&(rl(o),o=o.next),o}function Cr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(vu(e,e.next)||Me(e.prev,e,e.next)===0)){if(rl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function il(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Z1(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?G1(s,n,i,r):k1(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),rl(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=V1(Cr(s),t,e),il(s,t,e,n,i,r,2)):o===2&&H1(s,t,e,n,i,r):il(Cr(s),t,e,n,i,r,1);break}}}function k1(s){const t=s.prev,e=s,n=s.next;if(Me(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Mo(i,a,r,l,o,c,p.x,p.y)&&Me(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function G1(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Me(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=_f(f,p,t,e,n),x=_f(_,g,t,e,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Mo(a,h,l,u,c,d,v.x,v.y)&&Me(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Mo(a,h,l,u,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Mo(a,h,l,u,c,d,v.x,v.y)&&Me(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Mo(a,h,l,u,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function V1(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!vu(i,r)&&Ay(i,n,n.next,r)&&sl(i,r)&&sl(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),rl(n),rl(n.next),n=s=r),n=n.next}while(n!==s);return Cr(n)}function H1(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&J1(o,a)){let l=Ty(o,a);o=Cr(o,o.next),l=Cr(l,l.next),il(o,t,e,n,i,r,0),il(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function W1(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Ey(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(j1(c));for(i.sort(X1),r=0;r<i.length;r++)e=$1(i[r],e);return e}function X1(s,t){return s.x-t.x}function $1(s,t){const e=q1(s,t);if(!e)return t;const n=Ty(e,s);return Cr(n,n.next),Cr(e,e.next)}function q1(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Mo(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),sl(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Y1(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Y1(s,t){return Me(s.prev,s,t.prev)<0&&Me(t.next,s,s.next)<0}function Z1(s,t,e,n){let i=s;do i.z===0&&(i.z=_f(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,K1(i)}function K1(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function _f(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function j1(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Mo(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function J1(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Q1(s,t)&&(sl(s,t)&&sl(t,s)&&tb(s,t)&&(Me(s.prev,s,t.prev)||Me(s,t.prev,t))||vu(s,t)&&Me(s.prev,s,s.next)>0&&Me(t.prev,t,t.next)>0)}function Me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function vu(s,t){return s.x===t.x&&s.y===t.y}function Ay(s,t,e,n){const i=cc(Me(s,t,e)),r=cc(Me(s,t,n)),o=cc(Me(e,n,s)),a=cc(Me(e,n,t));return!!(i!==r&&o!==a||i===0&&lc(s,e,t)||r===0&&lc(s,n,t)||o===0&&lc(e,s,n)||a===0&&lc(e,t,n))}function lc(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function cc(s){return s>0?1:s<0?-1:0}function Q1(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Ay(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function sl(s,t){return Me(s.prev,s,s.next)<0?Me(s,t,s.next)>=0&&Me(s,s.prev,t)>=0:Me(s,t,s.prev)<0||Me(s,s.next,t)<0}function tb(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ty(s,t){const e=new yf(s.i,s.x,s.y),n=new yf(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function A0(s,t,e,n){const i=new yf(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function rl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function yf(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eb(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Mi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Mi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];T0(t),C0(n,t);let o=t.length;e.forEach(T0);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,C0(n,e[l]);const a=B1.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function T0(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function C0(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Mu extends _t{constructor(t=new vi([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ht(i,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:nb;let v,y=!1,b,w,E,T;m&&(v=m.getSpacedPoints(h),y=!0,d=!1,b=m.computeFrenetFrames(h,!1),w=new A,E=new A,T=new A),d||(g=0,f=0,p=0,_=0);const S=a.extractPoints(c);let M=S.shape;const P=S.holes;if(!Mi.isClockWise(M)){M=M.reverse();for(let nt=0,dt=P.length;nt<dt;nt++){const L=P[nt];Mi.isClockWise(L)&&(P[nt]=L.reverse())}}const U=Mi.triangulateShape(M,P),D=M;for(let nt=0,dt=P.length;nt<dt;nt++){const L=P[nt];M=M.concat(L)}function z(nt,dt,L){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(dt,L)}const F=M.length,X=U.length;function H(nt,dt,L){let Lt,it,vt;const mt=nt.x-dt.x,Ut=nt.y-dt.y,Mt=L.x-nt.x,I=L.y-nt.y,C=mt*mt+Ut*Ut,W=mt*I-Ut*Mt;if(Math.abs(W)>Number.EPSILON){const tt=Math.sqrt(C),lt=Math.sqrt(Mt*Mt+I*I),et=dt.x-Ut/tt,Dt=dt.y+mt/tt,bt=L.x-I/lt,Tt=L.y+Mt/lt,Qt=((bt-et)*I-(Tt-Dt)*Mt)/(mt*I-Ut*Mt);Lt=et+mt*Qt-nt.x,it=Dt+Ut*Qt-nt.y;const pt=Lt*Lt+it*it;if(pt<=2)return new Q(Lt,it);vt=Math.sqrt(pt/2)}else{let tt=!1;mt>Number.EPSILON?Mt>Number.EPSILON&&(tt=!0):mt<-Number.EPSILON?Mt<-Number.EPSILON&&(tt=!0):Math.sign(Ut)===Math.sign(I)&&(tt=!0),tt?(Lt=-Ut,it=mt,vt=Math.sqrt(C)):(Lt=mt,it=Ut,vt=Math.sqrt(C/2))}return new Q(Lt/vt,it/vt)}const V=[];for(let nt=0,dt=D.length,L=dt-1,Lt=nt+1;nt<dt;nt++,L++,Lt++)L===dt&&(L=0),Lt===dt&&(Lt=0),V[nt]=H(D[nt],D[L],D[Lt]);const K=[];let rt,xt=V.concat();for(let nt=0,dt=P.length;nt<dt;nt++){const L=P[nt];rt=[];for(let Lt=0,it=L.length,vt=it-1,mt=Lt+1;Lt<it;Lt++,vt++,mt++)vt===it&&(vt=0),mt===it&&(mt=0),rt[Lt]=H(L[Lt],L[vt],L[mt]);K.push(rt),xt=xt.concat(rt)}for(let nt=0;nt<g;nt++){const dt=nt/g,L=f*Math.cos(dt*Math.PI/2),Lt=p*Math.sin(dt*Math.PI/2)+_;for(let it=0,vt=D.length;it<vt;it++){const mt=z(D[it],V[it],Lt);G(mt.x,mt.y,-L)}for(let it=0,vt=P.length;it<vt;it++){const mt=P[it];rt=K[it];for(let Ut=0,Mt=mt.length;Ut<Mt;Ut++){const I=z(mt[Ut],rt[Ut],Lt);G(I.x,I.y,-L)}}}const Gt=p+_;for(let nt=0;nt<F;nt++){const dt=d?z(M[nt],xt[nt],Gt):M[nt];y?(E.copy(b.normals[0]).multiplyScalar(dt.x),w.copy(b.binormals[0]).multiplyScalar(dt.y),T.copy(v[0]).add(E).add(w),G(T.x,T.y,T.z)):G(dt.x,dt.y,0)}for(let nt=1;nt<=h;nt++)for(let dt=0;dt<F;dt++){const L=d?z(M[dt],xt[dt],Gt):M[dt];y?(E.copy(b.normals[nt]).multiplyScalar(L.x),w.copy(b.binormals[nt]).multiplyScalar(L.y),T.copy(v[nt]).add(E).add(w),G(T.x,T.y,T.z)):G(L.x,L.y,u/h*nt)}for(let nt=g-1;nt>=0;nt--){const dt=nt/g,L=f*Math.cos(dt*Math.PI/2),Lt=p*Math.sin(dt*Math.PI/2)+_;for(let it=0,vt=D.length;it<vt;it++){const mt=z(D[it],V[it],Lt);G(mt.x,mt.y,u+L)}for(let it=0,vt=P.length;it<vt;it++){const mt=P[it];rt=K[it];for(let Ut=0,Mt=mt.length;Ut<Mt;Ut++){const I=z(mt[Ut],rt[Ut],Lt);y?G(I.x,I.y+v[h-1].y,v[h-1].x+L):G(I.x,I.y,u+L)}}}j(),ut();function j(){const nt=i.length/3;if(d){let dt=0,L=F*dt;for(let Lt=0;Lt<X;Lt++){const it=U[Lt];J(it[2]+L,it[1]+L,it[0]+L)}dt=h+g*2,L=F*dt;for(let Lt=0;Lt<X;Lt++){const it=U[Lt];J(it[0]+L,it[1]+L,it[2]+L)}}else{for(let dt=0;dt<X;dt++){const L=U[dt];J(L[2],L[1],L[0])}for(let dt=0;dt<X;dt++){const L=U[dt];J(L[0]+F*h,L[1]+F*h,L[2]+F*h)}}n.addGroup(nt,i.length/3-nt,0)}function ut(){const nt=i.length/3;let dt=0;$(D,dt),dt+=D.length;for(let L=0,Lt=P.length;L<Lt;L++){const it=P[L];$(it,dt),dt+=it.length}n.addGroup(nt,i.length/3-nt,1)}function $(nt,dt){let L=nt.length;for(;--L>=0;){const Lt=L;let it=L-1;it<0&&(it=nt.length-1);for(let vt=0,mt=h+g*2;vt<mt;vt++){const Ut=F*vt,Mt=F*(vt+1),I=dt+Lt+Ut,C=dt+it+Ut,W=dt+it+Mt,tt=dt+Lt+Mt;ot(I,C,W,tt)}}}function G(nt,dt,L){l.push(nt),l.push(dt),l.push(L)}function J(nt,dt,L){ct(nt),ct(dt),ct(L);const Lt=i.length/3,it=x.generateTopUV(n,i,Lt-3,Lt-2,Lt-1);zt(it[0]),zt(it[1]),zt(it[2])}function ot(nt,dt,L,Lt){ct(nt),ct(dt),ct(Lt),ct(dt),ct(L),ct(Lt);const it=i.length/3,vt=x.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);zt(vt[0]),zt(vt[1]),zt(vt[3]),zt(vt[1]),zt(vt[2]),zt(vt[3])}function ct(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function zt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ib(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Nh[i.type]().fromJSON(i)),new Mu(n,t.options)}}const nb={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-u),new Q(d,1-p),new Q(_,1-m)]:[new Q(a,1-l),new Q(h,1-u),new Q(f,1-p),new Q(g,1-m)]}};function ib(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class bu extends Rs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bu(t.radius,t.detail)}}class yl extends Rs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yl(t.radius,t.detail)}}class ei extends _t{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const x=m*d-o;for(let v=0;v<c;v++){const y=v*u-r;p.push(y,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const v=x+c*m,y=x+c*(m+1),b=x+1+c*(m+1),w=x+1+c*m;f.push(v,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.width,t.height,t.widthSegments,t.heightSegments)}}class Su extends _t{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new A,p=new Q;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const x=m+g,v=x,y=x+n+1,b=x+n+2,w=x+1;a.push(v,y,w),a.push(y,b,w)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nr extends _t{constructor(t=new vi([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ht(i,3)),this.setAttribute("normal",new ht(r,3)),this.setAttribute("uv",new ht(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;Mi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const x=p[g];Mi.isClockWise(x)===!0&&(p[g]=x.reverse())}const _=Mi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const x=p[g];f=f.concat(x)}for(let g=0,m=f.length;g<m;g++){const x=f[g];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,m=_.length;g<m;g++){const x=_[g],v=x[0]+u,y=x[1]+u,b=x[2]+u;n.push(v,y,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return sb(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Nr(n,t.curveSegments)}}function sb(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class ts extends _t{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new A,d=new A,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const x=[],v=m/n;let y=0;m===0&&o===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){const w=b/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(w+y,1-v),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const v=h[m][x+1],y=h[m][x],b=h[m+1][x],w=h[m+1][x+1];(m!==0||o>0)&&f.push(v,y,w),(m!==n-1||l<Math.PI)&&f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wu extends Rs{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wu(t.radius,t.detail)}}class yr extends _t{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const _=p/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const _=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,x=(i+1)*f+p;o.push(_,g,x),o.push(g,m,x)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Eu extends _t{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],u=new A,d=new A,f=new A,p=new A,_=new A,g=new A,m=new A;for(let v=0;v<=n;++v){const y=v/n*r*Math.PI*2;x(y,r,o,t,f),x(y+.01,r,o,t,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let b=0;b<=i;++b){const w=b/i*Math.PI*2,E=-e*Math.cos(w),T=e*Math.sin(w);u.x=f.x+(E*m.x+T*_.x),u.y=f.y+(E*m.y+T*_.y),u.z=f.z+(E*m.z+T*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(b/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const b=(i+1)*(v-1)+(y-1),w=(i+1)*v+(y-1),E=(i+1)*v+y,T=(i+1)*(v-1)+y;a.push(b,w,T),a.push(w,E,T)}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2));function x(v,y,b,w,E){const T=Math.cos(v),S=Math.sin(v),M=b/y*v,P=Math.cos(M);E.x=w*(2+P)*.5*T,E.y=w*(2+P)*S*.5,E.z=w*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eu(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Au extends _t{constructor(t=new Zp(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,l=new A,c=new Q;let h=new A;const u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function _(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),x(),m()}function g(v){h=t.getPointAt(v/e,h);const y=o.normals[v],b=o.binormals[v];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,T=Math.sin(E),S=-Math.cos(E);l.x=S*y.x+T*b.x,l.y=S*y.y+T*b.y,l.z=S*y.z+T*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let y=1;y<=i;y++){const b=(i+1)*(v-1)+(y-1),w=(i+1)*v+(y-1),E=(i+1)*v+y,T=(i+1)*(v-1)+y;p.push(b,w,T),p.push(w,E,T)}}function x(){for(let v=0;v<=e;v++)for(let y=0;y<=i;y++)c.x=v/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Au(new Nh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class jp extends _t{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new A,r=new A;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),x=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,x),R0(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),R0(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ht(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function R0(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var P0=Object.freeze({__proto__:null,BoxGeometry:Dr,CapsuleGeometry:_u,CircleGeometry:ti,ConeGeometry:yu,CylinderGeometry:Or,DodecahedronGeometry:xu,EdgesGeometry:Fr,ExtrudeGeometry:Mu,IcosahedronGeometry:bu,LatheGeometry:_l,OctahedronGeometry:yl,PlaneGeometry:ei,PolyhedronGeometry:Rs,RingGeometry:Su,ShapeGeometry:Nr,SphereGeometry:ts,TetrahedronGeometry:wu,TorusGeometry:yr,TorusKnotGeometry:Eu,TubeGeometry:Au,WireframeGeometry:jp});class Cy extends an{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new at(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Ry extends ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jp extends an{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Py extends Jp{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Iy extends an{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new at(16777215),this.specular=new at(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ly extends an{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new at(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Dy extends an{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Qp extends an{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tm extends an{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class em extends an{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Uy extends an{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new at(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nm extends Yt{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function ar(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Oy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Fy(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function xf(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function im(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function rb(s,t,e,n,i=30){const r=s.clone();r.name=t;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<e||p>=n)){u.push(c.times[f]);for(let _=0;_<h;++_)d.push(c.values[f*h+_])}}u.length!==0&&(c.times=ar(u,c.times.constructor),c.values=ar(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function ob(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let _;if(r<=a.times[0]){const m=h,x=u-h;_=a.values.slice(m,x)}else if(r>=a.times[p]){const m=p*u+h,x=m+u-h;_=a.values.slice(m,x)}else{const m=a.createInterpolant(),x=h,v=u-h;m.evaluate(r),_=m.resultBuffer.slice(x,v)}l==="quaternion"&&new rn().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const x=m*f+d;if(l==="quaternion")rn.multiplyQuaternionsFlat(c.values,x,_,0,c.values,x);else{const v=f-d*2;for(let y=0;y<v;++y)c.values[x+y]-=_[y]}}}return s.blendMode=Fp,s}const ab={convertArray:ar,isTypedArray:Oy,getKeyframeOrder:Fy,sortedArray:xf,flattenJSON:im,subclip:rb,makeClipAdditive:ob};class xl{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ny extends xl{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sr,endingEnd:sr}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case rr:r=t,a=2*e-n;break;case Ka:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rr:o=t,l=2*n-e;break;case Ka:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,v=(-1-f)*g+(1.5+f)*_+.5*p,y=f*g-f*_;for(let b=0;b!==a;++b)r[b]=m*o[h+b]+x*o[c+b]+v*o[l+b]+y*o[u+b];return r}}class sm extends xl{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class zy extends xl{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ii{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ny(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Za:e=this.InterpolantFactoryMethodDiscrete;break;case Uh:e=this.InterpolantFactoryMethodLinear;break;case kc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Za;case this.InterpolantFactoryMethodLinear:return Uh;case this.InterpolantFactoryMethodSmooth:return kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Oy(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kc,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=e[u+p];if(_!==e[d+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Uh;class zr extends ii{constructor(t,e,n){super(t,e,n)}}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=Za;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class rm extends ii{}rm.prototype.ValueTypeName="color";class ol extends ii{}ol.prototype.ValueTypeName="number";class By extends xl{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class vl extends ii{InterpolantFactoryMethodLinear(t){return new By(this.times,this.values,this.getValueSize(),t)}}vl.prototype.ValueTypeName="quaternion";vl.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends ii{constructor(t,e,n){super(t,e,n)}}Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Za;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class al extends ii{}al.prototype.ValueTypeName="vector";class ll{constructor(t="",e=-1,n=[],i=su){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(cb(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(ii.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Fy(l);l=xf(l,1,h),c=xf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ol(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const g=[],m=[];im(f,g,m,p),g.length!==0&&_.push(new u(d,g,m))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let x=0;x!==d[p].morphTargets.length;++x){const v=d[p];g.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new ol(".morphTargetInfluence["+_+"]",g,m))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(al,f+".position",d,"pos",i),n(vl,f+".quaternion",d,"rot",i),n(al,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function lb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ol;case"vector":case"vector2":case"vector3":case"vector4":return al;case"color":return rm;case"quaternion":return vl;case"bool":case"boolean":return zr;case"string":return Br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function cb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=lb(s.type);if(s.times===void 0){const e=[],n=[];im(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const qi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class om{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const ky=new om;class Rn{constructor(t){this.manager=t!==void 0?t:ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Rn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class hb extends Error{constructor(t,e){super(t),this.response=e}}class rs extends Rn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=qi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Ui[t]!==void 0){Ui[t].push({onLoad:e,onProgress:n,onError:i});return}Ui[t]=[],Ui[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ui[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){x();function x(){u.read().then(({done:v,value:y})=>{if(v)m.close();else{_+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let w=0,E=h.length;w<E;w++){const T=h[w];T.onProgress&&T.onProgress(b)}m.enqueue(y),x()}},v=>{m.error(v)})}}});return new Response(g)}else throw new hb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{qi.add(t,c);const h=Ui[t];delete Ui[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ui[t];if(h===void 0)throw this.manager.itemError(t),c;delete Ui[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ub extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new rs(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=ll.parse(t[n]);e.push(i)}return e}}class db extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=[],a=new mu,l=new rs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(t[u],function(d){const f=r.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=be),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+_]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=be),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}}class cl extends Rn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=qi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=tl("img");function l(){h(),qi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class fb extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=new ml;r.colorSpace=Ae;const o=new cl(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class pb extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new xi,a=new rs(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Vn,o.wrapT=c.wrapT!==void 0?c.wrapT:Vn,o.magFilter=c.magFilter!==void 0?c.magFilter:be,o.minFilter=c.minFilter!==void 0?c.minFilter:be,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=_i),c.mipmapCount===1&&(o.minFilter=be),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}}class Gy extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=new Ce,o=new cl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ps extends oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Vy extends Ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xd=new kt,I0=new A,L0=new A;class am{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;I0.setFromMatrixPosition(t.matrixWorld),e.position.copy(I0),L0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(L0),e.updateMatrixWorld(),xd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mb extends am{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=zo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Hy extends Ps{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const D0=new kt,ia=new A,vd=new A;class gb extends am{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ia.setFromMatrixPosition(t.matrixWorld),n.position.copy(ia),vd.copy(n.position),vd.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(vd),n.updateMatrixWorld(),i.makeTranslation(-ia.x,-ia.y,-ia.z),D0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(D0)}}class Wy extends Ps{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ml extends hu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _b extends am{constructor(){super(new Ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lm extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.shadow=new _b}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cm extends Ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xy extends Ps{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class $y{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new A)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class qy extends Ps{constructor(t=new $y,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Tu extends Rn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,o=new rs(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new at().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const o=t.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new at().setHex(o.value);break;case"v2":i.uniforms[r].value=new Q().fromArray(o.value);break;case"v3":i.uniforms[r].value=new A().fromArray(o.value);break;case"v4":i.uniforms[r].value=new Jt().fromArray(o.value);break;case"m3":i.uniforms[r].value=new $t().fromArray(o.value);break;case"m4":i.uniforms[r].value=new kt().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new Q().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Q().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Tu.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:Cy,SpriteMaterial:os,RawShaderMaterial:Ry,ShaderMaterial:ye,PointsMaterial:el,MeshPhysicalMaterial:Py,MeshStandardMaterial:Jp,MeshPhongMaterial:Iy,MeshToonMaterial:Ly,MeshNormalMaterial:Dy,MeshLambertMaterial:Qp,MeshDepthMaterial:tm,MeshDistanceMaterial:em,MeshBasicMaterial:re,MeshMatcapMaterial:Uy,LineDashedMaterial:nm,LineBasicMaterial:Yt,Material:an};return new e[t]}}class vf{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class hm extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Yy extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new rs(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),x=vo(g.type,m),v=new fu(x,g.stride);return v.uuid=g.uuid,e[p]=v,v}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=t.isInstancedBufferGeometry?new hm:new _t,a=t.data.index;if(a!==void 0){const f=vo(a.type,a.array);o.setIndex(new gt(f,1))}const l=t.data.attributes;for(const f in l){const p=l[f];let _;if(p.isInterleavedBufferAttribute){const g=i(t.data,p.data);_=new On(g,p.itemSize,p.offset,p.normalized)}else{const g=vo(p.type,p.array),m=p.isInstancedBufferAttribute?ko:gt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(f,_)}const c=t.data.morphAttributes;if(c)for(const f in c){const p=c[f],_=[];for(let g=0,m=p.length;g<m;g++){const x=p[g];let v;if(x.isInterleavedBufferAttribute){const y=i(t.data,x.data);v=new On(y,x.itemSize,x.offset,x.normalized)}else{const y=vo(x.type,x.array);v=new gt(y,x.itemSize,x.normalized)}x.name!==void 0&&(v.name=x.name),_.push(v)}o.morphAttributes[f]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const _=u[f];o.addGroup(_.start,_.count,_.materialIndex)}const d=t.data.boundingSphere;if(d!==void 0){const f=new A;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new We(f,d.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}class yb extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=this.path===""?vf.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const a=new rs(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+t+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?vf.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new rs(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(t,e),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let u=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new vi().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=new pu().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new Yy;for(let r=0,o=t.length;r<o;r++){let a;const l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in P0?a=P0[l.type].fromJSON(l,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new Tu;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){const l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=ll.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function o(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:vo(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new om(e);r=new cl(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const u=t[c],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new xi(m.data,m.width,m.height)))}i[u.uuid]=new or(f)}else{const f=a(u.url);i[u.uuid]=new or(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:vo(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new cl(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){const l=t[o],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new xi(p.data,p.width,p.height)))}n[l.uuid]=new or(h)}else{const h=await r(l.url);n[l.uuid]=new or(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=e[a.image],c=l.data;let h;Array.isArray(c)?(h=new ml,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new xi:h=new Ce,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,xb)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],U0),h.wrapT=n(a.wrap[1],U0)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,O0)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,O0)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":o=new Gp,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new at(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new du(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new uu(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Ie(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new Ml(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new cm(t.color,t.intensity);break;case"DirectionalLight":o=new lm(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new Wy(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new Xy(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new Hy(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new Vy(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new qy().fromJSON(t);break;case"SkinnedMesh":h=a(t.geometry),u=l(t.material),o=new _y(h,u),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),u=l(t.material),o=new Nt(h,u);break;case"InstancedMesh":h=a(t.geometry),u=l(t.material);const d=t.count,f=t.instanceMatrix,p=t.instanceColor;o=new Hp(h,u,d),o.instanceMatrix=new ko(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new ko(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=a(t.geometry),u=l(t.material),o=new yy(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(_=>{const g=new Re;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new We;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=c(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid));break;case"LOD":o=new gy;break;case"Line":o=new Mn(a(t.geometry),l(t.material));break;case"LineLoop":o=new xy(a(t.geometry),l(t.material));break;case"LineSegments":o=new te(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new on(a(t.geometry),l(t.material));break;case"Sprite":o=new Cs(l(t.material));break;case"Group":o=new ce;break;case"Bone":o=new Vp;break;default:o=new oe}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const d=t.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],e,n,i,r))}if(t.animations!==void 0){const d=t.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const d=t.levels;for(let f=0;f<d.length;f++){const p=d[f],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new oe}})}}const xb={UVMapping:jh,CubeReflectionMapping:is,CubeRefractionMapping:As,EquirectangularReflectionMapping:Xa,EquirectangularRefractionMapping:$a,CubeUVReflectionMapping:Vo},U0={RepeatWrapping:qa,ClampToEdgeWrapping:Vn,MirroredRepeatWrapping:Ya},O0={NearestFilter:Ze,NearestMipmapNearestFilter:Ap,NearestMipmapLinearFilter:xo,LinearFilter:be,LinearMipmapNearestFilter:va,LinearMipmapLinearFilter:_i};class vb extends Rn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=qi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return qi.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),qi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});qi.add(t,l),r.manager.itemStart(t)}}let hc;class um{static getContext(){return hc===void 0&&(hc=new(window.AudioContext||window.webkitAudioContext)),hc}static setContext(t){hc=t}}class Mb extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new rs(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0);um.getContext().decodeAudioData(c,function(u){e(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),r.manager.itemError(t)}}}const F0=new kt,N0=new kt,Bs=new kt;class bb{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ie,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ie,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Bs.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(_r*e.fov*.5)/e.zoom;let a,l;N0.elements[12]=-i,F0.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,Bs.elements[0]=2*e.near/(l-a),Bs.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Bs),a=-o*e.aspect-r,l=o*e.aspect-r,Bs.elements[0]=2*e.near/(l-a),Bs.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Bs)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(N0),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(F0)}}class Zy extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ky{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=z0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=z0();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function z0(){return performance.now()}const ks=new A,B0=new rn,Sb=new A,Gs=new A;class wb extends oe{constructor(){super(),this.type="AudioListener",this.context=um.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ky}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ks,B0,Sb),Gs.set(0,0,-1).applyQuaternion(B0),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ks.x,i),e.positionY.linearRampToValueAtTime(ks.y,i),e.positionZ.linearRampToValueAtTime(ks.z,i),e.forwardX.linearRampToValueAtTime(Gs.x,i),e.forwardY.linearRampToValueAtTime(Gs.y,i),e.forwardZ.linearRampToValueAtTime(Gs.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(ks.x,ks.y,ks.z),e.setOrientation(Gs.x,Gs.y,Gs.z,n.x,n.y,n.z)}}class jy extends oe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const Vs=new A,k0=new rn,Eb=new A,Hs=new A;class Ab extends jy{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Vs,k0,Eb),Hs.set(0,0,1).applyQuaternion(k0);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Vs.x,n),e.positionY.linearRampToValueAtTime(Vs.y,n),e.positionZ.linearRampToValueAtTime(Vs.z,n),e.orientationX.linearRampToValueAtTime(Hs.x,n),e.orientationY.linearRampToValueAtTime(Hs.y,n),e.orientationZ.linearRampToValueAtTime(Hs.z,n)}else e.setPosition(Vs.x,Vs.y,Vs.z),e.setOrientation(Hs.x,Hs.y,Hs.z)}}class Tb{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Jy{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){rn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;rn.multiplyQuaternionsFlat(t,o,t,e,t,n),rn.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const dm="\\[\\]\\.:\\/",Cb=new RegExp("["+dm+"]","g"),fm="[^"+dm+"]",Rb="[^"+dm.replace("\\.","")+"]",Pb=/((?:WC+[\/:])*)/.source.replace("WC",fm),Ib=/(WCOD+)?/.source.replace("WCOD",Rb),Lb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fm),Db=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fm),Ub=new RegExp("^"+Pb+Ib+Lb+Db+"$"),Ob=["material","materials","bones","map"];class Fb{constructor(t,e,n){const i=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class le{constructor(t,e,n){this.path=e,this.parsedPath=n||le.parseTrackName(e),this.node=le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new le.Composite(t,e,n):new le(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cb,"")}static parseTrackName(t){const e=Ub.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ob.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=le.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}le.Composite=Fb;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Nb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Fn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(d);for(let _=0,g=o;_!==g;++_)r[_].push(new le(d,n[_],i[_]))}else if(p<c){a=t[p];const _=--c,g=t[_];e[g.uuid]=p,t[p]=g,e[f]=_,t[_]=d;for(let m=0,x=o;m!==x;++m){const v=r[m],y=v[_];let b=v[p];v[p]=y,b===void 0&&(b=new le(d,n[m],i[m])),v[_]=b}}else t[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){const u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let f=0,p=i;f!==p;++f){const _=n[f],g=_[u],m=_[h];_[h]=g,_[u]=m}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){const d=--r,f=t[d],p=--o,_=t[p];e[f.uuid]=u,t[u]=f,e[_.uuid]=d,t[d]=_,t.pop();for(let g=0,m=i;g!==m;++g){const x=n[g],v=x[d],y=x[p];x[u]=v,x[d]=y,x.pop()}}else{const d=--o,f=t[d];d>0&&(e[f.uuid]=u),t[u]=f,t.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(u);for(let d=h,f=l.length;d!==f;++d){const p=l[d];u[d]=new le(p,t,e)}return u}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=t[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class Qy{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:sr,endingEnd:sr};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Z_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Fp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case su:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===K_;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Y_){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=rr,i.endingEnd=rr):(t?i.endingStart=this.zeroSlopeAtStart?rr:sr:i.endingStart=Ka,e?i.endingEnd=this.zeroSlopeAtEnd?rr:sr:i.endingEnd=Ka)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const zb=new Float32Array(1);class Bb extends Ti{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;p=new Jy(le.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new sm(new Float32Array(2),new Float32Array(2),1,zb),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?ll.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=su),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Qy(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?ll.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class kb extends ou{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new au(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Gb extends ou{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTargetArray=!0,this.depth=n,this.texture=new pl(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class pm{constructor(t){this.value=t}clone(){return new pm(this.value.clone===void 0?this.value:this.value.clone())}}let Vb=0;class Hb extends Ti{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Vb++}),this.name="",this.usage=Ja,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class zh extends fu{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class Wb{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const G0=new kt;class tx{constructor(t,e,n=0,i=1/0){this.ray=new Lr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new lu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return G0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(G0),this}intersectObject(t,e=!0,n=[]){return Mf(t,this,n,e),n.sort(V0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Mf(t[i],this,n,e);return n.sort(V0),n}}function V0(s,t){return s.distance-t.distance}function Mf(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Mf(r[o],t,e,!0)}}class bf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xb{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class mm{constructor(t,e,n,i){mm.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}const H0=new Q;class $b{constructor(t=new Q(1/0,1/0),e=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=H0.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,H0).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const W0=new A,uc=new A;class ex{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){W0.subVectors(t,this.start),uc.subVectors(this.end,this.start);const n=uc.dot(uc);let r=uc.dot(W0)/n;return e&&(r=Xt(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const X0=new A;class qb extends oe{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new _t,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new ht(i,3));const r=new Yt({fog:!1,toneMapped:!1});this.cone=new te(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),X0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(X0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const fs=new A,dc=new kt,Md=new kt;class Yb extends te{constructor(t){const e=nx(t),n=new _t,i=[],r=[],o=new at(0,0,1),a=new at(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new ht(i,3)),n.setAttribute("color",new ht(r,3));const l=new Yt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Md.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(dc.multiplyMatrices(Md,a.matrixWorld),fs.setFromMatrixPosition(dc),i.setXYZ(o,fs.x,fs.y,fs.z),dc.multiplyMatrices(Md,a.parent.matrixWorld),fs.setFromMatrixPosition(dc),i.setXYZ(o+1,fs.x,fs.y,fs.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function nx(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,nx(s.children[e]));return t}class Zb extends Nt{constructor(t,e,n){const i=new ts(e,4,2),r=new re({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Kb=new A,$0=new at,q0=new at;class jb extends oe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new yl(e);i.rotateY(Math.PI*.5),this.material=new re({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new gt(o,3)),this.add(new Nt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");$0.copy(this.light.color),q0.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?$0:q0;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(Kb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Jb extends te{constructor(t=10,e=10,n=4473924,i=8947848){n=new at(n),i=new at(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new _t;h.setAttribute("position",new ht(l,3)),h.setAttribute("color",new ht(c,3));const u=new Yt({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Qb extends te{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new at(r),o=new at(o);const a=[],l=[];if(e>1)for(let u=0;u<e;u++){const d=u/e*(Math.PI*2),f=Math.sin(d)*t,p=Math.cos(d)*t;a.push(0,0,0),a.push(f,0,p);const _=u&1?r:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const d=u&1?r:o,f=t-t/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;a.push(g,0,m),l.push(d.r,d.g,d.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,a.push(g,0,m),l.push(d.r,d.g,d.b)}}const c=new _t;c.setAttribute("position",new ht(a,3)),c.setAttribute("color",new ht(l,3));const h=new Yt({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Y0=new A,fc=new A,Z0=new A;class tS extends oe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new _t;i.setAttribute("position",new ht([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new Yt({fog:!1,toneMapped:!1});this.lightPlane=new Mn(i,r),this.add(this.lightPlane),i=new _t,i.setAttribute("position",new ht([0,0,0,0,0,1],3)),this.targetLine=new Mn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Y0.setFromMatrixPosition(this.light.matrixWorld),fc.setFromMatrixPosition(this.light.target.matrixWorld),Z0.subVectors(fc,Y0),this.lightPlane.lookAt(fc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(fc),this.targetLine.scale.z=Z0.length()}}const pc=new A,Ee=new hu;class eS extends te{constructor(t){const e=new _t,n=new Yt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){l(p),l(_)}function l(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}e.setAttribute("position",new ht(i,3)),e.setAttribute("color",new ht(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new at(16755200),h=new at(16711680),u=new at(43775),d=new at(16777215),f=new at(3355443);this.setColors(c,h,u,d,f)}setColors(t,e,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;Ee.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);const r=this.camera.coordinateSystem===Qn?-1:0;Pe("c",e,t,Ee,0,0,r),Pe("t",e,t,Ee,0,0,1),Pe("n1",e,t,Ee,-n,-i,r),Pe("n2",e,t,Ee,n,-i,r),Pe("n3",e,t,Ee,-n,i,r),Pe("n4",e,t,Ee,n,i,r),Pe("f1",e,t,Ee,-n,-i,1),Pe("f2",e,t,Ee,n,-i,1),Pe("f3",e,t,Ee,-n,i,1),Pe("f4",e,t,Ee,n,i,1),Pe("u1",e,t,Ee,n*.7,i*1.1,r),Pe("u2",e,t,Ee,-n*.7,i*1.1,r),Pe("u3",e,t,Ee,0,i*2,r),Pe("cf1",e,t,Ee,-n,0,1),Pe("cf2",e,t,Ee,n,0,1),Pe("cf3",e,t,Ee,0,-i,1),Pe("cf4",e,t,Ee,0,i,1),Pe("cn1",e,t,Ee,-n,0,r),Pe("cn2",e,t,Ee,n,0,r),Pe("cn3",e,t,Ee,0,-i,r),Pe("cn4",e,t,Ee,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Pe(s,t,e,n,i,r,o){pc.set(i,r,o).unproject(n);const a=t[s];if(a!==void 0){const l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],pc.x,pc.y,pc.z)}}const mc=new Re;class nS extends te{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new _t;r.setIndex(new gt(n,1)),r.setAttribute("position",new gt(i,3)),super(r,new Yt({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&mc.setFromObject(this.object),mc.isEmpty())return;const e=mc.min,n=mc.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class iS extends te{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new _t;r.setIndex(new gt(n,1)),r.setAttribute("position",new ht(i,3)),super(r,new Yt({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class sS extends Mn{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new _t;o.setAttribute("position",new ht(r,3)),o.computeBoundingSphere(),super(o,new Yt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new _t;l.setAttribute("position",new ht(a,3)),l.computeBoundingSphere(),this.add(new Nt(l,new re({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const K0=new A;let gc,bd;class rS extends oe{constructor(t=new A(0,0,1),e=new A(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",gc===void 0&&(gc=new _t,gc.setAttribute("position",new ht([0,0,0,0,1,0],3)),bd=new Or(0,.5,1,5,1),bd.translate(0,-.5,0)),this.position.copy(e),this.line=new Mn(gc,new Yt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Nt(bd,new re({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{K0.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(K0,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class oS extends te{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new _t;i.setAttribute("position",new ht(e,3)),i.setAttribute("color",new ht(n,3));const r=new Yt({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new at,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class aS{constructor(){this.type="ShapePath",this.color=new at,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new nl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const x=[];for(let v=0,y=m.length;v<y;v++){const b=m[v],w=new vi;w.curves=b.curves,x.push(w)}return x}function n(m,x){const v=x.length;let y=!1;for(let b=v-1,w=0;w<v;b=w++){let E=x[b],T=x[w],S=T.x-E.x,M=T.y-E.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(E=x[w],S=-S,T=x[b],M=-M),m.y<E.y||m.y>T.y)continue;if(m.y===E.y){if(m.x===E.x)return!0}else{const P=M*(m.x-E.x)-S*(m.y-E.y);if(P===0)return!0;if(P<0)continue;y=!y}}else{if(m.y!==E.y)continue;if(T.x<=m.x&&m.x<=E.x||E.x<=m.x&&m.x<=T.x)return!0}}return y}const i=Mi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new vi,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],p=0,_;d[p]=void 0,f[p]=[];for(let m=0,x=r.length;m<x;m++)a=r[m],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!h&&d[p]&&p++,d[p]={s:new vi,p:_},d[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:_[0]});if(!d[0])return e(r);if(d.length>1){let m=!1,x=0;for(let v=0,y=d.length;v<y;v++)u[v]=[];for(let v=0,y=d.length;v<y;v++){const b=f[v];for(let w=0;w<b.length;w++){const E=b[w];let T=!0;for(let S=0;S<d.length;S++)n(E.p,d[S].p)&&(v!==S&&x++,T?(T=!1,u[S].push(E)):m=!0);T&&u[v].push(E)}}x>0&&m===!1&&(f=u)}let g;for(let m=0,x=d.length;m<x;m++){l=d[m].s,c.push(l),g=f[m];for(let v=0,y=g.length;v<y;v++)l.holes.push(g[v].h)}return c}}class ix extends Ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function lS(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function cS(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function hS(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Sf(s,t,e,n){const i=uS(n);switch(e){case Pp:return s*t;case Lp:return s*t;case Dp:return s*t*2;case eu:return s*t/i.components*i.byteLength;case fl:return s*t/i.components*i.byteLength;case Up:return s*t*2/i.components*i.byteLength;case nu:return s*t*2/i.components*i.byteLength;case Ip:return s*t*3/i.components*i.byteLength;case yn:return s*t*4/i.components*i.byteLength;case iu:return s*t*4/i.components*i.byteLength;case Ma:case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sa:case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ch:case uh:return Math.max(s,16)*Math.max(t,8)/4;case lh:case hh:return Math.max(s,8)*Math.max(t,8)/2;case dh:case fh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ph:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case yh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Th:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ch:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Rh:case Ph:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Op:case Ih:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Lh:case Dh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uS(s){switch(s){case Ei:case Tp:return{byteLength:1,components:1};case No:case Cp:case Ho:return{byteLength:2,components:1};case Qh:case tu:return{byteLength:2,components:4};case ss:case Jh:case Cn:return{byteLength:4,components:1};case Rp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const dS={contain:lS,cover:cS,fill:hS,getByteLength:Sf};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sx(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function fS(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var pS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,SS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ES=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,NS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WS="gl_FragColor = linearToOutputTexel( gl_FragColor );",XS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ew=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ow=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_w=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Aw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ME=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:pS,alphahash_pars_fragment:mS,alphamap_fragment:gS,alphamap_pars_fragment:_S,alphatest_fragment:yS,alphatest_pars_fragment:xS,aomap_fragment:vS,aomap_pars_fragment:MS,batching_pars_vertex:bS,batching_vertex:SS,begin_vertex:wS,beginnormal_vertex:ES,bsdfs:AS,iridescence_fragment:TS,bumpmap_pars_fragment:CS,clipping_planes_fragment:RS,clipping_planes_pars_fragment:PS,clipping_planes_pars_vertex:IS,clipping_planes_vertex:LS,color_fragment:DS,color_pars_fragment:US,color_pars_vertex:OS,color_vertex:FS,common:NS,cube_uv_reflection_fragment:zS,defaultnormal_vertex:BS,displacementmap_pars_vertex:kS,displacementmap_vertex:GS,emissivemap_fragment:VS,emissivemap_pars_fragment:HS,colorspace_fragment:WS,colorspace_pars_fragment:XS,envmap_fragment:$S,envmap_common_pars_fragment:qS,envmap_pars_fragment:YS,envmap_pars_vertex:ZS,envmap_physical_pars_fragment:ow,envmap_vertex:KS,fog_vertex:jS,fog_pars_vertex:JS,fog_fragment:QS,fog_pars_fragment:tw,gradientmap_pars_fragment:ew,lightmap_pars_fragment:nw,lights_lambert_fragment:iw,lights_lambert_pars_fragment:sw,lights_pars_begin:rw,lights_toon_fragment:aw,lights_toon_pars_fragment:lw,lights_phong_fragment:cw,lights_phong_pars_fragment:hw,lights_physical_fragment:uw,lights_physical_pars_fragment:dw,lights_fragment_begin:fw,lights_fragment_maps:pw,lights_fragment_end:mw,logdepthbuf_fragment:gw,logdepthbuf_pars_fragment:_w,logdepthbuf_pars_vertex:yw,logdepthbuf_vertex:xw,map_fragment:vw,map_pars_fragment:Mw,map_particle_fragment:bw,map_particle_pars_fragment:Sw,metalnessmap_fragment:ww,metalnessmap_pars_fragment:Ew,morphinstance_vertex:Aw,morphcolor_vertex:Tw,morphnormal_vertex:Cw,morphtarget_pars_vertex:Rw,morphtarget_vertex:Pw,normal_fragment_begin:Iw,normal_fragment_maps:Lw,normal_pars_fragment:Dw,normal_pars_vertex:Uw,normal_vertex:Ow,normalmap_pars_fragment:Fw,clearcoat_normal_fragment_begin:Nw,clearcoat_normal_fragment_maps:zw,clearcoat_pars_fragment:Bw,iridescence_pars_fragment:kw,opaque_fragment:Gw,packing:Vw,premultiplied_alpha_fragment:Hw,project_vertex:Ww,dithering_fragment:Xw,dithering_pars_fragment:$w,roughnessmap_fragment:qw,roughnessmap_pars_fragment:Yw,shadowmap_pars_fragment:Zw,shadowmap_pars_vertex:Kw,shadowmap_vertex:jw,shadowmask_pars_fragment:Jw,skinbase_vertex:Qw,skinning_pars_vertex:tE,skinning_vertex:eE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:sE,tonemapping_fragment:rE,tonemapping_pars_fragment:oE,transmission_fragment:aE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:hE,uv_vertex:uE,worldpos_vertex:dE,background_vert:fE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:gE,cube_vert:_E,cube_frag:yE,depth_vert:xE,depth_frag:vE,distanceRGBA_vert:ME,distanceRGBA_frag:bE,equirect_vert:SE,equirect_frag:wE,linedashed_vert:EE,linedashed_frag:AE,meshbasic_vert:TE,meshbasic_frag:CE,meshlambert_vert:RE,meshlambert_frag:PE,meshmatcap_vert:IE,meshmatcap_frag:LE,meshnormal_vert:DE,meshnormal_frag:UE,meshphong_vert:OE,meshphong_frag:FE,meshphysical_vert:NE,meshphysical_frag:zE,meshtoon_vert:BE,meshtoon_frag:kE,points_vert:GE,points_frag:VE,shadow_vert:HE,shadow_frag:WE,sprite_vert:XE,sprite_frag:$E},yt={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},gn={basic:{uniforms:hn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:hn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new at(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:hn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:hn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:hn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new at(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:hn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:hn([yt.points,yt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:hn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:hn([yt.common,yt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:hn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:hn([yt.sprite,yt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:hn([yt.common,yt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:hn([yt.lights,yt.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};gn.physical={uniforms:hn([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const _c={r:0,b:0,g:0},Ws=new Nn,qE=new kt;function YE(s,t,e,n,i,r,o){const a=new at(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const b=p(v);b===null?m(a,l):b&&b.isColor&&(m(b,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,y){const b=p(y);b&&(b.isCubeTexture||b.mapping===Vo)?(h===void 0&&(h=new Nt(new Dr(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:Bo(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ws.copy(y.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qE.makeRotationFromEuler(Ws)),h.material.toneMapped=ie.getTransfer(b.colorSpace)!==pe,(u!==b||d!==b.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Nt(new ei(2,2),new ye({name:"BackgroundMaterial",uniforms:Bo(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ie.getTransfer(b.colorSpace)!==pe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(_c,dy(s)),n.buffers.color.setClear(_c.r,_c.g,_c.b,y,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:_,addToRenderList:g,dispose:x}}function ZE(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,P,O,U,D){let z=!1;const F=u(U,O,P);r!==F&&(r=F,c(r.object)),z=f(M,U,O,D),z&&p(M,U,O,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(M,P,O,U),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,O){const U=O.wireframe===!0;let D=n[M.id];D===void 0&&(D={},n[M.id]=D);let z=D[P.id];z===void 0&&(z={},D[P.id]=z);let F=z[U];return F===void 0&&(F=d(l()),z[U]=F),F}function d(M){const P=[],O=[],U=[];for(let D=0;D<e;D++)P[D]=0,O[D]=0,U[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,P,O,U){const D=r.attributes,z=P.attributes;let F=0;const X=O.getAttributes();for(const H in X)if(X[H].location>=0){const K=D[H];let rt=z[H];if(rt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),K===void 0||K.attribute!==rt||rt&&K.data!==rt.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function p(M,P,O,U){const D={},z=P.attributes;let F=0;const X=O.getAttributes();for(const H in X)if(X[H].location>=0){let K=z[H];K===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const rt={};rt.attribute=K,K&&K.data&&(rt.data=K.data),D[H]=rt,F++}r.attributes=D,r.attributesNum=F,r.index=U}function _(){const M=r.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function g(M){m(M,0)}function m(M,P){const O=r.newAttributes,U=r.enabledAttributes,D=r.attributeDivisors;O[M]=1,U[M]===0&&(s.enableVertexAttribArray(M),U[M]=1),D[M]!==P&&(s.vertexAttribDivisor(M,P),D[M]=P)}function x(){const M=r.newAttributes,P=r.enabledAttributes;for(let O=0,U=P.length;O<U;O++)P[O]!==M[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function v(M,P,O,U,D,z,F){F===!0?s.vertexAttribIPointer(M,P,O,D,z):s.vertexAttribPointer(M,P,O,U,D,z)}function y(M,P,O,U){_();const D=U.attributes,z=O.getAttributes(),F=P.defaultAttributeValues;for(const X in z){const H=z[X];if(H.location>=0){let V=D[X];if(V===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){const K=V.normalized,rt=V.itemSize,xt=t.get(V);if(xt===void 0)continue;const Gt=xt.buffer,j=xt.type,ut=xt.bytesPerElement,$=j===s.INT||j===s.UNSIGNED_INT||V.gpuType===Jh;if(V.isInterleavedBufferAttribute){const G=V.data,J=G.stride,ot=V.offset;if(G.isInstancedInterleavedBuffer){for(let ct=0;ct<H.locationSize;ct++)m(H.location+ct,G.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ct=0;ct<H.locationSize;ct++)g(H.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let ct=0;ct<H.locationSize;ct++)v(H.location+ct,rt/H.locationSize,j,K,J*ut,(ot+rt/H.locationSize*ct)*ut,$)}else{if(V.isInstancedBufferAttribute){for(let G=0;G<H.locationSize;G++)m(H.location+G,V.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let G=0;G<H.locationSize;G++)g(H.location+G);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let G=0;G<H.locationSize;G++)v(H.location+G,rt/H.locationSize,j,K,rt*ut,rt/H.locationSize*G*ut,$)}}else if(F!==void 0){const K=F[X];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(H.location,K);break;case 3:s.vertexAttrib3fv(H.location,K);break;case 4:s.vertexAttrib4fv(H.location,K);break;default:s.vertexAttrib1fv(H.location,K)}}}}x()}function b(){T();for(const M in n){const P=n[M];for(const O in P){const U=P[O];for(const D in U)h(U[D].object),delete U[D];delete P[O]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const U=P[O];for(const D in U)h(U[D].object),delete U[D];delete P[O]}delete n[M.id]}function E(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const U=O[M.id];for(const D in U)h(U[D].object),delete U[D];delete O[M.id]}}function T(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function KE(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];e.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jE(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==yn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===Ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ei&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Cn&&!T)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:b,maxSamples:w}}function JE(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ki,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,v=x*4;let y=m.clippingState||null;l.value=y,y=h(p,d,v,f);for(let b=0;b!==v;++b)y[b]=e[b];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=f;v!==_;++v,y+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function QE(s){let t=new WeakMap;function e(o,a){return a===Xa?o.mapping=is:a===$a&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xa||a===$a)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new py(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const bo=4,j0=[.125,.215,.35,.446,.526,.582],er=20,Sd=new Ml,J0=new at;let wd=null,Ed=0,Ad=0,Td=!1;const Js=(1+Math.sqrt(5))/2,so=1/Js,Q0=[new A(-Js,so,0),new A(Js,so,0),new A(-so,0,Js),new A(so,0,Js),new A(0,Js,-so),new A(0,Js,so),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class wf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){wd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wd,Ed,Ad),this._renderer.xr.enabled=Td,t.scissorTest=!1,yc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:Ho,format:yn,colorSpace:Tr,depthBuffer:!1},i=tg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tA(r)),this._blurMaterial=eA(r,t,e)}return i}_compileMaterial(t){const e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,Sd)}_sceneToCubeUV(t,e,n,i){const a=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(J0),h.toneMapping=Ji,h.autoClear=!1;const f=new re({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),p=new Nt(new Dr,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(J0),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;yc(i,x*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===is||t.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eg());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;yc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Sd)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Q0[(i-r-1)%Q0.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Nt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*er-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):er;g>er&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${er}`);const m=[];let x=0;for(let E=0;E<er;++E){const T=E/_,S=Math.exp(-T*T/2);m.push(S),E===0?x+=S:E<g&&(x+=2*S)}for(let E=0;E<m.length;E++)m[E]=m[E]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;const y=this._sizeLods[i],b=3*y*(i>v-bo?i-v+bo:0),w=4*(this._cubeSize-y);yc(e,b,w,3*y,2*y),l.setRenderTarget(e),l.render(u,Sd)}}function tA(s){const t=[],e=[],n=[];let i=s;const r=s-bo+1+j0.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-bo?l=j0[o-s+bo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,x=new Float32Array(_*p*f),v=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,T=w>2?0:-1,S=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];x.set(S,_*p*w),v.set(d,g*p*w);const M=[w,w,w,w,w,w];y.set(M,m*p*w)}const b=new _t;b.setAttribute("position",new gt(x,_)),b.setAttribute("uv",new gt(v,g)),b.setAttribute("faceIndex",new gt(y,m)),t.push(b),i>bo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tg(s,t,e){const n=new Ai(s,t,e);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yc(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function eA(s,t,e){const n=new Float32Array(er),i=new A(0,1,0);return new ye({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function eg(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ng(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function gm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nA(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xa||l===$a,h=l===is||l===As;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new wf(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new wf(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function iA(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&po("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sA(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,y=x.length;v<y;v+=3){const b=x[v+0],w=x[v+1],E=x[v+2];d.push(b,w,w,E,E,b)}}else if(p!==void 0){const x=p.array;_=p.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const b=v+0,w=v+1,E=v+2;d.push(b,w,w,E,E,b)}}else return;const g=new(ay(d)?kp:Bp)(d,1);g.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rA(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x]*_[x];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function oA(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function aA(s,t,e){const n=new WeakMap,i=new Jt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),p===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*b*4*u),E=new pl(w,y,b,u);E.type=Cn,E.needsUpdate=!0;const T=v*4;for(let M=0;M<u;M++){const P=g[M],O=m[M],U=x[M],D=y*b*4*M;for(let z=0;z<P.count;z++){const F=z*T;f===!0&&(i.fromBufferAttribute(P,z),w[D+F+0]=i.x,w[D+F+1]=i.y,w[D+F+2]=i.z,w[D+F+3]=0),p===!0&&(i.fromBufferAttribute(O,z),w[D+F+4]=i.x,w[D+F+5]=i.y,w[D+F+6]=i.z,w[D+F+7]=0),_===!0&&(i.fromBufferAttribute(U,z),w[D+F+8]=i.x,w[D+F+9]=i.y,w[D+F+10]=i.z,w[D+F+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new Q(y,b)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function lA(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const rx=new Ce,ig=new Wp(1,1),ox=new pl,ax=new au,lx=new ml,sg=[],rg=[],og=new Float32Array(16),ag=new Float32Array(9),lg=new Float32Array(4);function Wo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=sg[i];if(r===void 0&&(r=new Float32Array(i),sg[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ne(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Cu(s,t){let e=rg[t];e===void 0&&(e=new Int32Array(t),rg[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function cA(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function hA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function uA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function dA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function fA(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,n))return;lg.set(n),s.uniformMatrix2fv(this.addr,!1,lg),ze(e,n)}}function pA(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,n))return;ag.set(n),s.uniformMatrix3fv(this.addr,!1,ag),ze(e,n)}}function mA(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,n))return;og.set(n),s.uniformMatrix4fv(this.addr,!1,og),ze(e,n)}}function gA(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _A(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function yA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function xA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function vA(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function MA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function bA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function SA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function wA(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ig.compareFunction=Np,r=ig):r=rx,e.setTexture2D(t||r,i)}function EA(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ax,i)}function AA(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lx,i)}function TA(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ox,i)}function CA(s){switch(s){case 5126:return cA;case 35664:return hA;case 35665:return uA;case 35666:return dA;case 35674:return fA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return _A;case 35668:case 35672:return yA;case 35669:case 35673:return xA;case 5125:return vA;case 36294:return MA;case 36295:return bA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return TA}}function RA(s,t){s.uniform1fv(this.addr,t)}function PA(s,t){const e=Wo(t,this.size,2);s.uniform2fv(this.addr,e)}function IA(s,t){const e=Wo(t,this.size,3);s.uniform3fv(this.addr,e)}function LA(s,t){const e=Wo(t,this.size,4);s.uniform4fv(this.addr,e)}function DA(s,t){const e=Wo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function UA(s,t){const e=Wo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function OA(s,t){const e=Wo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function FA(s,t){s.uniform1iv(this.addr,t)}function NA(s,t){s.uniform2iv(this.addr,t)}function zA(s,t){s.uniform3iv(this.addr,t)}function BA(s,t){s.uniform4iv(this.addr,t)}function kA(s,t){s.uniform1uiv(this.addr,t)}function GA(s,t){s.uniform2uiv(this.addr,t)}function VA(s,t){s.uniform3uiv(this.addr,t)}function HA(s,t){s.uniform4uiv(this.addr,t)}function WA(s,t,e){const n=this.cache,i=t.length,r=Cu(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||rx,r[o])}function XA(s,t,e){const n=this.cache,i=t.length,r=Cu(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ax,r[o])}function $A(s,t,e){const n=this.cache,i=t.length,r=Cu(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lx,r[o])}function qA(s,t,e){const n=this.cache,i=t.length,r=Cu(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ox,r[o])}function YA(s){switch(s){case 5126:return RA;case 35664:return PA;case 35665:return IA;case 35666:return LA;case 35674:return DA;case 35675:return UA;case 35676:return OA;case 5124:case 35670:return FA;case 35667:case 35671:return NA;case 35668:case 35672:return zA;case 35669:case 35673:return BA;case 5125:return kA;case 36294:return GA;case 36295:return VA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return WA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return qA}}class ZA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=CA(e.type)}}class KA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=YA(e.type)}}class jA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function cg(s,t){s.seq.push(t),s.map[t.id]=t}function JA(s,t,e){const n=s.name,i=n.length;for(Cd.lastIndex=0;;){const r=Cd.exec(n),o=Cd.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){cg(e,c===void 0?new ZA(a,s,t):new KA(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new jA(a),cg(e,u)),e=u}}}class Gc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);JA(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function hg(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const QA=37297;let tT=0;function eT(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ug=new $t;function nT(s){ie._getMatrix(ug,ie.workingColorSpace,s);const t=`mat3( ${ug.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case ja:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dg(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+eT(s.getShaderSource(t),o)}else return i}function iT(s,t){const e=nT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sT(s,t){let e;switch(t){case k_:e="Linear";break;case G_:e="Reinhard";break;case V_:e="Cineon";break;case H_:e="ACESFilmic";break;case X_:e="AgX";break;case $_:e="Neutral";break;case W_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xc=new A;function rT(){ie.getLuminanceCoefficients(xc);const s=xc.x.toFixed(4),t=xc.y.toFixed(4),e=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function aT(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lT(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function fa(s){return s!==""}function fg(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(s){return s.replace(cT,uT)}const hT=new Map;function uT(s,t){let e=Kt[t];if(e===void 0){const n=hT.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ef(e)}const dT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(s){return s.replace(dT,fT)}function fT(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gg(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pT(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ep?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===x_?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function mT(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case is:case As:t="ENVMAP_TYPE_CUBE";break;case Vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gT(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function _T(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dl:t="ENVMAP_BLENDING_MULTIPLY";break;case z_:t="ENVMAP_BLENDING_MIX";break;case B_:t="ENVMAP_BLENDING_ADD";break}return t}function yT(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xT(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=pT(e),c=mT(e),h=gT(e),u=_T(e),d=yT(e),f=oT(e),p=aT(r),_=i.createProgram();let g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(fa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(fa).join(`
`),m.length>0&&(m+=`
`)):(g=[gg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),m=[gg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ji?sT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,iT("linearToOutputTexel",e.outputColorSpace),rT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fa).join(`
`)),o=Ef(o),o=fg(o,e),o=pg(o,e),a=Ef(a),a=fg(a,e),a=pg(a,e),o=mg(o),a=mg(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+g+o,y=x+m+a,b=hg(i,i.VERTEX_SHADER,v),w=hg(i,i.FRAGMENT_SHADER,y);i.attachShader(_,b),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(b).trim(),D=i.getShaderInfoLog(w).trim();let z=!0,F=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,w);else{const X=dg(i,b,"vertex"),H=dg(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+X+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||D==="")&&(F=!1);F&&(P.diagnostics={runnable:z,programLog:O,vertexShader:{log:U,prefix:g},fragmentShader:{log:D,prefix:m}})}i.deleteShader(b),i.deleteShader(w),T=new Gc(i,_),S=lT(i,_)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,QA)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tT++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let vT=0;class MT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bT(t),e.set(t,n)),n}}class bT{constructor(t){this.id=vT++,this.code=t,this.usedTimes=0}}function ST(s,t,e,n,i,r,o){const a=new lu,l=new MT,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,P,O,U){const D=O.fog,z=U.geometry,F=S.isMeshStandardMaterial?O.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||F),H=X&&X.mapping===Vo?X.image.height:null,V=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,rt=K!==void 0?K.length:0;let xt=0;z.morphAttributes.position!==void 0&&(xt=1),z.morphAttributes.normal!==void 0&&(xt=2),z.morphAttributes.color!==void 0&&(xt=3);let Gt,j,ut,$;if(V){const fe=gn[V];Gt=fe.vertexShader,j=fe.fragmentShader}else Gt=S.vertexShader,j=S.fragmentShader,l.update(S),ut=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const G=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),ot=U.isInstancedMesh===!0,ct=U.isBatchedMesh===!0,zt=!!S.map,nt=!!S.matcap,dt=!!X,L=!!S.aoMap,Lt=!!S.lightMap,it=!!S.bumpMap,vt=!!S.normalMap,mt=!!S.displacementMap,Ut=!!S.emissiveMap,Mt=!!S.metalnessMap,I=!!S.roughnessMap,C=S.anisotropy>0,W=S.clearcoat>0,tt=S.dispersion>0,lt=S.iridescence>0,et=S.sheen>0,Dt=S.transmission>0,bt=C&&!!S.anisotropyMap,Tt=W&&!!S.clearcoatMap,Qt=W&&!!S.clearcoatNormalMap,pt=W&&!!S.clearcoatRoughnessMap,Rt=lt&&!!S.iridescenceMap,Bt=lt&&!!S.iridescenceThicknessMap,Vt=et&&!!S.sheenColorMap,Pt=et&&!!S.sheenRoughnessMap,ne=!!S.specularMap,jt=!!S.specularColorMap,_e=!!S.specularIntensityMap,N=Dt&&!!S.transmissionMap,St=Dt&&!!S.thicknessMap,Z=!!S.gradientMap,st=!!S.alphaMap,At=S.alphaTest>0,Et=!!S.alphaHash,Zt=!!S.extensions;let Se=Ji;S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Se=s.toneMapping);const Ke={shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:Gt,fragmentShader:j,defines:S.defines,customVertexShaderID:ut,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ct,batchingColor:ct&&U._colorsTexture!==null,instancing:ot,instancingColor:ot&&U.instanceColor!==null,instancingMorph:ot&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:G===null?s.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Tr,alphaToCoverage:!!S.alphaToCoverage,map:zt,matcap:nt,envMap:dt,envMapMode:dt&&X.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:Lt,bumpMap:it,normalMap:vt,displacementMap:d&&mt,emissiveMap:Ut,normalMapObjectSpace:vt&&S.normalMapType===Q_,normalMapTangentSpace:vt&&S.normalMapType===Ts,metalnessMap:Mt,roughnessMap:I,anisotropy:C,anisotropyMap:bt,clearcoat:W,clearcoatMap:Tt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:pt,dispersion:tt,iridescence:lt,iridescenceMap:Rt,iridescenceThicknessMap:Bt,sheen:et,sheenColorMap:Vt,sheenRoughnessMap:Pt,specularMap:ne,specularColorMap:jt,specularIntensityMap:_e,transmission:Dt,transmissionMap:N,thicknessMap:St,gradientMap:Z,opaque:S.transparent===!1&&S.blending===mr&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:At,alphaHash:Et,combine:S.combine,mapUv:zt&&_(S.map.channel),aoMapUv:L&&_(S.aoMap.channel),lightMapUv:Lt&&_(S.lightMap.channel),bumpMapUv:it&&_(S.bumpMap.channel),normalMapUv:vt&&_(S.normalMap.channel),displacementMapUv:mt&&_(S.displacementMap.channel),emissiveMapUv:Ut&&_(S.emissiveMap.channel),metalnessMapUv:Mt&&_(S.metalnessMap.channel),roughnessMapUv:I&&_(S.roughnessMap.channel),anisotropyMapUv:bt&&_(S.anisotropyMap.channel),clearcoatMapUv:Tt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(S.sheenRoughnessMap.channel),specularMapUv:ne&&_(S.specularMap.channel),specularColorMapUv:jt&&_(S.specularColorMap.channel),specularIntensityMapUv:_e&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:St&&_(S.thicknessMap.channel),alphaMapUv:st&&_(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(vt||C),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(zt||st),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:J,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===pe,decodeVideoTextureEmissive:Ut&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===pe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fe,flipSided:S.side===vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Zt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&S.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(M,S),v(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=p[S.type];let P;if(M){const O=gn[M];P=cu.clone(O.uniforms)}else P=S.uniforms;return P}function b(S,M){let P;for(let O=0,U=h.length;O<U;O++){const D=h[O];if(D.cacheKey===M){P=D,++P.usedTimes;break}}return P===void 0&&(P=new xT(s,M,S,r),h.push(P)),P}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:T}}function wT(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ET(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _g(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yg(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,p,_,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||ET),n.length>1&&n.sort(d||_g),i.length>1&&i.sort(d||_g)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function AT(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new yg,s.set(n,[o])):i>=r.length?(o=new yg,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function TT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new at};break;case"SpotLight":e={position:new A,direction:new A,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function CT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let RT=0;function PT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function IT(s){const t=new TT,e=CT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,r=new kt,o=new kt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,x=0,v=0,y=0,b=0,w=0,E=0;c.sort(PT);for(let S=0,M=c.length;S<M;S++){const P=c[S],O=P.color,U=P.intensity,D=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*U,u+=O.g*U,d+=O.b*U;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],U);E++}else if(P.isDirectionalLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,H=e.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=F,f++}else if(P.isSpotLight){const F=t.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(O).multiplyScalar(U),F.distance=D,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[_]=F;const X=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,X.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=X.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=z,y++}_++}else if(P.isRectAreaLight){const F=t.get(P);F.color.copy(O).multiplyScalar(U),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=F,g++}else if(P.isPointLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const X=P.shadow,H=e.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=P.shadow.matrix,v++}n.point[p]=F,p++}else if(P.isHemisphereLight){const F=t.get(P);F.skyColor.copy(P.color).multiplyScalar(U),F.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[m]=F,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==f||T.pointLength!==p||T.spotLength!==_||T.rectAreaLength!==g||T.hemiLength!==m||T.numDirectionalShadows!==x||T.numPointShadows!==v||T.numSpotShadows!==y||T.numSpotMaps!==b||T.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,T.directionalLength=f,T.pointLength=p,T.spotLength=_,T.rectAreaLength=g,T.hemiLength=m,T.numDirectionalShadows=x,T.numPointShadows=v,T.numSpotShadows=y,T.numSpotMaps=b,T.numLightProbes=E,n.version=RT++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const v=c[m];if(v.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(v.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function xg(s){const t=new IT(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function LT(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new xg(s),t.set(i,[a])):r>=o.length?(a=new xg(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const DT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OT(s,t,e){let n=new gl;const i=new Q,r=new Q,o=new Jt,a=new tm({depthPacking:J_}),l=new em,c={},h=e.maxTextureSize,u={[ns]:vn,[vn]:ns,[Fe]:Fe},d=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:DT,fragmentShader:UT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new _t;p.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ep;let m=this.type;this.render=function(w,E,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ji),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=m!==li&&this.type===li,D=m===li&&this.type!==li;for(let z=0,F=w.length;z<F;z++){const X=w[z],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const V=H.getFrameExtents();if(i.multiply(V),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,H.mapSize.y=r.y)),H.map===null||U===!0||D===!0){const rt=this.type!==li?{minFilter:Ze,magFilter:Ze}:{};H.map!==null&&H.map.dispose(),H.map=new Ai(i.x,i.y,rt),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const K=H.getViewportCount();for(let rt=0;rt<K;rt++){const xt=H.getViewport(rt);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),O.viewport(o),H.updateMatrices(X,rt),n=H.getFrustum(),y(E,T,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===li&&x(H,T),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(S,M,P)};function x(w,E){const T=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ai(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,T,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,T,f,_,null)}function v(w,E,T,S){let M=null;const P=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=T.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=M.uuid,U=E.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let z=D[U];z===void 0&&(z=M.clone(),D[U]=z,E.addEventListener("dispose",b)),M=z}if(M.visible=E.visible,M.wireframe=E.wireframe,S===li?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=s.properties.get(M);O.light=T}return M}function y(w,E,T,S,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===li)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const U=t.update(w),D=w.material;if(Array.isArray(D)){const z=U.groups;for(let F=0,X=z.length;F<X;F++){const H=z[F],V=D[H.materialIndex];if(V&&V.visible){const K=v(w,V,S,M);w.onBeforeShadow(s,w,E,T,U,K,H),s.renderBufferDirect(T,null,U,K,w,H),w.onAfterShadow(s,w,E,T,U,K,H)}}}else if(D.visible){const z=v(w,D,S,M);w.onBeforeShadow(s,w,E,T,U,z,null),s.renderBufferDirect(T,null,U,z,w,null),w.onAfterShadow(s,w,E,T,U,z,null)}}const O=w.children;for(let U=0,D=O.length;U<D;U++)y(O[U],E,T,S,M)}function b(w){w.target.removeEventListener("dispose",b);for(const T in c){const S=c[T],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const FT={[eh]:nh,[ih]:oh,[sh]:ah,[wr]:rh,[nh]:eh,[oh]:ih,[ah]:sh,[rh]:wr};function NT(s,t){function e(){let N=!1;const St=new Jt;let Z=null;const st=new Jt(0,0,0,0);return{setMask:function(At){Z!==At&&!N&&(s.colorMask(At,At,At,At),Z=At)},setLocked:function(At){N=At},setClear:function(At,Et,Zt,Se,Ke){Ke===!0&&(At*=Se,Et*=Se,Zt*=Se),St.set(At,Et,Zt,Se),st.equals(St)===!1&&(s.clearColor(At,Et,Zt,Se),st.copy(St))},reset:function(){N=!1,Z=null,st.set(-1,0,0,0)}}}function n(){let N=!1,St=!1,Z=null,st=null,At=null;return{setReversed:function(Et){if(St!==Et){const Zt=t.get("EXT_clip_control");St?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Se=At;At=null,this.setClear(Se)}St=Et},getReversed:function(){return St},setTest:function(Et){Et?G(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(Et){Z!==Et&&!N&&(s.depthMask(Et),Z=Et)},setFunc:function(Et){if(St&&(Et=FT[Et]),st!==Et){switch(Et){case eh:s.depthFunc(s.NEVER);break;case nh:s.depthFunc(s.ALWAYS);break;case ih:s.depthFunc(s.LESS);break;case wr:s.depthFunc(s.LEQUAL);break;case sh:s.depthFunc(s.EQUAL);break;case rh:s.depthFunc(s.GEQUAL);break;case oh:s.depthFunc(s.GREATER);break;case ah:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}st=Et}},setLocked:function(Et){N=Et},setClear:function(Et){At!==Et&&(St&&(Et=1-Et),s.clearDepth(Et),At=Et)},reset:function(){N=!1,Z=null,st=null,At=null,St=!1}}}function i(){let N=!1,St=null,Z=null,st=null,At=null,Et=null,Zt=null,Se=null,Ke=null;return{setTest:function(fe){N||(fe?G(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function(fe){St!==fe&&!N&&(s.stencilMask(fe),St=fe)},setFunc:function(fe,Wn,Ci){(Z!==fe||st!==Wn||At!==Ci)&&(s.stencilFunc(fe,Wn,Ci),Z=fe,st=Wn,At=Ci)},setOp:function(fe,Wn,Ci){(Et!==fe||Zt!==Wn||Se!==Ci)&&(s.stencilOp(fe,Wn,Ci),Et=fe,Zt=Wn,Se=Ci)},setLocked:function(fe){N=fe},setClear:function(fe){Ke!==fe&&(s.clearStencil(fe),Ke=fe)},reset:function(){N=!1,St=null,Z=null,st=null,At=null,Et=null,Zt=null,Se=null,Ke=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,x=null,v=null,y=null,b=null,w=null,E=new at(0,0,0),T=0,S=!1,M=null,P=null,O=null,U=null,D=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,X=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=X>=2);let V=null,K={};const rt=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),Gt=new Jt().fromArray(rt),j=new Jt().fromArray(xt);function ut(N,St,Z,st){const At=new Uint8Array(4),Et=s.createTexture();s.bindTexture(N,Et),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<Z;Zt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(St,0,s.RGBA,1,1,st,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(St+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return Et}const $={};$[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(s.DEPTH_TEST),o.setFunc(wr),it(!1),vt(hf),G(s.CULL_FACE),L(ji);function G(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function J(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function ot(N,St){return u[N]!==St?(s.bindFramebuffer(N,St),u[N]=St,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=St),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=St),!0):!1}function ct(N,St){let Z=f,st=!1;if(N){Z=d.get(St),Z===void 0&&(Z=[],d.set(St,Z));const At=N.textures;if(Z.length!==At.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,Zt=At.length;Et<Zt;Et++)Z[Et]=s.COLOR_ATTACHMENT0+Et;Z.length=At.length,st=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,st=!0);st&&s.drawBuffers(Z)}function zt(N){return p!==N?(s.useProgram(N),p=N,!0):!1}const nt={[_s]:s.FUNC_ADD,[M_]:s.FUNC_SUBTRACT,[b_]:s.FUNC_REVERSE_SUBTRACT};nt[S_]=s.MIN,nt[w_]=s.MAX;const dt={[E_]:s.ZERO,[A_]:s.ONE,[T_]:s.SRC_COLOR,[Qc]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[I_]:s.DST_COLOR,[R_]:s.DST_ALPHA,[C_]:s.ONE_MINUS_SRC_COLOR,[th]:s.ONE_MINUS_SRC_ALPHA,[L_]:s.ONE_MINUS_DST_COLOR,[P_]:s.ONE_MINUS_DST_ALPHA,[U_]:s.CONSTANT_COLOR,[O_]:s.ONE_MINUS_CONSTANT_COLOR,[F_]:s.CONSTANT_ALPHA,[N_]:s.ONE_MINUS_CONSTANT_ALPHA};function L(N,St,Z,st,At,Et,Zt,Se,Ke,fe){if(N===ji){_===!0&&(J(s.BLEND),_=!1);return}if(_===!1&&(G(s.BLEND),_=!0),N!==v_){if(N!==g||fe!==S){if((m!==_s||y!==_s)&&(s.blendEquation(s.FUNC_ADD),m=_s,y=_s),fe)switch(N){case mr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Es:s.blendFunc(s.ONE,s.ONE);break;case uf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case df:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Es:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case uf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case df:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,v=null,b=null,w=null,E.set(0,0,0),T=0,g=N,S=fe}return}At=At||St,Et=Et||Z,Zt=Zt||st,(St!==m||At!==y)&&(s.blendEquationSeparate(nt[St],nt[At]),m=St,y=At),(Z!==x||st!==v||Et!==b||Zt!==w)&&(s.blendFuncSeparate(dt[Z],dt[st],dt[Et],dt[Zt]),x=Z,v=st,b=Et,w=Zt),(Se.equals(E)===!1||Ke!==T)&&(s.blendColor(Se.r,Se.g,Se.b,Ke),E.copy(Se),T=Ke),g=N,S=!1}function Lt(N,St){N.side===Fe?J(s.CULL_FACE):G(s.CULL_FACE);let Z=N.side===vn;St&&(Z=!Z),it(Z),N.blending===mr&&N.transparent===!1?L(ji):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const st=N.stencilWrite;a.setTest(st),st&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?G(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function vt(N){N!==__?(G(s.CULL_FACE),N!==P&&(N===hf?s.cullFace(s.BACK):N===y_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),P=N}function mt(N){N!==O&&(F&&s.lineWidth(N),O=N)}function Ut(N,St,Z){N?(G(s.POLYGON_OFFSET_FILL),(U!==St||D!==Z)&&(s.polygonOffset(St,Z),U=St,D=Z)):J(s.POLYGON_OFFSET_FILL)}function Mt(N){N?G(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function I(N){N===void 0&&(N=s.TEXTURE0+z-1),V!==N&&(s.activeTexture(N),V=N)}function C(N,St,Z){Z===void 0&&(V===null?Z=s.TEXTURE0+z-1:Z=V);let st=K[Z];st===void 0&&(st={type:void 0,texture:void 0},K[Z]=st),(st.type!==N||st.texture!==St)&&(V!==Z&&(s.activeTexture(Z),V=Z),s.bindTexture(N,St||$[N]),st.type=N,st.texture=St)}function W(){const N=K[V];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function tt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(N){Gt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Gt.copy(N))}function Pt(N){j.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function ne(N,St){let Z=c.get(St);Z===void 0&&(Z=new WeakMap,c.set(St,Z));let st=Z.get(N);st===void 0&&(st=s.getUniformBlockIndex(St,N.name),Z.set(N,st))}function jt(N,St){const st=c.get(St).get(N);l.get(St)!==st&&(s.uniformBlockBinding(St,st,N.__bindingPointIndex),l.set(St,st))}function _e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},V=null,K={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,x=null,v=null,y=null,b=null,w=null,E=new at(0,0,0),T=0,S=!1,M=null,P=null,O=null,U=null,D=null,Gt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:J,bindFramebuffer:ot,drawBuffers:ct,useProgram:zt,setBlending:L,setMaterial:Lt,setFlipSided:it,setCullFace:vt,setLineWidth:mt,setPolygonOffset:Ut,setScissorTest:Mt,activeTexture:I,bindTexture:C,unbindTexture:W,compressedTexImage2D:tt,compressedTexImage3D:lt,texImage2D:Rt,texImage3D:Bt,updateUBOMapping:ne,uniformBlockBinding:jt,texStorage2D:Qt,texStorage3D:pt,texSubImage2D:et,texSubImage3D:Dt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Tt,scissor:Vt,viewport:Pt,reset:_e}}function zT(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,C){return f?new OffscreenCanvas(I,C):tl("canvas")}function _(I,C,W){let tt=1;const lt=Mt(I);if((lt.width>W||lt.height>W)&&(tt=W/Math.max(lt.width,lt.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const et=Math.floor(tt*lt.width),Dt=Math.floor(tt*lt.height);u===void 0&&(u=p(et,Dt));const bt=C?p(et,Dt):u;return bt.width=et,bt.height=Dt,bt.getContext("2d").drawImage(I,0,0,et,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+et+"x"+Dt+")."),bt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){s.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(I,C,W,tt,lt=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let et=C;if(C===s.RED&&(W===s.FLOAT&&(et=s.R32F),W===s.HALF_FLOAT&&(et=s.R16F),W===s.UNSIGNED_BYTE&&(et=s.R8)),C===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.R8UI),W===s.UNSIGNED_SHORT&&(et=s.R16UI),W===s.UNSIGNED_INT&&(et=s.R32UI),W===s.BYTE&&(et=s.R8I),W===s.SHORT&&(et=s.R16I),W===s.INT&&(et=s.R32I)),C===s.RG&&(W===s.FLOAT&&(et=s.RG32F),W===s.HALF_FLOAT&&(et=s.RG16F),W===s.UNSIGNED_BYTE&&(et=s.RG8)),C===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.RG8UI),W===s.UNSIGNED_SHORT&&(et=s.RG16UI),W===s.UNSIGNED_INT&&(et=s.RG32UI),W===s.BYTE&&(et=s.RG8I),W===s.SHORT&&(et=s.RG16I),W===s.INT&&(et=s.RG32I)),C===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.RGB8UI),W===s.UNSIGNED_SHORT&&(et=s.RGB16UI),W===s.UNSIGNED_INT&&(et=s.RGB32UI),W===s.BYTE&&(et=s.RGB8I),W===s.SHORT&&(et=s.RGB16I),W===s.INT&&(et=s.RGB32I)),C===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),W===s.UNSIGNED_INT&&(et=s.RGBA32UI),W===s.BYTE&&(et=s.RGBA8I),W===s.SHORT&&(et=s.RGBA16I),W===s.INT&&(et=s.RGBA32I)),C===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),C===s.RGBA){const Dt=lt?ja:ie.getTransfer(tt);W===s.FLOAT&&(et=s.RGBA32F),W===s.HALF_FLOAT&&(et=s.RGBA16F),W===s.UNSIGNED_BYTE&&(et=Dt===pe?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function y(I,C){let W;return I?C===null||C===ss||C===Er?W=s.DEPTH24_STENCIL8:C===Cn?W=s.DEPTH32F_STENCIL8:C===No&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ss||C===Er?W=s.DEPTH_COMPONENT24:C===Cn?W=s.DEPTH_COMPONENT32F:C===No&&(W=s.DEPTH_COMPONENT16),W}function b(I,C){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ze&&I.minFilter!==be?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function w(I){const C=I.target;C.removeEventListener("dispose",w),T(C),C.isVideoTexture&&h.delete(C)}function E(I){const C=I.target;C.removeEventListener("dispose",E),M(C)}function T(I){const C=n.get(I);if(C.__webglInit===void 0)return;const W=I.source,tt=d.get(W);if(tt){const lt=tt[C.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&S(I),Object.keys(tt).length===0&&d.delete(W)}n.remove(I)}function S(I){const C=n.get(I);s.deleteTexture(C.__webglTexture);const W=I.source,tt=d.get(W);delete tt[C.__cacheKey],o.memory.textures--}function M(I){const C=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(C.__webglFramebuffer[tt]))for(let lt=0;lt<C.__webglFramebuffer[tt].length;lt++)s.deleteFramebuffer(C.__webglFramebuffer[tt][lt]);else s.deleteFramebuffer(C.__webglFramebuffer[tt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[tt])}else{if(Array.isArray(C.__webglFramebuffer))for(let tt=0;tt<C.__webglFramebuffer.length;tt++)s.deleteFramebuffer(C.__webglFramebuffer[tt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let tt=0;tt<C.__webglColorRenderbuffer.length;tt++)C.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[tt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const W=I.textures;for(let tt=0,lt=W.length;tt<lt;tt++){const et=n.get(W[tt]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(W[tt])}n.remove(I)}let P=0;function O(){P=0}function U(){const I=P;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function D(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function z(I,C){const W=n.get(I);if(I.isVideoTexture&&mt(I),I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){const tt=I.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(W,I,C);return}}e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+C)}function F(I,C){const W=n.get(I);if(I.version>0&&W.__version!==I.version){j(W,I,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+C)}function X(I,C){const W=n.get(I);if(I.version>0&&W.__version!==I.version){j(W,I,C);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+C)}function H(I,C){const W=n.get(I);if(I.version>0&&W.__version!==I.version){ut(W,I,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+C)}const V={[qa]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[Ya]:s.MIRRORED_REPEAT},K={[Ze]:s.NEAREST,[Ap]:s.NEAREST_MIPMAP_NEAREST,[xo]:s.NEAREST_MIPMAP_LINEAR,[be]:s.LINEAR,[va]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},rt={[ty]:s.NEVER,[oy]:s.ALWAYS,[ey]:s.LESS,[Np]:s.LEQUAL,[ny]:s.EQUAL,[ry]:s.GEQUAL,[iy]:s.GREATER,[sy]:s.NOTEQUAL};function xt(I,C){if(C.type===Cn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===be||C.magFilter===va||C.magFilter===xo||C.magFilter===_i||C.minFilter===be||C.minFilter===va||C.minFilter===xo||C.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,V[C.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,V[C.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,V[C.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,K[C.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,K[C.minFilter]),C.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,rt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ze||C.minFilter!==xo&&C.minFilter!==_i||C.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Gt(I,C){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",w));const tt=C.source;let lt=d.get(tt);lt===void 0&&(lt={},d.set(tt,lt));const et=D(C);if(et!==I.__cacheKey){lt[et]===void 0&&(lt[et]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),lt[et].usedTimes++;const Dt=lt[I.__cacheKey];Dt!==void 0&&(lt[I.__cacheKey].usedTimes--,Dt.usedTimes===0&&S(C)),I.__cacheKey=et,I.__webglTexture=lt[et].texture}return W}function j(I,C,W){let tt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(tt=s.TEXTURE_3D);const lt=Gt(I,C),et=C.source;e.bindTexture(tt,I.__webglTexture,s.TEXTURE0+W);const Dt=n.get(et);if(et.version!==Dt.__version||lt===!0){e.activeTexture(s.TEXTURE0+W);const bt=ie.getPrimaries(ie.workingColorSpace),Tt=C.colorSpace===Hi?null:ie.getPrimaries(C.colorSpace),Qt=C.colorSpace===Hi||bt===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let pt=_(C.image,!1,i.maxTextureSize);pt=Ut(C,pt);const Rt=r.convert(C.format,C.colorSpace),Bt=r.convert(C.type);let Vt=v(C.internalFormat,Rt,Bt,C.colorSpace,C.isVideoTexture);xt(tt,C);let Pt;const ne=C.mipmaps,jt=C.isVideoTexture!==!0,_e=Dt.__version===void 0||lt===!0,N=et.dataReady,St=b(C,pt);if(C.isDepthTexture)Vt=y(C.format===Ar,C.type),_e&&(jt?e.texStorage2D(s.TEXTURE_2D,1,Vt,pt.width,pt.height):e.texImage2D(s.TEXTURE_2D,0,Vt,pt.width,pt.height,0,Rt,Bt,null));else if(C.isDataTexture)if(ne.length>0){jt&&_e&&e.texStorage2D(s.TEXTURE_2D,St,Vt,ne[0].width,ne[0].height);for(let Z=0,st=ne.length;Z<st;Z++)Pt=ne[Z],jt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Rt,Bt,Pt.data):e.texImage2D(s.TEXTURE_2D,Z,Vt,Pt.width,Pt.height,0,Rt,Bt,Pt.data);C.generateMipmaps=!1}else jt?(_e&&e.texStorage2D(s.TEXTURE_2D,St,Vt,pt.width,pt.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt.width,pt.height,Rt,Bt,pt.data)):e.texImage2D(s.TEXTURE_2D,0,Vt,pt.width,pt.height,0,Rt,Bt,pt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){jt&&_e&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Vt,ne[0].width,ne[0].height,pt.depth);for(let Z=0,st=ne.length;Z<st;Z++)if(Pt=ne[Z],C.format!==yn)if(Rt!==null)if(jt){if(N)if(C.layerUpdates.size>0){const At=Sf(Pt.width,Pt.height,C.format,C.type);for(const Et of C.layerUpdates){const Zt=Pt.data.subarray(Et*At/Pt.data.BYTES_PER_ELEMENT,(Et+1)*At/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,Et,Pt.width,Pt.height,1,Rt,Zt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,pt.depth,Rt,Pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Vt,Pt.width,Pt.height,pt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,pt.depth,Rt,Bt,Pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Vt,Pt.width,Pt.height,pt.depth,0,Rt,Bt,Pt.data)}else{jt&&_e&&e.texStorage2D(s.TEXTURE_2D,St,Vt,ne[0].width,ne[0].height);for(let Z=0,st=ne.length;Z<st;Z++)Pt=ne[Z],C.format!==yn?Rt!==null?jt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Vt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Rt,Bt,Pt.data):e.texImage2D(s.TEXTURE_2D,Z,Vt,Pt.width,Pt.height,0,Rt,Bt,Pt.data)}else if(C.isDataArrayTexture)if(jt){if(_e&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Vt,pt.width,pt.height,pt.depth),N)if(C.layerUpdates.size>0){const Z=Sf(pt.width,pt.height,C.format,C.type);for(const st of C.layerUpdates){const At=pt.data.subarray(st*Z/pt.data.BYTES_PER_ELEMENT,(st+1)*Z/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,st,pt.width,pt.height,1,Rt,Bt,At)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Bt,pt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,pt.width,pt.height,pt.depth,0,Rt,Bt,pt.data);else if(C.isData3DTexture)jt?(_e&&e.texStorage3D(s.TEXTURE_3D,St,Vt,pt.width,pt.height,pt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Bt,pt.data)):e.texImage3D(s.TEXTURE_3D,0,Vt,pt.width,pt.height,pt.depth,0,Rt,Bt,pt.data);else if(C.isFramebufferTexture){if(_e)if(jt)e.texStorage2D(s.TEXTURE_2D,St,Vt,pt.width,pt.height);else{let Z=pt.width,st=pt.height;for(let At=0;At<St;At++)e.texImage2D(s.TEXTURE_2D,At,Vt,Z,st,0,Rt,Bt,null),Z>>=1,st>>=1}}else if(ne.length>0){if(jt&&_e){const Z=Mt(ne[0]);e.texStorage2D(s.TEXTURE_2D,St,Vt,Z.width,Z.height)}for(let Z=0,st=ne.length;Z<st;Z++)Pt=ne[Z],jt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Rt,Bt,Pt):e.texImage2D(s.TEXTURE_2D,Z,Vt,Rt,Bt,Pt);C.generateMipmaps=!1}else if(jt){if(_e){const Z=Mt(pt);e.texStorage2D(s.TEXTURE_2D,St,Vt,Z.width,Z.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,Bt,pt)}else e.texImage2D(s.TEXTURE_2D,0,Vt,Rt,Bt,pt);g(C)&&m(tt),Dt.__version=et.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function ut(I,C,W){if(C.image.length!==6)return;const tt=Gt(I,C),lt=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+W);const et=n.get(lt);if(lt.version!==et.__version||tt===!0){e.activeTexture(s.TEXTURE0+W);const Dt=ie.getPrimaries(ie.workingColorSpace),bt=C.colorSpace===Hi?null:ie.getPrimaries(C.colorSpace),Tt=C.colorSpace===Hi||Dt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Qt=C.isCompressedTexture||C.image[0].isCompressedTexture,pt=C.image[0]&&C.image[0].isDataTexture,Rt=[];for(let st=0;st<6;st++)!Qt&&!pt?Rt[st]=_(C.image[st],!0,i.maxCubemapSize):Rt[st]=pt?C.image[st].image:C.image[st],Rt[st]=Ut(C,Rt[st]);const Bt=Rt[0],Vt=r.convert(C.format,C.colorSpace),Pt=r.convert(C.type),ne=v(C.internalFormat,Vt,Pt,C.colorSpace),jt=C.isVideoTexture!==!0,_e=et.__version===void 0||tt===!0,N=lt.dataReady;let St=b(C,Bt);xt(s.TEXTURE_CUBE_MAP,C);let Z;if(Qt){jt&&_e&&e.texStorage2D(s.TEXTURE_CUBE_MAP,St,ne,Bt.width,Bt.height);for(let st=0;st<6;st++){Z=Rt[st].mipmaps;for(let At=0;At<Z.length;At++){const Et=Z[At];C.format!==yn?Vt!==null?jt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,Et.width,Et.height,Vt,Et.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,ne,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,Et.width,Et.height,Vt,Pt,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,ne,Et.width,Et.height,0,Vt,Pt,Et.data)}}}else{if(Z=C.mipmaps,jt&&_e){Z.length>0&&St++;const st=Mt(Rt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,St,ne,st.width,st.height)}for(let st=0;st<6;st++)if(pt){jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Rt[st].width,Rt[st].height,Vt,Pt,Rt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ne,Rt[st].width,Rt[st].height,0,Vt,Pt,Rt[st].data);for(let At=0;At<Z.length;At++){const Zt=Z[At].image[st].image;jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,Zt.width,Zt.height,Vt,Pt,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,ne,Zt.width,Zt.height,0,Vt,Pt,Zt.data)}}else{jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Vt,Pt,Rt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ne,Vt,Pt,Rt[st]);for(let At=0;At<Z.length;At++){const Et=Z[At];jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,Vt,Pt,Et.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,ne,Vt,Pt,Et.image[st])}}}g(C)&&m(s.TEXTURE_CUBE_MAP),et.__version=lt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function $(I,C,W,tt,lt,et){const Dt=r.convert(W.format,W.colorSpace),bt=r.convert(W.type),Tt=v(W.internalFormat,Dt,bt,W.colorSpace),Qt=n.get(C),pt=n.get(W);if(pt.__renderTarget=C,!Qt.__hasExternalTextures){const Rt=Math.max(1,C.width>>et),Bt=Math.max(1,C.height>>et);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,et,Tt,Rt,Bt,C.depth,0,Dt,bt,null):e.texImage2D(lt,et,Tt,Rt,Bt,0,Dt,bt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),vt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,lt,pt.__webglTexture,0,it(C)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,lt,pt.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function G(I,C,W){if(s.bindRenderbuffer(s.RENDERBUFFER,I),C.depthBuffer){const tt=C.depthTexture,lt=tt&&tt.isDepthTexture?tt.type:null,et=y(C.stencilBuffer,lt),Dt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=it(C);vt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,et,C.width,C.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,et,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,et,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Dt,s.RENDERBUFFER,I)}else{const tt=C.textures;for(let lt=0;lt<tt.length;lt++){const et=tt[lt],Dt=r.convert(et.format,et.colorSpace),bt=r.convert(et.type),Tt=v(et.internalFormat,Dt,bt,et.colorSpace),Qt=it(C);W&&vt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,Tt,C.width,C.height):vt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt,Tt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function J(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(C.depthTexture);tt.__renderTarget=C,(!tt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),z(C.depthTexture,0);const lt=tt.__webglTexture,et=it(C);if(C.depthTexture.format===gr)vt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0);else if(C.depthTexture.format===Ar)vt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function ot(I){const C=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const tt=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),tt){const lt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,tt.removeEventListener("dispose",lt)};tt.addEventListener("dispose",lt),C.__depthDisposeCallback=lt}C.__boundDepthTexture=tt}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");J(C.__webglFramebuffer,I)}else if(W){C.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[tt]),C.__webglDepthbuffer[tt]===void 0)C.__webglDepthbuffer[tt]=s.createRenderbuffer(),G(C.__webglDepthbuffer[tt],I,!1);else{const lt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=C.__webglDepthbuffer[tt];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,et)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),G(C.__webglDepthbuffer,I,!1);else{const tt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,lt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(I,C,W){const tt=n.get(I);C!==void 0&&$(tt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&ot(I)}function zt(I){const C=I.texture,W=n.get(I),tt=n.get(C);I.addEventListener("dispose",E);const lt=I.textures,et=I.isWebGLCubeRenderTarget===!0,Dt=lt.length>1;if(Dt||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=C.version,o.memory.textures++),et){W.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(C.mipmaps&&C.mipmaps.length>0){W.__webglFramebuffer[bt]=[];for(let Tt=0;Tt<C.mipmaps.length;Tt++)W.__webglFramebuffer[bt][Tt]=s.createFramebuffer()}else W.__webglFramebuffer[bt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){W.__webglFramebuffer=[];for(let bt=0;bt<C.mipmaps.length;bt++)W.__webglFramebuffer[bt]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Dt)for(let bt=0,Tt=lt.length;bt<Tt;bt++){const Qt=n.get(lt[bt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&vt(I)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let bt=0;bt<lt.length;bt++){const Tt=lt[bt];W.__webglColorRenderbuffer[bt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[bt]);const Qt=r.convert(Tt.format,Tt.colorSpace),pt=r.convert(Tt.type),Rt=v(Tt.internalFormat,Qt,pt,Tt.colorSpace,I.isXRRenderTarget===!0),Bt=it(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,Rt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,W.__webglColorRenderbuffer[bt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),G(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),xt(s.TEXTURE_CUBE_MAP,C);for(let bt=0;bt<6;bt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Tt=0;Tt<C.mipmaps.length;Tt++)$(W.__webglFramebuffer[bt][Tt],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt);else $(W.__webglFramebuffer[bt],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);g(C)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let bt=0,Tt=lt.length;bt<Tt;bt++){const Qt=lt[bt],pt=n.get(Qt);e.bindTexture(s.TEXTURE_2D,pt.__webglTexture),xt(s.TEXTURE_2D,Qt),$(W.__webglFramebuffer,I,Qt,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,0),g(Qt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let bt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(bt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,tt.__webglTexture),xt(bt,C),C.mipmaps&&C.mipmaps.length>0)for(let Tt=0;Tt<C.mipmaps.length;Tt++)$(W.__webglFramebuffer[Tt],I,C,s.COLOR_ATTACHMENT0,bt,Tt);else $(W.__webglFramebuffer,I,C,s.COLOR_ATTACHMENT0,bt,0);g(C)&&m(bt),e.unbindTexture()}I.depthBuffer&&ot(I)}function nt(I){const C=I.textures;for(let W=0,tt=C.length;W<tt;W++){const lt=C[W];if(g(lt)){const et=x(I),Dt=n.get(lt).__webglTexture;e.bindTexture(et,Dt),m(et),e.unbindTexture()}}}const dt=[],L=[];function Lt(I){if(I.samples>0){if(vt(I)===!1){const C=I.textures,W=I.width,tt=I.height;let lt=s.COLOR_BUFFER_BIT;const et=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=n.get(I),bt=C.length>1;if(bt)for(let Tt=0;Tt<C.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Tt=0;Tt<C.length;Tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),bt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[Tt]);const Qt=n.get(C[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qt,0)}s.blitFramebuffer(0,0,W,tt,0,0,W,tt,lt,s.NEAREST),l===!0&&(dt.length=0,L.length=0,dt.push(s.COLOR_ATTACHMENT0+Tt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(dt.push(et),L.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),bt)for(let Tt=0;Tt<C.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[Tt]);const Qt=n.get(C[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,Qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const C=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function it(I){return Math.min(i.maxSamples,I.samples)}function vt(I){const C=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function mt(I){const C=o.render.frame;h.get(I)!==C&&(h.set(I,C),I.update())}function Ut(I,C){const W=I.colorSpace,tt=I.format,lt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Tr&&W!==Hi&&(ie.getTransfer(W)===pe?(tt!==yn||lt!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),C}function Mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=ct,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=$,this.useMultisampledRTT=vt}function cx(s,t){function e(n,i=Hi){let r;const o=ie.getTransfer(i);if(n===Ei)return s.UNSIGNED_BYTE;if(n===Qh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===tu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Rp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Tp)return s.BYTE;if(n===Cp)return s.SHORT;if(n===No)return s.UNSIGNED_SHORT;if(n===Jh)return s.INT;if(n===ss)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===Ho)return s.HALF_FLOAT;if(n===Pp)return s.ALPHA;if(n===Ip)return s.RGB;if(n===yn)return s.RGBA;if(n===Lp)return s.LUMINANCE;if(n===Dp)return s.LUMINANCE_ALPHA;if(n===gr)return s.DEPTH_COMPONENT;if(n===Ar)return s.DEPTH_STENCIL;if(n===eu)return s.RED;if(n===fl)return s.RED_INTEGER;if(n===Up)return s.RG;if(n===nu)return s.RG_INTEGER;if(n===iu)return s.RGBA_INTEGER;if(n===Ma||n===ba||n===Sa||n===wa)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lh||n===ch||n===hh||n===uh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dh||n===fh||n===ph)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dh||n===fh)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ph)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mh||n===gh||n===_h||n===yh||n===xh||n===vh||n===Mh||n===bh||n===Sh||n===wh||n===Eh||n===Ah||n===Th||n===Ch)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_h)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ah)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Th)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ch)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Rh||n===Ph)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ph)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Op||n===Ih||n===Lh||n===Dh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const BT={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const kT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ce,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ye({vertexShader:kT,fragmentShader:GT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HT extends Ti{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=new VT,g=e.getContextAttributes();let m=null,x=null;const v=[],y=[],b=new Q;let w=null;const E=new Ie;E.viewport=new Jt;const T=new Ie;T.viewport=new Jt;const S=[E,T],M=new Zy;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ut=v[j];return ut===void 0&&(ut=new Rd,v[j]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(j){let ut=v[j];return ut===void 0&&(ut=new Rd,v[j]=ut),ut.getGripSpace()},this.getHand=function(j){let ut=v[j];return ut===void 0&&(ut=new Rd,v[j]=ut),ut.getHandSpace()};function U(j){const ut=y.indexOf(j.inputSource);if(ut===-1)return;const $=v[ut];$!==void 0&&($.update(j.inputSource,j.frame,c||o),$.dispatchEvent({type:j.type,data:j.inputSource}))}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",z);for(let j=0;j<v.length;j++){const ut=y[j];ut!==null&&(y[j]=null,v[j].disconnect(ut))}P=null,O=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,x=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(b),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let $=null,G=null,J=null;g.depth&&(J=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=g.stencil?Ar:gr,G=g.stencil?Er:ss);const ot={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(ot),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ai(d.textureWidth,d.textureHeight,{format:yn,type:Ei,depthTexture:new Wp(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const $={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ai(f.framebufferWidth,f.framebufferHeight,{format:yn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(j){for(let ut=0;ut<j.removed.length;ut++){const $=j.removed[ut],G=y.indexOf($);G>=0&&(y[G]=null,v[G].disconnect($))}for(let ut=0;ut<j.added.length;ut++){const $=j.added[ut];let G=y.indexOf($);if(G===-1){for(let ot=0;ot<v.length;ot++)if(ot>=y.length){y.push($),G=ot;break}else if(y[ot]===null){y[ot]=$,G=ot;break}if(G===-1)break}const J=v[G];J&&J.connect($)}}const F=new A,X=new A;function H(j,ut,$){F.setFromMatrixPosition(ut.matrixWorld),X.setFromMatrixPosition($.matrixWorld);const G=F.distanceTo(X),J=ut.projectionMatrix.elements,ot=$.projectionMatrix.elements,ct=J[14]/(J[10]-1),zt=J[14]/(J[10]+1),nt=(J[9]+1)/J[5],dt=(J[9]-1)/J[5],L=(J[8]-1)/J[0],Lt=(ot[8]+1)/ot[0],it=ct*L,vt=ct*Lt,mt=G/(-L+Lt),Ut=mt*-L;if(ut.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ut),j.translateZ(mt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),J[10]===-1)j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Mt=ct+mt,I=zt+mt,C=it-Ut,W=vt+(G-Ut),tt=nt*zt/I*Mt,lt=dt*zt/I*Mt;j.projectionMatrix.makePerspective(C,W,tt,lt,Mt,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function V(j,ut){ut===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ut.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ut=j.near,$=j.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&($=_.depthFar)),M.near=T.near=E.near=ut,M.far=T.far=E.far=$,(P!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,O=M.far),E.layers.mask=j.layers.mask|2,T.layers.mask=j.layers.mask|4,M.layers.mask=E.layers.mask|T.layers.mask;const G=j.parent,J=M.cameras;V(M,G);for(let ot=0;ot<J.length;ot++)V(J[ot],G);J.length===2?H(M,E,T):M.projectionMatrix.copy(E.projectionMatrix),K(j,M,G)};function K(j,ut,$){$===null?j.matrix.copy(ut.matrixWorld):(j.matrix.copy($.matrixWorld),j.matrix.invert(),j.matrix.multiply(ut.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let rt=null;function xt(j,ut){if(h=ut.getViewerPose(c||o),p=ut,h!==null){const $=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let G=!1;$.length!==M.cameras.length&&(M.cameras.length=0,G=!0);for(let ot=0;ot<$.length;ot++){const ct=$[ot];let zt=null;if(f!==null)zt=f.getViewport(ct);else{const dt=u.getViewSubImage(d,ct);zt=dt.viewport,ot===0&&(t.setRenderTargetTextures(x,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(x))}let nt=S[ot];nt===void 0&&(nt=new Ie,nt.layers.enable(ot),nt.viewport=new Jt,S[ot]=nt),nt.matrix.fromArray(ct.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ct.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(zt.x,zt.y,zt.width,zt.height),ot===0&&(M.matrix.copy(nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),G===!0&&M.cameras.push(nt)}const J=i.enabledFeatures;if(J&&J.includes("depth-sensing")){const ot=u.getDepthInformation($[0]);ot&&ot.isValid&&ot.texture&&_.init(t,ot,i.renderState)}}for(let $=0;$<v.length;$++){const G=y[$],J=v[$];G!==null&&J!==void 0&&J.update(G,ut,c||o)}rt&&rt(j,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),p=null}const Gt=new sx;Gt.setAnimationLoop(xt),this.setAnimationLoop=function(j){rt=j},this.dispose=function(){}}}const Xs=new Nn,WT=new kt;function XT(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,dy(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===vn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===vn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=t.get(m),v=x.envMap,y=x.envMapRotation;v&&(g.envMap.value=v,Xs.copy(y),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),g.envMapRotation.value.setFromMatrix4(WT.makeRotationFromEuler(Xs)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $T(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(p(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",g));const b=v.program;n.updateUBOMapping(x,b);const w=t.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function h(x){const v=u();x.__bindingPointIndex=v;const y=s.createBuffer(),b=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],y=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,E=y.length;w<E;w++){const T=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,M=T.length;S<M;S++){const P=T[S];if(f(P,w,S,b)===!0){const O=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let D=0;for(let z=0;z<U.length;z++){const F=U[z],X=_(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,O+D,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,y,b){const w=x.value,E=v+"_"+y;if(b[E]===void 0)return typeof w=="number"||typeof w=="boolean"?b[E]=w:b[E]=w.clone(),!0;{const T=b[E];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return b[E]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function p(x){const v=x.uniforms;let y=0;const b=16;for(let E=0,T=v.length;E<T;E++){const S=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,P=S.length;M<P;M++){const O=S[M],U=Array.isArray(O.value)?O.value:[O.value];for(let D=0,z=U.length;D<z;D++){const F=U[D],X=_(F),H=y%b,V=H%X.boundary,K=H+V;y+=V,K!==0&&b-K<X.storage&&(y+=b-K),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=X.storage}}}const w=y%b;return w>0&&(y+=b-w),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class hx{constructor(t={}){const{canvas:e=ly(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=Ji,this.toneMappingExposure=1;const y=this;let b=!1,w=0,E=0,T=null,S=-1,M=null;const P=new Jt,O=new Jt;let U=null;const D=new at(0);let z=0,F=e.width,X=e.height,H=1,V=null,K=null;const rt=new Jt(0,0,F,X),xt=new Jt(0,0,F,X);let Gt=!1;const j=new gl;let ut=!1,$=!1;this.transmissionResolutionScale=1;const G=new kt,J=new kt,ot=new A,ct=new Jt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function dt(){return T===null?H:1}let L=n;function Lt(R,B){return e.getContext(R,B)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kh}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Et,!1),L===null){const B="webgl2";if(L=Lt(B,R),L===null)throw Lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let it,vt,mt,Ut,Mt,I,C,W,tt,lt,et,Dt,bt,Tt,Qt,pt,Rt,Bt,Vt,Pt,ne,jt,_e,N;function St(){it=new iA(L),it.init(),jt=new cx(L,it),vt=new jE(L,it,t,jt),mt=new NT(L,it),vt.reverseDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),Ut=new oA(L),Mt=new wT,I=new zT(L,it,mt,Mt,vt,jt,Ut),C=new QE(y),W=new nA(y),tt=new fS(L),_e=new ZE(L,tt),lt=new sA(L,tt,Ut,_e),et=new lA(L,lt,tt,Ut),Vt=new aA(L,vt,I),pt=new JE(Mt),Dt=new ST(y,C,W,it,vt,_e,pt),bt=new XT(y,Mt),Tt=new AT,Qt=new LT(it),Bt=new YE(y,C,W,mt,et,f,l),Rt=new OT(y,et,vt),N=new $T(L,Ut,vt,mt),Pt=new KE(L,it,Ut),ne=new rA(L,it,Ut),Ut.programs=Dt.programs,y.capabilities=vt,y.extensions=it,y.properties=Mt,y.renderLists=Tt,y.shadowMap=Rt,y.state=mt,y.info=Ut}St();const Z=new HT(y,L);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=it.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=it.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(F,X,!1))},this.getSize=function(R){return R.set(F,X)},this.setSize=function(R,B,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,X=B,e.width=Math.floor(R*H),e.height=Math.floor(B*H),q===!0&&(e.style.width=R+"px",e.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(F*H,X*H).floor()},this.setDrawingBufferSize=function(R,B,q){F=R,X=B,H=q,e.width=Math.floor(R*q),e.height=Math.floor(B*q),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(rt)},this.setViewport=function(R,B,q,Y){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,B,q,Y),mt.viewport(P.copy(rt).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,B,q,Y){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,B,q,Y),mt.scissor(O.copy(xt).multiplyScalar(H).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(R){mt.setScissorTest(Gt=R)},this.setOpaqueSort=function(R){V=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(R=!0,B=!0,q=!0){let Y=0;if(R){let k=!1;if(T!==null){const ft=T.texture.format;k=ft===iu||ft===nu||ft===fl}if(k){const ft=T.texture.type,wt=ft===Ei||ft===ss||ft===No||ft===Er||ft===Qh||ft===tu,Ct=Bt.getClearColor(),It=Bt.getClearAlpha(),Ht=Ct.r,Wt=Ct.g,Ot=Ct.b;wt?(p[0]=Ht,p[1]=Wt,p[2]=Ot,p[3]=It,L.clearBufferuiv(L.COLOR,0,p)):(_[0]=Ht,_[1]=Wt,_[2]=Ot,_[3]=It,L.clearBufferiv(L.COLOR,0,_))}else Y|=L.COLOR_BUFFER_BIT}B&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Bt.dispose(),Tt.dispose(),Qt.dispose(),Mt.dispose(),C.dispose(),W.dispose(),et.dispose(),_e.dispose(),N.dispose(),Dt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Om),Z.removeEventListener("sessionend",Fm),Is.stop()};function st(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Ut.autoReset,B=Rt.enabled,q=Rt.autoUpdate,Y=Rt.needsUpdate,k=Rt.type;St(),Ut.autoReset=R,Rt.enabled=B,Rt.autoUpdate=q,Rt.needsUpdate=Y,Rt.type=k}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Zt(R){const B=R.target;B.removeEventListener("dispose",Zt),Se(B)}function Se(R){Ke(R),Mt.remove(R)}function Ke(R){const B=Mt.get(R).programs;B!==void 0&&(B.forEach(function(q){Dt.releaseProgram(q)}),R.isShaderMaterial&&Dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,q,Y,k,ft){B===null&&(B=zt);const wt=k.isMesh&&k.matrixWorld.determinant()<0,Ct=Rv(R,B,q,Y,k);mt.setMaterial(Y,wt);let It=q.index,Ht=1;if(Y.wireframe===!0){if(It=lt.getWireframeAttribute(q),It===void 0)return;Ht=2}const Wt=q.drawRange,Ot=q.attributes.position;let ae=Wt.start*Ht,ue=(Wt.start+Wt.count)*Ht;ft!==null&&(ae=Math.max(ae,ft.start*Ht),ue=Math.min(ue,(ft.start+ft.count)*Ht)),It!==null?(ae=Math.max(ae,0),ue=Math.min(ue,It.count)):Ot!=null&&(ae=Math.max(ae,0),ue=Math.min(ue,Ot.count));const Le=ue-ae;if(Le<0||Le===1/0)return;_e.setup(k,Y,Ct,q,It);let we,he=Pt;if(It!==null&&(we=tt.get(It),he=ne,he.setIndex(we)),k.isMesh)Y.wireframe===!0?(mt.setLineWidth(Y.wireframeLinewidth*dt()),he.setMode(L.LINES)):he.setMode(L.TRIANGLES);else if(k.isLine){let Ft=Y.linewidth;Ft===void 0&&(Ft=1),mt.setLineWidth(Ft*dt()),k.isLineSegments?he.setMode(L.LINES):k.isLineLoop?he.setMode(L.LINE_LOOP):he.setMode(L.LINE_STRIP)}else k.isPoints?he.setMode(L.POINTS):k.isSprite&&he.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)he.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))he.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ft=k._multiDrawStarts,Xe=k._multiDrawCounts,de=k._multiDrawCount,Xn=It?tt.get(It).bytesPerElement:1,kr=Mt.get(Y).currentProgram.getUniforms();for(let Pn=0;Pn<de;Pn++)kr.setValue(L,"_gl_DrawID",Pn),he.render(Ft[Pn]/Xn,Xe[Pn])}else if(k.isInstancedMesh)he.renderInstances(ae,Le,k.count);else if(q.isInstancedBufferGeometry){const Ft=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Xe=Math.min(q.instanceCount,Ft);he.renderInstances(ae,Le,Xe)}else he.render(ae,Le)};function fe(R,B,q){R.transparent===!0&&R.side===Fe&&R.forceSinglePass===!1?(R.side=vn,R.needsUpdate=!0,Cl(R,B,q),R.side=ns,R.needsUpdate=!0,Cl(R,B,q),R.side=Fe):Cl(R,B,q)}this.compile=function(R,B,q=null){q===null&&(q=R),m=Qt.get(q),m.init(B),v.push(m),q.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),R!==q&&R.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const Y=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ft=k.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const Ct=ft[wt];fe(Ct,q,k),Y.add(Ct)}else fe(ft,q,k),Y.add(ft)}),v.pop(),m=null,Y},this.compileAsync=function(R,B,q=null){const Y=this.compile(R,B,q);return new Promise(k=>{function ft(){if(Y.forEach(function(wt){Mt.get(wt).currentProgram.isReady()&&Y.delete(wt)}),Y.size===0){k(R);return}setTimeout(ft,10)}it.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Wn=null;function Ci(R){Wn&&Wn(R)}function Om(){Is.stop()}function Fm(){Is.start()}const Is=new sx;Is.setAnimationLoop(Ci),typeof self<"u"&&Is.setContext(self),this.setAnimationLoop=function(R){Wn=R,Z.setAnimationLoop(R),R===null?Is.stop():Is.start()},Z.addEventListener("sessionstart",Om),Z.addEventListener("sessionend",Fm),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,B,T),m=Qt.get(R,v.length),m.init(B),v.push(m),J.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(J),$=this.localClippingEnabled,ut=pt.init(this.clippingPlanes,$),g=Tt.get(R,x.length),g.init(),x.push(g),Z.enabled===!0&&Z.isPresenting===!0){const ft=y.xr.getDepthSensingMesh();ft!==null&&ku(ft,B,-1/0,y.sortObjects)}ku(R,B,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(V,K),nt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,nt&&Bt.addToRenderList(g,R),this.info.render.frame++,ut===!0&&pt.beginShadows();const q=m.state.shadowsArray;Rt.render(q,R,B),ut===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,k=g.transmissive;if(m.setupLights(),B.isArrayCamera){const ft=B.cameras;if(k.length>0)for(let wt=0,Ct=ft.length;wt<Ct;wt++){const It=ft[wt];zm(Y,k,R,It)}nt&&Bt.render(R);for(let wt=0,Ct=ft.length;wt<Ct;wt++){const It=ft[wt];Nm(g,R,It,It.viewport)}}else k.length>0&&zm(Y,k,R,B),nt&&Bt.render(R),Nm(g,R,B);T!==null&&E===0&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(y,R,B),_e.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],ut===!0&&pt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function ku(R,B,q,Y){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){Y&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(J);const wt=et.update(R),Ct=R.material;Ct.visible&&g.push(R,wt,Ct,q,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||j.intersectsObject(R))){const wt=et.update(R),Ct=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ct.copy(wt.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(J)),Array.isArray(Ct)){const It=wt.groups;for(let Ht=0,Wt=It.length;Ht<Wt;Ht++){const Ot=It[Ht],ae=Ct[Ot.materialIndex];ae&&ae.visible&&g.push(R,wt,ae,q,ct.z,Ot)}}else Ct.visible&&g.push(R,wt,Ct,q,ct.z,null)}}const ft=R.children;for(let wt=0,Ct=ft.length;wt<Ct;wt++)ku(ft[wt],B,q,Y)}function Nm(R,B,q,Y){const k=R.opaque,ft=R.transmissive,wt=R.transparent;m.setupLightsView(q),ut===!0&&pt.setGlobalState(y.clippingPlanes,q),Y&&mt.viewport(P.copy(Y)),k.length>0&&Tl(k,B,q),ft.length>0&&Tl(ft,B,q),wt.length>0&&Tl(wt,B,q),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function zm(R,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Ai(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ho:Ei,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ft=m.state.transmissionRenderTarget[Y.id],wt=Y.viewport||P;ft.setSize(wt.z*y.transmissionResolutionScale,wt.w*y.transmissionResolutionScale);const Ct=y.getRenderTarget();y.setRenderTarget(ft),y.getClearColor(D),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),nt&&Bt.render(q);const It=y.toneMapping;y.toneMapping=Ji;const Ht=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),ut===!0&&pt.setGlobalState(y.clippingPlanes,Y),Tl(R,q,Y),I.updateMultisampleRenderTarget(ft),I.updateRenderTargetMipmap(ft),it.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ot=0,ae=B.length;Ot<ae;Ot++){const ue=B[Ot],Le=ue.object,we=ue.geometry,he=ue.material,Ft=ue.group;if(he.side===Fe&&Le.layers.test(Y.layers)){const Xe=he.side;he.side=vn,he.needsUpdate=!0,Bm(Le,q,Y,we,he,Ft),he.side=Xe,he.needsUpdate=!0,Wt=!0}}Wt===!0&&(I.updateMultisampleRenderTarget(ft),I.updateRenderTargetMipmap(ft))}y.setRenderTarget(Ct),y.setClearColor(D,z),Ht!==void 0&&(Y.viewport=Ht),y.toneMapping=It}function Tl(R,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ft=R.length;k<ft;k++){const wt=R[k],Ct=wt.object,It=wt.geometry,Ht=Y===null?wt.material:Y,Wt=wt.group;Ct.layers.test(q.layers)&&Bm(Ct,B,q,It,Ht,Wt)}}function Bm(R,B,q,Y,k,ft){R.onBeforeRender(y,B,q,Y,k,ft),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(y,B,q,Y,R,ft),k.transparent===!0&&k.side===Fe&&k.forceSinglePass===!1?(k.side=vn,k.needsUpdate=!0,y.renderBufferDirect(q,B,Y,k,R,ft),k.side=ns,k.needsUpdate=!0,y.renderBufferDirect(q,B,Y,k,R,ft),k.side=Fe):y.renderBufferDirect(q,B,Y,k,R,ft),R.onAfterRender(y,B,q,Y,k,ft)}function Cl(R,B,q){B.isScene!==!0&&(B=zt);const Y=Mt.get(R),k=m.state.lights,ft=m.state.shadowsArray,wt=k.state.version,Ct=Dt.getParameters(R,k.state,ft,B,q),It=Dt.getProgramCacheKey(Ct);let Ht=Y.programs;Y.environment=R.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(R.isMeshStandardMaterial?W:C).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Ht===void 0&&(R.addEventListener("dispose",Zt),Ht=new Map,Y.programs=Ht);let Wt=Ht.get(It);if(Wt!==void 0){if(Y.currentProgram===Wt&&Y.lightsStateVersion===wt)return Gm(R,Ct),Wt}else Ct.uniforms=Dt.getUniforms(R),R.onBeforeCompile(Ct,y),Wt=Dt.acquireProgram(Ct,It),Ht.set(It,Wt),Y.uniforms=Ct.uniforms;const Ot=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ot.clippingPlanes=pt.uniform),Gm(R,Ct),Y.needsLights=Iv(R),Y.lightsStateVersion=wt,Y.needsLights&&(Ot.ambientLightColor.value=k.state.ambient,Ot.lightProbe.value=k.state.probe,Ot.directionalLights.value=k.state.directional,Ot.directionalLightShadows.value=k.state.directionalShadow,Ot.spotLights.value=k.state.spot,Ot.spotLightShadows.value=k.state.spotShadow,Ot.rectAreaLights.value=k.state.rectArea,Ot.ltc_1.value=k.state.rectAreaLTC1,Ot.ltc_2.value=k.state.rectAreaLTC2,Ot.pointLights.value=k.state.point,Ot.pointLightShadows.value=k.state.pointShadow,Ot.hemisphereLights.value=k.state.hemi,Ot.directionalShadowMap.value=k.state.directionalShadowMap,Ot.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ot.spotShadowMap.value=k.state.spotShadowMap,Ot.spotLightMatrix.value=k.state.spotLightMatrix,Ot.spotLightMap.value=k.state.spotLightMap,Ot.pointShadowMap.value=k.state.pointShadowMap,Ot.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Wt,Y.uniformsList=null,Wt}function km(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=Gc.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Gm(R,B){const q=Mt.get(R);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Rv(R,B,q,Y,k){B.isScene!==!0&&(B=zt),I.resetTextureUnits();const ft=B.fog,wt=Y.isMeshStandardMaterial?B.environment:null,Ct=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Tr,It=(Y.isMeshStandardMaterial?W:C).get(Y.envMap||wt),Ht=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Wt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ot=!!q.morphAttributes.position,ae=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color;let Le=Ji;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Le=y.toneMapping);const we=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=we!==void 0?we.length:0,Ft=Mt.get(Y),Xe=m.state.lights;if(ut===!0&&($===!0||R!==M)){const ln=R===M&&Y.id===S;pt.setState(Y,R,ln)}let de=!1;Y.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Xe.state.version||Ft.outputColorSpace!==Ct||k.isBatchedMesh&&Ft.batching===!1||!k.isBatchedMesh&&Ft.batching===!0||k.isBatchedMesh&&Ft.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ft.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ft.instancing===!1||!k.isInstancedMesh&&Ft.instancing===!0||k.isSkinnedMesh&&Ft.skinning===!1||!k.isSkinnedMesh&&Ft.skinning===!0||k.isInstancedMesh&&Ft.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ft.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ft.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ft.instancingMorph===!1&&k.morphTexture!==null||Ft.envMap!==It||Y.fog===!0&&Ft.fog!==ft||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==pt.numPlanes||Ft.numIntersection!==pt.numIntersection)||Ft.vertexAlphas!==Ht||Ft.vertexTangents!==Wt||Ft.morphTargets!==Ot||Ft.morphNormals!==ae||Ft.morphColors!==ue||Ft.toneMapping!==Le||Ft.morphTargetsCount!==he)&&(de=!0):(de=!0,Ft.__version=Y.version);let Xn=Ft.currentProgram;de===!0&&(Xn=Cl(Y,B,k));let kr=!1,Pn=!1,Xo=!1;const ve=Xn.getUniforms(),zn=Ft.uniforms;if(mt.useProgram(Xn.program)&&(kr=!0,Pn=!0,Xo=!0),Y.id!==S&&(S=Y.id,Pn=!0),kr||M!==R){mt.buffers.depth.getReversed()?(G.copy(R.projectionMatrix),HM(G),WM(G),ve.setValue(L,"projectionMatrix",G)):ve.setValue(L,"projectionMatrix",R.projectionMatrix),ve.setValue(L,"viewMatrix",R.matrixWorldInverse);const bn=ve.map.cameraPosition;bn!==void 0&&bn.setValue(L,ot.setFromMatrixPosition(R.matrixWorld)),vt.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ve.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Pn=!0,Xo=!0)}if(k.isSkinnedMesh){ve.setOptional(L,k,"bindMatrix"),ve.setOptional(L,k,"bindMatrixInverse");const ln=k.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ve.setValue(L,"boneTexture",ln.boneTexture,I))}k.isBatchedMesh&&(ve.setOptional(L,k,"batchingTexture"),ve.setValue(L,"batchingTexture",k._matricesTexture,I),ve.setOptional(L,k,"batchingIdTexture"),ve.setValue(L,"batchingIdTexture",k._indirectTexture,I),ve.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",k._colorsTexture,I));const Bn=q.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Vt.update(k,q,Xn),(Pn||Ft.receiveShadow!==k.receiveShadow)&&(Ft.receiveShadow=k.receiveShadow,ve.setValue(L,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zn.envMap.value=It,zn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(zn.envMapIntensity.value=B.environmentIntensity),Pn&&(ve.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ft.needsLights&&Pv(zn,Xo),ft&&Y.fog===!0&&bt.refreshFogUniforms(zn,ft),bt.refreshMaterialUniforms(zn,Y,H,X,m.state.transmissionRenderTarget[R.id]),Gc.upload(L,km(Ft),zn,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Gc.upload(L,km(Ft),zn,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ve.setValue(L,"center",k.center),ve.setValue(L,"modelViewMatrix",k.modelViewMatrix),ve.setValue(L,"normalMatrix",k.normalMatrix),ve.setValue(L,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ln=Y.uniformsGroups;for(let bn=0,Gu=ln.length;bn<Gu;bn++){const Ls=ln[bn];N.update(Ls,Xn),N.bind(Ls,Xn)}}return Xn}function Pv(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function Iv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,B,q){Mt.get(R.texture).__webglTexture=B,Mt.get(R.depthTexture).__webglTexture=q;const Y=Mt.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){const q=Mt.get(R);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const Lv=L.createFramebuffer();this.setRenderTarget=function(R,B=0,q=0){T=R,w=B,E=q;let Y=!0,k=null,ft=!1,wt=!1;if(R){const It=Mt.get(R);if(It.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(It.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(It.__hasExternalTextures)I.rebindTextures(R,Mt.get(R.texture).__webglTexture,Mt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ot=R.depthTexture;if(It.__boundDepthTexture!==Ot){if(Ot!==null&&Mt.has(Ot)&&(R.width!==Ot.image.width||R.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(wt=!0);const Wt=Mt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?k=Wt[B][q]:k=Wt[B],ft=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?k=Mt.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?k=Wt[q]:k=Wt,P.copy(R.viewport),O.copy(R.scissor),U=R.scissorTest}else P.copy(rt).multiplyScalar(H).floor(),O.copy(xt).multiplyScalar(H).floor(),U=Gt;if(q!==0&&(k=Lv),mt.bindFramebuffer(L.FRAMEBUFFER,k)&&Y&&mt.drawBuffers(R,k),mt.viewport(P),mt.scissor(O),mt.setScissorTest(U),ft){const It=Mt.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,It.__webglTexture,q)}else if(wt){const It=Mt.get(R.texture),Ht=B;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,q,Ht)}else if(R!==null&&q!==0){const It=Mt.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(R,B,q,Y,k,ft,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Mt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){mt.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const It=R.texture,Ht=It.format,Wt=It.type;if(!vt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-Y&&q>=0&&q<=R.height-k&&L.readPixels(B,q,Y,k,jt.convert(Ht),jt.convert(Wt),ft)}finally{const It=T!==null?Mt.get(T).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(R,B,q,Y,k,ft,wt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Mt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){const It=R.texture,Ht=It.format,Wt=It.type;if(!vt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=R.width-Y&&q>=0&&q<=R.height-k){mt.bindFramebuffer(L.FRAMEBUFFER,Ct);const Ot=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),L.readPixels(B,q,Y,k,jt.convert(Ht),jt.convert(Wt),0);const ae=T!==null?Mt.get(T).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,ae);const ue=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await VM(L,ue,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.deleteBuffer(Ot),L.deleteSync(ue),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,B=null,q=0){R.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,R=arguments[1]);const Y=Math.pow(2,-q),k=Math.floor(R.image.width*Y),ft=Math.floor(R.image.height*Y),wt=B!==null?B.x:0,Ct=B!==null?B.y:0;I.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,wt,Ct,k,ft),mt.unbindTexture()};const Dv=L.createFramebuffer(),Uv=L.createFramebuffer();this.copyTextureToTexture=function(R,B,q=null,Y=null,k=0,ft=null){R.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],B=arguments[2],ft=arguments[3]||0,q=null),ft===null&&(k!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=k,k=0):ft=0);let wt,Ct,It,Ht,Wt,Ot,ae,ue,Le;const we=R.isCompressedTexture?R.mipmaps[ft]:R.image;if(q!==null)wt=q.max.x-q.min.x,Ct=q.max.y-q.min.y,It=q.isBox3?q.max.z-q.min.z:1,Ht=q.min.x,Wt=q.min.y,Ot=q.isBox3?q.min.z:0;else{const Bn=Math.pow(2,-k);wt=Math.floor(we.width*Bn),Ct=Math.floor(we.height*Bn),R.isDataArrayTexture?It=we.depth:R.isData3DTexture?It=Math.floor(we.depth*Bn):It=1,Ht=0,Wt=0,Ot=0}Y!==null?(ae=Y.x,ue=Y.y,Le=Y.z):(ae=0,ue=0,Le=0);const he=jt.convert(B.format),Ft=jt.convert(B.type);let Xe;B.isData3DTexture?(I.setTexture3D(B,0),Xe=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(I.setTexture2DArray(B,0),Xe=L.TEXTURE_2D_ARRAY):(I.setTexture2D(B,0),Xe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const de=L.getParameter(L.UNPACK_ROW_LENGTH),Xn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),kr=L.getParameter(L.UNPACK_SKIP_PIXELS),Pn=L.getParameter(L.UNPACK_SKIP_ROWS),Xo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,we.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,we.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ot);const ve=R.isDataArrayTexture||R.isData3DTexture,zn=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){const Bn=Mt.get(R),ln=Mt.get(B),bn=Mt.get(Bn.__renderTarget),Gu=Mt.get(ln.__renderTarget);mt.bindFramebuffer(L.READ_FRAMEBUFFER,bn.__webglFramebuffer),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Gu.__webglFramebuffer);for(let Ls=0;Ls<It;Ls++)ve&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(R).__webglTexture,k,Ot+Ls),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(B).__webglTexture,ft,Le+Ls)),L.blitFramebuffer(Ht,Wt,wt,Ct,ae,ue,wt,Ct,L.DEPTH_BUFFER_BIT,L.NEAREST);mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||R.isRenderTargetTexture||Mt.has(R)){const Bn=Mt.get(R),ln=Mt.get(B);mt.bindFramebuffer(L.READ_FRAMEBUFFER,Dv),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Uv);for(let bn=0;bn<It;bn++)ve?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bn.__webglTexture,k,Ot+bn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Bn.__webglTexture,k),zn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,ft,Le+bn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,ft),k!==0?L.blitFramebuffer(Ht,Wt,wt,Ct,ae,ue,wt,Ct,L.COLOR_BUFFER_BIT,L.NEAREST):zn?L.copyTexSubImage3D(Xe,ft,ae,ue,Le+bn,Ht,Wt,wt,Ct):L.copyTexSubImage2D(Xe,ft,ae,ue,Ht,Wt,wt,Ct);mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else zn?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Xe,ft,ae,ue,Le,wt,Ct,It,he,Ft,we.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Xe,ft,ae,ue,Le,wt,Ct,It,he,we.data):L.texSubImage3D(Xe,ft,ae,ue,Le,wt,Ct,It,he,Ft,we):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ft,ae,ue,wt,Ct,he,Ft,we.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ft,ae,ue,we.width,we.height,he,we.data):L.texSubImage2D(L.TEXTURE_2D,ft,ae,ue,wt,Ct,he,Ft,we);L.pixelStorei(L.UNPACK_ROW_LENGTH,de),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xo),ft===0&&B.generateMipmaps&&L.generateMipmap(Xe),mt.unbindTexture()},this.copyTextureToTexture3D=function(R,B,q=null,Y=null,k=0){return R.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],B=arguments[3],k=arguments[4]||0),po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,B,q,Y,k)},this.initRenderTarget=function(R){Mt.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),mt.unbindTexture()},this.resetState=function(){w=0,E=0,T=null,mt.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const qT=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:H_,AddEquation:_s,AddOperation:B_,AdditiveAnimationBlendMode:Fp,AdditiveBlending:Es,AgXToneMapping:X_,AlphaFormat:Pp,AlwaysCompare:oy,AlwaysDepth:nh,AlwaysStencilFunc:pf,AmbientLight:cm,AnimationAction:Qy,AnimationClip:ll,AnimationLoader:ub,AnimationMixer:Bb,AnimationObjectGroup:Nb,AnimationUtils:ab,ArcCurve:vy,ArrayCamera:Zy,ArrowHelper:rS,AttachedBindMode:ff,Audio:jy,AudioAnalyser:Tb,AudioContext:um,AudioListener:wb,AudioLoader:Mb,AxesHelper:oS,BackSide:vn,BasicDepthPacking:j_,BasicShadowMap:Xv,BatchedMesh:yy,Bone:Vp,BooleanKeyframeTrack:zr,Box2:$b,Box3:Re,Box3Helper:iS,BoxGeometry:Dr,BoxHelper:nS,BufferAttribute:gt,BufferGeometry:_t,BufferGeometryLoader:Yy,ByteType:Tp,Cache:qi,Camera:hu,CameraHelper:eS,CanvasTexture:Ur,CapsuleGeometry:_u,CatmullRomCurve3:My,CineonToneMapping:V_,CircleGeometry:ti,ClampToEdgeWrapping:Vn,Clock:Ky,Color:at,ColorKeyframeTrack:rm,ColorManagement:ie,CompressedArrayTexture:P1,CompressedCubeTexture:I1,CompressedTexture:mu,CompressedTextureLoader:db,ConeGeometry:yu,ConstantAlphaFactor:F_,ConstantColorFactor:U_,Controls:ix,CubeCamera:fy,CubeReflectionMapping:is,CubeRefractionMapping:As,CubeTexture:ml,CubeTextureLoader:fb,CubeUVReflectionMapping:Vo,CubicBezierCurve:$p,CubicBezierCurve3:by,CubicInterpolant:Ny,CullFaceBack:hf,CullFaceFront:y_,CullFaceFrontBack:Wv,CullFaceNone:__,Curve:ni,CurvePath:wy,CustomBlending:v_,CustomToneMapping:W_,CylinderGeometry:Or,Cylindrical:Xb,Data3DTexture:au,DataArrayTexture:pl,DataTexture:xi,DataTextureLoader:pb,DataUtils:r1,DecrementStencilOp:rM,DecrementWrapStencilOp:aM,DefaultLoadingManager:ky,DepthFormat:gr,DepthStencilFormat:Ar,DepthTexture:Wp,DetachedBindMode:q_,DirectionalLight:lm,DirectionalLightHelper:tS,DiscreteInterpolant:zy,DodecahedronGeometry:xu,DoubleSide:Fe,DstAlphaFactor:R_,DstColorFactor:I_,DynamicCopyUsage:bM,DynamicDrawUsage:gM,DynamicReadUsage:xM,EdgesGeometry:Fr,EllipseCurve:gu,EqualCompare:ny,EqualDepth:sh,EqualStencilFunc:uM,EquirectangularReflectionMapping:Xa,EquirectangularRefractionMapping:$a,Euler:Nn,EventDispatcher:Ti,ExtrudeGeometry:Mu,FileLoader:rs,Float16BufferAttribute:u1,Float32BufferAttribute:ht,FloatType:Cn,Fog:du,FogExp2:uu,FramebufferTexture:R1,FrontSide:ns,Frustum:gl,GLBufferAttribute:Wb,GLSL1:wM,GLSL3:mf,GreaterCompare:iy,GreaterDepth:oh,GreaterEqualCompare:ry,GreaterEqualDepth:rh,GreaterEqualStencilFunc:mM,GreaterStencilFunc:fM,GridHelper:Jb,Group:ce,HalfFloatType:Ho,HemisphereLight:Vy,HemisphereLightHelper:jb,IcosahedronGeometry:bu,ImageBitmapLoader:vb,ImageLoader:cl,ImageUtils:cy,IncrementStencilOp:sM,IncrementWrapStencilOp:oM,InstancedBufferAttribute:ko,InstancedBufferGeometry:hm,InstancedInterleavedBuffer:zh,InstancedMesh:Hp,Int16BufferAttribute:c1,Int32BufferAttribute:h1,Int8BufferAttribute:o1,IntType:Jh,InterleavedBuffer:fu,InterleavedBufferAttribute:On,Interpolant:xl,InterpolateDiscrete:Za,InterpolateLinear:Uh,InterpolateSmooth:kc,InvertStencilOp:lM,KeepStencilOp:js,KeyframeTrack:ii,LOD:gy,LatheGeometry:_l,Layers:lu,LessCompare:ey,LessDepth:ih,LessEqualCompare:Np,LessEqualDepth:wr,LessEqualStencilFunc:dM,LessStencilFunc:hM,Light:Ps,LightProbe:qy,Line:Mn,Line3:ex,LineBasicMaterial:Yt,LineCurve:qp,LineCurve3:Sy,LineDashedMaterial:nm,LineLoop:xy,LineSegments:te,LinearFilter:be,LinearInterpolant:sm,LinearMipMapLinearFilter:Zv,LinearMipMapNearestFilter:Yv,LinearMipmapLinearFilter:_i,LinearMipmapNearestFilter:va,LinearSRGBColorSpace:Tr,LinearToneMapping:k_,LinearTransfer:ja,Loader:Rn,LoaderUtils:vf,LoadingManager:om,LoopOnce:Y_,LoopPingPong:K_,LoopRepeat:Z_,LuminanceAlphaFormat:Dp,LuminanceFormat:Lp,MOUSE:pr,Material:an,MaterialLoader:Tu,MathUtils:ru,Matrix2:mm,Matrix3:$t,Matrix4:kt,MaxEquation:w_,Mesh:Nt,MeshBasicMaterial:re,MeshDepthMaterial:tm,MeshDistanceMaterial:em,MeshLambertMaterial:Qp,MeshMatcapMaterial:Uy,MeshNormalMaterial:Dy,MeshPhongMaterial:Iy,MeshPhysicalMaterial:Py,MeshStandardMaterial:Jp,MeshToonMaterial:Ly,MinEquation:S_,MirroredRepeatWrapping:Ya,MixOperation:z_,MultiplyBlending:df,MultiplyOperation:dl,NearestFilter:Ze,NearestMipMapLinearFilter:qv,NearestMipMapNearestFilter:$v,NearestMipmapLinearFilter:xo,NearestMipmapNearestFilter:Ap,NeutralToneMapping:$_,NeverCompare:ty,NeverDepth:eh,NeverStencilFunc:cM,NoBlending:ji,NoColorSpace:Hi,NoToneMapping:Ji,NormalAnimationBlendMode:su,NormalBlending:mr,NotEqualCompare:sy,NotEqualDepth:ah,NotEqualStencilFunc:pM,NumberKeyframeTrack:ol,Object3D:oe,ObjectLoader:yb,ObjectSpaceNormalMap:Q_,OctahedronGeometry:yl,OneFactor:A_,OneMinusConstantAlphaFactor:N_,OneMinusConstantColorFactor:O_,OneMinusDstAlphaFactor:P_,OneMinusDstColorFactor:L_,OneMinusSrcAlphaFactor:th,OneMinusSrcColorFactor:C_,OrthographicCamera:Ml,PCFShadowMap:Ep,PCFSoftShadowMap:x_,PMREMGenerator:wf,Path:nl,PerspectiveCamera:Ie,Plane:ki,PlaneGeometry:ei,PlaneHelper:sS,PointLight:Wy,PointLightHelper:Zb,Points:on,PointsMaterial:el,PolarGridHelper:Qb,PolyhedronGeometry:Rs,PositionalAudio:Ab,PropertyBinding:le,PropertyMixer:Jy,QuadraticBezierCurve:Yp,QuadraticBezierCurve3:Zp,Quaternion:rn,QuaternionKeyframeTrack:vl,QuaternionLinearInterpolant:By,RED_GREEN_RGTC2_Format:Lh,RED_RGTC1_Format:Op,REVISION:Kh,RGBADepthPacking:J_,RGBAFormat:yn,RGBAIntegerFormat:iu,RGBA_ASTC_10x10_Format:Ah,RGBA_ASTC_10x5_Format:Sh,RGBA_ASTC_10x6_Format:wh,RGBA_ASTC_10x8_Format:Eh,RGBA_ASTC_12x10_Format:Th,RGBA_ASTC_12x12_Format:Ch,RGBA_ASTC_4x4_Format:mh,RGBA_ASTC_5x4_Format:gh,RGBA_ASTC_5x5_Format:_h,RGBA_ASTC_6x5_Format:yh,RGBA_ASTC_6x6_Format:xh,RGBA_ASTC_8x5_Format:vh,RGBA_ASTC_8x6_Format:Mh,RGBA_ASTC_8x8_Format:bh,RGBA_BPTC_Format:Ea,RGBA_ETC2_EAC_Format:ph,RGBA_PVRTC_2BPPV1_Format:uh,RGBA_PVRTC_4BPPV1_Format:hh,RGBA_S3TC_DXT1_Format:ba,RGBA_S3TC_DXT3_Format:Sa,RGBA_S3TC_DXT5_Format:wa,RGBDepthPacking:tM,RGBFormat:Ip,RGBIntegerFormat:Kv,RGB_BPTC_SIGNED_Format:Rh,RGB_BPTC_UNSIGNED_Format:Ph,RGB_ETC1_Format:dh,RGB_ETC2_Format:fh,RGB_PVRTC_2BPPV1_Format:ch,RGB_PVRTC_4BPPV1_Format:lh,RGB_S3TC_DXT1_Format:Ma,RGDepthPacking:eM,RGFormat:Up,RGIntegerFormat:nu,RawShaderMaterial:Ry,Ray:Lr,Raycaster:tx,RectAreaLight:Xy,RedFormat:eu,RedIntegerFormat:fl,ReinhardToneMapping:G_,RenderTarget:ou,RenderTarget3D:kb,RenderTargetArray:Gb,RepeatWrapping:qa,ReplaceStencilOp:iM,ReverseSubtractEquation:b_,RingGeometry:Su,SIGNED_RED_GREEN_RGTC2_Format:Dh,SIGNED_RED_RGTC1_Format:Ih,SRGBColorSpace:Ae,SRGBTransfer:pe,Scene:Gp,ShaderChunk:Kt,ShaderLib:gn,ShaderMaterial:ye,ShadowMaterial:Cy,Shape:vi,ShapeGeometry:Nr,ShapePath:aS,ShapeUtils:Mi,ShortType:Cp,Skeleton:pu,SkeletonHelper:Yb,SkinnedMesh:_y,Source:or,Sphere:We,SphereGeometry:ts,Spherical:bf,SphericalHarmonics3:$y,SplineCurve:Kp,SpotLight:Hy,SpotLightHelper:qb,Sprite:Cs,SpriteMaterial:os,SrcAlphaFactor:Qc,SrcAlphaSaturateFactor:D_,SrcColorFactor:T_,StaticCopyUsage:MM,StaticDrawUsage:Ja,StaticReadUsage:yM,StereoCamera:bb,StreamCopyUsage:SM,StreamDrawUsage:_M,StreamReadUsage:vM,StringKeyframeTrack:Br,SubtractEquation:M_,SubtractiveBlending:uf,TOUCH:ir,TangentSpaceNormalMap:Ts,TetrahedronGeometry:wu,Texture:Ce,TextureLoader:Gy,TextureUtils:dS,TorusGeometry:yr,TorusKnotGeometry:Eu,Triangle:Tn,TriangleFanDrawMode:Qv,TriangleStripDrawMode:Jv,TrianglesDrawMode:jv,TubeGeometry:Au,UVMapping:jh,Uint16BufferAttribute:Bp,Uint32BufferAttribute:kp,Uint8BufferAttribute:a1,Uint8ClampedBufferAttribute:l1,Uniform:pm,UniformsGroup:Hb,UniformsLib:yt,UniformsUtils:cu,UnsignedByteType:Ei,UnsignedInt248Type:Er,UnsignedInt5999Type:Rp,UnsignedIntType:ss,UnsignedShort4444Type:Qh,UnsignedShort5551Type:tu,UnsignedShortType:No,VSMShadowMap:li,Vector2:Q,Vector3:A,Vector4:Jt,VectorKeyframeTrack:al,VideoTexture:C1,WebGL3DRenderTarget:ZM,WebGLArrayRenderTarget:YM,WebGLCoordinateSystem:Qn,WebGLCubeRenderTarget:py,WebGLRenderTarget:Ai,WebGLRenderer:hx,WebGLUtils:cx,WebGPUCoordinateSystem:Qa,WireframeGeometry:jp,WrapAroundEnding:Ka,ZeroCurvatureEnding:sr,ZeroFactor:E_,ZeroSlopeEnding:rr,ZeroStencilOp:nM,createCanvasElement:ly},Symbol.toStringTag,{value:"Module"})),YT=11846610,vg=4214880,ZT="#dcb432",KT="#00c896",jT="#ab63fa",JT="#ef553b",QT="#636efa",Bh="#e08030",_m=[{key:"kofamscan",label:"KofamScan",color:ZT},{key:"uniref50",label:"UniRef50",color:KT},{key:"tf",label:"TF",color:jT},{key:"antismash",label:"antiSMASH",color:JT},{key:"equilibrator",label:"eQuilib.",color:QT}],ux=[{label:"Terpene BGC + Copper Resistance",regionStart:1738357,regionEnd:1791687,flanking:[{id:2290,s:1719715,e:1720551,d:"+"},{id:2291,s:1721122,e:1721868,d:"+"},{id:2292,s:1721895,e:1722815,d:"+"},{id:2293,s:1723004,e:1723156,d:"+"},{id:2294,s:1723329,e:1723586,d:"+"},{id:2295,s:1723721,e:1724776,d:"+"},{id:2296,s:1725178,e:1725690,d:"-"},{id:2297,s:1726818,e:1727249,d:"-"},{id:2298,s:1727369,e:1728394,d:"-"},{id:2299,s:1728477,e:1728707,d:"-"},{id:2300,s:1729068,e:1729352,d:"-"},{id:2301,s:1729370,e:1730065,d:"-"},{id:2302,s:1730941,e:1732002,d:"+"},{id:2303,s:1732170,e:1732820,d:"+"},{id:2304,s:1732925,e:1733359,d:"+"},{id:2305,s:1733465,e:1733713,d:"+"},{id:2306,s:1733648,e:1734274,d:"-"},{id:2307,s:1734337,e:1735956,d:"-"},{id:2308,s:1736022,e:1736192,d:"+"},{id:2309,s:1736932,e:1737894,d:"-"},{id:2377,s:1792169,e:1793149,d:"+"},{id:2378,s:1793297,e:1793602,d:"+"},{id:2379,s:1793577,e:1794095,d:"+"},{id:2380,s:1794181,e:1795011,d:"+"},{id:2381,s:1795063,e:1795614,d:"-"},{id:2382,s:1795984,e:1796412,d:"+"},{id:2383,s:1796706,e:1798238,d:"+"},{id:2384,s:1798342,e:1799016,d:"+"},{id:2385,s:1799046,e:1799582,d:"+"},{id:2386,s:1799528,e:1800376,d:"+"},{id:2387,s:1800415,e:1800885,d:"-"},{id:2388,s:1801230,e:1801580,d:"+"},{id:2389,s:1801844,e:1802290,d:"-"},{id:2390,s:1802337,e:1802846,d:"-"},{id:2391,s:1802861,e:1803229,d:"-"},{id:2392,s:1803329,e:1803790,d:"-"},{id:2393,s:1803741,e:1804913,d:"-"},{id:2394,s:1805250,e:1805837,d:"-"},{id:2395,s:1805830,e:1806693,d:"-"},{id:2396,s:1807203,e:1808345,d:"-"}],orfs:[{id:2310,s:1738357,e:1739205,d:"-"},{id:2311,s:1739255,e:1740841,d:"-"},{id:2312,s:1740841,e:1742349,d:"-"},{id:2313,s:1742825,e:1743304,d:"+"},{id:2314,s:1743322,e:1744446,d:"+"},{id:2315,s:1744443,e:1745996,d:"-"},{id:2316,s:1746085,e:1746645,d:"+"},{id:2317,s:1746715,e:1747560,d:"+"},{id:2318,s:1747968,e:1748651,d:"-"},{id:2319,s:1748725,e:1748913,d:"-"},{id:2320,s:1749156,e:1750277,d:"+"},{id:2321,s:1750322,e:1750810,d:"+"},{id:2322,s:1750899,e:1751333,d:"+"},{id:2323,s:1751451,e:1752341,d:"-"},{id:2324,s:1752361,e:1752945,d:"-"},{id:2325,s:1753097,e:1753807,d:"-"},{id:2326,s:1754201,e:1754920,d:"-"},{id:2327,s:1754927,e:1755346,d:"-"},{id:2328,s:1755499,e:1755882,d:"-"},{id:2329,s:1755861,e:1758059,d:"-"},{id:2330,s:1758339,e:1759511,d:"-"},{id:2331,s:1759729,e:1761465,d:"-"},{id:2332,s:1761539,e:1762255,d:"-"},{id:2333,s:1762627,e:1762824,d:"-"},{id:2334,s:1762830,e:1763420,d:"-"},{id:2335,s:1763369,e:1763806,d:"-"},{id:2336,s:1763964,e:1764308,d:"-"},{id:2337,s:1764259,e:1766694,d:"-"},{id:2338,s:1766801,e:1767466,d:"+"},{id:2339,s:1767590,e:1768078,d:"-"},{id:2340,s:1768108,e:1768350,d:"+"},{id:2341,s:1768253,e:1769056,d:"-"},{id:2342,s:1769221,e:1769451,d:"-"},{id:2343,s:1769610,e:1770437,d:"+"},{id:2344,s:1770540,e:1770887,d:"+"},{id:2345,s:1771050,e:1771343,d:"+"},{id:2346,s:1771350,e:1771694,d:"+"},{id:2347,s:1771787,e:1771936,d:"-"},{id:2348,s:1771936,e:1772640,d:"-"},{id:2349,s:1772637,e:1773056,d:"-"},{id:2350,s:1773391,e:1774248,d:"+"},{id:2351,s:1774251,e:1774787,d:"+"},{id:2352,s:1775321,e:1775647,d:"+"},{id:2353,s:1775597,e:1775710,d:"-"},{id:2354,s:1775888,e:1777222,d:"+"},{id:2355,s:1777252,e:1777575,d:"+"},{id:2356,s:1777575,e:1778588,d:"+"},{id:2357,s:1778730,e:1780034,d:"+"},{id:2358,s:1780186,e:1780782,d:"-"},{id:2359,s:1780773,e:1781126,d:"-"},{id:2360,s:1781200,e:1781919,d:"+"},{id:2361,s:1781928,e:1782173,d:"+"},{id:2362,s:1782209,e:1783018,d:"+"},{id:2363,s:1783104,e:1783754,d:"-"},{id:2364,s:1784362,e:1784835,d:"-"},{id:2365,s:1784970,e:1785443,d:"-"},{id:2366,s:1785701,e:1787491,d:"+"},{id:2367,s:1787506,e:1787841,d:"+"},{id:2368,s:1787838,e:1788068,d:"+"},{id:2369,s:1788065,e:1788340,d:"+"},{id:2370,s:1788491,e:1788838,d:"-"},{id:2371,s:1788826,e:1788987,d:"-"},{id:2372,s:1789903,e:1790079,d:"-"},{id:2373,s:1790069,e:1790293,d:"-"},{id:2374,s:1790363,e:1790581,d:"-"},{id:2375,s:1790586,e:1791008,d:"-"},{id:2376,s:1791130,e:1791687,d:"+"}],tracks:{kofamscan:[{orf:2315,tip:"K19170 · geranylgeranyl reductase · E: 4e-185"},{orf:2318,tip:"K01259 · aminopeptidase (EC:3.4.11.5) · E: 1.1e-106"},{orf:2323,tip:"K02291 · phytoene synthase (EC:2.5.1.32) · E: 1.1e-125"},{orf:2325,tip:"K15393 · phytoene desaturase · E: 0.0011"},{orf:2326,tip:"K03501 · methyltransferase · E: 2.9e-60"},{orf:2327,tip:"K03111 · signal peptidase · E: 4.7e-16"},{orf:2329,tip:"K16881 · mannose-1-phosphate guanylyltransferase (EC:2.7.7.13) · E: 0"},{orf:2330,tip:"K23202 · DUF4442 domain protein · E: 8.5e-20"},{orf:2331,tip:"K06147 · ABC transporter ATP-binding · E: 9.3e-189"},{orf:2332,tip:"K02066 · ABC transporter substrate-binding · E: 1.6e-73"},{orf:2334,tip:"K22468 · glycoside hydrolase · E: 1e-84"},{orf:2342,tip:"K03666 · HflC protease · E: 2.6e-07"},{orf:2343,tip:"K01778 · diaminopimelate epimerase (EC:5.1.1.7) · E: 1.3e-112"},{orf:2350,tip:"K00788 · thiamine-phosphate synthase (EC:2.5.1.3) · E: 7.2e-80"},{orf:2352,tip:"K14417 · 4-coumarate-CoA ligase (EC:6.2.1.33) · E: 1.1e-11"},{orf:2357,tip:"K01448 · N-acetylmuramoyl-L-alanine amidase (EC:3.5.1.28) · E: 9.3e-26"},{orf:2358,tip:"K00919 · 4-diphosphocytidyl-2C-methyl-D-erythritol kinase (EC:2.7.1.148) · E: 1.3e-40"},{orf:2359,tip:"K00919 · 4-diphosphocytidyl-2C-methyl-D-erythritol kinase · E: 6.1e-36"},{orf:2363,tip:"K01495 · GTP cyclohydrolase I (EC:3.5.4.16) · E: 2.1e-106"},{orf:2364,tip:"K02426 · peptidoglycan DD-transpeptidase · E: 2.5e-51"},{orf:2365,tip:"K01737 · 6-pyruvoyltetrahydropterin synthase · E: 1.7e-48"},{orf:2375,tip:"K07063 · uncharacterized protein · E: 1.2e-30"}],uniref50:[{orf:2310,tip:"UniRef50_P73020 · 82.3%"},{orf:2311,tip:"UniRef50_UPI0016A8C0C5 · 98.6%"},{orf:2312,tip:"UniRef50_A0ABU8YUZ8 · 77.3%"},{orf:2313,tip:"UniRef50_A0ABY5AVI3 · 100%"},{orf:2314,tip:"UniRef50_A0ABY5AVI3 · 100%"},{orf:2315,tip:"UniRef50_B5W637 · 63.7%"},{orf:2316,tip:"UniRef50_A0ABR9U1B2 · 53.5%"},{orf:2317,tip:"UniRef50_U7QFZ1 · 64.3%"},{orf:2318,tip:"UniRef50_O83041 · 67.3%"},{orf:2319,tip:"UniRef50_A0A813W5Z2 · 63.8%"},{orf:2320,tip:"UniRef50_A0A9P1P215 · 59.1%"},{orf:2322,tip:"UniRef50_UPI002795226E · 58.4%"},{orf:2323,tip:"UniRef50_G6FWY6 · 69.3%"},{orf:2324,tip:"UniRef50_A0A7D4VY88 · 74.7%"},{orf:2325,tip:"UniRef50_A8YES5 · 88.4%"},{orf:2326,tip:"UniRef50_A0ABY5AXR7 · 100%"},{orf:2327,tip:"UniRef50_A0ABY5AUF7 · 100%"},{orf:2328,tip:"UniRef50_UPI0002AC6D93 · 68.4%"},{orf:2329,tip:"UniRef50_U5QKT5 · 66.8%"},{orf:2330,tip:"UniRef50_A0A6J7ZRJ2 · 62.7%"},{orf:2331,tip:"UniRef50_K9U8C6 · 68.9%"},{orf:2332,tip:"UniRef50_P73009 · 65.4%"},{orf:2334,tip:"UniRef50_UPI003565F634 · 72.6%"},{orf:2335,tip:"UniRef50_A0A090T7Z7 · 59.0%"},{orf:2336,tip:"UniRef50_A0ABY5AX49 · 100%"},{orf:2337,tip:"UniRef50_A0ABY5AX49 · 98.3%"},{orf:2338,tip:"UniRef50_A0ABY5AUG0 · 93.2%"},{orf:2339,tip:"UniRef50_A0A1J1LGS1 · 69.9%"},{orf:2341,tip:"UniRef50_A0ABY5AUG6 · 99.6%"},{orf:2342,tip:"UniRef50_A0ABY5AUG7 · 100%"},{orf:2343,tip:"UniRef50_K9VGN9 · 70.2%"},{orf:2344,tip:"UniRef50_A0A1J1LSS4 · 65.2%"},{orf:2345,tip:"UniRef50_A0A1J1LSS4 · 63.9%"},{orf:2346,tip:"UniRef50_A0A1J1LSS4 · 49.1%"},{orf:2347,tip:"UniRef50_A0ABY5AXT3 · 100%"},{orf:2348,tip:"UniRef50_A0ABY5AXT3 · 99.5%"},{orf:2349,tip:"UniRef50_A0ABY5AXT3 · 86.0%"},{orf:2350,tip:"UniRef50_P72965 · 64.4%"},{orf:2351,tip:"UniRef50_A0ABY5AUH3 · 100%"},{orf:2352,tip:"UniRef50_A0ABY5AUH3 · 99.1%"},{orf:2354,tip:"UniRef50_A0ABY5AV09 · 100%"},{orf:2355,tip:"UniRef50_A0ABY5AV09 · 98.9%"},{orf:2356,tip:"UniRef50_A0ABY5AV09 · 97.9%"},{orf:2357,tip:"UniRef50_A0A928W1Z2 · 61.4%"},{orf:2358,tip:"UniRef50_UPI00074D35B3 · 52.8%"},{orf:2359,tip:"UniRef50_UPI00391C2582 · 64.5%"},{orf:2360,tip:"UniRef50_A0ABY5AVP8 · 100%"},{orf:2361,tip:"UniRef50_A0ABY5AVP8 · 98.8%"},{orf:2362,tip:"UniRef50_A0ABY5AXD2 · 100%"},{orf:2363,tip:"UniRef50_U7QHK3 · 70.7%"},{orf:2364,tip:"UniRef50_B0CCI0 · 64.1%"},{orf:2365,tip:"UniRef50_UPI0031B56ED1 · 94.9%"},{orf:2366,tip:"UniRef50_UPI0018826317 · 69.4% · heavy metal sensor kinase"},{orf:2367,tip:"UniRef50_UPI0025F7388C · 46.9% · copper multicopper oxidase"},{orf:2368,tip:"UniRef50_A0A073CCC5 · 65.2% · copper multicopper oxidase"},{orf:2369,tip:"UniRef50_UPI001D0D3E69 · 61.8% · copper multicopper oxidase"},{orf:2370,tip:"UniRef50_A0AB37UGG6 · 83.3% · copper resistance protein B"},{orf:2371,tip:"UniRef50_A0A5M3TEE9 · 78.4% · copper resistance protein B"},{orf:2372,tip:"UniRef50_A0ABY5AUI6 · 100%"},{orf:2373,tip:"UniRef50_A0A3S1A922 · 56.0%"},{orf:2374,tip:"UniRef50_B7K0S7 · 68.1%"},{orf:2375,tip:"UniRef50_B7K0S8 · 60.9%"},{orf:2376,tip:"UniRef50_K9TKQ8 · 71.9%"}],tf:[{orf:2326,tip:"Potential methyltransferase TF · prob 0.999"},{orf:2350,tip:"Potential thiamine-phosphate TF · prob 0.999"},{orf:2363,tip:"Potential GTP cyclohydrolase TF · prob 1.000"}],antismash:[{start:1741450,end:1762341,tip:"Terpene BGC · 20.9 kb · contig_1:1,741,450–1,762,341"}],equilibrator:[{orf:2318,tip:"K01259 → EC:3.4.11.5 → ΔG° = +53.0 ± 1.4 kJ/mol"},{orf:2323,tip:"K02291 → EC:2.5.1.32 → ΔG° = −24.6 ± 1.2 kJ/mol"},{orf:2329,tip:"K16881 → EC:2.7.7.13 → ΔG° = −2.9 ± 0.9 kJ/mol"},{orf:2343,tip:"K01778 → EC:5.1.1.7 → ΔG° = −0.4 ± 0.7 kJ/mol"},{orf:2350,tip:"K00788 → EC:2.5.1.3 → ΔG° = −7.9 ± 1.0 kJ/mol"},{orf:2352,tip:"K14417 → EC:6.2.1.33 → ΔG° = −0.6 ± 0.9 kJ/mol"},{orf:2357,tip:"K01448 → EC:3.5.1.28 → ΔG° = +0.4 ± 0.6 kJ/mol"},{orf:2358,tip:"K00919 → EC:2.7.1.148 → ΔG° = −1.1 ± 1.0 kJ/mol"},{orf:2359,tip:"K00919 → EC:2.7.1.148 → ΔG° = −1.1 ± 1.0 kJ/mol"},{orf:2363,tip:"K01495 → EC:3.5.4.16 → ΔG° = +397.5 ± 1.5 kJ/mol"}],promotech:[{start:1747749,end:1747788,d:"+",tip:"PromoTech · score 0.876 · + strand"},{start:1789992,end:1790031,d:"+",tip:"PromoTech · score 0.841 · + strand"},{start:1791042,end:1791081,d:"-",tip:"PromoTech · score 0.834 · − strand"},{start:1745022,end:1745061,d:"+",tip:"PromoTech · score 0.830 · + strand"},{start:1763861,end:1763900,d:"-",tip:"PromoTech · score 0.818 · − strand"},{start:1789308,end:1789347,d:"-",tip:"PromoTech · score 0.791 · − strand"},{start:1789053,end:1789092,d:"-",tip:"PromoTech · score 0.789 · − strand"},{start:1758464,end:1758503,d:"+",tip:"PromoTech · score 0.779 · + strand"},{start:1784189,end:1784228,d:"+",tip:"PromoTech · score 0.777 · + strand"},{start:1746106,end:1746145,d:"-",tip:"PromoTech · score 0.777 · − strand"},{start:1760264,end:1760303,d:"+",tip:"PromoTech · score 0.774 · + strand"},{start:1744763,end:1744802,d:"+",tip:"PromoTech · score 0.774 · + strand"},{start:1752459,end:1752498,d:"-",tip:"PromoTech · score 0.768 · − strand"},{start:1780048,end:1780087,d:"-",tip:"PromoTech · score 0.761 · − strand"},{start:1763032,end:1763071,d:"+",tip:"PromoTech · score 0.758 · + strand"},{start:1756311,end:1756350,d:"+",tip:"PromoTech · score 0.755 · + strand"},{start:1787424,end:1787463,d:"+",tip:"PromoTech · score 0.750 · + strand"}]}},{label:"Manganese Transport",regionStart:2439614,regionEnd:2454090,flanking:[{id:3191,s:2425871,e:2426086,d:"+"},{id:3192,s:2426284,e:2426811,d:"+"},{id:3193,s:2426808,e:2427239,d:"+"},{id:3194,s:2427241,e:2428332,d:"+"},{id:3195,s:2428335,e:2429033,d:"+"},{id:3196,s:2429446,e:2430450,d:"-"},{id:3197,s:2430498,e:2430728,d:"-"},{id:3198,s:2430800,e:2431138,d:"-"},{id:3199,s:2431126,e:2432043,d:"-"},{id:3200,s:2432016,e:2432282,d:"-"},{id:3201,s:2432246,e:2432908,d:"-"},{id:3202,s:2432936,e:2433583,d:"-"},{id:3203,s:2433611,e:2434177,d:"-"},{id:3204,s:2434327,e:2434905,d:"+"},{id:3205,s:2435241,e:2435858,d:"+"},{id:3206,s:2435855,e:2436145,d:"+"},{id:3207,s:2436262,e:2437485,d:"-"},{id:3208,s:2437819,e:2438295,d:"+"},{id:3209,s:2438277,e:2438441,d:"+"},{id:3210,s:2438423,e:2439526,d:"+"},{id:3228,s:2454511,e:2455515,d:"+"},{id:3229,s:2455592,e:2455849,d:"-"},{id:3230,s:2456128,e:2456391,d:"+"},{id:3231,s:2456451,e:2456858,d:"+"},{id:3232,s:2456872,e:2458134,d:"+"},{id:3233,s:2458365,e:2459345,d:"+"},{id:3234,s:2459620,e:2460189,d:"+"},{id:3235,s:2460369,e:2460605,d:"+"},{id:3236,s:2461019,e:2461471,d:"+"},{id:3237,s:2461578,e:2462315,d:"+"},{id:3238,s:2462349,e:2462513,d:"+"},{id:3239,s:2462507,e:2462935,d:"+"},{id:3240,s:2462935,e:2463702,d:"+"},{id:3241,s:2463731,e:2464417,d:"+"},{id:3242,s:2464536,e:2465339,d:"+"},{id:3243,s:2465536,e:2465754,d:"+"},{id:3244,s:2465763,e:2466191,d:"+"},{id:3245,s:2466253,e:2466510,d:"+"},{id:3246,s:2466608,e:2467393,d:"+"},{id:3247,s:2467597,e:2467809,d:"+"}],orfs:[{id:3211,s:2439614,e:2439895,d:"-"},{id:3212,s:2440421,e:2440672,d:"-"},{id:3213,s:2440714,e:2441160,d:"-"},{id:3214,s:2441164,e:2441916,d:"-"},{id:3215,s:2441934,e:2443106,d:"-"},{id:3216,s:2443177,e:2444343,d:"-"},{id:3217,s:2444454,e:2445581,d:"-"},{id:3218,s:2446073,e:2447209,d:"-"},{id:3219,s:2447530,e:2448012,d:"+"},{id:3220,s:2448103,e:2449338,d:"-"},{id:3221,s:2449681,e:2450631,d:"+"},{id:3222,s:2450873,e:2451133,d:"+"},{id:3223,s:2451154,e:2452461,d:"+"},{id:3224,s:2452427,e:2452663,d:"+"},{id:3225,s:2452914,e:2453171,d:"-"},{id:3226,s:2453155,e:2453640,d:"-"},{id:3227,s:2453665,e:2454090,d:"-"}],tracks:{kofamscan:[{orf:3211,tip:"K03530 · TatD DNase · E: 1.6e-37"},{orf:3212,tip:"K20386 · (low confidence) · E: 1.3e-04"},{orf:3213,tip:"K15558 · metalloprotein · E: 9.7e-17"},{orf:3214,tip:"K11962 · Mn ABC transporter membrane · E: 2.5e-138"},{orf:3215,tip:"K11961 · MntB — Mn transport · E: 7.5e-137"},{orf:3216,tip:"K11960 · MntC — Mn transport · E: 2.6e-142"},{orf:3217,tip:"K11959 · MntA — Mn transport · E: 2.3e-166"},{orf:3218,tip:"K01945 · Mn/Fe transporter binding · E: 2.9e-171"},{orf:3220,tip:"K01845 · Mn-dependent catalase · E: 8.2e-208"},{orf:3225,tip:"K20386 · (low confidence) · E: 1.2e-05"},{orf:3226,tip:"K15558 · metalloprotein · E: 2.6e-24"},{orf:3227,tip:"K09774 · biofilm-associated protein · E: 1.8e-20"}],uniref50:[{orf:3211,tip:"UniRef50_P05514 · 85.7% · E: 9.99e-46"},{orf:3212,tip:"UniRef50_A0A073CJ92 · 90.4% · E: 7.97e-43"},{orf:3213,tip:"UniRef50_A0A073CJ92 · 69.2% · E: 3.12e-59"},{orf:3214,tip:"UniRef50_A0A8J7IVR5 · 82.0% · E: 3.24e-138"},{orf:3215,tip:"UniRef50_A0A1Z3HVF4 · 65.0% · E: 1.58e-160"},{orf:3216,tip:"UniRef50_P73350 · 67.2% · E: 2.41e-171"},{orf:3217,tip:"UniRef50_A0A5A5RED2 · 76.9% · E: 3.11e-218"},{orf:3218,tip:"UniRef50_P74232 · 60.1% · E: 1.01e-148"},{orf:3219,tip:"UniRef50_A0ABY5AKA9 · 100% · E: 6.87e-95"},{orf:3220,tip:"UniRef50_P24630 · 81.8% · E: 3.50e-244"},{orf:3221,tip:"UniRef50_A0ABY5AL13 · 100% · E: 8.29e-240"},{orf:3222,tip:"UniRef50_A0ABW6IBP7 · 80.0% · E: 1.79e-27"},{orf:3223,tip:"UniRef50_Q31MD4 · 58.5% · E: 3.20e-173"},{orf:3225,tip:"UniRef50_A0A0F6U4X8 · 80.5% · E: 6.81e-38"},{orf:3226,tip:"UniRef50_A0A0F6U4X8 · 61.9% · E: 9.85e-55"},{orf:3227,tip:"UniRef50_A0ABY5AKB3 · 91.4% · E: 6.39e-82"}],tf:[{orf:3211,tip:"Potential bacterial transcription factor · prob 0.999"},{orf:3220,tip:"CLASS-III transcription factor · prob 0.999"}],antismash:[],equilibrator:[{orf:3220,tip:"K01845 → EC:5.4.3.8 → ΔG° = ±2.0 ± 0.2 kJ/mol"}],promotech:[{start:2447455,end:2447494,d:"+",tip:"PromoTech · score 0.811 · + strand"},{start:2450813,end:2450852,d:"+",tip:"PromoTech · score 0.796 · + strand"},{start:2451189,end:2451228,d:"+",tip:"PromoTech · score 0.786 · + strand"},{start:2452248,end:2452287,d:"-",tip:"PromoTech · score 0.785 · − strand"},{start:2450303,end:2450342,d:"-",tip:"PromoTech · score 0.752 · − strand"},{start:2445921,end:2445960,d:"+",tip:"PromoTech · score 0.733 · + strand"},{start:2445702,end:2445741,d:"-",tip:"PromoTech · score 0.730 · − strand"},{start:2450775,end:2450814,d:"-",tip:"PromoTech · score 0.728 · − strand"},{start:2452436,end:2452475,d:"+",tip:"PromoTech · score 0.725 · + strand"},{start:2450612,end:2450651,d:"+",tip:"PromoTech · score 0.712 · + strand"},{start:2447499,end:2447538,d:"+",tip:"PromoTech · score 0.707 · + strand"},{start:2453423,end:2453462,d:"+",tip:"PromoTech · score 0.701 · + strand"}]}}],To=-14,kh=14,t2=kh-To,dx=.4,fx=.12,e2=.35,n2=.55,px=[4.5,-5.5];function dn(s,t,e){return To+(s-t)/(e-t)*t2}const xn=document.createElement("div");xn.id="genomic-labels";xn.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:11;display:none;";document.body.appendChild(xn);const mx=[];function Pd(s,t,{color:e="#607080",fontSize:n="1.6rem",anchor:i="left",fontWeight:r="400",className:o=""}={}){const a=document.createElement("div");return a.textContent=s,o&&(a.className=o),a.style.cssText=`position:absolute;font-family:monospace;font-size:${n};color:${e};font-weight:${r};white-space:nowrap;pointer-events:none;`,i==="right"&&(a.style.textAlign="right"),xn.appendChild(a),mx.push({el:a,worldPos:t.clone(),anchor:i}),a}function gx(s){const t=window.innerWidth/2,e=window.innerHeight/2,n=new A;for(const{el:i,worldPos:r,anchor:o}of mx){n.copy(r).project(s);const a=n.x*t+t,l=-n.y*e+e;o==="right"?(i.style.right=`${window.innerWidth-a}px`,i.style.left=""):i.style.left=`${a}px`,i.style.top=`${l}px`,i.style.transform="translateY(-50%)"}}function i2(s,t){const e=new vi,n=dx,i=Math.min(fx,s*.4),r=s-i;t?(e.moveTo(s,-n/2),e.lineTo(i,-n/2),e.lineTo(0,0),e.lineTo(i,n/2),e.lineTo(s,n/2),e.lineTo(s,-n/2)):(e.moveTo(0,-n/2),e.lineTo(r,-n/2),e.lineTo(s,0),e.lineTo(r,n/2),e.lineTo(0,n/2),e.lineTo(0,-n/2));const o=new Nr(e),a=new re({color:YT,transparent:!0,opacity:.75,depthTest:!1});return new Nt(o,a)}function s2(s,t){const e=new vi,n=dx,i=Math.min(fx,s*.4),r=s-i;t?(e.moveTo(s,-n/2),e.lineTo(i,-n/2),e.lineTo(0,0),e.lineTo(i,n/2),e.lineTo(s,n/2),e.lineTo(s,-n/2)):(e.moveTo(0,-n/2),e.lineTo(r,-n/2),e.lineTo(s,0),e.lineTo(r,n/2),e.lineTo(0,n/2),e.lineTo(0,-n/2));const o=new Nr(e),a=new re({color:1711656,transparent:!0,opacity:.3,depthTest:!1}),l=new Nt(o,a),c=new Fr(o),h=new Yt({color:5267568,transparent:!0,opacity:.6}),u=new te(c,h),d=new ce;return d.add(l),d.add(u),d}const _x=.7,Gh=.3,vc=.08;function r2(s,t,e,n,i,r){const o=i||_x,a=r?t-o:t+o,l=[new A(s,t,.02),new A(s,a,.02)],c=e?s+Gh:s-Gh;l.push(new A(c,a,.02));const h=new _t().setFromPoints(l),u=new Yt({color:new at(Bh),transparent:!0,opacity:n}),d=new Mn(h,u),f=new vi,p=e?1:-1;f.moveTo(c,a),f.lineTo(c-p*vc*1.5,a+vc),f.lineTo(c-p*vc*1.5,a-vc),f.lineTo(c,a);const _=new Nr(f),g=new re({color:new at(Bh),transparent:!0,opacity:n,depthTest:!1}),m=new Nt(_,g),x=new ce;return x.add(d),x.add(m),x}function o2(s,t){const e=new ce,{regionStart:n,regionEnd:i,orfs:r,tracks:o,label:a,flanking:l=[]}=s,c=[];let h=n,u=i;for(const T of l)T.s<h&&(h=T.s),T.e>u&&(u=T.e);const d=dn(h,n,i),f=dn(u,n,i);Pd(a,new A(To,t+1.6,0),{color:"#8090a8",fontSize:"2.4rem",fontWeight:"600",className:"region-title"});const p=new _t().setFromPoints([new A(d,t,0),new A(f,t,0)]),_=new Yt({color:vg,transparent:!0,opacity:.6});e.add(new Mn(p,_));for(const T of l){const S=dn(T.s,n,i),M=dn(T.e,n,i),P=Math.max(M-S,.08),O=T.d==="+",U=O?t+.35:t-.35,D=s2(P,O);D.position.set(S,U,0),e.add(D)}const g=1e3,m=Math.ceil(h/g)*g;for(let T=m;T<=u;T+=g){const S=dn(T,n,i),M=new _t().setFromPoints([new A(S,t-.12,0),new A(S,t+.12,0)]);e.add(new Mn(M,_))}Pd("ticks every kb",new A(kh+.2,t+1.2,0),{color:"#405060",fontSize:"1.4rem"});for(const T of r){const S=dn(T.s,n,i),M=dn(T.e,n,i),P=Math.max(M-S,.08),O=T.d==="+",U=O?t+.35:t-.35,D=i2(P,O);D.position.set(S,U,0),D.userData.orfId=T.id,D.userData.isChevron=!0,e.add(D)}const x=(o.promotech||[]).map(T=>{const S=(T.start+T.end)/2;return{...T,x:dn(S,n,i)}}).sort((T,S)=>T.x-S.x),v=Gh+.15,y=.3,b=[],w=[];for(const T of x){const S=T.d==="+",M=T.d==="-",P=M?w:b;let O=_x;for(const xt of P)Math.abs(T.x-xt.x)<v&&Math.abs(O-xt.stemH)<y*.9&&(O=xt.stemH+y);P.push({x:T.x,stemH:O});const U=T.tip.match(/score\s+([\d.]+)/),D=U?parseFloat(U[1]):.7;let z=!1;if(S){let xt=null;for(const Gt of r)Gt.s>=T.start&&(!xt||Gt.s<xt.s)&&(xt=Gt);z=xt!=null&&xt.d==="+"&&xt.s<=T.end+5e3}else{let xt=null;for(const Gt of r)Gt.e<=T.end&&(!xt||Gt.e>xt.e)&&(xt=Gt);z=xt!=null&&xt.d==="-"&&xt.e>=T.start-5e3}let F=z?D:D*.5;const X=r2(T.x,t,S,F,O,M);X.userData={tooltip:T.tip,trackColor:Bh},e.add(X);const H=new ei(Gh+.1,O+.1),V=new re({visible:!1,depthTest:!1}),K=new Nt(H,V),rt=M?t-O/2:t+O/2;K.position.set(T.x,rt,.02),K.userData={tooltip:T.tip,trackColor:Bh},e.add(K),c.push(K)}const E={};for(const T of r)E[T.id]=T;return _m.forEach((T,S)=>{const M=t-1.5-S*n2,P=o[T.key]||[];Pd(T.label,new A(To-.3,M,0),{color:"#607080",fontSize:"1.4rem",anchor:"right"});const O=new _t().setFromPoints([new A(To,M,0),new A(kh,M,0)]),U=new Yt({color:vg,transparent:!0,opacity:.15});e.add(new Mn(O,U));for(const D of P){let z,F;if(D.orf!=null){const rt=E[D.orf];if(!rt)continue;z=dn(rt.s,n,i),F=dn(rt.e,n,i)}else z=dn(Math.max(D.start,n),n,i),F=dn(Math.min(D.end,i),n,i);const X=Math.max(F-z,.06),H=new ei(X,e2),V=new re({color:12634320,transparent:!0,opacity:.6,depthTest:!1}),K=new Nt(H,V);K.position.set(z+X/2,M,.01),K.userData={tooltip:D.tip,trackColor:T.color,trackKey:T.key,orfId:D.orf??null},e.add(K),c.push(K)}}),{group:e,interactables:c}}const yx={name:"genomic-region",visible:["genomicRegionGroup"],cameraType:"orthographic",camera:{target:new A(0,0,0)},onEnter(){xn.style.display="block"},onLeave(){xn.style.display="none"},overlays:{title:"Annotated Regions — AB48",subtitle:"Two windows into contig_1 — annotation tracks from the pipeline"}};let Vh=null;function a2({scene:s,sm:t,renderer:e}){const n=new ce;n.visible=!1,Vh=n;const i=[];ux.forEach((c,h)=>{const{group:u,interactables:d}=o2(c,px[h]);n.add(u),i.push(...d)}),s.add(n),t.register("genomicRegionGroup",n);const r=new tx,o=new Q,a=document.getElementById("tooltip");let l=null;e.domElement.addEventListener("pointermove",c=>{o.x=c.clientX/window.innerWidth*2-1,o.y=-(c.clientY/window.innerHeight)*2+1}),yx.onRender=(c,h,u)=>{if(xn.style.display=n.visible?"block":"none",n.visible&&gx(u),n.visible&&a){r.setFromCamera(o,u);const d=r.intersectObjects(i,!1);if(d.length>0){const f=d[0].object;f!==l&&(l&&(l.material.opacity=.75),l=f,f.material.opacity=1),a.style.display="block",a.textContent=f.userData.tooltip;const p=c.domElement.getBoundingClientRect(),_=(o.x+1)/2*p.width,g=(1-o.y)/2*p.height;a.style.left=`${_+14}px`,a.style.top=`${g-20}px`}else l&&(l.material.opacity=.75,l=null),a.style.display="none"}c.render(h,u)}}const Ru={};for(const s of _m)Ru[s.key]=s.color;const xx=[{region:0,callouts:[{orf:2329,label:"Mannose-1-P guanylyltransferase",dy:.8,tracks:{kofamscan:"K16881 · polysaccharide precursor",uniref50:"GDP-mannose pyrophosphorylase · 66.8%",equilibrator:"ΔG° = −2.9 kJ/mol"}},{orf:2331,label:"ABC transporter",tracks:{kofamscan:"K06147 · ATP-binding efflux",uniref50:"ABC transporter ATP-binding protein · 68.9%"}},{orf:2366,label:"Heavy metal sensor kinase",dx:3.5,dy:2.4,tracks:{uniref50:"Heavy metal sensor histidine kinase · 69.4%"}},{orf:2367,label:"Multicopper oxidase (CopA)",dx:3.5,dy:.6,tracks:{uniref50:"Multicopper oxidase family protein · 46.9%"}},{orf:2370,label:"Copper resistance protein B",dx:3.5,dy:-1.2,tracks:{uniref50:"Copper resistance protein CopB · 83.3%"}}]},{region:1,callouts:[{orf:3215,label:"MntB — Mn permease",tracks:{kofamscan:"K11961 · Mn ABC transporter permease",uniref50:"Manganese transport system permease · 65.0%"}},{orf:3216,label:"MntC — Mn binding",tracks:{kofamscan:"K11960 · substrate recognition",uniref50:"Manganese-binding lipoprotein · 67.2%"}},{orf:3217,label:"MntA — Mn permease",tracks:{kofamscan:"K11959 · channel protein",uniref50:"Manganese ABC transporter permease · 76.9%"}},{orf:3220,label:"Mn-dependent catalase",tracks:{kofamscan:"K01845 · oxidative stress defence",uniref50:"Manganese catalase · 81.8%",tf:"CLASS-III transcription factor"}},{orf:3227,label:"Biofilm-associated protein",tracks:{kofamscan:"K09774 · surface adhesion",uniref50:"Biofilm formation protein · 91.4%"}}]}],hl=new Set;for(const s of xx)for(const t of s.callouts)hl.add(t.orf);const l2=4,c2=3.6,Un=document.createElement("div");Un.id="genomic-annot-labels";Un.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:12;display:none;";document.body.appendChild(Un);const vx=[];function Mg(s,t,e={}){const n=document.createElement("div");n.innerHTML=s;const i=e.fontSize||"1.36rem";return n.style.cssText=`position:absolute;font-family:system-ui,sans-serif;font-size:${i};white-space:nowrap;pointer-events:none;line-height:1.1;`,Un.appendChild(n),vx.push({el:n,worldPos:t.clone(),center:e.center||!1}),n}function h2(s){const t=window.innerWidth/2,e=window.innerHeight/2,n=new A;for(const{el:i,worldPos:r,center:o}of vx)n.copy(r).project(s),i.style.left=`${n.x*t+t}px`,i.style.top=`${-n.y*e+e}px`,i.style.transform=o?"translate(-50%, -50%)":""}let Ss=[],Rr=[];function u2(){Vh&&(Ss=[],Rr=[],Vh.traverse(s=>{if(s.isMesh){if(s.userData.isChevron&&!hl.has(s.userData.orfId)){Ss.push({mesh:s,origColor:s.material.color.getHex(),origOpacity:s.material.opacity}),s.material.color.setHex(1711656),s.material.opacity=.3;const t=new Fr(s.geometry),e=new Yt({color:5267568,transparent:!0,opacity:.6}),n=new te(t,e);s.parent.add(n),n.position.copy(s.position),Rr.push({line:n,parent:s.parent})}if(s.userData.trackKey){const{orfId:t,trackKey:e}=s.userData;(t!=null&&hl.has(t)||e==="antismash")&&(Ss.push({mesh:s,origColor:s.material.color.getHex(),origOpacity:s.material.opacity}),s.material.color.set(Ru[e]),s.material.opacity=.9)}}}))}function d2(){for(const{mesh:s,origColor:t,origOpacity:e}of Ss)s.material.color.setHex(t),s.material.opacity=e;Ss=[];for(const{line:s,parent:t}of Rr)t.remove(s),s.geometry.dispose(),s.material.dispose();Rr=[]}let xr=null;function f2(s){const t=[],e=[];if(s)Vh.traverse(n=>{if(n.isMesh){if(n.userData.isChevron&&!hl.has(n.userData.orfId)){const i=new Fr(n.geometry),r=new Yt({color:5267568,transparent:!0,opacity:0}),o=new te(i,r);n.parent.add(o),o.position.copy(n.position),e.push({line:o,parent:n.parent,fromOpacity:0,toOpacity:.6}),t.push({mesh:n,fromColor:n.material.color.clone(),fromOpacity:n.material.opacity,toColor:new at(1711656),toOpacity:.3})}if(n.userData.trackKey){const{orfId:i,trackKey:r}=n.userData;(i!=null&&hl.has(i)||r==="antismash")&&t.push({mesh:n,fromColor:n.material.color.clone(),fromOpacity:n.material.opacity,toColor:new at(Ru[r]),toOpacity:.9})}}});else{for(const{mesh:n,origColor:i,origOpacity:r}of Ss)t.push({mesh:n,fromColor:n.material.color.clone(),fromOpacity:n.material.opacity,toColor:new at(i),toOpacity:r});for(const{line:n,parent:i}of Rr)e.push({line:n,parent:i,fromOpacity:n.material.opacity,toOpacity:0})}xr={items:t,edges:e,forward:s}}function p2(s){if(!xr)return;const t=new at;for(const{mesh:e,fromColor:n,fromOpacity:i,toColor:r,toOpacity:o}of xr.items)t.copy(n).lerp(r,s),e.material.color.copy(t),e.material.opacity=i+(o-i)*s;for(const e of xr.edges)e.line.material.opacity=e.fromOpacity+(e.toOpacity-e.fromOpacity)*s}function m2(){if(!xr)return;const{forward:s,items:t,edges:e}=xr;if(s)Ss=t.map(({mesh:n,fromColor:i,fromOpacity:r})=>({mesh:n,origColor:i.getHex(),origOpacity:r})),Rr=e.map(({line:n,parent:i})=>({line:n,parent:i}));else{for(const{line:n,parent:i}of e)i.remove(n),n.geometry.dispose(),n.material.dispose();Ss=[],Rr=[]}xr=null}const Mx={name:"genomic-region-annotated",visible:["genomicRegionGroup","genomicAnnotations"],cameraType:"orthographic",camera:{target:new A(0,0,0)},onEnter(s){if(xn.style.display="block",!(s?.name==="genomic-region")){for(const e of xn.querySelectorAll(".region-title"))e.style.display="none";Un.style.display="block",Un.style.opacity="1",u2()}},onLeave(s){if(!(s?.name==="genomic-region")){xn.style.display="none";for(const e of xn.querySelectorAll(".region-title"))e.style.display="";Un.style.display="none",d2()}},overlays:{title:"",subtitle:""}};function g2({scene:s,sm:t}){const e=new ce;e.visible=!1;for(const n of xx){const i=n.region,r=ux[i],o=px[i],a=r.regionStart,l=r.regionEnd,c={};for(const x of r.orfs)c[x.id]=x;const h=n.callouts.map(x=>({...x,geneX:dn((c[x.orf].s+c[x.orf].e)/2,a,l)})).sort((x,v)=>x.geneX-v.geneX),u=h.length,d=new Yt({color:9478328,transparent:!0,opacity:.35}),f=.1,p=.06,_=new re({color:16777215,transparent:!0,opacity:.9,depthTest:!1}),g=new re({color:657930,transparent:!0,opacity:.9,depthTest:!1});h.forEach((x,v)=>{const y=c[x.orf];if(!y)return;const b=x.geneX,E=y.d==="+"?o+.35:o-.35,T=To-10,S=kh+2,P=T+(v+.5)/u*(S-T)+(x.dx||0),O=o+l2+(x.dy||0),U=o+c2+(x.dy||0),D=P-.3,z=new _t().setFromPoints([new A(b,E,.03),new A(D,U,.03)]);e.add(new Mn(z,d));const F=new ti(f,16),X=new Nt(F,_);X.position.set(b,E,.04),e.add(X);const H=new ti(p,16),V=new Nt(H,g);V.position.set(b,E,.05),e.add(V);const K=new ti(f,16),rt=new Nt(K,_);rt.position.set(D,U,.04),e.add(rt);const xt=new ti(p,16),Gt=new Nt(xt,g);Gt.position.set(D,U,.05),e.add(Gt);let j=`<strong style="color:#d0d8e4;">${x.label}</strong>`;for(const[ut,$]of Object.entries(x.tracks)){const G=Ru[ut]||"#7090b0";j+=`<br><span style="color:${G};font-size:0.6em;">${$}</span>`}Mg(j,new A(P,O,0))});const m=r.tracks.antismash||[];for(const x of m){const v=dn(Math.max(x.start,a),a,l),y=dn(Math.min(x.end,l),a,l),b=_m.findIndex(E=>E.key==="antismash"),w=o-1.5-b*.55;Mg('<strong style="color:#ffffff;">Terpene BGC</strong>',new A((v+y)/2,w,0),{fontSize:"1.0rem",center:!0})}}s.add(e),t.register("genomicAnnotations",e),Mx.onRender=(n,i,r)=>{e.visible&&(gx(r),h2(r)),n.render(i,r)}}const _2=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,y2=[{from:"genomic-region",to:"genomic-region-annotated",direction:"both",duration:600,easing:"easeInOut",tracks:[{type:"crossfade",fadeOut:[],fadeIn:["genomicAnnotations"]}],onStart(s){const t=s.toScene.name==="genomic-region-annotated";s._forward=t,f2(t),Un.style.display="block",Un.style.opacity=t?"0":"1";const e=xn.querySelectorAll(".region-title");for(const n of e)n.style.display="",n.style.opacity=t?"1":"0"},onUpdate(s,t){const e=_2(s);p2(e);const n=t._forward?e:1-e;Un.style.opacity=String(n);const i=xn.querySelectorAll(".region-title");for(const r of i)r.style.opacity=String(1-n)},onComplete(s){if(m2(),s._forward){Un.style.opacity="1";const t=xn.querySelectorAll(".region-title");for(const e of t)e.style.display="none",e.style.opacity=""}else{Un.style.display="none",Un.style.opacity="";const t=xn.querySelectorAll(".region-title");for(const e of t)e.style.display="",e.style.opacity=""}}}],x2=Object.freeze(Object.defineProperty({__proto__:null,transitions:y2},Symbol.toStringTag,{value:"Module"})),v2=[{from:"lda-document",to:"umap-nmf",direction:"both",duration:1e3,easing:"easeInOut",tracks:[{type:"camera"}]}],M2=Object.freeze(Object.defineProperty({__proto__:null,transitions:v2},Symbol.toStringTag,{value:"Module"})),b2=[{from:"matrix-decomposed",to:"matrix-highlight",direction:"both",duration:1200,easing:"easeInOut",tracks:[{type:"property",target:"decomp",property:"fillOpacity"},{type:"property",target:"decomp",property:"labelsOpacity"},{type:"property",target:"decomp",property:"gridVisible"}]}],S2=Object.freeze(Object.defineProperty({__proto__:null,transitions:b2},Symbol.toStringTag,{value:"Module"})),w2=[{from:"matrix-full",to:"matrix-decomposed",direction:"both",duration:1800,easing:"easeInOut",tracks:[{type:"property",target:"decomp",property:"split"}]}],E2=Object.freeze(Object.defineProperty({__proto__:null,transitions:w2},Symbol.toStringTag,{value:"Module"})),A2=[{from:"matrix-highlight",to:"lda-document",direction:"both",duration:1e3,easing:"easeInOut",tracks:[],onStart(s){const t=s.registry.tryResolve("decompGroup");t&&(t._savedZ=t.position.z)},onUpdate(s,t){const e=t.registry.tryResolve("decompGroup");e&&(e.position.z=(e._savedZ??0)-s*2)},onComplete(s){const t=s.registry.tryResolve("decompGroup");t&&(t.position.z=t._savedZ??0)}}],T2=Object.freeze(Object.defineProperty({__proto__:null,transitions:A2},Symbol.toStringTag,{value:"Module"})),C2=[{from:"metal-tolerance",to:"matrix-full",direction:"both",duration:1500,easing:"easeInOut",tracks:[{type:"property",target:"umapCloud",property:"splitT"},{type:"property",target:"umapCloud",property:"metalMode"},{type:"crossfade",fadeOut:["umapGroup"],fadeIn:["decompGroup"]}]}],R2=Object.freeze(Object.defineProperty({__proto__:null,transitions:C2},Symbol.toStringTag,{value:"Module"})),P2=[{from:"niche",to:"ab48",direction:"both",duration:1e3,easing:"easeInOut",tracks:[{type:"property",target:"umapCloud",property:"highlight"}]}],I2=Object.freeze(Object.defineProperty({__proto__:null,transitions:P2},Symbol.toStringTag,{value:"Module"})),L2=[{from:"outlier-saltwater",to:"metal-tolerance",direction:"both",duration:1500,easing:"easeInOut",tracks:[{type:"property",target:"umapCloud",property:"outlierMode"},{type:"property",target:"umapCloud",property:"metalMode"},{type:"property",target:"umapCloud",property:"saltwaterOnly"},{type:"property",target:"umapCloud",property:"marineShift"}]}],D2=Object.freeze(Object.defineProperty({__proto__:null,transitions:L2},Symbol.toStringTag,{value:"Module"})),U2=[{from:"outliers",to:"outlier-saltwater",direction:"both",duration:1500,easing:"easeInOut",tracks:[{type:"property",target:"umapCloud",property:"saltwaterOnly"},{type:"property",target:"umapCloud",property:"marineShift"}]}],O2=Object.freeze(Object.defineProperty({__proto__:null,transitions:U2},Symbol.toStringTag,{value:"Module"})),F2=[{from:"pcoa-pair",to:"pcoa-simpson",direction:"both",duration:800,easing:"quinticInOut",deferVisibility:!0,keepVisible:["ordinationMorphGroup","ordinationI030MorphGroup"],tracks:[{type:"property",target:"ordinationMorphCloud",property:"pairSplitT"},{type:"camera"}],onUpdate(s,t){const n=t.fromScene.name==="pcoa-pair"?1-s:s,i=document.getElementById("pcoa-pair-overlay");if(i){i.style.display="",i.style.opacity=n;const r=i.querySelector(".split-divider");r&&(r.style.left=`${n*50}%`);const o=i.querySelector(".split-left"),a=i.querySelector(".split-right");o&&(o.style.left=`${n*25}%`),a&&(a.style.left=`${(n*.5+1)*50}%`)}},onComplete(s){const t=document.getElementById("pcoa-pair-overlay");if(t)if(s.fromScene.name==="pcoa-pair")t.style.display="none",t.style.opacity=1;else{t.style.opacity=1;const e=t.querySelector(".split-divider");e&&(e.style.left="50%");const n=t.querySelector(".split-left"),i=t.querySelector(".split-right");n&&(n.style.left="25%"),i&&(i.style.left="75%")}}}],N2=Object.freeze(Object.defineProperty({__proto__:null,transitions:F2},Symbol.toStringTag,{value:"Module"})),z2=[{from:"pcoa-simpson",to:"umap-simpson",direction:"both",duration:1200,easing:"quinticInOut",deferVisibility:!0,keepVisible:["ordinationMorphGroup"],tracks:[{type:"uniform",target:"ordinationMorphCloud",uniform:"uMorphT"}]}],B2=Object.freeze(Object.defineProperty({__proto__:null,transitions:z2},Symbol.toStringTag,{value:"Module"})),k2=[{from:"ranked-abundance",to:"decomposition",direction:"both",duration:1200,easing:"quinticInOut",deferVisibility:!0,keepVisible:["ranked-abundance-group"],tracks:[{type:"uniform",target:"ranked-cloud",uniform:"uMorphT"},{type:"property",target:"ranked-abundance-group",property:"axesMorphT"},{type:"crossfade",fadeOut:["ranked-axes","mode-lines"],fadeIn:["decomposition-axes"]}]}],G2=Object.freeze(Object.defineProperty({__proto__:null,transitions:k2},Symbol.toStringTag,{value:"Module"})),V2=[{from:"sample-overview",to:"genomic-region",direction:"both",duration:800,easing:"easeInOut",tracks:[{type:"crossfade",fadeOut:["sampleRings"],fadeIn:["genomicRegionGroup"]}]}],H2=Object.freeze(Object.defineProperty({__proto__:null,transitions:V2},Symbol.toStringTag,{value:"Module"})),W2=[{from:"umap-lda",to:"umap-vae",direction:"both",duration:1500,easing:"quinticInOut",tracks:[{type:"uniform",target:"sampleDecompCloud",uniform:"uMorphT"},{type:"uniform",target:"orfDecompCloud",uniform:"uMorphT"}]}],X2=Object.freeze(Object.defineProperty({__proto__:null,transitions:W2},Symbol.toStringTag,{value:"Module"})),$2=[{from:"umap-nmf",to:"umap-lda",direction:"both",duration:1500,easing:"quinticInOut",tracks:[{type:"uniform",target:"sampleDecompCloud",uniform:"uMorphT"},{type:"uniform",target:"orfDecompCloud",uniform:"uMorphT"}]}],q2=Object.freeze(Object.defineProperty({__proto__:null,transitions:$2},Symbol.toStringTag,{value:"Module"})),Y2=[{from:"umap-simpson",to:"niche",direction:"both",duration:1200,easing:"quinticInOut",deferVisibility:!0,tracks:[{type:"uniform",target:"umapCloud",uniform:"uMorphT"},{type:"crossfade",fadeOut:["ordinationMorphGroup"],fadeIn:["umapGroup"]}],onStart(s){const t=s.registry.tryResolve("ordinationMorphGroup"),e=s.registry.tryResolve("umapGroup");t&&e&&s.fromScene.name==="umap-simpson"&&e.rotation.copy(t.rotation),s.show("umapGroup")},onUpdate(s,t){t.hide("ordinationMorphGroup"),t.show("umapGroup");const e=t.registry.tryResolve("umapGroup");e&&e.traverse(i=>{i.material?.uniforms?.uOpacity&&(i.material.uniforms.uOpacity.value=1)});const n=t.registry.tryResolve("ordinationMorphGroup");n&&e&&(t.fromScene.name==="umap-simpson"?e.rotation.copy(n.rotation):n.rotation.copy(e.rotation))}}],Z2=Object.freeze(Object.defineProperty({__proto__:null,transitions:Y2},Symbol.toStringTag,{value:"Module"})),bg={type:"change"},ym={type:"start"},bx={type:"end"},Mc=new Lr,Sg=new ki,K2=Math.cos(70*ru.DEG2RAD),Oe=new A,wn=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6;class Sx extends ix{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new rn,this._lastTargetPosition=new A,this._quat=new rn().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bf,this._sphericalDelta=new bf,this._scale=1,this._panOffset=new A,this._rotateStart=new Q,this._rotateEnd=new Q,this._rotateDelta=new Q,this._panStart=new Q,this._panEnd=new Q,this._panDelta=new Q,this._dollyStart=new Q,this._dollyEnd=new Q,this._dollyDelta=new Q,this._dollyDirection=new A,this._mouse=new Q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=J2.bind(this),this._onPointerDown=j2.bind(this),this._onPointerUp=Q2.bind(this),this._onContextMenu=oC.bind(this),this._onMouseWheel=nC.bind(this),this._onKeyDown=iC.bind(this),this._onTouchStart=sC.bind(this),this._onTouchMove=rC.bind(this),this._onMouseDown=tC.bind(this),this._onMouseMove=eC.bind(this),this._interceptControlDown=aC.bind(this),this._interceptControlUp=lC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bg),this.update(),this.state=ge.NONE}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=wn:n>Math.PI&&(n-=wn),i<-Math.PI?i+=wn:i>Math.PI&&(i-=wn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Oe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Mc.origin.copy(this.object.position),Mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mc.direction))<K2?this.object.lookAt(this.target):(Sg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mc.intersectPlane(Sg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(bg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?wn/60*this.autoRotateSpeed*t:wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Oe.copy(i).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Q,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function j2(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function J2(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Q2(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bx),this.state=ge.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function tC(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ge.DOLLY;break;case pr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ge.ROTATE}break;case pr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(ym)}function eC(s){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function nC(s){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(s.preventDefault(),this.dispatchEvent(ym),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(bx))}function iC(s){this.enabled!==!1&&this._handleKeyDown(s)}function sC(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ge.TOUCH_ROTATE;break;case ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ge.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(ym)}function rC(s){switch(this._trackPointer(s),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ge.NONE}}function oC(s){this.enabled!==!1&&s.preventDefault()}function aC(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lC(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class cC{constructor(){this._objects=new Map,this._properties=new Map,this._legends=new Map,this._tickers=new Map}register(t,e){this._objects.set(t,e)}resolve(t){if(typeof t!="string")return t;const e=this._objects.get(t);if(!e)throw new Error(`Registry: '${t}' not registered`);return e}tryResolve(t){return typeof t!="string"?t:this._objects.get(t)??null}has(t){return this._objects.has(t)}registerProperty(t,e,n){this._properties.set(`${t}.${e}`,n)}resolveProperty(t,e){return this._properties.get(`${t}.${e}`)??null}registerLegend(t,e){this._legends.set(t,e)}resolveLegend(t){return this._legends.get(t)??null}registerTicker(t,e){this._tickers.has(t)||this._tickers.set(t,[]),this._tickers.get(t).push(e)}getVisibleTickers(){const t=[];for(const[e,n]of this._tickers){const i=this._objects.get(e);i&&i.visible!==!1&&t.push({name:e,obj:i,fns:n})}return t}}class hC{constructor(t={}){this._defs=new Map;for(const[e,n]of Object.entries(t))this._defs.set(e,new Map(Object.entries(n)))}resolve(t,e){return typeof e=="string"?this._defs.get(t)?.get(e)??null:e}isSameProp(t,e){return typeof t=="string"&&typeof e=="string"&&t===e}getState(t,e){return this._defs.get(t)?.get(e)??null}createReadOnlyView(t,e){const n=this.getState(t,e);return n?new Proxy(n,{get(i,r){return i[r]},set(i,r){throw new Error(`PropRegistry: cannot write '${r}' on read-only prop '${e}' (type '${t}')`)}}):null}createSlavedCopy(t,e,n=[]){const i=this.getState(t,e);if(!i)return null;const r={...i};return{data:r,sync(){for(const o of n)r[o]=i[o]}}}}function uC(s){return s}function dC(s){return s*s}function fC(s){return s*(2-s)}function wx(s){return s<.5?2*s*s:-1+(4-2*s)*s}function pC(s){return s*s*s*(s*(s*6-15)+10)}const mC={linear:uC,easeIn:dC,easeOut:fC,easeInOut:wx,quinticInOut:pC};function sa(s){return typeof s=="function"?s:mC[s]||wx}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ex="172",tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wg=1234567;const Ax=Math.PI/180,Tx=180/Math.PI;function gC(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function ci(s,t,e){return Math.max(t,Math.min(e,s))}function Cx(s,t){return(s%t+t)%t}function _C(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function yC(s,t,e){return s!==t?(e-s)/(t-s):0}function Rx(s,t,e){return(1-e)*s+e*t}function xC(s,t,e,n){return Rx(s,t,1-Math.exp(-e*n))}function vC(s,t=1){return t-Math.abs(Cx(s,t*2)-t)}function MC(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function bC(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function SC(s,t){return s+Math.floor(Math.random()*(t-s+1))}function wC(s,t){return s+Math.random()*(t-s)}function EC(s){return s*(.5-Math.random())}function AC(s){s!==void 0&&(wg=s);let t=wg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function TC(s){return s*Ax}function CC(s){return s*Tx}function RC(s){return(s&s-1)===0&&s!==0}function PC(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function IC(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function LC(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function DC(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function UC(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const OC={DEG2RAD:Ax,RAD2DEG:Tx,generateUUID:gC,clamp:ci,euclideanModulo:Cx,mapLinear:_C,inverseLerp:yC,lerp:Rx,damp:xC,pingpong:vC,smoothstep:MC,smootherstep:bC,randInt:SC,randFloat:wC,randFloatSpread:EC,seededRandom:AC,degToRad:TC,radToDeg:CC,isPowerOfTwo:RC,ceilPowerOfTwo:PC,floorPowerOfTwo:IC,setQuaternionFromProperEuler:LC,normalize:UC,denormalize:DC};class FC{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-a;const m=l*d+c*f+h*p+u*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,m*x);g=Math.sin(g*w)/b,a=Math.sin(a*w)/b}const y=a*x;if(l=l*g+d*y,c=c*g+f*y,h=h*g+p*y,u=u*g+_*y,g===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ci(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class me{constructor(t=0,e=0,n=0){me.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eg.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ci(this.x,t.x,e.x),this.y=ci(this.y,t.y,e.y),this.z=ci(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ci(this.x,t,e),this.y=ci(this.y,t,e),this.z=ci(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ci(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ld.copy(this).projectOnVector(t),this.sub(Ld)}reflect(t){return this.sub(Ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ci(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ld=new me,Eg=new FC;class Pu{constructor(t=new me(1/0,1/0,1/0),e=new me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bc.copy(n.boundingBox)),bc.applyMatrix4(t.matrixWorld),this.union(bc)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ra),Sc.subVectors(this.max,ra),ro.subVectors(t.a,ra),oo.subVectors(t.b,ra),ao.subVectors(t.c,ra),ps.subVectors(oo,ro),ms.subVectors(ao,oo),$s.subVectors(ro,ao);let e=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-$s.z,$s.y,ps.z,0,-ps.x,ms.z,0,-ms.x,$s.z,0,-$s.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-$s.y,$s.x,0];return!Dd(e,ro,oo,ao,Sc)||(e=[1,0,0,0,1,0,0,0,1],!Dd(e,ro,oo,ao,Sc))?!1:(wc.crossVectors(ps,ms),e=[wc.x,wc.y,wc.z],Dd(e,ro,oo,ao,Sc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Oi=[new me,new me,new me,new me,new me,new me,new me,new me],Zn=new me,bc=new Pu,ro=new me,oo=new me,ao=new me,ps=new me,ms=new me,$s=new me,ra=new me,Sc=new me,wc=new me,qs=new me;function Dd(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){qs.fromArray(s,r);const a=i.x*Math.abs(qs.x)+i.y*Math.abs(qs.y)+i.z*Math.abs(qs.z),l=t.dot(qs),c=e.dot(qs),h=n.dot(qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const NC=new Pu,oa=new me,Ud=new me;class zC{constructor(t=new me,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):NC.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oa.subVectors(t,this.center);const e=oa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(oa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oa.copy(t.center).add(Ud)),this.expandByPoint(oa.copy(t.center).sub(Ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ex}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ex);function Px(s,t,e=1.2){const n=Array.isArray(s)?s:[s],i=new Pu;for(const c of n)i.expandByObject(c);const r=new zC;i.getBoundingSphere(r);const o=OC.degToRad(t.fov),a=r.radius/Math.sin(o/2),l=r.radius/Math.sin(Math.atan(Math.tan(o/2)*t.aspect));return Math.max(a,l)*e}function Ix(s){const t=Array.isArray(s)?s:[s],e=new Pu;for(const i of t)e.expandByObject(i);const n=new me;return e.getCenter(n),n}class BC{constructor(t){this._registry=t.registry,this._propRegistry=t.propRegistry,this._controls=t.controls,this._camera=t.camera,this._orthoCamera=t.orthoCamera??null,this._fromScene=t.fromScene,this._toScene=t.toScene,this._transition=t.transition,this._reverse=t.reverse,this._sameCamera=t.sameCamera??!1,this._duration=t.transition.duration??600,this._easing=sa(t.transition.easing),this._startTime=null,this._complete=!1,this._completeCalled=!1,this._tracks=[],this._visibilityApplied=!1,this._ctx=null,this._slavedCopies=[],this._tempObjects=[],this._scene=t.scene??null,this._buildTracks(),this._buildCtx()}get isComplete(){return this._complete}_buildTracks(){const e=this._transition.tracks??"auto";if(e==="auto"){this._buildAutoTracks();return}for(const r of e)switch(r.type){case"uniform":this._addUniformTrack(r);break;case"property":this._addPropertyTrack(r);break;case"crossfade":this._addCrossfadeTrack(r);break;case"camera":this._sameCamera||this._addCameraTrack(r);break}!this._sameCamera&&!e.some(r=>r.type==="camera")&&this._addCameraTrack({});const n=new Set,i=new Set;for(const r of e)if(r.type==="crossfade"){for(const o of r.fadeOut??[])n.add(o);for(const o of r.fadeIn??[])i.add(o)}this._addAutoVisibilityCrossfade(n,i)}_buildAutoTracks(){const t=this._toScene.uniforms??{},e=this._fromScene.uniforms??{};for(const[r,o]of Object.entries(t))for(const[a,l]of Object.entries(o)){const c=e[r]?.[a];c!=null&&c!==l?this._addUniformTrack({target:r,uniform:a,from:c,to:l}):c==null&&this._addUniformTrack({target:r,uniform:a,to:l})}const n=this._toScene.properties??{},i=this._fromScene.properties??{};for(const[r,o]of Object.entries(n))for(const[a,l]of Object.entries(o)){const c=i[r]?.[a];c!=null&&c!==l?this._addPropertyTrack({target:r,property:a,from:c,to:l}):c==null&&this._addPropertyTrack({target:r,property:a,to:l})}this._addAutoVisibilityCrossfade(new Set,new Set),this._sameCamera||this._addCameraTrack({})}_addUniformTrack(t){const e=this._registry.tryResolve(t.target);if(!e||!e.material?.uniforms?.[t.uniform])return;const n=e.material.uniforms[t.uniform],i=t.from??n.value,r=t.to??this._getSceneUniform(this._toScene,t.target,t.uniform)??i,o=sa(t.easing??this._transition.easing);this._tracks.push({type:"uniform",apply:a=>{const l=o(a);n.value=i+(r-i)*l},snap:()=>{n.value=r}})}_addPropertyTrack(t){const e=this._registry.resolveProperty(t.target,t.property);if(!e)return;const n=t.from??this._getSceneProperty(this._fromScene,t.target,t.property)??0,i=t.to??this._getSceneProperty(this._toScene,t.target,t.property)??0,r=sa(t.easing??this._transition.easing);this._tracks.push({type:"property",apply:o=>{e(n+(i-n)*r(o))},snap:()=>{e(i)}})}_addCrossfadeTrack(t){const e=sa(t.easing??this._transition.easing),n=this._reverse?t.fadeIn??[]:t.fadeOut??[],i=this._reverse?t.fadeOut??[]:t.fadeIn??[],r=n.map(f=>this._registry.tryResolve(f)).filter(Boolean),o=i.map(f=>this._registry.tryResolve(f)).filter(Boolean),a=new Map,l=f=>f.uniforms?.uOpacity!=null,c=f=>l(f)?f.uniforms.uOpacity.value:f.opacity,h=(f,p)=>{l(f)?f.uniforms.uOpacity.value=p:f.opacity=p},u=f=>{f.traverse(p=>{p.material&&!a.has(p.material)&&a.set(p.material,c(p.material))})},d=f=>{f.traverse(p=>{if(p.material&&!a.has(p.material)){const _=p.material._baseOpacity??(c(p.material)||1);a.set(p.material,_)}})};for(const f of r)u(f);for(const f of o)d(f);for(const f of o)f.visible=!0,f.traverse(p=>{p.material&&h(p.material,0)});this._tracks.push({type:"crossfade",apply:f=>{const p=e(f);for(const _ of r)_.visible=1-p>.01,_.traverse(g=>{if(g.material){const m=a.get(g.material)??1;h(g.material,m*(1-p))}});for(const _ of o)_.visible=p>.01,_.traverse(g=>{if(g.material){const m=a.get(g.material)??1;h(g.material,m*p)}})},snap:()=>{for(const f of r)f.visible=!1,f.traverse(p=>{p.material&&h(p.material,a.get(p.material)??1)});for(const f of o)f.visible=!0,f.traverse(p=>{p.material&&h(p.material,a.get(p.material)??1)})}})}_addCameraTrack(t){const e=sa(t.easing??this._transition.easing),n=this._toScene.cameraType==="orthographic",i=this._propRegistry?this._propRegistry.resolve("camera",this._toScene.camera)??{}:this._toScene.camera??{};let r=null,o=null,a=null;if(i.target){const u=this._registry.tryResolve(i.target);u&&(r=u.isVector3?u:null)}if(i.frame){const u=this._registry.tryResolve(i.frame);if(u){const d=i.framePadding??1.2;o=Px(u,this._camera,d),r||(r=Ix(u))}}else i.zoom!=null&&(o=i.zoom);if(i.position){const u=this._registry.tryResolve(i.position);a=u?.isVector3?u.clone():i.position?.clone?.()}if(r||(r=this._controls.target.clone()),n&&this._orthoCamera){const u=this._orthoCamera.zoom,d=o??1,f=this._controls.target.clone();this._tracks.push({type:"camera",apply:p=>{const _=e(p);this._controls.target.lerpVectors(f,r,_),this._orthoCamera.zoom=u+(d-u)*_,this._orthoCamera.updateProjectionMatrix()},snap:()=>{this._controls.target.copy(r),this._orthoCamera.zoom=d,this._orthoCamera.updateProjectionMatrix()}});return}!a&&o==null&&(o=this._camera.position.distanceTo(this._controls.target));const l=this._controls.target.clone(),c=this._camera.position.clone(),h=c.distanceTo(l);this._tracks.push({type:"camera",apply:u=>{const d=e(u);if(this._controls.target.lerpVectors(l,r,d),a)this._camera.position.lerpVectors(c,a,d);else{const f=this._camera.position.clone().sub(this._controls.target),p=h+(o-h)*d;f.normalize().multiplyScalar(p),this._camera.position.copy(this._controls.target).add(f)}},snap:()=>{if(this._controls.target.copy(r),a)this._camera.position.copy(a);else{const u=this._camera.position.clone().sub(this._controls.target);u.normalize().multiplyScalar(o),this._camera.position.copy(this._controls.target).add(u)}}})}_addAutoVisibilityCrossfade(t,e){const n=new Set(this._fromScene.visible??[]),i=new Set(this._toScene.visible??[]),r=[...n].filter(a=>!i.has(a)&&!t.has(a)),o=[...i].filter(a=>!n.has(a)&&!e.has(a));if(r.length||o.length){const a=this._reverse;this._reverse=!1,this._addCrossfadeTrack({fadeOut:r,fadeIn:o}),this._reverse=a}this._hasCrossfade=this._tracks.some(a=>a.type==="crossfade")}_getSceneUniform(t,e,n){return t.uniforms?.[e]?.[n]??null}_getSceneProperty(t,e,n){return t.properties?.[e]?.[n]??null}_buildCtx(){const t=this._transition;if(!t.onStart&&!t.onUpdate&&!t.onComplete)return;const e={},n={};if(this._propRegistry){if(t.props){for(const a of t.props)for(const[l,c]of this._propRegistry._defs)if(c.has(a)){e[a]=this._propRegistry.createReadOnlyView(l,a);break}}if(t.slavedProps){for(const[a,l]of Object.entries(t.slavedProps))for(const[c,h]of this._propRegistry._defs)if(h.has(a)){const u=this._propRegistry.createSlavedCopy(c,a,l);u&&(n[a]=u.data,this._slavedCopies.push(u));break}}}const i=this._registry,r=this._tempObjects,o=this._scene;this._ctx={t:0,elapsed:0,dt:0,props:e,clones:n,registry:i,fromScene:this._fromScene,toScene:this._toScene,show(a){const l=i.tryResolve(a);l&&(l.visible=!0)},hide(a){const l=i.tryResolve(a);l&&(l.visible=!1)},load(a,l){i.register(a,l),o&&o.add(l),l.visible=!0,r.push({name:a,obj:l})}}}_syncCtx(t,e,n){if(this._ctx){for(const i of this._slavedCopies)i.sync();this._ctx.t=t,this._ctx.elapsed=e,this._ctx.dt=n}}_cleanupTempObjects(){for(const{name:t,obj:e}of this._tempObjects)this._scene&&this._scene.remove(e);this._tempObjects=[]}update(t){if(this._complete)return;const e=this._startTime==null;e&&(this._startTime=t,this._transition.onStart&&this._ctx&&(this._syncCtx(0,t,0),this._transition.onStart(this._ctx)));const n=(t-this._startTime)*1e3,i=Math.min(1,n/this._duration),r=e?0:t-this._ctx?.elapsed;for(const o of this._tracks)o.apply(i);this._transition.onUpdate&&this._ctx&&(this._syncCtx(i,t,r),this._transition.onUpdate(i,this._ctx)),i>=1&&this.snap()}snap(){for(const t of this._tracks)t.snap();!this._completeCalled&&this._transition.onComplete&&this._ctx&&(this._completeCalled=!0,this._syncCtx(1,this._ctx.elapsed,0),this._transition.onComplete(this._ctx)),this._cleanupTempObjects(),this._complete=!0}}class kC{constructor(t,e,{idleDelay:n=1,easeRate:i=2,orthoCamera:r}={}){this._camera=t,this._orthoCamera=r??null,this._activeCamera=t,this._controls=e,this._idleDelay=n,this._easeRate=i,this._target=new me,this._zoom=null,this._position=null,this._isOrtho=!1,this._state="idle",this._idleTimer=0,this._autoRotatePaused=!1,this.onInterrupt=null,this._pointerDown=!1,this._onStart=()=>{this._state==="transitioning"&&this.onInterrupt&&this.onInterrupt(),this._pointerDown=!0,this._state="user",this._idleTimer=0,e.autoRotate=!1,e.enabled=!0},this._onEnd=()=>{this._pointerDown=!1,this._state==="user"&&(this._idleTimer=0)},e.addEventListener("start",this._onStart),e.addEventListener("end",this._onEnd)}get state(){return this._state}get target(){return this._target}get zoom(){return this._zoom}get activeCamera(){return this._activeCamera}get orthoCamera(){return this._orthoCamera}get isOrtho(){return this._isOrtho}setActiveCameraType(t){this._isOrtho=t==="orthographic",this._activeCamera=this._isOrtho&&this._orthoCamera?this._orthoCamera:this._camera}get autoRotatePaused(){return this._autoRotatePaused}set autoRotatePaused(t){this._autoRotatePaused=t,this._controls.autoRotate=!t&&this._state==="idle"}setKeyframe({target:t,zoom:e,position:n,immediate:i=!1}={}){t&&(this._target.copy(t),i&&this._controls.target.copy(t)),n?(this._position=n.clone(),this._zoom=null,i&&this._activeCamera.position.copy(n)):e!=null?(this._position=null,this._zoom=e,i&&this._snapZoom(e)):(this._position=null,this._zoom=null)}beginTransition(){this._state="transitioning",this._controls.autoRotate=!1,this._controls.enabled=!1}endTransition(){this._state="idle",this._isOrtho?(this._controls.enabled=!1,this._controls.autoRotate=!1):(this._controls.enabled=!0,this._controls.autoRotate=!this._autoRotatePaused)}update(t){if(this._state==="transitioning")return;if(this._state==="user"){this._pointerDown||(this._idleTimer+=t,this._idleTimer>=this._idleDelay&&(this._state="idle",this._controls.autoRotate=!this._autoRotatePaused));return}const e=1-Math.exp(-this._easeRate*t);if(this._controls.target.lerp(this._target,e),this._isOrtho&&this._orthoCamera&&this._zoom!=null)this._orthoCamera.zoom+=(this._zoom-this._orthoCamera.zoom)*e,this._orthoCamera.updateProjectionMatrix();else if(this._position)this._activeCamera.position.lerp(this._position,e);else if(this._zoom!=null){const n=this._activeCamera.position.clone().sub(this._controls.target),i=n.length();if(i>.001){const r=i+(this._zoom-i)*e;n.normalize().multiplyScalar(r),this._activeCamera.position.copy(this._controls.target).add(n)}}}_snapZoom(t){if(this._isOrtho&&this._orthoCamera)this._orthoCamera.zoom=t,this._orthoCamera.updateProjectionMatrix();else{const e=this._activeCamera.position.clone().sub(this._controls.target);e.length()>.001&&(e.normalize().multiplyScalar(t),this._activeCamera.position.copy(this._controls.target).add(e))}}dispose(){this._controls.removeEventListener("start",this._onStart),this._controls.removeEventListener("end",this._onEnd)}}function GC(s){const{scenes:t,transitions:e=[],controls:n,camera:i,orthoCamera:r,navContainer:o}=s,a=new cC,l=new hC(s.props),c={...s.directorOpts,orthoCamera:r},h=new kC(i,n,c);h.onInterrupt=()=>{if(d&&!d.isComplete){d.snap();const $=f;f=null,d=null,$&&F($);const G=u>=0?t[u]:null;G&&!p&&h.setKeyframe(H(G)),_=null,g=null}};let u=-1,d=null,f=null,p=!1,_=null,g=null;const m=new Set,x=new Map;function v($,G){return`${$}→${G}`}for(const $ of e){const G=$.direction??"both";(G==="both"||G==="forward")&&x.set(v($.from,$.to),{def:$,reverse:!1}),G==="both"&&x.set(v($.to,$.from),{def:$,reverse:!0}),G==="reverse"&&x.set(v($.to,$.from),{def:$,reverse:!0})}function y($,G){return x.get(v($,G))??null}function b($){if(!$.props)return null;const G={};for(const[J,ot]of Object.entries($.props))if(typeof ot=="string"){const ct=l.getState(J,ot);ct&&(G[J]=ct)}return Object.keys(G).length>0?G:null}function w(){const $=new Map(t.map(J=>[J.name,J])),G=[];for(const J of e)if($.has(J.from)||G.push(`Transition references unknown scene '${J.from}'`),$.has(J.to)||G.push(`Transition references unknown scene '${J.to}'`),!(!$.has(J.from)||!$.has(J.to))){if(J.props)for(const ot of J.props){let ct=!1;for(const[zt,nt]of l._defs)if(nt.has(ot)){ct=!0;break}ct||G.push(`Transition ${J.from}→${J.to}: prop '${ot}' not found in any prop type`)}if(J.slavedProps)for(const ot of Object.keys(J.slavedProps)){let ct=!1;for(const[zt,nt]of l._defs)if(nt.has(ot)){ct=!0;break}ct||G.push(`Transition ${J.from}→${J.to}: slavedProp '${ot}' not found in any prop type`)}}if(G.length>0){const J=`Scene manager prop validation errors:
`+G.join(`
`);throw console.error(J),new Error(J)}}w();const E=new Set;for(const $ of t){const G=$.panels??$.showPanels;G&&G.forEach(J=>E.add(J))}const T={};function S($){clearTimeout(T[$]);const G=document.getElementById($);G&&(G.classList.remove("visible"),T[$]=setTimeout(()=>{G.style.display="none"},400))}function M($){clearTimeout(T[$]);const G=document.getElementById($);G&&(G.style.display="block",requestAnimationFrame(()=>G.classList.add("visible")))}let P=[],O=null;o&&(O=document.createElement("div"),O.className="nav-dots",o.appendChild(O),t.forEach(($,G)=>{const J=document.createElement("div");J.className="nav-dot",J.title=$.name,J.addEventListener("click",()=>K(G)),O.appendChild(J),P.push(J)}));function U(){P.forEach(($,G)=>$.classList.toggle("active",G===u))}function D($){$.code==="ArrowRight"&&($.preventDefault(),rt()),$.code==="ArrowLeft"&&($.preventDefault(),xt())}window.addEventListener("keydown",D);function z(){const $=new Set;for(const G of t)if(G.visible)for(const J of G.visible)$.add(J);return $}function F($){const G=new Set($.visible??[]);for(const ot of z()){const ct=a.tryResolve(ot);ct&&(ct.visible=G.has(ot))}const J=d?._transition;if(J?.keepVisible)for(const ot of J.keepVisible){const ct=a.tryResolve(ot);ct&&(ct.visible=!0)}for(const ot of G){const ct=a.tryResolve(ot);ct&&ct.traverse(zt=>{zt.visible&&zt.material?.uniforms?.uOpacity&&(zt.material.uniforms.uOpacity.value=1)})}}function X($){if($.uniforms)for(const[G,J]of Object.entries($.uniforms)){const ot=a.tryResolve(G);if(ot?.material?.uniforms)for(const[ct,zt]of Object.entries(J))ot.material.uniforms[ct]&&(ot.material.uniforms[ct].value=zt)}if($.properties)for(const[G,J]of Object.entries($.properties))for(const[ot,ct]of Object.entries(J)){const zt=a.resolveProperty(G,ot);zt&&zt(ct)}if($.legend){const G=a.resolveLegend($.legend);G&&G();const J=document.getElementById("legend");J&&(J.style.display="")}else if($.legend===null){const G=document.getElementById("legend");G&&(G.style.display="none")}}function H($){const G=l.resolve("camera",$.camera)??{},J={};if(G.target){const ot=a.tryResolve(G.target);ot?.isVector3&&(J.target=ot)}if(G.frame){const ot=a.tryResolve(G.frame);if(ot){const ct=G.framePadding??1.2;J.zoom=Px(ot,i,ct),J.target||(J.target=Ix(ot))}}else G.zoom!=null&&(J.zoom=G.zoom);if(G.position){const ot=a.tryResolve(G.position);J.position=ot?.isVector3?ot:G.position}return J}function V(){const $=f;f=null,d=null,$&&F($);const G=u>=0?t[u]:null;if(G&&!p){const J=G.cameraType==="orthographic";h.setKeyframe({...H(G),immediate:J})}h.endTransition()}function K($,{force:G=!1}={}){const J=Math.max(0,Math.min(t.length-1,$));if(J===u&&!G)return;const ot=u>=0?t[u]:null,ct=t[J];p=ot!=null&&l.isSameProp(ot.camera,ct.camera),d&&!d.isComplete&&(d.snap(),V()),_=ot,g=ot?b(ot):null,u=J,U();for(const it of E)S(it);const zt=ct.panels??ct.showPanels;if(zt)for(const it of zt)M(it);if(ct.overlays)for(const[it,vt]of Object.entries(ct.overlays)){const mt=document.getElementById(it);mt&&(mt.innerHTML=vt)}const nt=ot?y(ot.name,ct.name):null,dt=nt?.def??{tracks:"auto",duration:600,easing:"easeInOut"},L=nt?.reverse??!1;if(ot){const it=new Set(ot.visible??[]),vt=new Set(ct.visible??[]),mt=[...it].some(Ut=>!vt.has(Ut))||[...vt].some(Ut=>!it.has(Ut));if(dt.deferVisibility||mt){if(dt.keepVisible)for(const Ut of dt.keepVisible){const Mt=a.tryResolve(Ut);Mt&&(Mt.visible=!0)}f=ct}else F(ct)}else F(ct);const Lt=ct.cameraType??"perspective";if(h.setActiveCameraType(Lt),ot)h.beginTransition(),d=new BC({fromScene:ot,toScene:ct,transition:dt,registry:a,propRegistry:l,controls:n,camera:i,orthoCamera:r,reverse:L,sameCamera:p,scene:s.scene});else{X(ct);const it=H(ct);h.setKeyframe({...it,immediate:!0})}if(ct.legend){const it=a.resolveLegend(ct.legend);it&&it();const vt=document.getElementById("legend");vt&&(vt.style.display="")}else if(ct.legend===null){const it=document.getElementById("legend");it&&(it.style.display="none")}ct.onActivate&&!m.has(ct.name)&&(m.add(ct.name),ct.onActivate()),ot?.onLeave&&ot.onLeave(ct,ut),ct.onEnter&&ct.onEnter(ot,ut)}function rt(){K(u+1)}function xt(){K(u-1)}function Gt($,G){const J=d&&!d.isComplete;J&&(_?.onUpdate&&_.onUpdate($,G,g),d.update($),d.isComplete&&(V(),_=null,g=null)),h.update(G);for(const{name:ot,obj:ct,fns:zt}of a.getVisibleTickers())for(const nt of zt)nt($,G,ct);if(!J){const ot=u>=0?t[u]:null;ot?.onUpdate&&ot.onUpdate($,G,b(ot))}}function j(){window.removeEventListener("keydown",D),h.dispose(),O&&O.remove()}const ut={goTo:K,next:rt,prev:xt,update:Gt,dispose:j,register:($,G)=>a.register($,G),registerProperty:($,G,J)=>a.registerProperty($,G,J),registerLegend:($,G)=>a.registerLegend($,G),registerTicker:($,G)=>a.registerTicker($,G),get director(){return h},get activeCamera(){return h.activeCamera},get currentIndex(){return u},get currentScene(){return t[u]},get isTransitioning(){return d!=null&&!d.isComplete}};return ut}const VC=document.getElementById("overlays");function HC(){Ag("title",{top:"2rem",left:"2rem",color:"#fff",fontSize:"1.5rem",fontFamily:"system-ui, sans-serif",textShadow:"0 2px 8px rgba(0,0,0,0.7)"},"Three.js Presentation"),Ag("subtitle",{top:"4.2rem",left:"2rem",color:"rgba(255,255,255,0.6)",fontSize:"0.9rem",fontFamily:"system-ui, sans-serif",textShadow:"0 1px 6px rgba(0,0,0,0.5)"},"")}function Ag(s,t,e=""){const n=document.createElement("div");return n.id=s,Object.assign(n.style,{position:"absolute",...t}),n.innerHTML=e,VC.appendChild(n),n}const Te=s=>`/portfolio/example_3d/${String(s).replace(/^\//,"")}`,WC={name:"title",visible:[],cameraType:"orthographic",overlays:{title:"",subtitle:""},onEnter(){const s=document.getElementById("title-page");s&&(s.style.display="flex");const t=document.getElementById("legend");t&&(t.style.display="none")},onLeave(){const s=document.getElementById("title-page");s&&(s.style.display="none");const t=document.getElementById("legend");t&&(t.style.display="")}};function xe(s,t=1){return Math.round(Math.log2(s)*t*10)/10}const ws=[`Samples from SRA;
2,844 samples · 48.5M contigs`,`Taxonomy from Metabuli;
65K GTDB taxa`,`Mobile elements from geNomad;
153K viral · 229K plasmid`,`Viral contigs from VirSorter2;
55K contigs`,`ORFs from Prodigal;
48.5M ORFs`,`KO terms from KofamScan;
12,425 terms`,`Domains from InterProScan;
29,785 IPR terms`,`EC numbers from DeepEC;
5,000 classes`,`BGCs from antiSMASH;
500 cluster types`,`ncRNA from Bakta;
200 element types`,`Orthologs from EggNOG-mapper;
22,000 OGs`,`TF families from PredicTF;
26 families`,`TF calls from DeepTFactor;
binary`,`Reaction ΔG° from eQuilibrator;
34,632 EC-reaction pairs`,`Promoters from PromoTech;
50 element types`,`i30 protein clusters from MMseqs2;
301,933 centroids`,`i95 protein clusters from MMseqs2;
1,951,452 clusters`,`Bins from ensemble binning;
44,419 bins`,`Quality from CheckM;
13,363 HQ · 21,081 MQ`,`Taxonomy from GTDB-Tk;
34,444 MAGs`,`Stable MAG clusters from ANI;
6 thresholds · 21,081 MAGs`,`Expression from GEO + SRA;
192 datasets · 3,761 samples`,`Environmental context from LLM;
habitat · biome · conditions`,`Metal tolerance from BacMet;
13 metals · 1,996 samples`,`Physiology from BacDive;
4,342 species profiles`,`Links to culture collections;
NIES · PCC · UHCC · UTEX`,`XRefs to prior knowledge;
CyanoOmicsDB · IMG`,`Publications;
PubMed · DOI linkage`],ee={acquisition:"rgba(100, 160, 255, 0.8)",contigClass:"rgba(200, 100, 200, 0.8)",contigAnnot:"rgba(0, 200, 150, 0.8)",orfAnnot:"rgba(220, 180, 50, 0.8)",clustering:"rgba(220, 80, 80, 0.8)",binning:"rgba(100, 120, 220, 0.8)",metadata:"rgba(120, 200, 80, 0.8)"},Lx=[ee.acquisition,ee.contigClass,ee.contigClass,ee.contigClass,ee.contigAnnot,ee.orfAnnot,ee.orfAnnot,ee.orfAnnot,ee.orfAnnot,ee.orfAnnot,ee.orfAnnot,ee.orfAnnot,ee.orfAnnot,ee.orfAnnot,ee.contigClass,ee.clustering,ee.clustering,ee.binning,ee.binning,ee.binning,ee.binning,ee.orfAnnot,ee.metadata,ee.metadata,ee.metadata,ee.metadata,ee.metadata,ee.metadata];function XC(s,t){const n=Array.from({length:t},()=>[]),i=Array.from({length:t},()=>[]);for(const[m,x,v]of s)n[m].push({tgt:x,val:v}),i[x].push({src:m,val:v});const r=new Float64Array(t),o=new Float64Array(t);for(const[m,x,v]of s)r[x]+=v,o[m]+=v;const a=5,l=Array.from({length:t},(m,x)=>Math.sqrt(Math.max(r[x],o[x],a))),c=new Int32Array(t);for(const[m,x]of s)c[x]=Math.max(c[x],c[m]+1);const h=Math.max(...c)||1,u=Array.from(c,m=>.01+m/h*(1-2*.01)),d=Array.from({length:h+1},()=>[]);for(let m=0;m<t;m++)d[c[m]].push(m);const f=new Map;s.forEach(([m,x],v)=>{const y=`${m},${x}`;f.has(y)||f.set(y,v)});const p=new Array(t);let _=0;const g=d[0].reduce((m,x)=>m+l[x],0);for(const m of d[0])p[m]=.01+(_+l[m]/2)/g*(1-2*.01),_+=l[m];for(let m=1;m<=h;m++){const x=d[m],v=new Map,y=new Map;for(const E of x){let T=0,S=0,M=1/0;for(const{src:P,val:O}of i[E]){T+=p[P]*O,S+=O;const U=f.get(`${P},${E}`)??1/0;M=Math.min(M,U)}v.set(E,S>0?T/S:.5),y.set(E,M)}x.sort((E,T)=>{const S=v.get(E)-v.get(T);return Math.abs(S)>.001?S:y.get(E)-y.get(T)});const b=x.reduce((E,T)=>E+l[T],0);let w=0;for(const E of x)p[E]=.01+(w+l[E]/2)/b*(1-2*.01),w+=l[E]}return{x:u,y:p}}const Af=xe(12425,1),Tf=xe(29785,.925),Cf=xe(5e3,.99),Rf=xe(22e3,.42),Pf=xe(26,1),If=xe(2,.985),Lf=xe(500,.8),Df=xe(200,.9),Uf=xe(34632,.488),Of=xe(65e3),Ff=xe(382e3),Nf=xe(55e3),zf=xe(50,.44),Bf=xe(34444),kf=xe(34444,.775),Gf=xe(21081),Vf=xe(301933),Hf=xe(1951452),Wf=xe(192),Xf=xe(2380,.837),$f=xe(13),qf=xe(4342),Yf=xe(1497),Zf=xe(78821),Kf=xe(500),$C=+(Af+Tf+Cf+Rf+Pf+If+Lf+Df+Uf).toFixed(1),qC=+(Vf+Hf).toFixed(1),jf=+($C+qC).toFixed(1),Jf=+(Bf+kf+Gf).toFixed(1),YC=+(Xf+$f+qf+Yf+Zf+Kf).toFixed(1);+(jf+Of+Ff+Nf+zf+Jf+Wf+YC).toFixed(1);const Hn=[[0,1,Of,`${Of} bits — log₂(65,000 GTDB taxa)`],[0,2,Ff,`${Ff} bits — log₂(382,000 viral + plasmid elements)`],[0,3,Nf,`${Nf} bits — log₂(55,000 viral contigs)`],[0,14,zf,`${zf} bits — log₂(50 promoter types) × 44%`],[0,4,jf,`${jf} bits — 48.5M ORFs (annotations + clustering)`],[0,21,Wf,`${Wf} bits — 192 GEO/SRA expression datasets`],[0,17,Jf,`${Jf} bits — 44,419 bins from 3 tools`],[0,22,Xf,`${Xf} bits — LLM-extracted environmental context`],[0,23,$f,`${$f} bits — BacMet metal tolerance (13 metals)`],[0,24,qf,`${qf} bits — BacDive physiology (4,342 species)`],[0,25,Yf,`${Yf} bits — 1,497 reference organisms`],[0,26,Zf,`${Zf} bits — NCBI + GOLD + IMG cross-references`],[0,27,Kf,`${Kf} bits — PubMed / DOI linkage`],[4,5,Af,`${Af} bits — log₂(12,425 KO) × 100%`],[4,6,Tf,`${Tf} bits — log₂(29,785 IPR) × 92%`],[4,7,Cf,`${Cf} bits — log₂(5,000 EC) × 99%`],[4,8,Lf,`${Lf} bits — log₂(500 BGC types) × 80%`],[4,9,Df,`${Df} bits — log₂(200 ncRNA types) × 90%`],[4,10,Rf,`${Rf} bits — log₂(22,000 OG) × 42%`],[4,11,Pf,`${Pf} bits — log₂(26 TF families) × 100%`],[4,12,If,`${If} bits — log₂(2) × 98%`],[4,13,Uf,`${Uf} bits — log₂(34,632 reactions) × 49%`],[4,15,Vf,`${Vf} bits — log₂(301,933 centroids)`],[4,16,Hf,`${Hf} bits — log₂(1,951,452 clusters)`],[17,18,Bf,`${Bf} bits — 34,444 MAGs quality-assessed`],[17,19,kf,`${kf} bits — 34,444 MQ+ MAGs classified`],[17,20,Gf,`${Gf} bits — ANI clustering at 79–99%`]],Dx=28,Ux=20,ZC=.7,{x:Ra,y:Yi}=XC(Hn,ws.length);let pa;{const s=ws.length,t=[...new Set(Ra)].sort((P,O)=>P-O),e=new Map(t.map((P,O)=>[P,O])),n=Ra.map(P=>e.get(P)),i=12,o=window.innerWidth*.6/window.innerHeight,a=i*o,l=10,c=6.5,h=a-l,u=h-c,f=[u-c,u,h].map(P=>P/Dx+.5);for(let P=0;P<s;P++)Ra[P]=f[n[P]]??f[0];const p=Array.from({length:t.length},()=>[]);for(let P=0;P<s;P++)p[n[P]].push(P);const _=new Float64Array(s),g=new Float64Array(s);for(const[P,O,U]of Hn)g[P]+=U,_[O]+=U;const m=Array.from({length:s},(P,O)=>Math.max(_[O],g[O],.5)),x=24,v=.55,y=1.1,b=1.8,w=.1;let E=1/0;for(const P of p){const O=P.reduce((U,D)=>U+m[D],0);O<=0||(E=Math.min(E,x*v/O))}const T=E*ZC;pa=m.map(P=>Math.max(P*T,w));const S=new Array(s).fill(-1);for(const[P,O]of Hn)S[O]===-1&&(S[O]=P);const M=new Float64Array(s);for(const P of p[0])M[P]=0;for(let P=1;P<p.length;P++){const O=p[P];O.sort((V,K)=>{const rt=M[S[V]]??0,xt=M[S[K]]??0;return Math.abs(rt-xt)>.001?xt-rt:Yi[V]-Yi[K]});const U=[];let D=null;for(const V of O){const K=S[V];K!==D?(U.push({parent:K,children:[V]}),D=K):U[U.length-1].children.push(V)}for(const V of U)V.totalH=V.children.reduce((K,rt)=>K+pa[rt],0)+Math.max(0,V.children.length-1)*y,V.idealCenter=M[V.parent]??0;for(const V of U)V.top=V.idealCenter+V.totalH/2;for(let V=1;V<U.length;V++){const rt=U[V-1].top-U[V-1].totalH-b;U[V].top>rt&&(U[V].top=rt)}const z=U[0].top,F=U[U.length-1].top-U[U.length-1].totalH,H=-((z+F)/2);for(const V of U)V.top+=H;for(const V of U){let K=V.top;for(const rt of V.children)K-=pa[rt]/2,M[rt]=K,K-=pa[rt]/2+y}}for(let P=0;P<s;P++)Yi[P]=.5-M[P]/Ux}Hn.sort((s,t)=>{const e=Yi[s[0]]-Yi[t[0]];return Math.abs(e)>.001?e:Yi[s[1]]-Yi[t[1]]});const KC=2,Ox=Array.from({length:ws.length},()=>[]);for(const[s,t]of Hn)Ox[s].push(t);function Fx(s){const t=Ox[s];return t.length===0?1:t.reduce((e,n)=>e+Fx(n),0)}const Nx=Hn.map(([,s,t])=>t+Fx(s)*KC);function jC(s){return Lx[s].replace(/[\d.]+\)$/,"0.3)")}const ul=.4;function zx(s,t){return[(s-.5)*Dx,(.5-t)*Ux]}function Bx(s){const t=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]*)\)/);if(!t)return{color:new at(1,1,1),opacity:1};const e=new at;return e.setRGB(+t[1]/255,+t[2]/255,+t[3]/255,Ae),{color:e,opacity:t[4]!==""?+t[4]:1}}function Od(s,t,e,n,i){const r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function JC(){const s=ws.length,t=new Float64Array(s),e=new Float64Array(s);for(let i=0;i<Hn.length;i++){const[r,o]=Hn[i],a=Nx[i];e[r]+=a,t[o]+=a}const n=Array.from({length:s},(i,r)=>Math.max(t[r],e[r],.1));return{heights:pa,paddedIn:t,paddedOut:e,nodeFlow:n}}function QC(s,t,e,n){const i=ws.length,r=new Array(i);for(let c=0;c<i;c++){const[,h]=zx(Ra[c],Yi[c]);r[c]=h}const o=new Float64Array(i),a=new Float64Array(i),l=[];for(let c=0;c<Hn.length;c++){const[h,u]=Hn[c],d=Nx[c],f=d/Math.max(e[h],.01)*s[h],p=r[h]+s[h]/2-o[h],_=p-f;o[h]+=f;const g=d/Math.max(t[u],.01)*s[u],m=r[u]+s[u]/2-a[u],x=m-g;a[u]+=g,l.push({srcTop:p,srcBot:_,tgtTop:m,tgtBot:x})}return l}function t3(s,t,e,n,i,r,o){const c=new Float32Array(246),h=[],u=s+ul/2,d=t-ul/2,f=(u+d)/2;for(let x=0;x<=40;x++){const v=x/40,y=Od(v,e,e,i,i),b=Od(v,n,n,r,r),w=Od(v,u,f,f,d),E=x*2*3;if(c[E]=w,c[E+1]=y,c[E+2]=-.01,c[E+3]=w,c[E+4]=b,c[E+5]=-.01,x<40){const T=x*2,S=x*2+1,M=(x+1)*2,P=(x+1)*2+1;h.push(T,S,M,S,P,M)}}const p=new _t;p.setAttribute("position",new gt(c,3)),p.setIndex(h);const{color:_,opacity:g}=Bx(o),m=new re({color:_,opacity:Math.min(g,.35),transparent:!0,depthWrite:!1,side:Fe});return new Nt(p,m)}function e3(s,t,e,n="right"){const i=document.createElement("canvas"),r=i.getContext("2d"),o=48,a=o*1.3,l=s.split(`
`),c=10;r.font=`${o}px system-ui, sans-serif`;const h=Math.max(...l.map(m=>r.measureText(m).width));i.width=Math.ceil(h+c*2),i.height=Math.ceil(a*l.length+c*2),r.font=`${o}px system-ui, sans-serif`,r.fillStyle="#c0d0e0",r.textBaseline="top";for(let m=0;m<l.length;m++)r.fillText(l[m],c,c+m*a);const u=new Ur(i);u.minFilter=be;const d=i.width/i.height,f=1.1,p=f*d,_=new os({map:u,transparent:!0,depthTest:!1}),g=new Cs(_);return g.scale.set(p,f,1),n==="right"?g.position.set(t+ul/2+p/2+.2,e,.01):g.position.set(t-ul/2-p/2-.2,e,.01),g}function n3(){const s=new ce,{heights:t,paddedIn:e,paddedOut:n}=JC(),i=QC(t,e,n),r=ws.length,o=[];for(let a=0;a<r;a++){const[l,c]=zx(Ra[a],Yi[a]);o.push({x:l,y:c})}for(let a=0;a<r;a++){const{color:l,opacity:c}=Bx(Lx[a]),h=t[a],u=new ei(ul,h),d=new re({color:l,opacity:c,transparent:!0,side:Fe}),f=new Nt(u,d);f.position.set(o[a].x,o[a].y,0);const p=new Fr(u),_=new Yt({color:new at(1,1,1),opacity:.15,transparent:!0}),g=new te(p,_);f.add(g),s.add(f)}for(let a=0;a<Hn.length;a++){const[l,c]=Hn[a],h=jC(l),{srcTop:u,srcBot:d,tgtTop:f,tgtBot:p}=i[a],_=t3(o[l].x,o[c].x,u,d,f,p,h);_.renderOrder=-1,s.add(_)}for(let a=0;a<r;a++){if(!ws[a])continue;const l=e3(ws[a],o[a].x,o[a].y,"right");s.add(l)}return s}const i3=[["Acquisition",ee.acquisition],["Contig classification",ee.contigClass],["Gene calling",ee.contigAnnot],["ORF / expression",ee.orfAnnot],["Protein clustering",ee.clustering],["Genome binning",ee.binning],["Metadata / references",ee.metadata]];function s3(){const s=document.getElementById("legend");if(!s)return;let t="";for(const[e,n]of i3)t+=`<div class="legend-item">
      <div class="legend-dot" style="background:${n};border-radius:2px"></div>
      ${e}
    </div>`;s.innerHTML=t}const r3=`
  varying vec2 vUv;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPos;

  void main() {
    vUv = uv;
    vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,o3=`
  uniform sampler2D uDayMap;
  uniform sampler2D uNightMap;
  uniform vec3 uLightDir;      // normalised, world-space
  uniform float uSunIntensity; // from DirectionalLight.intensity
  uniform float uNightGlow;    // 0.0 = dark side is black, 1.0 = city lights
  uniform vec2  uTexelSize;    // 1.0 / texture dimensions
  // cameraPosition is injected automatically by Three.js

  varying vec2 vUv;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPos;

  // Detect water at a UV coordinate (returns 0 = land, 1 = water)
  float isWater(vec2 uv) {
    vec3 c = texture2D(uDayMap, uv).rgb;
    float lum = dot(c, vec3(0.299, 0.587, 0.114));
    float bd = c.b - max(c.r, c.g);
    return smoothstep(0.25, 0.1, lum) * smoothstep(0.0, 0.04, bd);
  }

  void main() {
    vec3 day   = texture2D(uDayMap,   vUv).rgb;
    vec3 night = texture2D(uNightMap, vUv).rgb;

    float NdotL = dot(vWorldNormal, uLightDir);

    // Soft terminator
    float dayFactor = smoothstep(-0.15, 0.35, NdotL);

    // Diffuse — driven by sun intensity
    float diffuse = max(NdotL, 0.0);
    vec3 dayLit = day * diffuse * uSunIntensity;

    // Water mask for this fragment
    float waterMask = isWater(vUv);

    // Rough specular on water only
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    vec3 halfDir = normalize(uLightDir + viewDir);
    float spec = pow(max(dot(vWorldNormal, halfDir), 0.0), 12.0);
    dayLit += vec3(spec * 0.15 * waterMask) * diffuse;

    // Coastline detection — sample neighbors and find land/water edges
    // Coastline — tight edge detection with soft falloff
    float wC = waterMask;
    float wL = isWater(vUv + vec2(-uTexelSize.x, 0.0));
    float wR = isWater(vUv + vec2( uTexelSize.x, 0.0));
    float wU = isWater(vUv + vec2(0.0,  uTexelSize.y));
    float wD = isWater(vUv + vec2(0.0, -uTexelSize.y));
    float edge = abs(wC - wL) + abs(wC - wR) + abs(wC - wU) + abs(wC - wD);
    edge = smoothstep(0.3, 1.0, edge) * 0.5;  // thinner, softer
    float coastBrightness = mix(0.12, 0.5, dayFactor);
    dayLit = mix(dayLit, vec3(coastBrightness), edge);

    // Dark side: black, or optional city-light glow
    vec3 nightLit = night * 1.4 * uNightGlow;

    vec3 final = mix(nightLit, dayLit, dayFactor);
    // Add coastline on dark side too (subtle)
    final = mix(final, vec3(0.12), edge * (1.0 - dayFactor));

    gl_FragColor = vec4(final, 1.0);
  }
`;function a3(s,t){const e=s.image?.width||4096,n=s.image?.height||2048;return new ye({uniforms:{uDayMap:{value:s},uNightMap:{value:t},uLightDir:{value:new A(0,0,0)},uSunIntensity:{value:0},uNightGlow:{value:1},uTexelSize:{value:new Q(1/e,1/n)}},vertexShader:r3,fragmentShader:o3})}const lo=3,l3=1.005,c3=1.15,h3={"salt-water":[99,110,250],"fresh-water":[0,204,150],terrestrial:[255,161,90],artificial:[239,85,59],"host-associated":[171,99,250],unknown:[100,100,100]},u3={"salt-water":"Salt Water","fresh-water":"Fresh Water",terrestrial:"Terrestrial",artificial:"Artificial","host-associated":"Host-Associated",unknown:"Unknown"};function Tg(s,t,e){const n=(90-s)*Math.PI/180,i=(t+180)*Math.PI/180;return new A(-e*Math.sin(n)*Math.cos(i),e*Math.cos(n),e*Math.sin(n)*Math.sin(i))}function d3(s,t,e,n){const i=new ce,r=new ts(lo,64,48),o=a3(t,e),a=new Nt(r,o);i.add(a);const l=new ts(lo*1.005,64,48),c=new Qp({map:n,alphaMap:n,transparent:!0,opacity:.35,depthWrite:!1,emissive:0}),h=new Nt(l,c);h.name="clouds",i.add(h);const{clusters:u}=s,d=u.length;if(d===0)return i;const f=new at(99/255,110/255,250/255),p=Math.max(...u.map(P=>P.count)),_=.02*lo,g=.08*lo,m=new ts(1,12,8),x=new re({color:f,transparent:!0,opacity:.3,depthWrite:!1,toneMapped:!1}),v=new Hp(m,x,d),y=document.createElement("canvas");y.width=128,y.height=128;const b=y.getContext("2d"),w=b.createRadialGradient(64,64,0,64,64,64);w.addColorStop(0,"rgba(99, 110, 250, 0.5)"),w.addColorStop(.3,"rgba(99, 110, 250, 0.2)"),w.addColorStop(.6,"rgba(99, 110, 250, 0.05)"),w.addColorStop(1,"rgba(99, 110, 250, 0.0)"),b.fillStyle=w,b.fillRect(0,0,128,128);const E=new Ur(y),T=new os({map:E,transparent:!0,depthWrite:!1,blending:Es,toneMapped:!1}),S=new Yt({color:f,transparent:!0,opacity:.3,depthWrite:!1}),M=new oe;for(let P=0;P<d;P++){const O=u[P],U=Tg(O.lat,O.lon,lo*l3),D=Tg(O.lat,O.lon,lo*c3),z=Math.sqrt(O.count)/Math.sqrt(p),F=_+z*(g-_);M.position.copy(D),M.scale.setScalar(F),M.updateMatrix(),v.setMatrixAt(P,M.matrix);const X=new Cs(T);X.position.copy(D),X.scale.setScalar(F*10),i.add(X);const H=new _t().setFromPoints([U,D]),V=new Mn(H,S);i.add(V)}return v.instanceMatrix.needsUpdate=!0,i.add(v),i}function f3(){const s=document.createElement("div"),t=["salt-water","fresh-water","terrestrial","artificial","host-associated"];for(const e of t){const n=h3[e],i=document.createElement("div");i.className="legend-row",i.innerHTML=`<span class="legend-dot" style="background:rgb(${n})"></span>${u3[e]}`,s.appendChild(i)}return s}const Ec=12,kx=.4,ui=new Ie(55,1,.5,500);ui.position.set(0,1,12);ui.lookAt(0,0,0);let Gx=null,un=null,Qf=null;const p3={name:"pipeline",visible:["sankey","globeGroup"],cameraType:"orthographic",camera:{target:new A(0,0,0)},onEnter(){ui.position.set(0,1,12),ui.lookAt(0,0,0),un&&un.reset();const s=document.getElementById("legend");s&&(s.style.left="auto",s.style.right="2rem"),Qf&&Qf.layers.enableAll()},onLeave(){const s=document.getElementById("legend");s&&(s.style.right="",s.style.left="2rem")},overlays:{title:"",subtitle:""},legend:"pipeline",onRender(s,t,e){const n=s.domElement.width,i=s.domElement.height,r=Math.round(n*kx);s.autoClear=!1,s.clear(),s.setScissorTest(!0),Gx&&(ui.layers.set(1),ui.aspect=r/i,ui.updateProjectionMatrix(),s.setScissor(0,0,r,i),s.setViewport(0,0,r,i),s.render(t,ui));const o=n-r,a=o/i;e.layers.set(0),e.layers.enable(2),e.left=-Ec*a,e.right=Ec*a,e.updateProjectionMatrix(),s.setScissor(r,0,o,i),s.setViewport(r,0,o,i),s.render(t,e),ui.layers.enableAll(),e.layers.enableAll();const l=n/i;e.left=-Ec*l,e.right=Ec*l,e.updateProjectionMatrix(),s.setScissorTest(!1),s.setViewport(0,0,n,i),s.autoClear=!0}};async function m3({scene:s,sm:t,orthoCamera:e,sunLight:n,renderer:i}){Qf=e,e.position.set(0,0,50);const r=i.domElement;un=new Sx(ui,r),un.enableDamping=!0,un.dampingFactor=.08,un.enablePan=!1,un.enableZoom=!1,un.enableRotate=!0,un.rotateSpeed=.5,un.onPointerDown?.bind(un),r.addEventListener("pointerdown",m=>{const x=r.getBoundingClientRect(),v=m.clientX-x.left,y=x.width*kx;v>y?un.enabled=!1:un.enabled=!0},!0);const o=new Gy,a=m=>new Promise((x,v)=>{o.load(m,y=>{y.colorSpace=Ae,x(y)},void 0,v)}),[l,c,h,u]=await Promise.all([a(Te("/img/earth_day.jpg")),a(Te("/img/earth_night.jpg")),a(Te("/img/earth_clouds.jpg")),fetch(Te("/data/globe_samples.json"))]),d=await u.json(),f=d3(d,l,c,h);f.name="globeGroup",f.visible=!1,s.add(f),Gx=f,f.traverse(m=>{m.layers.set(1)}),t.register("globeGroup",f),t.registerLegend("globe-niche",f3);const p=f.children[0];if(n&&p?.material?.uniforms){const m=p.material.uniforms;m.uLightDir.value.copy(n.position).normalize(),m.uSunIntensity.value=n.intensity}f.rotation.x=.3;const _=f.getObjectByName("clouds");t.registerTicker("globeGroup",(m,x)=>{f.rotation.y-=x*.075,_&&(_.rotation.y-=x*.02),un&&un.update()});const g=n3();g.visible=!1,s.add(g),g.traverse(m=>{m.layers.set(2)}),t.register("sankey",g),t.registerLegend("pipeline",s3)}function g3(s){var t=0,e=s.children,n=e&&e.length;if(!n)t=1;else for(;--n>=0;)t+=e[n].value;s.value=t}function _3(){return this.eachAfter(g3)}function y3(s,t){let e=-1;for(const n of this)s.call(t,n,++e,this);return this}function x3(s,t){for(var e=this,n=[e],i,r,o=-1;e=n.pop();)if(s.call(t,e,++o,this),i=e.children)for(r=i.length-1;r>=0;--r)n.push(i[r]);return this}function v3(s,t){for(var e=this,n=[e],i=[],r,o,a,l=-1;e=n.pop();)if(i.push(e),r=e.children)for(o=0,a=r.length;o<a;++o)n.push(r[o]);for(;e=i.pop();)s.call(t,e,++l,this);return this}function M3(s,t){let e=-1;for(const n of this)if(s.call(t,n,++e,this))return n}function b3(s){return this.eachAfter(function(t){for(var e=+s(t.data)||0,n=t.children,i=n&&n.length;--i>=0;)e+=n[i].value;t.value=e})}function S3(s){return this.eachBefore(function(t){t.children&&t.children.sort(s)})}function w3(s){for(var t=this,e=E3(t,s),n=[t];t!==e;)t=t.parent,n.push(t);for(var i=n.length;s!==e;)n.splice(i,0,s),s=s.parent;return n}function E3(s,t){if(s===t)return s;var e=s.ancestors(),n=t.ancestors(),i=null;for(s=e.pop(),t=n.pop();s===t;)i=s,s=e.pop(),t=n.pop();return i}function A3(){for(var s=this,t=[s];s=s.parent;)t.push(s);return t}function T3(){return Array.from(this)}function C3(){var s=[];return this.eachBefore(function(t){t.children||s.push(t)}),s}function R3(){var s=this,t=[];return s.each(function(e){e!==s&&t.push({source:e.parent,target:e})}),t}function*P3(){var s=this,t,e=[s],n,i,r;do for(t=e.reverse(),e=[];s=t.pop();)if(yield s,n=s.children)for(i=0,r=n.length;i<r;++i)e.push(n[i]);while(e.length)}function xm(s,t){s instanceof Map?(s=[void 0,s],t===void 0&&(t=D3)):t===void 0&&(t=L3);for(var e=new Hh(s),n,i=[e],r,o,a,l;n=i.pop();)if((o=t(n.data))&&(l=(o=Array.from(o)).length))for(n.children=o,a=l-1;a>=0;--a)i.push(r=o[a]=new Hh(o[a])),r.parent=n,r.depth=n.depth+1;return e.eachBefore(O3)}function I3(){return xm(this).eachBefore(U3)}function L3(s){return s.children}function D3(s){return Array.isArray(s)?s[1]:null}function U3(s){s.data.value!==void 0&&(s.value=s.data.value),s.data=s.data.data}function O3(s){var t=0;do s.height=t;while((s=s.parent)&&s.height<++t)}function Hh(s){this.data=s,this.depth=this.height=0,this.parent=null}Hh.prototype=xm.prototype={constructor:Hh,count:_3,each:y3,eachAfter:v3,eachBefore:x3,find:M3,sum:b3,sort:S3,path:w3,ancestors:A3,descendants:T3,leaves:C3,links:R3,copy:I3,[Symbol.iterator]:P3};function F3(s){return s==null?null:N3(s)}function N3(s){if(typeof s!="function")throw new Error;return s}function Cg(){return 0}function z3(s){return function(){return s}}const B3=1664525,k3=1013904223,Rg=4294967296;function G3(){let s=1;return()=>(s=(B3*s+k3)%Rg)/Rg}function V3(s){return typeof s=="object"&&"length"in s?s:Array.from(s)}function H3(s,t){let e=s.length,n,i;for(;e;)i=t()*e--|0,n=s[e],s[e]=s[i],s[i]=n;return s}function W3(s,t){for(var e=0,n=(s=H3(Array.from(s),t)).length,i=[],r,o;e<n;)r=s[e],o&&Vx(o,r)?++e:(o=$3(i=X3(i,r)),e=0);return o}function X3(s,t){var e,n;if(Fd(t,s))return[t];for(e=0;e<s.length;++e)if(Ac(t,s[e])&&Fd(ma(s[e],t),s))return[s[e],t];for(e=0;e<s.length-1;++e)for(n=e+1;n<s.length;++n)if(Ac(ma(s[e],s[n]),t)&&Ac(ma(s[e],t),s[n])&&Ac(ma(s[n],t),s[e])&&Fd(Hx(s[e],s[n],t),s))return[s[e],s[n],t];throw new Error}function Ac(s,t){var e=s.r-t.r,n=t.x-s.x,i=t.y-s.y;return e<0||e*e<n*n+i*i}function Vx(s,t){var e=s.r-t.r+Math.max(s.r,t.r,1)*1e-9,n=t.x-s.x,i=t.y-s.y;return e>0&&e*e>n*n+i*i}function Fd(s,t){for(var e=0;e<t.length;++e)if(!Vx(s,t[e]))return!1;return!0}function $3(s){switch(s.length){case 1:return q3(s[0]);case 2:return ma(s[0],s[1]);case 3:return Hx(s[0],s[1],s[2])}}function q3(s){return{x:s.x,y:s.y,r:s.r}}function ma(s,t){var e=s.x,n=s.y,i=s.r,r=t.x,o=t.y,a=t.r,l=r-e,c=o-n,h=a-i,u=Math.sqrt(l*l+c*c);return{x:(e+r+l/u*h)/2,y:(n+o+c/u*h)/2,r:(u+i+a)/2}}function Hx(s,t,e){var n=s.x,i=s.y,r=s.r,o=t.x,a=t.y,l=t.r,c=e.x,h=e.y,u=e.r,d=n-o,f=n-c,p=i-a,_=i-h,g=l-r,m=u-r,x=n*n+i*i-r*r,v=x-o*o-a*a+l*l,y=x-c*c-h*h+u*u,b=f*p-d*_,w=(p*y-_*v)/(b*2)-n,E=(_*g-p*m)/b,T=(f*v-d*y)/(b*2)-i,S=(d*m-f*g)/b,M=E*E+S*S-1,P=2*(r+w*E+T*S),O=w*w+T*T-r*r,U=-(Math.abs(M)>1e-6?(P+Math.sqrt(P*P-4*M*O))/(2*M):O/P);return{x:n+w+E*U,y:i+T+S*U,r:U}}function Pg(s,t,e){var n=s.x-t.x,i,r,o=s.y-t.y,a,l,c=n*n+o*o;c?(r=t.r+e.r,r*=r,l=s.r+e.r,l*=l,r>l?(i=(c+l-r)/(2*c),a=Math.sqrt(Math.max(0,l/c-i*i)),e.x=s.x-i*n-a*o,e.y=s.y-i*o+a*n):(i=(c+r-l)/(2*c),a=Math.sqrt(Math.max(0,r/c-i*i)),e.x=t.x+i*n-a*o,e.y=t.y+i*o+a*n)):(e.x=t.x+e.r,e.y=t.y)}function Ig(s,t){var e=s.r+t.r-1e-6,n=t.x-s.x,i=t.y-s.y;return e>0&&e*e>n*n+i*i}function Lg(s){var t=s._,e=s.next._,n=t.r+e.r,i=(t.x*e.r+e.x*t.r)/n,r=(t.y*e.r+e.y*t.r)/n;return i*i+r*r}function Tc(s){this._=s,this.next=null,this.previous=null}function Y3(s,t){if(!(r=(s=V3(s)).length))return 0;var e,n,i,r,o,a,l,c,h,u,d;if(e=s[0],e.x=0,e.y=0,!(r>1))return e.r;if(n=s[1],e.x=-n.r,n.x=e.r,n.y=0,!(r>2))return e.r+n.r;Pg(n,e,i=s[2]),e=new Tc(e),n=new Tc(n),i=new Tc(i),e.next=i.previous=n,n.next=e.previous=i,i.next=n.previous=e;t:for(l=3;l<r;++l){Pg(e._,n._,i=s[l]),i=new Tc(i),c=n.next,h=e.previous,u=n._.r,d=e._.r;do if(u<=d){if(Ig(c._,i._)){n=c,e.next=n,n.previous=e,--l;continue t}u+=c._.r,c=c.next}else{if(Ig(h._,i._)){e=h,e.next=n,n.previous=e,--l;continue t}d+=h._.r,h=h.previous}while(c!==h.next);for(i.previous=e,i.next=n,e.next=n.previous=n=i,o=Lg(e);(i=i.next)!==n;)(a=Lg(i))<o&&(e=i,o=a);n=e.next}for(e=[n._],i=n;(i=i.next)!==n;)e.push(i._);for(i=W3(e,t),l=0;l<r;++l)e=s[l],e.x-=i.x,e.y-=i.y;return i.r}function Z3(s){return Math.sqrt(s.value)}function K3(){var s=null,t=1,e=1,n=Cg;function i(r){const o=G3();return r.x=t/2,r.y=e/2,s?r.eachBefore(Dg(s)).eachAfter(Nd(n,.5,o)).eachBefore(Ug(1)):r.eachBefore(Dg(Z3)).eachAfter(Nd(Cg,1,o)).eachAfter(Nd(n,r.r/Math.min(t,e),o)).eachBefore(Ug(Math.min(t,e)/(2*r.r))),r}return i.radius=function(r){return arguments.length?(s=F3(r),i):s},i.size=function(r){return arguments.length?(t=+r[0],e=+r[1],i):[t,e]},i.padding=function(r){return arguments.length?(n=typeof r=="function"?r:z3(+r),i):n},i}function Dg(s){return function(t){t.children||(t.r=Math.max(0,+s(t)||0))}}function Nd(s,t,e){return function(n){if(i=n.children){var i,r,o=i.length,a=s(n)*t||0,l;if(a)for(r=0;r<o;++r)i[r].r+=a;if(l=Y3(i,e),a)for(r=0;r<o;++r)i[r].r-=a;n.r=l+a}}}function Ug(s){return function(t){var e=t.parent;t.r*=s,e&&(t.x=e.x+s*t.x,t.y=e.y+s*t.y)}}const An={sample:new at().setRGB(100/255,160/255,255/255,Ae),bin:new at().setRGB(100/255,120/255,220/255,Ae),contig:new at().setRGB(0/255,200/255,150/255,Ae),orf:new at().setRGB(220/255,180/255,50/255,Ae),unbinned:new at().setRGB(220/255,60/255,60/255,Ae)},tp=1.8,Xi=.6,Wx=-.6,ep=-1.5,Og=.06,Fg=.03,Ng=.015,j3=10,Xx=8;function zd(s){return Math.max(Xx,Math.round(2*Math.PI*s*j3))}function Bd(s){return Math.max(4,Math.round(2*Math.PI*s*200))}const J3=new ye({uniforms:{uColor:{value:new A},uOpacityTop:{value:.12}},vertexShader:`
    varying float vAlpha;
    uniform float uOpacityTop;
    void main() {
      // CylinderGeometry UV.y maps 0..1 from bottom to top
      vAlpha = uv.y * uOpacityTop;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying float vAlpha;
    uniform vec3 uColor;
    void main() {
      gl_FragColor = vec4(uColor, vAlpha);
    }
  `,transparent:!0,depthWrite:!1,side:Fe});function zg(s,t,e,n,i,r){const o=t-e,a=Math.max(Xx,Math.round(2*Math.PI*s*4)),l=new Or(s,s,o,a,1,!0),c=J3.clone();c.uniforms.uColor.value=new A(n.r,n.g,n.b),c.uniforms.uOpacityTop.value=.12;const h=new Nt(l,c);return h.position.set(i||0,t-o/2,r||0),h}const Q3=K3().radius(s=>s.data.radius).padding(0);function Bg(s,t){if(s.length===0)return[];if(s.length===1)return[{x:0,z:0,r:s[0].radius}];const e=xm({children:s}).sum(()=>0);Q3(e);const n=t/e.r;return e.children.map(i=>({x:(i.x-e.x)*n,z:(i.y-e.y)*n,r:i.r*n}))}const nr=[];let Jn=null,Vc=null;const kg=.08,tR=.15;function eR(s){const t=new ce;Vc=t;const e=s.sample.sampleRadius,n=new yr(e,Og,Bd(Og),zd(e)),i=new re({color:An.sample,transparent:!0,opacity:.85}),r=new Nt(n,i);r.rotation.x=Math.PI/2,r.position.y=tp,t.add(r),t.add(zg(e,tp,Xi,An.sample,0,0));const o=[...s.bins],a=new re({color:An.bin,transparent:!0,opacity:.6}),l=new re({color:new at().setRGB(130/255,180/255,255/255,Ae),transparent:!0,opacity:.8}),c=o.filter(p=>p.radius>=kg),h=o.filter(p=>p.radius<kg),u=new re({color:An.unbinned,transparent:!0,opacity:.7});for(const p of c){const _=p.quality==="HQ"||p.quality==="MQ",g=p.hostContam?u:_?l:a,m=new yr(p.radius,Fg,Bd(Fg),zd(p.radius)),x=new Nt(m,g);x.rotation.x=Math.PI/2,x.position.set(p.x,Xi,p.z),t.add(x);const v=p.hostContam?An.unbinned:An.bin;t.add(zg(p.radius,Xi,Xi-.6,v,p.x,p.z))}if(h.length>0){const p=new Float32Array(h.length*3);for(let m=0;m<h.length;m++)p[m*3]=h[m].x,p[m*3+1]=Xi,p[m*3+2]=h[m].z;const _=new _t;_.setAttribute("position",new gt(p,3));const g=new el({color:An.bin,size:.06,transparent:!0,opacity:.5,sizeAttenuation:!0});t.add(new on(_,g))}for(const p of o){if(p.contigs.length===0)continue;const _=Bg(p.contigs.map(g=>({radius:g.radius})),p.radius);p.contigs.forEach((g,m)=>{g.localX=_[m].x,g.localZ=_[m].z,g.radius=_[m].r})}const d=new re({color:An.contig,transparent:!0,opacity:.45}),f=[];for(const p of o)for(const _ of p.contigs){const g=p.x+_.localX,m=p.z+_.localZ,x=_.radius;if(x>=.03){const y=new yr(x,Ng,Bd(Ng),zd(x)),b=new Nt(y,d);b.rotation.x=Math.PI/2,b.position.set(g,Wx,m),t.add(b)}const v=_.orfs;if(v>0&&x>0){const y=x/Math.sqrt(v)*.9,b=Bg(Array.from({length:v},()=>({radius:y})),x);for(const w of b)f.push(g+w.x,ep,m+w.z)}}if(f.length>0){const p=new _t;p.setAttribute("position",new ht(f,3));const _=new el({color:An.orf,size:.04,transparent:!0,opacity:.6,sizeAttenuation:!0});t.add(new on(p,_))}return nR(s,e,t),t}function nR(s,t,e){const n=[],i=tp+2;n.push({from:new A(0,Xi,0),to:new A(0,i,0),color:An.sample}),nr.push({localPos:new A(0,i+.15,0),text:`${s.sample.totalContigs.toLocaleString()} contigs · ${(s.sample.totalBp/1e6).toFixed(1)} Mbp · ${s.bins.length} bins · ${(s.sample.nHQ||0)+(s.sample.nMQ||0)} MQ+ MAGs`,level:"sample"}),nr.push({localPos:new A(0,i+.55,0),text:`<strong>AB48 community</strong> (${s.sample.acc})`,level:"sample"});const r=Math.max(...s.bins.map(c=>c.meanCoverage||0),1),o=.6,a=2.5;for(const c of s.bins){if(c.radius<tR)continue;const h=(c.meanCoverage||0)/r,u=o+h*(a-o),d=Xi+u,f=!!c.hostContam,p=f?An.unbinned:An.bin;n.push({from:new A(c.x,Xi,c.z),to:new A(c.x,d,c.z),color:p});const _=c.taxonomy||c.dominantTaxon,g=c.quality==="HQ"||c.quality==="MQ",m=g&&c.completeness!=null?`${c.quality} · ${c.completeness}% complete`:"",x=`${c.meanCoverage}× coverage`,v=c.phylum?`(${c.phylum})`:"",y=[`<em>${_}</em> ${v}`,`${c.nContigs} contigs · ${(c.totalBp/1e6).toFixed(1)} Mbp`];m&&y.push(m),y.push(x),f&&y.push("<strong>contamination</strong>");const b=f?"contam":g?"bin":"binLQ";nr.push({localPos:new A(c.x,d+.15,c.z),text:y.join("<br>"),level:b})}for(const c of s.bins)for(const h of c.contigs){if(!h.plasmid)continue;const u=c.x+h.localX,d=c.z+h.localZ,f=Xi+1.3;n.push({from:new A(u,Wx,d),to:new A(u,f,d),color:An.contig}),nr.push({localPos:new A(u,f+.15,d),text:`<em>Plasmid</em> · ${(h.bp/1e3).toFixed(1)} Kbp${h.circular?" · circular":""}`,level:"plasmid"})}const l=ep-.5;if(n.push({from:new A(0,ep,0),to:new A(0,l,0),color:An.orf}),nr.push({localPos:new A(0,l-.15,0),text:`<strong>${s.sample.totalOrfs.toLocaleString()} ORFs</strong>`,level:"orf"}),n.length>0){const c=new Float32Array(n.length*6),h=new Float32Array(n.length*6);for(let f=0;f<n.length;f++){const{from:p,to:_,color:g}=n[f],m=f*6;c[m]=p.x,c[m+1]=p.y,c[m+2]=p.z,c[m+3]=_.x,c[m+4]=_.y,c[m+5]=_.z,h[m]=g.r,h[m+1]=g.g,h[m+2]=g.b,h[m+3]=g.r*.6,h[m+4]=g.g*.6,h[m+5]=g.b*.6}const u=new _t;u.setAttribute("position",new gt(c,3)),u.setAttribute("color",new gt(h,3));const d=new Yt({vertexColors:!0,transparent:!0,opacity:.8,depthTest:!1});e.add(new te(u,d))}}function iR(){Jn=document.createElement("div"),Jn.id="sample-ring-labels",Jn.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:11;display:none;",document.body.appendChild(Jn);const s={sample:"font-size:1.7rem;color:#d0e0ff;text-shadow:0 0 8px rgba(100,160,255,0.4);",bin:"font-size:1.5rem;color:#b0c0e8;text-shadow:0 0 6px rgba(100,120,220,0.3);",binLQ:"font-size:0.75rem;color:#b0c0e8;text-shadow:0 0 6px rgba(100,120,220,0.3);",contam:"font-size:0.75rem;color:#f08080;text-shadow:0 0 6px rgba(220,60,60,0.4);",orf:"font-size:1.5rem;color:#e0d890;text-shadow:0 0 6px rgba(220,180,50,0.3);",plasmid:"font-size:1.5rem;color:#80e8a0;text-shadow:0 0 6px rgba(0,200,150,0.4);"};for(const t of nr){const e=document.createElement("div");e.style.cssText=`position:absolute;font-family:system-ui,sans-serif;white-space:nowrap;pointer-events:none;line-height:1.4;${s[t.level]||""}`,e.innerHTML=t.text,Jn.appendChild(e),t.el=e}}function sR(){Jn&&(Jn.style.display="")}function rR(){Jn&&(Jn.style.display="none")}const aa=new A;function oR(s){if(!Jn||Jn.style.display==="none"||!Vc)return;const t=window.innerWidth/2,e=window.innerHeight/2;Vc.updateMatrixWorld(!0);for(const n of nr){if(!n.el)continue;if(aa.copy(n.localPos).applyMatrix4(Vc.matrixWorld),aa.project(s),aa.z>1){n.el.style.display="none";continue}n.el.style.display="";const i=aa.x*t+t,r=-aa.y*e+e;n.el.style.left=`${i}px`,n.el.style.top=`${r}px`,n.el.style.transform="translate(-50%, -50%)"}}let mi=null,np=null,ip=!1,kd=!1;const aR={name:"sample-overview",visible:["sampleRings"],camera:{position:new A(4,6,8),target:new A(0,0,0)},overlays:{title:"",subtitle:""},onEnter(){kd=!0,mi&&(mi.visible=!0,mi.traverse(s=>{if(s.material){const t=s.userData.baseOpacity??s.material._baseOpacity;t!=null&&(s.material.opacity=t)}}))},onLeave(){rR()},onUpdate(s,t){mi&&!ip&&(mi.rotation.y=s*.075),kd&&(sR(),kd=!1),np&&oR(np)}};async function lR({scene:s,sm:t,perspCamera:e,controls:n}){np=e,n&&(n.addEventListener("start",()=>{ip=!0}),n.addEventListener("end",()=>{ip=!1}));const r=await(await fetch(Te("/data/ab48_structure.json"))).json();mi=eR(r),mi.visible=!1,mi.traverse(o=>{o.material&&(o.userData.baseOpacity=o.material.opacity,o.material._baseOpacity=o.material.opacity)}),s.add(mi),t.register("sampleRings",mi),iR()}let Fi=null,sp=null,vs=null,Ms=null,$i=null;const Ys=new A,co=new A;let Pa=null;const Co=2,lr=10,bi=-2.4,Hc=1.75,ga=10,$x=7*Co+4,cR=new A,hR=new A,qx=new A,Yx=new A;function Gg(s){const t=new A().lerpVectors(qx,Yx,s);Ms&&Ms.position.copy(t),vs&&vs.position.copy(t),$i&&$i.position.copy(t)}function uR(s,t,e){return[(s-1)*Co,t*lr,e*bi]}function dR(s){const e=new Map;for(const r of s){const o=`${r.rank}_${Math.floor(r.shannon/.25)}`;e.set(o,(e.get(o)||0)+1)}const n=Math.max(...e.values()),i=new Float32Array(s.length);for(let r=0;r<s.length;r++){const o=s[r],a=`${o.rank}_${Math.floor(o.shannon/.25)}`,l=e.get(a)/n;i[r]=l*l}return i}async function fR(s){const e=await(await fetch(Te("/data/ranked_abundance_3d.json"))).json();Pa=e.metadata;const n=e.points,i=n.length,r=dR(n),o={};if(e.sample_summary)for(const M of e.sample_summary)o[M.acc]=M;const a=new Float32Array(i*3),l=new Float32Array(i*3),c=new Float32Array(i),h=new Float32Array(i),u=new Float32Array(i);for(let M=0;M<i;M++){const P=n[M],[O,U,D]=uR(P.rank,P.abundance,P.shannon);a[M*3]=O,a[M*3+1]=U,a[M*3+2]=D;const z=o[P.acc],F=z?z.n_taxa:1,X=z?z.evenness:0;l[M*3]=$x+Math.log(Math.max(1,F))*Hc,l[M*3+1]=X*ga,l[M*3+2]=P.shannon*bi,c[M]=(P.rank-1)/7,h[M]=F===1?3:1,u[M]=r[M]}let d=1/0,f=1/0,p=1/0,_=-1/0,g=-1/0,m=-1/0,x=1/0,v=1/0,y=1/0,b=-1/0,w=-1/0,E=-1/0;for(let M=0;M<i;M++){const P=a[M*3],O=a[M*3+1],U=a[M*3+2];P<d&&(d=P),P>_&&(_=P),O<f&&(f=O),O>g&&(g=O),U<p&&(p=U),U>m&&(m=U);const D=l[M*3],z=l[M*3+1],F=l[M*3+2];D<x&&(x=D),D>b&&(b=D),z<v&&(v=z),z>w&&(w=z),F<y&&(y=F),F>E&&(E=F)}Ys.set((d+_)/2,(f+g)/2,(p+m)/2),co.set((x+b)/2,(v+w)/2,(y+E)/2);for(let M=0;M<i;M++)a[M*3]-=Ys.x,a[M*3+1]-=Ys.y,a[M*3+2]-=Ys.z,l[M*3]-=co.x,l[M*3+1]-=co.y,l[M*3+2]-=co.z;cR.set(0,0,0),hR.set(0,0,0),qx.copy(Ys).negate(),Yx.copy(co).negate();const T=new _t;T.setAttribute("position",new gt(a,3)),T.setAttribute("aTargetPosition",new gt(l,3)),T.setAttribute("aRank",new gt(c,1)),T.setAttribute("aSize",new gt(h,1)),T.setAttribute("aGlowIntensity",new gt(u,1));const S=new ye({transparent:!0,depthWrite:!0,depthTest:!0,uniforms:{uTime:{value:0},uMorphT:{value:0},uFogColor:{value:new at(657930)},uFogDensity:{value:.015},uOpacity:{value:1}},vertexShader:`
      attribute float aSize;
      attribute float aRank;
      attribute vec3 aTargetPosition;
      uniform float uTime;
      uniform float uMorphT;
      uniform float uFogDensity;
      varying vec3 vColor;
      varying float vFogFactor;
      varying float vOpacity;

      void main() {
        // White (rank 1) to gray (rank 8)
        float lum = mix(0.92, 0.55, aRank);
        vColor = vec3(lum);

        // Linear mix — easing is pre-applied to uMorphT on CPU
        vec3 pos = mix(position, aTargetPosition, uMorphT);
        vOpacity = 0.9 + 0.1 * sin(uTime * 0.3 + pos.x * 2.0 + pos.z * 1.7);

        vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPos;

        float basePx = aSize * 1.0;
        gl_PointSize = basePx * (120.0 / -mvPos.z);
        gl_PointSize = clamp(gl_PointSize, 0.5, 20.0);

        float fogDist = length(mvPos.xyz);
        vFogFactor = 1.0 - exp(-uFogDensity * uFogDensity * fogDist * fogDist);
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vFogFactor;
      varying float vOpacity;
      uniform vec3 uFogColor;
      uniform float uOpacity;

      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;

        float outerEdge = smoothstep(0.5, 0.42, d);
        float innerEdge = smoothstep(0.36, 0.28, d);
        vec3 finalCol = mix(vColor * 0.25, vColor, innerEdge);

        float fogMix = vFogFactor;
        finalCol = mix(finalCol, uFogColor, fogMix);
        float alpha = outerEdge * vOpacity * (1.0 - fogMix) * uOpacity;
        gl_FragColor = vec4(finalCol, alpha);
      }
    `});return sp=new on(T,S),Fi=new ce,Fi.add(sp),vs=new ce,vs.position.copy(Ys).negate(),Fi.add(vs),pR(vs,e.rank_mode_lines),Ms=new ce,Ms.position.copy(Ys).negate(),Fi.add(Ms),mR(Ms),$i=new ce,$i.position.copy(co).negate(),$i.visible=!1,Fi.add($i),gR($i),Fi.visible=!1,s.add(Fi),Fi}const Vg=.8,Hg=.02,Cc=.15;function pR(s,t){if(!t)return;const e=new re({color:14034728,transparent:!0,opacity:.45,side:Fe,depthWrite:!0}),n=new ye({transparent:!0,depthWrite:!1,depthTest:!0,blending:Es,side:Fe,uniforms:{uOpacity:{value:1}},vertexShader:`
      attribute float aEdgeDist;
      varying float vEdge;
      void main() {
        vEdge = aEdgeDist;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uOpacity;
      varying float vEdge;
      void main() {
        float glow = exp(-vEdge * vEdge * 16.0) * 0.5 * uOpacity;
        gl_FragColor = vec4(0.84, 0.15, 0.16, glow);
      }
    `});for(let i=1;i<=8;i++){const r=t[String(i)];if(!r||r.length<2)continue;const o=r.length,a=(i-1)*Co,l=new Float32Array(o*2*3);for(let x=0;x<o;x++){const v=r[x],y=v.abundance*lr,b=v.shannon*bi,w=v.density!=null?v.density:.5,E=Math.max(Hg,w*Vg);l[x*6]=a-E,l[x*6+1]=y,l[x*6+2]=b,l[x*6+3]=a+E,l[x*6+4]=y,l[x*6+5]=b}const c=o-1,h=new Uint16Array(c*6);for(let x=0;x<c;x++){const v=x*2,y=x*2+1,b=(x+1)*2,w=(x+1)*2+1;h[x*6]=v,h[x*6+1]=y,h[x*6+2]=b,h[x*6+3]=y,h[x*6+4]=w,h[x*6+5]=b}const u=new _t;u.setAttribute("position",new gt(l,3)),u.setIndex(new gt(h,1)),u.computeVertexNormals();const d=new Nt(u,e);d.renderOrder=1,s.add(d);const f=new Float32Array(o*6*3),p=new Float32Array(o*6);for(let x=0;x<o;x++){const v=r[x],y=v.abundance*lr,b=v.shannon*bi,w=v.density!=null?v.density:.5,E=Math.max(Hg,w*Vg),T=a-E,S=a+E,M=x*18;f[M]=T,f[M+1]=y+Cc,f[M+2]=b,f[M+3]=S,f[M+4]=y+Cc,f[M+5]=b,f[M+6]=T,f[M+7]=y,f[M+8]=b,f[M+9]=S,f[M+10]=y,f[M+11]=b,f[M+12]=T,f[M+13]=y-Cc,f[M+14]=b,f[M+15]=S,f[M+16]=y-Cc,f[M+17]=b;const P=x*6;p[P]=1,p[P+1]=1,p[P+2]=0,p[P+3]=0,p[P+4]=1,p[P+5]=1}const _=new Uint16Array(c*24);for(let x=0;x<c;x++){const v=x*6,y=(x+1)*6,b=x*24;_[b]=v,_[b+1]=v+2,_[b+2]=y,_[b+3]=v+2,_[b+4]=y+2,_[b+5]=y,_[b+6]=v+1,_[b+7]=v+3,_[b+8]=y+1,_[b+9]=v+3,_[b+10]=y+3,_[b+11]=y+1,_[b+12]=v+2,_[b+13]=v+4,_[b+14]=y+2,_[b+15]=v+4,_[b+16]=y+4,_[b+17]=y+2,_[b+18]=v+3,_[b+19]=v+5,_[b+20]=y+3,_[b+21]=v+5,_[b+22]=y+5,_[b+23]=y+3}const g=new _t;g.setAttribute("position",new gt(f,3)),g.setAttribute("aEdgeDist",new gt(p,1)),g.setIndex(new gt(_,1));const m=new Nt(g,n);m.renderOrder=-1,s.add(m)}}function mR(s){const t=new Yt({color:5596791,transparent:!0,opacity:.5}),e=new Yt({color:3359829,transparent:!0,opacity:.2}),n=new Yt({color:5596791,transparent:!0,opacity:.4}),i=8,r=(i-1)*Co,o=lr,l=Pa.shannon_range[1]*bi,c=new _t,h=new Float32Array([0,0,0,r,0,0,0,0,0,0,o,0,0,0,0,0,0,l]);c.setAttribute("position",new gt(h,3)),s.add(new te(c,t));const u=[];for(let m=0;m<=5;m+=1){const x=m*bi;u.push(0,0,x,r,0,x)}for(let m=1;m<=i;m++){const x=(m-1)*Co;u.push(x,0,0,x,0,l)}const d=new _t;d.setAttribute("position",new ht(u,3)),s.add(new te(d,e));const f=[];for(const m of[.25,.5,.75,1]){const x=m*lr;f.push(0,x,l,r,x,l)}const p=new _t;p.setAttribute("position",new ht(f,3)),s.add(new te(p,e));const _=[];for(const m of[.25,.5,.75,1]){const x=m*lr;_.push(0,x,0,0,x,l)}const g=new _t;g.setAttribute("position",new ht(_,3)),s.add(new te(g,e));for(let m=1;m<=i;m++){const x=(m-1)*Co;Ro(s,n,[x,0,0],[x,-.3,0]),pn(s,`${m}`,[x,-.3*4,0],.4)}pn(s,"Rank",[r/2,-.3*8,0],.55);for(const m of[.25,.5,.75,1]){const x=m*lr;Ro(s,n,[0,x,0],[-.3,x,0]),pn(s,m.toFixed(2),[-.3*6,x,0],.35)}pn(s,"Fraction",[-.3*14,o/2,0],.55);for(let m=1;m<=5;m++){const x=m*bi;Ro(s,n,[0,0,x],[-.3,0,x]),pn(s,`${m}`,[-.3*4,0,x],.4)}pn(s,"Shannon H'",[-.3*12,0,l/2],.55),pn(s,"0",[-.3*6,0,0],.35)}function Ro(s,t,e,n){const i=new _t;i.setAttribute("position",new ht([...e,...n],3)),s.add(new te(i,t))}function pn(s,t,e,n,i){const r=document.createElement("canvas"),o=r.getContext("2d"),a=64;o.font=`${a}px monospace`;const l=o.measureText(t),c=Math.ceil(l.width)+8,h=a+8;r.width=c,r.height=h,o.font=`${a}px monospace`,o.fillStyle="#8899aa",o.textBaseline="middle",o.fillText(t,4,h/2);const u=new Ur(r);u.minFilter=be;const d=new os({map:u,transparent:!0,opacity:.7}),f=new Cs(d);f.position.set(e[0],e[1],e[2]);const p=c/h;f.scale.set(n*p,n,1),s.add(f)}function gR(s){const t=new Yt({color:5596791,transparent:!0,opacity:.5}),e=new Yt({color:3359829,transparent:!0,opacity:.2}),n=new Yt({color:5596791,transparent:!0,opacity:.4}),i=$x,r=Math.log(Pa.richness_range[1])*Hc,o=i+r,a=ga,c=Pa.shannon_range[1]*bi,h=new _t,u=new Float32Array([i,0,0,o,0,0,i,0,0,i,a,0,i,0,0,i,0,c]);h.setAttribute("position",new gt(u,3)),s.add(new te(h,t));const d=[2,5,10,20,50,100,200,500,1e3,2e3].filter(y=>y<=Pa.richness_range[1]),f=[];for(let y=0;y<=5;y+=1){const b=y*bi;f.push(i,0,b,o,0,b)}for(const y of d){const b=i+Math.log(y)*Hc;f.push(b,0,0,b,0,c)}const p=new _t;p.setAttribute("position",new ht(f,3)),s.add(new te(p,e));const _=[];for(const y of[.25,.5,.75,1]){const b=y*ga;_.push(i,b,c,o,b,c)}const g=new _t;g.setAttribute("position",new ht(_,3)),s.add(new te(g,e));const m=[];for(const y of[.25,.5,.75,1]){const b=y*ga;m.push(i,b,0,i,b,c)}const x=new _t;x.setAttribute("position",new ht(m,3)),s.add(new te(x,e));const v=.3;for(const y of d){const b=i+Math.log(y)*Hc;Ro(s,n,[b,0,0],[b,-v,0]),pn(s,`${y}`,[b,-v*4,0],.35)}pn(s,"Richness (n taxa)",[(i+o)/2,-v*8,0],.55);for(const y of[.25,.5,.75,1]){const b=y*ga;Ro(s,n,[i,b,0],[i-v,b,0]),pn(s,y.toFixed(2),[i-v*6,b,0],.35)}pn(s,"Evenness",[i-v*14,a/2,0],.55);for(let y=1;y<=5;y++){const b=y*bi;Ro(s,n,[i,0,b],[i-v,0,b]),pn(s,`${y}`,[i-v*4,0,b],.4)}pn(s,"Shannon H'",[i-v*12,0,c/2],.55),pn(s,"1",[i,-v*4,0],.35),pn(s,"0",[i-v*6,0,0],.35)}let Wc=null;function Zx(){Wc&&(Wc.enabled=!0,Wc.enableRotate=!0)}const _R={name:"ranked-abundance",visible:["ranked-abundance-group"],cameraType:"perspective",overlays:{title:"Ranked Genus Abundance",subtitle:"Relative abundance decay by rank · power-law surface fit"},uniforms:{"ranked-cloud":{uMorphT:0}},properties:{"ranked-abundance-group":{axesMorphT:0}},legend:null,onEnter(){Zx()}};async function yR({scene:s,sm:t,camera:e,controls:n,perspCamera:i}){Wc=n,i.position.set(8,10,14),n.target.set(0,0,0),n.update(),await fR(s),t.register("ranked-abundance-group",Fi),t.register("ranked-cloud",sp),t.register("ranked-axes",Ms),t.register("decomposition-axes",$i),t.register("mode-lines",vs);const r=new A(0,0,0);t.register("ranked-geo-center",r),t.register("origin",r),t.registerTicker("ranked-cloud",(o,a,l)=>{l.material.uniforms.uTime.value=o}),t.registerProperty("ranked-abundance-group","axesMorphT",Gg),Gg(1),Ms.visible=!1,vs.visible=!1,$i.visible=!0,n.rotateSpeed=.6,n.zoomSpeed=.8,n.autoRotateSpeed=.4}const xR={name:"decomposition",visible:["ranked-abundance-group"],cameraType:"perspective",camera:{position:new A(12,14,20),target:new A(0,0,0)},overlays:{title:"Shannon H' Decomposition",subtitle:"H' = evenness × ln(richness) · per-sample diversity components"},uniforms:{"ranked-cloud":{uMorphT:1}},properties:{"ranked-abundance-group":{axesMorphT:1}},legend:null,onEnter(){Zx()}},Wg=new Re,Rc=new A;class Kx extends hm{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ht(t,3)),this.setAttribute("uv",new ht(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new zh(e,6,1);return this.setAttribute("instanceStart",new On(n,3,0)),this.setAttribute("instanceEnd",new On(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new zh(e,6,1);return this.setAttribute("instanceColorStart",new On(n,3,0)),this.setAttribute("instanceColorEnd",new On(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new jp(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Re);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Wg.setFromBufferAttribute(e),this.boundingBox.union(Wg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new We),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Rc.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Rc)),Rc.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Rc));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}yt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Q(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};gn.line={uniforms:cu.merge([yt.common,yt.fog,yt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Iu extends ye{constructor(t){super({type:"LineMaterial",uniforms:cu.clone(gn.line.uniforms),vertexShader:gn.line.vertexShader,fragmentShader:gn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Gd=new Jt,Xg=new A,$g=new A,$e=new Jt,qe=new Jt,ri=new Jt,Vd=new A,Hd=new kt,Ye=new ex,qg=new A,Pc=new Re,Ic=new We,oi=new Jt;let gi,vr;function Yg(s,t,e){return oi.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),oi.multiplyScalar(1/oi.w),oi.x=vr/e.width,oi.y=vr/e.height,oi.applyMatrix4(s.projectionMatrixInverse),oi.multiplyScalar(1/oi.w),Math.abs(Math.max(oi.x,oi.y))}function vR(s,t){const e=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){Ye.start.fromBufferAttribute(i,a),Ye.end.fromBufferAttribute(r,a),Ye.applyMatrix4(e);const c=new A,h=new A;gi.distanceSqToSegment(Ye.start,Ye.end,h,c),h.distanceTo(c)<vr*.5&&t.push({point:h,pointOnLine:c,distance:gi.origin.distanceTo(h),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function MR(s,t,e){const n=t.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-t.near;gi.at(1,ri),ri.w=1,ri.applyMatrix4(t.matrixWorldInverse),ri.applyMatrix4(n),ri.multiplyScalar(1/ri.w),ri.x*=r.x/2,ri.y*=r.y/2,ri.z=0,Vd.copy(ri),Hd.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,f=h;d<f;d++){if($e.fromBufferAttribute(l,d),qe.fromBufferAttribute(c,d),$e.w=1,qe.w=1,$e.applyMatrix4(Hd),qe.applyMatrix4(Hd),$e.z>u&&qe.z>u)continue;if($e.z>u){const v=$e.z-qe.z,y=($e.z-u)/v;$e.lerp(qe,y)}else if(qe.z>u){const v=qe.z-$e.z,y=(qe.z-u)/v;qe.lerp($e,y)}$e.applyMatrix4(n),qe.applyMatrix4(n),$e.multiplyScalar(1/$e.w),qe.multiplyScalar(1/qe.w),$e.x*=r.x/2,$e.y*=r.y/2,qe.x*=r.x/2,qe.y*=r.y/2,Ye.start.copy($e),Ye.start.z=0,Ye.end.copy(qe),Ye.end.z=0;const _=Ye.closestPointToPointParameter(Vd,!0);Ye.at(_,qg);const g=ru.lerp($e.z,qe.z,_),m=g>=-1&&g<=1,x=Vd.distanceTo(qg)<vr*.5;if(m&&x){Ye.start.fromBufferAttribute(l,d),Ye.end.fromBufferAttribute(c,d),Ye.start.applyMatrix4(o),Ye.end.applyMatrix4(o);const v=new A,y=new A;gi.distanceSqToSegment(Ye.start,Ye.end,y,v),e.push({point:y,pointOnLine:v,distance:gi.origin.distanceTo(y),object:s,face:null,faceIndex:d,uv:null,uv1:null})}}}class bR extends Nt{constructor(t=new Kx,e=new Iu({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)Xg.fromBufferAttribute(e,o),$g.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Xg.distanceTo($g);const r=new zh(i,2,1);return t.setAttribute("instanceDistanceStart",new On(r,1,0)),t.setAttribute("instanceDistanceEnd",new On(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,i=t.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;gi=t.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;vr=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ic.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=vr*.5;else{const u=Math.max(i.near,Ic.distanceToPoint(gi.origin));c=Yg(i,u,l.resolution)}if(Ic.radius+=c,gi.intersectsSphere(Ic)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Pc.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=vr*.5;else{const u=Math.max(i.near,Pc.distanceToPoint(gi.origin));h=Yg(i,u,l.resolution)}Pc.expandByScalar(h),gi.intersectsBox(Pc)!==!1&&(n?vR(this,e):MR(this,i,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Gd),this.material.uniforms.resolution.value.set(Gd.z,Gd.w))}}class vm extends Kx{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let i=0;i<e;i++)n[6*i]=t[i].x,n[6*i+1]=t[i].y,n[6*i+2]=t[i].z||0,n[6*i+3]=t[i+1].x,n[6*i+4]=t[i+1].y,n[6*i+5]=t[i+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class jx extends bR{constructor(t=new vm,e=new Iu({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}let ke=null,Qs=[];const ho=.16,gs=2.5,la=1,uo=.25,SR=[{name:"N Clusters",color:"#c8ccd4",format:s=>`${(s/1e6).toFixed(1)}M`},{name:"Mean Size",color:"#b0b6c0",format:s=>s.toFixed(1)},{name:"Variance",color:"#c8ccd4",format:s=>`${(s/1e3).toFixed(0)}k`},{name:"Skewness",color:"#b0b6c0",format:s=>s.toFixed(1)}],wR=[{x:30,label:"i30",color:"#f0a030"},{x:95,label:"i95",color:"#2ec4b6"}];function Zg(s,t,e,n){const i=new _t;i.setAttribute("position",new ht([...e,...n],3)),s.add(new te(i,t))}async function ER(s){const n=(await(await fetch(Te("/data/orf_clusters.json"))).json()).data;ke=new ce,Qs=[];const i=new Yt({color:5596791,transparent:!0,opacity:.5}),r=new Yt({color:3359829,transparent:!0,opacity:.2}),o=new Yt({color:5596791,transparent:!0,opacity:.4}),a=n.length*gs+(n.length-1)*la;for(let u=0;u<n.length;u++){const d=n[u],f=SR[u],p=d.x,_=d.y,g=0,m=Math.max(..._),x=m||1,v=a-(u+1)*(gs+la)+la,y=[];for(let D=0;D<p.length;D++){const z=p[D]*ho,F=v+(_[D]-g)/x*gs;y.push(z,F,-.3)}const b=new vm;b.setPositions(y);const w=new Iu({color:new at(f.color).getHex(),linewidth:3,worldUnits:!1,transparent:!0,opacity:.9});w.resolution.set(window.innerWidth,window.innerHeight);const E=new jx(b,w);E.computeLineDistances(),ke.add(E);const T=p[0]*ho,S=p[p.length-1]*ho,M=[T,v,0,S,v,0,T,v,0,T,v+gs,0],P=new _t;P.setAttribute("position",new ht(M,3)),ke.add(new te(P,i));const O=[];for(const D of[.25,.5,.75]){const z=v+D*gs;O.push(T,z,0,S,z,0)}const U=new _t;U.setAttribute("position",new ht(O,3)),ke.add(new te(U,r));for(const[D,z]of[[0,g],[.5,(g+m)/2],[1,m]]){const F=v+D*gs;Zg(ke,o,[T,F,0],[T-uo,F,0]),Qs.push({text:f.format(z),worldPos:[T-uo*2,F,0],css:{fontSize:"0.65rem",color:"#8899aa",textAlign:"right",transform:"translateX(-100%)"}})}Qs.push({text:f.name,worldPos:[T-uo*6,v+gs/2,0],css:{fontSize:"0.7rem",color:"#8899aa",textAlign:"right",transform:"translateX(-100%)",fontWeight:"600"}})}const l=a-n.length*(gs+la)+la;for(const u of[10,20,30,40,50,60,70,80,90,100]){const d=u*ho;Zg(ke,o,[d,l,0],[d,l-uo,0]),Qs.push({text:`${u}%`,worldPos:[d,l-uo*2,0],css:{fontSize:"0.65rem",color:"#8899aa",textAlign:"center",transform:"translate(-50%, 0)"}})}Qs.push({text:"Clustering Identity",worldPos:[55*ho,l-uo*5,0],css:{fontSize:"0.75rem",color:"#8899aa",textAlign:"center",transform:"translateX(-50%)"}});for(const u of wR){const d=u.x*ho,f=new nm({color:new at(u.color),transparent:!0,opacity:.6,dashSize:.3,gapSize:.15}),p=[d,l,.1,d,a,.1],_=new _t;_.setAttribute("position",new ht(p,3));const g=new te(_,f);g.computeLineDistances(),ke.add(g),Qs.push({text:u.label,worldPos:[d,a+1.2,0],css:{fontSize:"0.8rem",color:u.color,fontWeight:"700",textAlign:"center",transform:"translateX(-50%)"}})}const h=new Re().setFromObject(ke).getCenter(new A);return ke.position.sub(h),ke.visible=!1,s.add(ke),ke}let Ge=null,tr=[];const Wd=2.4,Xd=13,AR={i030:{color:"#f0a030",label:"30% identity",z:0},i095:{color:"#2ec4b6",label:"95% identity",z:-.5}},TR={i030:{color:"#f0a030",label:"i30",rankIdx:.15},i095:{color:"#2ec4b6",label:"i95",rankIdx:.08}};function Kg(s,t,e,n){const i=new _t;i.setAttribute("position",new ht([...e,...n],3)),s.add(new te(i,t))}async function CR(s){const e=await(await fetch(Te("/data/cluster_prevalence.json"))).json();e.metadata,Ge=new ce,tr=[];const n=new Yt({color:5596791,transparent:!0,opacity:.5}),i=new Yt({color:3359829,transparent:!0,opacity:.2}),r=new Yt({color:5596791,transparent:!0,opacity:.4});let o=0;for(const _ of Object.keys(e.curves)){const g=e.curves[_],m=Math.log10(g.x[g.x.length-1]);m>o&&(o=m)}o=Math.ceil(o);const a=o*Wd,l=Xd,c={};for(const[_,g]of Object.entries(AR)){const m=e.curves[_];if(!m)continue;const x=[],v=[];for(let E=0;E<m.x.length;E++){const T=Math.log10(m.x[E])*Wd,S=m.y[E]*Xd;x.push(T,S,g.z),v.push([T,S,g.z])}c[_]=v;const y=new vm;y.setPositions(x);const b=new Iu({color:new at(g.color).getHex(),linewidth:3,worldUnits:!1,transparent:!0,opacity:.9});b.resolution.set(window.innerWidth,window.innerHeight);const w=new jx(y,b);w.computeLineDistances(),Ge.add(w)}const h=[0,0,0,a,0,0,0,0,0,0,l,0],u=new _t;u.setAttribute("position",new ht(h,3)),Ge.add(new te(u,n));const d={0:"1",1:"10",2:"100",3:"1K",4:"10K",5:"100K",6:"1M",7:"10M"};for(let _=0;_<=o;_++){const g=_*Wd,m=[g,0,0,g,l,0],x=new _t;x.setAttribute("position",new ht(m,3)),Ge.add(new te(x,i)),Kg(Ge,r,[g,0,0],[g,-.25,0]),tr.push({text:d[_]||`1e${_}`,worldPos:[g,-.25*2,0],css:{fontSize:"0.65rem",color:"#8899aa",textAlign:"center",transform:"translate(-50%, 0)"}})}tr.push({text:"Cluster rank",worldPos:[a/2,-.25*5,0],css:{fontSize:"0.75rem",color:"#8899aa",textAlign:"center",transform:"translateX(-50%)"}});for(const _ of[0,.25,.5,.75,1]){const g=_*Xd;if(_>0){const m=[0,g,0,a,g,0],x=new _t;x.setAttribute("position",new ht(m,3)),Ge.add(new te(x,i))}Kg(Ge,r,[0,g,0],[-.25,g,0]),tr.push({text:_.toFixed(2),worldPos:[-.25*2,g,0],css:{fontSize:"0.65rem",color:"#8899aa",textAlign:"right",transform:"translate(-100%, -50%)"}})}tr.push({text:"Fraction of samples",worldPos:[-.25*6,l/2,0],css:{fontSize:"0.75rem",color:"#8899aa",textAlign:"right",transform:"translate(-100%, -50%) rotate(-90deg)",transformOrigin:"right center"}});for(const[_,g]of Object.entries(TR)){const m=c[_];if(!m)continue;const x=Math.floor(m.length*g.rankIdx),v=m[x];tr.push({text:g.label,worldPos:[v[0]+.4,v[1]+.5,v[2]],css:{fontSize:"0.85rem",color:g.color,fontWeight:"700"}})}const p=new Re().setFromObject(Ge).getCenter(new A);return Ge.position.sub(p),Ge.visible=!1,s.add(Ge),Ge}const RR=4;let di=null,_a=null,rp=null,$d=!1;const PR={name:"clustering",visible:["clusteringGroup"],cameraType:"orthographic",camera:"iso-chart",overlays:{title:"Protein Clustering",subtitle:"ORF cluster statistics and prevalence across identity thresholds"},legend:null,onEnter(){$d=!0,di||(di=document.getElementById("clustering-labels")),di&&(di.style.display="")},onLeave(){di&&(di.style.display="none")},onUpdate(){$d&&rp&&_a&&(rp.updateMatrixWorld(!0),_a.updateMatrixWorld(!0),_a.updateProjectionMatrix(),LR(ke,Ge,_a),$d=!1)}};function IR(s,t,e){const n=new A(s[0],s[1],s[2]);return t.localToWorld(n),n.project(e),{left:((n.x+1)/2*100).toFixed(2)+"%",top:((1-(n.y+1)/2)*100).toFixed(2)+"%"}}function LR(s,t,e){if(di=document.getElementById("clustering-labels"),!di)return;di.innerHTML="";const n=[...Qs.map(i=>({...i,group:s})),...tr.map(i=>({...i,group:t}))];for(const i of n){const r=IR(i.worldPos,i.group,e),o=document.createElement("div");o.className="chart-label",o.textContent=i.text,o.style.left=r.left,o.style.top=r.top,Object.assign(o.style,i.css),di.appendChild(o)}}async function DR({scene:s,sm:t,orthoCamera:e}){await Promise.all([ER(s),CR(s)]),s.remove(ke),s.remove(Ge);const n=new Re().setFromObject(ke),i=new Re().setFromObject(Ge),r=n.max.x-n.min.x,o=i.max.x-i.min.x,a=r+RR+o;ke.position.x+=-a/2+r/2,Ge.position.x+=a/2-o/2,ke.visible=!0,Ge.visible=!0;const l=new ce;l.add(ke),l.add(Ge),l.visible=!1,s.add(l),t.register("clusteringGroup",l),_a=e,rp=l}const ca={"salt-water":[99,110,250],"fresh-water":[0,204,150],terrestrial:[255,161,90],artificial:[239,85,59],"host-associated":[171,99,250],unknown:[100,100,100]},UR={"salt-water":"Salt Water","fresh-water":"Fresh Water",terrestrial:"Terrestrial",artificial:"Artificial","host-associated":"Host-Associated",unknown:"Unknown"},OR=[[68,1,84],[72,35,116],[64,67,135],[52,94,141],[33,145,140],[53,183,121],[143,215,68],[253,231,37]],FR=[[0,0,4],[40,11,84],[101,0,168],[159,42,99],[212,72,66],[245,125,21],[250,193,39],[252,255,164]];function Jx(s,t){t=Math.max(0,Math.min(1,t));const e=s.length-1,n=Math.min(Math.floor(t*e),e-1),i=t*e-n,r=s[n],o=s[n+1];return[(r[0]+(o[0]-r[0])*i)/255,(r[1]+(o[1]-r[1])*i)/255,(r[2]+(o[2]-r[2])*i)/255]}function jg(s){return Jx(OR,s)}function NR(s){return Jx(FR,s)}const zR=`
  attribute float aSize;
  attribute vec3 nicheColor;
  attribute vec3 shannonColor;
  attribute vec3 highlightColor;
  attribute vec3 archetypeColor;
  attribute float aFixerGlow;
  attribute float aShannonOpacity;
  attribute float aHighlightOpacity;
  attribute float aOutlierGlow;
  attribute float aSaltwaterOutlierGlow;
  attribute float aMetalFrac;
  attribute vec3 metalColor;
  uniform float uTime;
  uniform float uMix;
  uniform float uHighlight;
  uniform float uGray;
  uniform float uArchetype;
  uniform float uFixerHighlight;
  uniform float uOutlierMode;
  uniform float uSaltwaterOnly;
  uniform float uMetalMode;
  uniform vec3 uGrayColor;
  uniform float uFogDensity;
  varying vec3 vColor;
  varying float vFogFactor;
  varying float vOpacity;

  void main() {
    vec3 baseColor = mix(nicheColor, shannonColor, uMix);
    vec3 coloredResult = mix(baseColor, highlightColor, uHighlight);

    // Archetype mode: blend toward archetype colors
    vec3 archColor = archetypeColor;
    // In fixer-highlight mode, dim non-fixers
    vec3 dimGray = vec3(0.15, 0.15, 0.18);
    vec3 fixerColor = mix(dimGray, archetypeColor, aFixerGlow);
    archColor = mix(archColor, fixerColor, uFixerHighlight);

    coloredResult = mix(coloredResult, archColor, uArchetype);
    vColor = mix(coloredResult, uGrayColor, uGray);

    float nicheOpacity = 0.9 + 0.1 * sin(uTime * 0.3 + position.x * 2.0 + position.z * 1.7);
    float baseOpacity = mix(nicheOpacity, max(aShannonOpacity, 0.3), uMix);
    float grayOpacity = 0.35;
    baseOpacity = mix(baseOpacity, grayOpacity, uGray);
    float archOpacity = mix(0.85, mix(0.15, 1.0, aFixerGlow), uFixerHighlight);
    baseOpacity = mix(baseOpacity, archOpacity, uArchetype);
    vOpacity = mix(baseOpacity, aHighlightOpacity, uHighlight);

    // Outlier mode: non-outliers → gray+dim, outliers → niche color+bright
    float outlierGlow = mix(aOutlierGlow, aSaltwaterOutlierGlow, uSaltwaterOnly);
    vec3 outlierColor = mix(uGrayColor, nicheColor, outlierGlow);
    float outlierOpacity = mix(0.15, 0.9, outlierGlow);
    vColor = mix(vColor, outlierColor, uOutlierMode);
    vOpacity = mix(vOpacity, outlierOpacity, uOutlierMode);

    // Metal tolerance mode: color by metal-tolerant genome fraction (inferno)
    float metalOpacity = mix(0.15, 0.95, aMetalFrac);
    vColor = mix(vColor, metalColor, uMetalMode);
    vOpacity = mix(vOpacity, metalOpacity, uMetalMode);

    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPos;

    float sizeBoost = mix(1.0, mix(0.6, 5.0, aHighlightOpacity), uHighlight);
    sizeBoost = mix(sizeBoost, mix(0.4, 1.5, outlierGlow), uOutlierMode);
    sizeBoost = mix(sizeBoost, mix(0.4, 1.5, aMetalFrac), uMetalMode);
    float basePx = aSize * 2.0 * sizeBoost;
    gl_PointSize = basePx * (120.0 / -mvPos.z);
    gl_PointSize = clamp(gl_PointSize, 0.5, 16.0);

    float fogDist = length(mvPos.xyz);
    vFogFactor = 1.0 - exp(-uFogDensity * uFogDensity * fogDist * fogDist);
  }
`,BR=`
  varying vec3 vColor;
  varying float vFogFactor;
  varying float vOpacity;
  uniform vec3 uFogColor;
  uniform float uGray;
  uniform float uOpacity;

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;

    vec3 hsv = rgb2hsv(vColor);
    if (hsv.y > 0.05) hsv.y = max(hsv.y, 0.55);
    hsv.z = min(hsv.z, 0.85);
    vec3 col = hsv2rgb(hsv);

    // In gray mode, skip HSV processing — use raw color
    col = mix(col, vColor, uGray);

    float outerEdge = smoothstep(0.5, 0.42, d);
    float innerEdge = smoothstep(0.36, 0.28, d);
    vec3 finalCol = mix(col * 0.25, col, innerEdge);

    float fogMix = vFogFactor * (1.0 - uGray * 0.7);
    finalCol = mix(finalCol, uFogColor, fogMix);
    float alpha = outerEdge * vOpacity * (1.0 - fogMix) * uOpacity;
    gl_FragColor = vec4(finalCol, alpha);
  }
`,kR=`
  attribute float aSize;
  attribute vec3 shannonColor;
  attribute vec3 highlightColor;
  attribute vec3 archetypeColor;
  attribute float aFixerGlow;
  attribute float aGlowIntensity;
  attribute float aAb48Glow;
  uniform float uMix;
  uniform float uHighlight;
  uniform float uArchetype;
  uniform float uFixerHighlight;
  uniform float uTime;
  varying vec3 vGlowColor;
  varying float vGlowStrength;

  void main() {
    float shannonGlow = aGlowIntensity * uMix;
    float pulse = 0.85 + 0.15 * sin(uTime * 2.0);
    float ab48Glow = aAb48Glow * uHighlight * pulse;

    // Archetype glow: fixers glow in archetype mode
    float archGlow = aFixerGlow * uArchetype * (0.3 + 0.15 * sin(uTime * 1.5));
    archGlow = mix(archGlow, aFixerGlow * uArchetype * (0.6 + 0.2 * sin(uTime * 1.5)), uFixerHighlight);

    vGlowStrength = max(max(shannonGlow, ab48Glow), archGlow);
    vec3 baseGlowColor = mix(shannonColor, highlightColor, uHighlight);
    vGlowColor = mix(baseGlowColor, archetypeColor, uArchetype);

    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPos;

    float glowSize = aSize * 2.0 + vGlowStrength * 4.0 + ab48Glow * 8.0;
    gl_PointSize = glowSize * (120.0 / -mvPos.z);
    gl_PointSize = clamp(gl_PointSize, 0.0, 80.0);
  }
`,GR=`
  varying vec3 vGlowColor;
  varying float vGlowStrength;
  uniform float uOpacity;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float glow = exp(-d * d * 12.0) * vGlowStrength * 0.5 * uOpacity;
    gl_FragColor = vec4(vGlowColor, glow);
  }
`;class VR{buildColors(t,e){const n=t.length,[i,r]=e,o=r-i||1,a=new Float32Array(n*3),l=new Float32Array(n*3),c=new Float32Array(n),h=new Float32Array(n),u=new Float32Array(n);for(let d=0;d<n;d++){const f=t[d],p=ca[f.niche]||ca.unknown;a[d*3]=p[0]/255,a[d*3+1]=p[1]/255,a[d*3+2]=p[2]/255;const _=f.shannon!=null?(f.shannon-i)/o:0,[g,m,x]=jg(_);l[d*3]=g,l[d*3+1]=m,l[d*3+2]=x,c[d]=.1+_*.9;const v=f.shannon!=null?f.shannon:0,y=Math.max(0,(v-1.26)/(r-1.26));h[d]=y*y,u[d]=f.niche==="unknown"?.5:1}return{nicheColors:a,shannonColors:l,shannonOpacities:c,glowIntensities:h,sizes:u}}createMaterial(){return new ye({transparent:!0,depthWrite:!0,depthTest:!0,uniforms:{uTime:{value:0},uMix:{value:0},uHighlight:{value:0},uGray:{value:0},uArchetype:{value:0},uFixerHighlight:{value:0},uOutlierMode:{value:0},uSaltwaterOnly:{value:0},uMetalMode:{value:0},uGrayColor:{value:new at(13684944)},uFogColor:{value:new at(657930)},uFogDensity:{value:.015},uOpacity:{value:1}},vertexShader:zR,fragmentShader:BR})}createGlowMaterial(){return new ye({transparent:!0,depthWrite:!1,depthTest:!1,blending:Es,uniforms:{uMix:{value:0},uHighlight:{value:0},uTime:{value:0},uArchetype:{value:0},uFixerHighlight:{value:0},uOpacity:{value:1}},vertexShader:kR,fragmentShader:GR})}nicheColor(t){return ca[t]||ca.unknown}buildNicheLegend(t){const e=document.getElementById("legend");if(!e)return;const n=["salt-water","fresh-water","terrestrial","artificial","host-associated","unknown"];let i="<h3>Environmental Niche</h3>";for(const r of n){const[o,a,l]=ca[r]||[100,100,100];i+=`<div class="legend-item">
        <div class="legend-dot" style="background:rgb(${o},${a},${l})"></div>
        ${UR[r]||r} <span style="color:#506070;margin-left:0.3rem">(${t[r]||0})</span>
      </div>`}e.innerHTML=i}buildShannonLegend(t){const e=document.getElementById("legend");if(!e)return;const[n,i]=t;let r="<h3>Shannon Diversity (H')</h3>";for(const o of[0,.25,.5,.75,1]){const a=n+o*(i-n),[l,c,h]=jg(o).map(d=>Math.round(d*255)),u=(.1+o*.9).toFixed(2);r+=`<div class="legend-item">
        <div class="legend-dot" style="background:rgb(${l},${c},${h});opacity:${u}"></div>
        ${a.toFixed(2)}
      </div>`}e.innerHTML=r}}const Gn=new VR;function HR(s){const t=[0,0,0,0,0,0,0,0,0];for(let h=0;h<3;h++)for(let u=0;u<3;u++){let d=0;for(let f=0;f<3;f++)d+=s[f*3+h]*s[f*3+u];t[h*3+u]=d}const e=[1,0,0,0,1,0,0,0,1],n=t.slice();for(let h=0;h<50;h++){let u=0,d=0,f=1;for(let E=0;E<3;E++)for(let T=E+1;T<3;T++){const S=Math.abs(n[E*3+T]);S>u&&(u=S,d=E,f=T)}if(u<1e-12)break;const p=n[d*3+d],_=n[f*3+f],g=n[d*3+f],m=(_-p)/(2*g),x=Math.sign(m)/(Math.abs(m)+Math.sqrt(1+m*m)),v=1/Math.sqrt(1+x*x),y=x*v,b=n.slice();for(let E=0;E<3;E++)b[E*3+d]=v*n[E*3+d]-y*n[E*3+f],b[E*3+f]=y*n[E*3+d]+v*n[E*3+f];const w=b.slice();for(let E=0;E<3;E++)b[d*3+E]=v*w[d*3+E]-y*w[f*3+E],b[f*3+E]=y*w[d*3+E]+v*w[f*3+E];for(let E=0;E<9;E++)n[E]=b[E];for(let E=0;E<3;E++){const T=e[E*3+d],S=e[E*3+f];e[E*3+d]=v*T-y*S,e[E*3+f]=y*T+v*S}}const r=[n[0],n[4],n[8]].map(h=>Math.sqrt(Math.max(0,h))),o=[0,1,2].sort((h,u)=>r[u]-r[h]),a=o.map(h=>r[h]),l=[0,0,0,0,0,0,0,0,0];for(let h=0;h<3;h++){const u=o[h];for(let d=0;d<3;d++)l[d*3+h]=e[d*3+u]}const c=[0,0,0,0,0,0,0,0,0];for(let h=0;h<3;h++)for(let u=0;u<3;u++){let d=0;for(let f=0;f<3;f++)d+=s[h*3+f]*l[f*3+u];c[h*3+u]=a[u]>1e-10?d/a[u]:0}return{U:c,S:a,V:l}}function WR(s){return s[0]*(s[4]*s[8]-s[5]*s[7])-s[1]*(s[3]*s[8]-s[5]*s[6])+s[2]*(s[3]*s[7]-s[4]*s[6])}function Jg(s,t){const e=new Array(9);for(let n=0;n<3;n++)for(let i=0;i<3;i++)e[n*3+i]=s[n*3]*t[i]+s[n*3+1]*t[3+i]+s[n*3+2]*t[6+i];return e}function XR(s){return[s[0],s[3],s[6],s[1],s[4],s[7],s[2],s[5],s[8]]}function Go(s,t,e){const n=[0,0,0,0,0,0,0,0,0];for(let l=0;l<e;l++){const c=s[l*3],h=s[l*3+1],u=s[l*3+2],d=t[l*3],f=t[l*3+1],p=t[l*3+2];n[0]+=c*d,n[1]+=c*f,n[2]+=c*p,n[3]+=h*d,n[4]+=h*f,n[5]+=h*p,n[6]+=u*d,n[7]+=u*f,n[8]+=u*p}const{U:i,V:r}=HR(n),o=XR(i);let a=Jg(r,o);if(WR(a)<0){const l=r.slice();l[2]=-l[2],l[5]=-l[5],l[8]=-l[8],a=Jg(l,o)}for(let l=0;l<e;l++){const c=t[l*3],h=t[l*3+1],u=t[l*3+2];t[l*3]=a[0]*c+a[1]*h+a[2]*u,t[l*3+1]=a[3]*c+a[4]*h+a[5]*u,t[l*3+2]=a[6]*c+a[7]*h+a[8]*u}}const Qx=[null,[64,169,255],[0,210,170],[255,145,77],[220,60,60],[160,90,255],[255,200,50]],$R=[45,45,55],qR=8.5,YR=`
  varying vec3 vColor;
  varying float vFogFactor;
  uniform vec3 uFogColor;
  uniform float uOpacity;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;

    float edge = smoothstep(0.5, 0.35, d);
    vec3 col = mix(vColor * 0.3, vColor, smoothstep(0.35, 0.2, d));
    col = mix(col, uFogColor, vFogFactor);
    float alpha = edge * 0.8 * (1.0 - vFogFactor) * uOpacity;
    gl_FragColor = vec4(col, alpha);
  }
`;function qd(s,t,e){const n=s.length,i=new Float32Array(n*3);for(let u=0;u<n;u++)i[u*3]=s[u],i[u*3+1]=t[u],i[u*3+2]=e[u];let r=0,o=0,a=0;for(let u=0;u<n;u++)r+=i[u*3],o+=i[u*3+1],a+=i[u*3+2];r/=n,o/=n,a/=n;for(let u=0;u<n;u++)i[u*3]-=r,i[u*3+1]-=o,i[u*3+2]-=a;const l=new Float32Array(n);for(let u=0;u<n;u++){const d=i[u*3],f=i[u*3+1],p=i[u*3+2];l[u]=Math.sqrt(d*d+f*f+p*p)}l.sort();const c=l[Math.floor(n*.95)]||1,h=qR/c;for(let u=0;u<n*3;u++)i[u]*=h;return i}function tv({programs:s,dominant:t,programMap:e,n}){const i=new Float32Array(n*3),r=new Float32Array(n);for(let o=0;o<n;o++){let a=0;if(s)a=s[o];else if(t&&e){const c=e[String(t[o])];a=c?parseInt(c.substring(1)):0}const l=a>0&&a<=6?Qx[a]:$R;i[o*3]=l[0]/255,i[o*3+1]=l[1]/255,i[o*3+2]=l[2]/255,r[o]=a>0&&a<=6?.5:.3}return{colors:i,sizes:r}}const ZR=`
  attribute vec3 componentColor;
  attribute vec3 aPositionLDA;
  attribute vec3 aPositionVAE;
  attribute float aSize;
  uniform float uMorphT;
  uniform float uTime;
  uniform float uFogDensity;
  uniform vec3 uFogColor;
  varying vec3 vColor;
  varying float vFogFactor;

  void main() {
    vColor = componentColor;

    vec3 morphedPos;
    if (uMorphT <= 1.0) {
      morphedPos = mix(position, aPositionLDA, uMorphT);
    } else {
      morphedPos = mix(aPositionLDA, aPositionVAE, uMorphT - 1.0);
    }
    vec4 mvPos = modelViewMatrix * vec4(morphedPos, 1.0);
    gl_Position = projectionMatrix * mvPos;

    gl_PointSize = aSize * (120.0 / -mvPos.z);
    gl_PointSize = clamp(gl_PointSize, 0.3, 6.0);

    float fogDist = length(mvPos.xyz);
    vFogFactor = 1.0 - exp(-uFogDensity * uFogDensity * fogDist * fogDist);
  }
`;async function KR(s,t,e){const[n,i,r]=await Promise.all([fetch(s),fetch(t),fetch(e)]),[o,a,l]=await Promise.all([n.json(),i.json(),r.json()]),c=o.points,h=a.points,u=l.points,d=c.x.length,f=qd(c.x,c.y,c.z),p=qd(h.x,h.y,h.z),_=qd(u.x,u.y,u.z);Go(f,p,d),Go(p,_,d);const{colors:g,sizes:m}=tv({programs:c.program,n:d}),x=new _t;x.setAttribute("position",new gt(f,3)),x.setAttribute("aPositionLDA",new gt(p,3)),x.setAttribute("aPositionVAE",new gt(_,3)),x.setAttribute("componentColor",new gt(g,3)),x.setAttribute("aSize",new gt(m,1));const v=new ye({transparent:!0,depthWrite:!0,depthTest:!0,uniforms:{uTime:{value:0},uMorphT:{value:0},uFogColor:{value:new at(657930)},uFogDensity:{value:.015},uOpacity:{value:1}},vertexShader:ZR,fragmentShader:YR}),y=new on(x,v);y.visible=!0;const b=new ce;b.add(y),b.visible=!1;function w(E){v.uniforms.uTime.value=E}return{group:b,cloud:y,update:w}}const jR=8.5;function Po(s){const t=s.length,e=new Float32Array(t*3);for(let c=0;c<t;c++)e[c*3]=s[c].x,e[c*3+1]=s[c].y,e[c*3+2]=s[c].z;let n=0,i=0,r=0;for(let c=0;c<t;c++)n+=e[c*3],i+=e[c*3+1],r+=e[c*3+2];n/=t,i/=t,r/=t;for(let c=0;c<t;c++)e[c*3]-=n,e[c*3+1]-=i,e[c*3+2]-=r;const o=new Float32Array(t);for(let c=0;c<t;c++){const h=e[c*3],u=e[c*3+1],d=e[c*3+2];o[c]=Math.sqrt(h*h+u*u+d*d)}o.sort();const a=o[Math.floor(t*.95)]||1,l=jR/a;for(let c=0;c<t*3;c++)e[c]*=l;return e}function ev(s){return s.replace("uniform float uTime;",`attribute vec3 aTargetPosition;
uniform float uMorphT;
uniform float uTime;`).replace("void main() {",`void main() {
    vec3 morphedPos = mix(position, aTargetPosition, uMorphT);`).replace("vec4 mvPos = modelViewMatrix * vec4(position, 1.0);","vec4 mvPos = modelViewMatrix * vec4(morphedPos, 1.0);").replace(/position\.x \* 2\.0 \+ position\.z/,"morphedPos.x * 2.0 + morphedPos.z")}function nv(s){return s.replace("uniform float uTime;",`attribute vec3 aTargetPosition;
uniform float uMorphT;
uniform float uTime;`).replace("void main() {",`void main() {
    vec3 morphedPos = mix(position, aTargetPosition, uMorphT);`).replace("vec4 mvPos = modelViewMatrix * vec4(position, 1.0);","vec4 mvPos = modelViewMatrix * vec4(morphedPos, 1.0);")}async function Qg(s,t,{sourcePositions:e}={}){const[n,i]=await Promise.all([fetch(s),fetch(t)]),[r,o]=await Promise.all([n.json(),i.json()]),a=r.points,l=o.points,c=a.length,h=r.metadata.shannon_range||[0,5],u={};for(const X of a)u[X.niche]=(u[X.niche]||0)+1;const d=e??Po(a),f=Po(l);Go(d,f,c);const p=Gn.buildColors(a,h),_=new Float32Array(c*3),g=new Float32Array(c),m=new Float32Array(c),x=new Float32Array(c*3),v=new Float32Array(c),y=new Float32Array(c),b=new _t;b.setAttribute("position",new gt(d,3)),b.setAttribute("aTargetPosition",new gt(f,3)),b.setAttribute("nicheColor",new gt(p.nicheColors,3)),b.setAttribute("shannonColor",new gt(p.shannonColors,3)),b.setAttribute("highlightColor",new gt(_,3)),b.setAttribute("archetypeColor",new gt(x,3)),b.setAttribute("aShannonOpacity",new gt(p.shannonOpacities,1)),b.setAttribute("aHighlightOpacity",new gt(g,1)),b.setAttribute("aAb48Glow",new gt(m,1)),b.setAttribute("aGlowIntensity",new gt(p.glowIntensities,1)),b.setAttribute("aFixerGlow",new gt(v,1)),b.setAttribute("aOutlierGlow",new gt(y,1)),b.setAttribute("aSize",new gt(p.sizes,1));const w=Gn.createMaterial();w.vertexShader=ev(w.vertexShader),w.uniforms.uMorphT={value:0};const E=Gn.createGlowMaterial();E.vertexShader=nv(E.vertexShader),E.uniforms.uMorphT={value:0};const T=new on(b,w);T.visible=!0;const S=new on(b,E);S.renderOrder=-1,S.visible=!0;const M=new ce;M.add(T),M.add(S),M.visible=!1;function P(X){w.uniforms.uMix.value=X,E.uniforms.uMix.value=X}function O(X){w.uniforms.uHighlight.value=X,E.uniforms.uHighlight.value=X}function U(X){w.uniforms.uGray.value=X}function D(X){w.uniforms.uTime.value=X,E.uniforms.uTime.value=X}function z(){Gn.buildNicheLegend(u)}function F(){Gn.buildShannonLegend(h)}return{group:M,cloud:T,glowCloud:S,setMix:P,setHighlight:O,setGray:U,update:D,buildNicheLegend:z,buildShannonLegend:F,pointData:a,targetPositions:f}}const JR=`
  attribute vec3 programColor;
  attribute vec3 aP2Color;
  attribute float aP2Weight;
  attribute vec3 aPositionLDA;
  attribute vec3 aPositionVAE;
  attribute float aSize;
  uniform float uMorphT;
  uniform float uP2Mode;
  uniform float uTime;
  uniform float uFogDensity;
  uniform vec3 uFogColor;
  varying vec3 vColor;
  varying float vFogFactor;
  varying float vOpacity;

  void main() {
    vColor = mix(programColor, aP2Color, uP2Mode);
    vOpacity = mix(0.9, mix(0.15, 0.95, aP2Weight), uP2Mode);

    vec3 morphedPos;
    if (uMorphT <= 1.0) {
      morphedPos = mix(position, aPositionLDA, uMorphT);
    } else {
      morphedPos = mix(aPositionLDA, aPositionVAE, uMorphT - 1.0);
    }
    vec4 mvPos = modelViewMatrix * vec4(morphedPos, 1.0);
    gl_Position = projectionMatrix * mvPos;

    float basePx = aSize * 2.0;
    gl_PointSize = basePx * (120.0 / -mvPos.z);
    gl_PointSize = clamp(gl_PointSize, 0.5, 16.0);

    float fogDist = length(mvPos.xyz);
    vFogFactor = 1.0 - exp(-uFogDensity * uFogDensity * fogDist * fogDist);
  }
`,QR=`
  varying vec3 vColor;
  varying float vFogFactor;
  varying float vOpacity;
  uniform vec3 uFogColor;
  uniform float uOpacity;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;

    float outerEdge = smoothstep(0.5, 0.42, d);
    float innerEdge = smoothstep(0.36, 0.28, d);
    vec3 col = mix(vColor * 0.25, vColor, innerEdge);
    col = mix(col, uFogColor, vFogFactor);
    float alpha = outerEdge * vOpacity * (1.0 - vFogFactor) * uOpacity;
    gl_FragColor = vec4(col, alpha);
  }
`,tP=`
  attribute vec3 programColor;
  attribute vec3 aP2Color;
  attribute vec3 aPositionLDA;
  attribute vec3 aPositionVAE;
  attribute float aSize;
  attribute float aGlowIntensity;
  uniform float uMorphT;
  uniform float uP2Mode;
  uniform float uTime;
  varying vec3 vGlowColor;
  varying float vGlowStrength;

  void main() {
    vGlowColor = mix(programColor, aP2Color, uP2Mode);
    vGlowStrength = aGlowIntensity * (0.85 + 0.15 * sin(uTime * 1.5));

    vec3 morphedPos;
    if (uMorphT <= 1.0) {
      morphedPos = mix(position, aPositionLDA, uMorphT);
    } else {
      morphedPos = mix(aPositionLDA, aPositionVAE, uMorphT - 1.0);
    }
    vec4 mvPos = modelViewMatrix * vec4(morphedPos, 1.0);
    gl_Position = projectionMatrix * mvPos;

    float glowSize = aSize * 2.0 + vGlowStrength * 4.0;
    gl_PointSize = glowSize * (120.0 / -mvPos.z);
    gl_PointSize = clamp(gl_PointSize, 0.0, 80.0);
  }
`,eP=`
  varying vec3 vGlowColor;
  varying float vGlowStrength;
  uniform float uOpacity;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float glow = exp(-d * d * 12.0) * vGlowStrength * 0.5 * uOpacity;
    gl_FragColor = vec4(vGlowColor, glow);
  }
`,nP={1:"P1 — Carbon fix + terpene",2:"P2 — Carbon fix + biofilm",3:"P3 — C/N-fix + ectoine/UV",4:"P4 — Carbon fixation",5:"P5 — Core cyano (dominant)",6:"P6 — N-fix + ectoine/UV"};async function iP(s,t,e,{programMap:n,p2Url:i}){const r=[fetch(s),fetch(t),fetch(e)];i&&r.push(fetch(i));const o=await Promise.all(r),a=await Promise.all(o.map(V=>V.json())),[l,c,h]=a,u=a[3]||null,d=l.points,f=c.points,p=h.points,_=d.length,g=Po(d),m=Po(f),x=Po(p);Go(g,m,_),Go(m,x,_);const v=d.map(V=>V.dominant_component),{colors:y,sizes:b}=tv({dominant:v,programMap:n,n:_}),w=new Float32Array(_);for(let V=0;V<_;V++){const K=n[String(v[V])];w[V]=K?.6:0}const E={};for(let V=0;V<_;V++){const K=n[String(v[V])];K&&(E[K]=(E[K]||0)+1)}const T=new Float32Array(_*3),S=new Float32Array(_);if(u?.weights){const V=[.17647058823529413,.17647058823529413,.21568627450980393],K=[0/255,210/255,170/255];for(let rt=0;rt<_;rt++){const xt=u.weights[d[rt].acc]??0;S[rt]=xt,T[rt*3]=V[0]+(K[0]-V[0])*xt,T[rt*3+1]=V[1]+(K[1]-V[1])*xt,T[rt*3+2]=V[2]+(K[2]-V[2])*xt}}const M=new _t;M.setAttribute("position",new gt(g,3)),M.setAttribute("aPositionLDA",new gt(m,3)),M.setAttribute("aPositionVAE",new gt(x,3)),M.setAttribute("programColor",new gt(y,3)),M.setAttribute("aP2Color",new gt(T,3)),M.setAttribute("aP2Weight",new gt(S,1)),M.setAttribute("aSize",new gt(b,1)),M.setAttribute("aGlowIntensity",new gt(w,1));const P=new ye({transparent:!0,depthWrite:!0,depthTest:!0,uniforms:{uTime:{value:0},uMorphT:{value:0},uP2Mode:{value:0},uFogColor:{value:new at(657930)},uFogDensity:{value:.015},uOpacity:{value:1}},vertexShader:JR,fragmentShader:QR}),O=new ye({transparent:!0,depthWrite:!1,depthTest:!1,blending:Es,uniforms:{uMorphT:{value:0},uP2Mode:{value:0},uTime:{value:0},uOpacity:{value:1}},vertexShader:tP,fragmentShader:eP}),U=new on(M,P);U.visible=!0;const D=new on(M,O);D.renderOrder=-1,D.visible=!0;const z=new ce;z.add(U),z.add(D),z.visible=!1;function F(V){P.uniforms.uTime.value=V,O.uniforms.uTime.value=V}function X(){const V=document.getElementById("legend");if(!V)return;let K="<h3>Concordant Programs</h3>";for(let rt=1;rt<=6;rt++){const[xt,Gt,j]=Qx[rt],ut=`P${rt}`,$=E[ut]||0;K+=`<div class="legend-item">
        <div class="legend-dot" style="background:rgb(${xt},${Gt},${j})"></div>
        ${nP[rt]} <span style="color:#506070;margin-left:0.3rem">(${$})</span>
      </div>`}V.innerHTML=K}function H(){const V=document.getElementById("legend");if(!V)return;let K="<h3>P2 Utilization</h3>";K+='<div style="display:flex;align-items:center;gap:0.3rem;margin:0.3rem 0">',K+='<span style="font-size:0.7rem;color:#7090b0">0</span>',K+='<div style="width:100px;height:10px;border-radius:3px;background:linear-gradient(to right,rgb(45,45,55) 0%,rgb(0,210,170) 100%)"></div>',K+='<span style="font-size:0.7rem;color:#7090b0">max</span>',K+="</div>",K+='<div style="font-size:0.7rem;color:#506070;margin-top:0.2rem">Carbon fix + biofilm program weight</div>',V.innerHTML=K}return{group:z,cloud:U,glowCloud:D,update:F,buildProgramLegend:X,buildP2Legend:H,pointData:d}}let op=null;const Zi={ordination:{speed:0,target:0,pointerDown:!1,group:null},ordinationI030:{speed:0,target:0,pointerDown:!1,group:null}};let Wh={},iv=0;function sP(s){iv=s}function sv(s,t,e){const n=Zi.ordination.group,i=Zi.ordinationI030.group;if(!n||!i){s.render(t,e);return}const r=iv;if(r<.01&&!i.visible){s.render(t,e);return}const o=s.domElement.width,a=s.domElement.height,l=Math.round(o*r*.5),c=o-l,h=e.aspect,u=n.visible,d=i.visible;s.autoClear=!1,s.clear(),s.setScissorTest(!0),l>0&&(e.aspect=l/a,e.updateProjectionMatrix(),n.visible=!1,i.visible=!0,s.setScissor(0,0,l,a),s.setViewport(0,0,l,a),s.render(t,e)),e.aspect=c/a,e.updateProjectionMatrix(),i.visible=!1,n.visible=!0,s.setScissor(l,0,c,a),s.setViewport(l,0,c,a),s.render(t,e),s.setScissorTest(!1),s.setViewport(0,0,o,a),e.aspect=h,e.updateProjectionMatrix(),n.visible=u,i.visible=d,s.autoClear=!0}function Lu(s){return function(e,n,i){const r=Zi[s];Wh[s]&&Wh[s](e);const o=r.pointerDown?0:r.target;r.speed+=(o-r.speed)*(1-Math.exp(-.3*n)),r.group&&(i?.rotation?(Math.abs(i.rotation.y-r.group.rotation.y)>.01&&(i.rotation.y=r.group.rotation.y),i.rotation.y+=r.speed*n,r.group.rotation.y=i.rotation.y):r.group.rotation.y+=r.speed*n)}}function Mm(){op&&(op.enabled=!0)}function Xh(s,t){Zi[s].target=t}function $h(s){Zi[s].target=0}async function rP({scene:s,sm:t,controls:e,renderer:n}){op=e,n.domElement.addEventListener("pointerdown",()=>{for(const o of Object.values(Zi))o.pointerDown=!0}),window.addEventListener("pointerup",()=>{for(const o of Object.values(Zi))o.pointerDown=!1});const i=await Qg(Te("/data/pcoa_simpson_i095_3d.json"),Te("/data/umap_simpson_i095_3d.json"));s.add(i.group),t.register("ordinationMorphGroup",i.group),t.register("ordinationMorphCloud",i.cloud),Zi.ordination.group=i.group,Wh.ordination=i.update,t.registerProperty("ordinationMorphCloud","mix",i.setMix),t.registerProperty("ordinationMorphCloud","gray",i.setGray),t.registerProperty("ordinationMorphCloud","pairSplitT",sP),t.registerLegend("pcoa-niche",i.buildNicheLegend),t.registerLegend("umap-simpson-niche",i.buildNicheLegend);const r=await Qg(Te("/data/pcoa_simpson_i030_3d.json"),Te("/data/umap_simpson_i030_3d.json"));return s.add(r.group),t.register("ordinationI030MorphGroup",r.group),t.register("ordinationI030MorphCloud",r.cloud),Zi.ordinationI030.group=r.group,Wh.ordinationI030=r.update,t.registerProperty("ordinationI030MorphCloud","mix",r.setMix),t.registerProperty("ordinationI030MorphCloud","gray",r.setGray),t.registerLegend("pcoa-i030-niche",r.buildNicheLegend),{simpsonUmapPositions:i.targetPositions}}const oP=Lu("ordination"),aP=Lu("ordinationI030"),lP={name:"pcoa-pair",visible:["ordinationMorphGroup","ordinationI030MorphGroup"],camera:"umap-pair",overlays:{title:"PCoA Comparison: i30 vs i95",subtitle:"Simpson's distance at two clustering resolutions · 2,798 samples"},legend:"pcoa-niche",uniforms:{ordinationMorphCloud:{uMorphT:0},ordinationI030MorphCloud:{uMorphT:0}},properties:{ordinationMorphCloud:{mix:0,gray:0,pairSplitT:1},ordinationI030MorphCloud:{mix:0,gray:0}},onEnter(s){Mm(),Xh("ordination",.08),Xh("ordinationI030",.08);const t=document.getElementById("pcoa-pair-overlay");t&&(t.style.display="",s?.name==="pcoa-simpson"&&(t.style.opacity="0"))},onLeave(s){if(s?.name==="pcoa-simpson")return;$h("ordination"),$h("ordinationI030");const t=document.getElementById("pcoa-pair-overlay");t&&(t.style.display="none")},onUpdate(s,t,e){oP(s,t,e),aP(s,t,e)},onRender:sv},cP={name:"pcoa-simpson",visible:["ordinationMorphGroup"],camera:"umap-wide",props:{rotation:"cloud-spin"},overlays:{title:"PCoA of Simpson’s Distance",subtitle:"2,798 samples · 42.2M protein clusters · classical multidimensional scaling"},legend:"pcoa-niche",uniforms:{ordinationMorphCloud:{uMorphT:0}},properties:{ordinationMorphCloud:{mix:0,gray:0,pairSplitT:0}},onEnter(){Mm(),Xh("ordination",.08)},onLeave(){$h("ordination")},onUpdate:Lu("ordination"),onRender:sv},hP={name:"umap-simpson",visible:["ordinationMorphGroup"],camera:"umap-wide",props:{rotation:"cloud-spin"},overlays:{title:"UMAP of Simpson’s Distance",subtitle:"Same functional distance · nonlinear embedding"},legend:"umap-simpson-niche",uniforms:{ordinationMorphCloud:{uMorphT:1},umapCloud:{uMorphT:0}},properties:{ordinationMorphCloud:{mix:0,gray:0}},onEnter(){Mm(),Xh("ordination",.08)},onLeave(){$h("ordination")},onUpdate:Lu("ordination")},uP="SRR19586134",Xc=[255,220,50];let se=null,Ue=null,Ki=null;const dP=new Set(["DRR315875","DRR582966","DRR582968","DRR582990","DRR583185","ERR12155738","SRR10606322","SRR10606323","SRR10608015","SRR10608018","SRR10609000","SRR1125038","SRR12518584","SRR14062498","SRR1812774","SRR19586134","SRR26209612","SRR6482538","SRR6486233","SRR9434940"]);let ap={},t_=[0,5],Zs=null,Ks={},Yd=null,$c={},qc={},rv=0;const fo=new A,lp=new A,bm=new A,Yc=new A;function fP(s){se&&(se.material.uniforms.uMix.value=s),Ue&&(Ue.material.uniforms.uMix.value=s)}function pP(s){se&&(se.material.uniforms.uHighlight.value=s),Ue&&(Ue.material.uniforms.uHighlight.value=s)}function mP(s){se&&(se.material.uniforms.uGray.value=s),Ki&&(Ki.material.uniforms.uOpacity.value=s)}let So=null;function gP(s){So&&(So.value=s)}function _P(s){se?.material?.uniforms?.uOutlierMode&&(se.material.uniforms.uOutlierMode.value=s)}function yP(s){se?.material?.uniforms?.uMetalMode&&(se.material.uniforms.uMetalMode.value=s)}function xP(s){se?.material?.uniforms?.uSaltwaterOnly&&(se.material.uniforms.uSaltwaterOnly.value=s)}function Sm(s){rv=s}function ov(){return rv}function vP(s){se&&(se.material.uniforms.uTime.value=s),Ue&&(Ue.material.uniforms.uTime.value=s)}function MP(){Gn.buildNicheLegend(ap)}function bP(){const s=document.getElementById("legend");s&&(s.innerHTML="",s.style.display="none");const t=document.getElementById("confusion-matrix");if(!t||typeof Plotly>"u")return;t.style.display="block";const e=["fresh-water","salt-water","terrestrial","artificial","host-associated"],n=["Fresh Water","Salt Water","Terrestrial","Artificial","Host-Assoc."],i=e.length,r=e.map(d=>{const[f,p,_]=Gn.nicheColor(d);return`rgb(${f},${p},${_})`}),o=[];for(let d=0;d<i;d++){const f=[];for(let p=0;p<i;p++){const _=`${e[d]}→${e[p]}`,g=qc[_]||0;f.push(g>0?g:null)}o.push(f)}o.map(d=>d.map(f=>f>0?String(f):""));const a=o.map(d=>d.map(f=>f>0?String(f):"")),l=.06,c=[{type:"heatmap",z:o,x:n,y:n,text:a,texttemplate:"%{text}",textfont:{color:"#e0e8f0",size:12},colorscale:[[0,"rgba(20, 20, 35, 0.5)"],[.01,"rgba(30, 50, 80, 0.7)"],[.5,"rgba(60, 120, 200, 0.8)"],[1,"rgba(100, 180, 255, 0.9)"]],showscale:!1,hovertemplate:"Actual: %{y}<br>Local: %{x}<br>Count: %{z}<extra></extra>",xgap:2,ygap:2,xaxis:"x2",yaxis:"y"},{type:"scatter",mode:"markers",x:Array(i).fill(0),y:n,marker:{size:10,color:r},showlegend:!1,hoverinfo:"skip",xaxis:"x",yaxis:"y"},{type:"scatter",mode:"markers",x:n.slice(0,-1),y:Array(i-1).fill(0),marker:{size:10,color:r.slice(0,-1)},showlegend:!1,hoverinfo:"skip",xaxis:"x2",yaxis:"y3"}],h={showgrid:!1,zeroline:!1,showline:!1,showticklabels:!1,ticks:""},u={width:340,height:330,margin:{l:80,r:10,t:30,b:50},paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"rgba(0,0,0,0)",font:{family:"system-ui, sans-serif",color:"#a0b0c0",size:10},title:{text:"Outlier Confusion (k=10)",font:{size:11,color:"#a0b0c0"},x:.5,xanchor:"center"},xaxis:{domain:[0,l],...h},yaxis:{domain:[l,1],showgrid:!1,zeroline:!1,showline:!1,categoryorder:"array",categoryarray:n,tickfont:{size:9,color:"#a0b0c0"},ticks:"",side:"left",title:{text:"actual",font:{size:10,color:"#a0b0c0"},standoff:5}},xaxis2:{domain:[l,1],showgrid:!1,zeroline:!1,showline:!1,categoryorder:"array",categoryarray:n,tickvals:n,ticktext:n.map(d=>d==="Host-Assoc."?"":d),tickfont:{size:9,color:"#a0b0c0"},tickangle:60,ticks:"outside",ticklen:10,tickcolor:"rgba(0,0,0,0)",side:"bottom",title:{text:"local",font:{size:10,color:"#a0b0c0"},standoff:30}},yaxis3:{domain:[0,l],...h}};Plotly.newPlot(t,c,u,{displayModeBar:!1,staticPlot:!0,responsive:!1})}function av(){const s=document.getElementById("confusion-matrix");s&&(s.style.display="none")}function SP(){const s=document.getElementById("legend");s&&(s.innerHTML=`<h3>Sample Highlight</h3>
    <div class="legend-item">
      <div class="legend-dot" style="background:rgb(${Xc.join(",")})"></div>
      AB48 (SRR19586134)
    </div>
    <div class="legend-item">
      <div class="legend-dot" style="background:rgb(50,50,60)"></div>
      Other samples
    </div>`)}function wP(){const s=document.getElementById("legend");if(!s)return;s.style.display="";let t="<h3>Metal Tolerance</h3>";t+='<div style="display:flex;align-items:center;gap:0.3rem;margin:0.3rem 0">',t+='<span style="font-size:0.7rem;color:#7090b0">0%</span>',t+='<div style="width:100px;height:10px;border-radius:3px;background:linear-gradient(to right';for(let e=0;e<=1;e+=.1){const[n,i,r]=NR(e).map(o=>Math.round(o*255));t+=`,rgb(${n},${i},${r}) ${Math.round(e*100)}%`}t+=')"></div>',t+='<span style="font-size:0.7rem;color:#7090b0">100%</span>',t+="</div>",t+='<div style="font-size:0.7rem;color:#506070;margin-top:0.2rem">Fraction of bases in metal-tolerant genera</div>',s.innerHTML=t}function EP(){const s=document.getElementById("legend");if(!s)return;s.style.display="";const t=["salt-water","fresh-water","terrestrial","artificial","host-associated"],e={"salt-water":"Salt Water","fresh-water":"Fresh Water",terrestrial:"Terrestrial",artificial:"Artificial","host-associated":"Host-Assoc."};let n="<h3>KNN Outliers by Niche</h3>";for(const i of t){const r=$c[i]||0;if(r===0)continue;const[o,a,l]=Gn.nicheColor(i);n+=`<div class="legend-item">
      <div class="legend-dot" style="background:rgb(${o},${a},${l})"></div>
      ${e[i]} <span style="color:#506070;margin-left:0.3rem">(${r})</span>
    </div>`}s.innerHTML=n}async function AP(s,{simpsonUmapPositions:t}={}){const n=await(await fetch(Te("/data/umap3d_data.json"))).json(),i=n.points,r=i.length;t_=n.metadata.shannon_range||[0,5];for(const D of i)ap[D.niche]=(ap[D.niche]||0)+1;try{Zs=await(await fetch(Te("/data/archetype_assignments.json"))).json()}catch{console.warn("No archetype data found, archetype scenes will be disabled"),Zs=null}if(Zs){Ks={};for(const D of Zs.assignments)D.dominant===9?Ks[9]=(Ks[9]||0)+1:D.dominant===3?Ks[3]=(Ks[3]||0)+1:Ks.other=(Ks.other||0)+1}let o={};try{const z=await(await fetch(Te("/data/knn_outliers_k10.json"))).json();Yd=new Set(z.outlier_accs),o=z.outlier_predictions||{}}catch{console.warn("No KNN outlier data found"),Yd=new Set}let a={},l={};try{const z=await(await fetch(Te("/data/metal_tolerance.json"))).json();a=z.per_sample||{},l=z.per_metal||{}}catch{console.warn("No metal tolerance data found")}let c,h;if(t)c=t,h=Po(i),Go(c,h,r);else{c=new Float32Array(r*3);for(let D=0;D<r;D++){const z=i[D];c[D*3]=z.x,c[D*3+1]=z.y,c[D*3+2]=z.z}}{const D=h??c;let z=0,F=0,X=0,H=0;for(let V=0;V<r;V++)i[V].niche==="salt-water"&&(z+=D[V*3],F+=D[V*3+1],X+=D[V*3+2],H++);H&&Yc.set(z/H,F/H,X/H)}const u=Gn.buildColors(i,t_),d=new Float32Array(r*3),f=new Float32Array(r),p=new Float32Array(r);for(let D=0;D<r;D++){const z=i[D];if(z.acc===uP){d[D*3]=Xc[0]/255,d[D*3+1]=Xc[1]/255,d[D*3+2]=Xc[2]/255,f[D]=1,p[D]=1;const F=h??c;lp.set(F[D*3],F[D*3+1],F[D*3+2])}else{const F=Gn.nicheColor(z.niche);d[D*3]=F[0]/255,d[D*3+1]=F[1]/255,d[D*3+2]=F[2]/255,f[D]=.35,p[D]=0}}const _=new Float32Array(r*3),g=new Float32Array(r);for(let D=0;D<r;D++)if(Zs&&Zs.assignments[D]){const z=Zs.assignments[D];_[D*3]=z.color[0]/255,_[D*3+1]=z.color[1]/255,_[D*3+2]=z.color[2]/255,g[D]=z.dominant===9?1:0}else _[D*3]=.35,_[D*3+1]=.35,_[D*3+2]=.39,g[D]=0;const m=new Float32Array(r),x=new Float32Array(r);$c={},qc={};for(let D=0;D<r;D++)if(Yd.has(i[D].acc)){m[D]=1;const z=i[D].niche;$c[z]=($c[z]||0)+1;const F=o[i[D].acc];if(dP.has(i[D].acc)&&(x[D]=1),F&&F!==z){const X=`${z}→${F}`;qc[X]=(qc[X]||0)+1}}const v={cu:[232/255,145/255,58/255],zn:[112/255,144/255,208/255],as:[80/255,184/255,128/255],hg:[176/255,112/255,208/255]},y=new Float32Array(r),b=new Float32Array(r*3);for(let D=0;D<r;D++){const z=i[D].acc,F=l[z];if(F){const X=F.cu||0,H=F.zn||0,V=F.as||0,K=F.hg||0,rt=X+H+V+K,xt=Math.max(X,H,V,K);if(y[D]=xt,rt>0){let Gt=0,j=0,ut=0;for(const[$,G]of[["cu",X],["zn",H],["as",V],["hg",K]]){const J=G/rt,ot=v[$];Gt+=ot[0]*J,j+=ot[1]*J,ut+=ot[2]*J}b[D*3]=Gt,b[D*3+1]=j,b[D*3+2]=ut}}else{const X=a[z]||0;y[D]=X}}if(!t){let D=0,z=0,F=0;for(let X=0;X<r;X++)D+=c[X*3],z+=c[X*3+1],F+=c[X*3+2];fo.set(D/r,z/r,F/r);for(let X=0;X<r;X++)c[X*3]-=fo.x,c[X*3+1]-=fo.y,c[X*3+2]-=fo.z;lp.sub(fo)}const w=new _t;w.setAttribute("position",new gt(c,3)),h&&w.setAttribute("aTargetPosition",new gt(h,3)),w.setAttribute("nicheColor",new gt(u.nicheColors,3)),w.setAttribute("shannonColor",new gt(u.shannonColors,3)),w.setAttribute("highlightColor",new gt(d,3)),w.setAttribute("aShannonOpacity",new gt(u.shannonOpacities,1)),w.setAttribute("aHighlightOpacity",new gt(f,1)),w.setAttribute("aAb48Glow",new gt(p,1)),w.setAttribute("aGlowIntensity",new gt(u.glowIntensities,1)),w.setAttribute("archetypeColor",new gt(_,3)),w.setAttribute("aFixerGlow",new gt(g,1)),w.setAttribute("aOutlierGlow",new gt(m,1)),w.setAttribute("aSaltwaterOutlierGlow",new gt(x,1)),w.setAttribute("aMetalFrac",new gt(y,1)),w.setAttribute("metalColor",new gt(b,3)),w.setAttribute("aSize",new gt(u.sizes,1)),So={value:0};let E,T;E=Gn.createMaterial(),T=Gn.createGlowMaterial(),t&&(E.vertexShader=ev(E.vertexShader),E.uniforms.uMorphT=So,T.vertexShader=nv(T.vertexShader),T.uniforms.uMorphT=So),se=new on(w,E),se.visible=!1,s.add(se),Ue=new on(w,T),Ue.renderOrder=-1,Ue.visible=!1,s.add(Ue);const S={uOpacity:{value:1},uFogColor:{value:new at(657930)},uFogDensity:{value:.015}};t&&(S.uMorphT=So);const M=t?`attribute vec3 aTargetPosition;
uniform float uMorphT;
`:"",P=t?`vec3 morphedPos = mix(position, aTargetPosition, uMorphT);
        vec4 mvPos = modelViewMatrix * vec4(morphedPos, 1.0);`:"vec4 mvPos = modelViewMatrix * vec4(position, 1.0);",O=new ye({transparent:!0,depthWrite:!1,depthTest:!0,blending:Es,uniforms:S,vertexShader:`
      attribute float aSize;
      ${M}uniform float uFogDensity;
      varying float vFogFactor;

      void main() {
        ${P}
        gl_Position = projectionMatrix * mvPos;

        float basePx = aSize * 2.5;
        gl_PointSize = basePx * (120.0 / -mvPos.z);
        gl_PointSize = clamp(gl_PointSize, 0.5, 20.0);

        float fogDist = length(mvPos.xyz);
        vFogFactor = 1.0 - exp(-uFogDensity * uFogDensity * fogDist * fogDist);
      }
    `,fragmentShader:`
      uniform float uOpacity;
      varying float vFogFactor;

      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;

        // Soft gaussian falloff
        float intensity = exp(-d * d * 50.0);
        float alpha = intensity * uOpacity * 0.35 * (1.0 - vFogFactor);
        gl_FragColor = vec4(0.85, 0.88, 0.92, alpha);
      }
    `});Ki=new on(w,O),Ki.visible=!1,s.add(Ki);const U=document.getElementById("info");return U&&(U.textContent=`${r.toLocaleString()} samples · drag to orbit · scroll to zoom · ← → switch views`),{pointCloud:se,glowCloud:Ue,densityCloud:Ki,centroid:fo}}let Si=null,He=null,cp=0,Lc=0,Ia=!1,La=0,Da=0,wm=!1;function lv(){He&&(He.updateMatrixWorld(),bm.copy(lp).applyMatrix4(He.matrixWorld))}function bl(s,{trackAb48:t=!1}={}){return function(n,i,r){if(vP(n),cp=s,wm&&Si&&(Si.enableRotate=!1),He){let o,a=0;Ia&&(La!==0||Da!==0)?(o=La*.005,a=Da*.005,La=0,Da=0,Lc=0):(Lc+=((Ia?0:cp)-Lc)*(1-Math.exp(-.3*i)),o=Lc*i),r?.rotation?(r.rotation.y+=o,r.rotation.x=(r.rotation.x??0)+a,He.rotation.y=r.rotation.y,He.rotation.x=r.rotation.x):(He.rotation.y+=o,He.rotation.x+=a),lv(),t&&Si.target.copy(bm)}}}function TP(){wm=!0,Si&&(Si.enableRotate=!1)}function CP(){wm=!1,Si&&(Si.enableRotate=!0)}function RP(){return He}function Sl(){Si&&(Si.enabled=!0)}function wl(){cp=0}function PP(s){He&&He.position.set(-Yc.x*s,-Yc.y*s,-Yc.z*s)}async function IP({scene:s,sm:t,camera:e,controls:n,renderer:i},{simpsonUmapPositions:r}={}){Si=n,t.director.autoRotatePaused=!0,i.domElement.addEventListener("pointerdown",()=>{Ia=!0}),window.addEventListener("pointerup",()=>{Ia=!1,La=0,Da=0}),i.domElement.addEventListener("pointermove",o=>{Ia&&(La+=o.movementX,Da+=o.movementY)}),await AP(s,{simpsonUmapPositions:r}),He=new ce,se&&(s.remove(se),He.add(se),se.visible=!0),Ue&&(s.remove(Ue),He.add(Ue),Ue.visible=!0),Ki&&(s.remove(Ki),He.add(Ki)),He.visible=!1,s.add(He),t.register("umapGroup",He),t.register("umapCloud",se),lv(),t.registerProperty("umapCloud","mix",fP),t.registerProperty("umapCloud","highlight",pP),t.registerProperty("umapCloud","gray",mP),t.registerProperty("umapCloud","morphT",gP),t.registerProperty("umapCloud","outlierMode",_P),t.registerProperty("umapCloud","splitT",Sm),t.registerProperty("umapCloud","metalMode",yP),t.registerProperty("umapCloud","saltwaterOnly",xP),t.registerProperty("umapCloud","marineShift",PP),t.registerLegend("niche",MP),t.registerLegend("ab48",SP),t.registerLegend("outliers",bP),t.registerLegend("metal",wP),t.registerLegend("outlier-niche",EP),i.domElement}const LP={name:"niche",visible:["umapGroup"],camera:"umap-wide",props:{rotation:"cloud-spin"},overlays:{title:"UMAP from ProteinBERT Embedding",subtitle:"Colored by environmental source"},legend:"niche",uniforms:{umapCloud:{uMorphT:1}},properties:{umapCloud:{mix:0,highlight:0,gray:0}},onEnter(){Sl()},onLeave(){wl()},onUpdate:bl(.08)},DP={name:"ab48",visible:["umapGroup"],camera:"umap-close",props:{rotation:"cloud-spin"},overlays:{title:"AB48",subtitle:"SRR19586134 — a single sample highlighted in the metagenomic landscape"},legend:"ab48",uniforms:{umapCloud:{uMorphT:1}},properties:{umapCloud:{mix:0,highlight:1,gray:0}},onEnter(){Sl()},onLeave(){wl()},onUpdate:bl(.04,{trackAb48:!0})},Dc=new A,e_=10,Uc=["uOutlierMode","uMetalMode","uSaltwaterOnly"];function Em(){return function(t,e,n){const i=RP();if(!i){t.render(e,n);return}const r=ov(),o=document.getElementById("split-overlay");if(o){o.style.display=r<.01?"none":"",o.style.opacity=r;const p=o.querySelector(".split-divider");if(p){const m=(1-r*.5)*100;p.style.left=`${m}%`}const _=o.querySelector(".split-left"),g=o.querySelector(".split-right");_&&(_.style.left=`${(1-r*.5)*50}%`),g&&(g.style.left=`${(1-r*.25)*100}%`)}if(r<.01){t.render(e,n);return}const a=t.domElement.width,l=t.domElement.height,c=i.position.clone(),h=Ue?.visible;Ue&&(Ue.visible=!1),n.getWorldDirection(Dc),Dc.cross(n.up).normalize();const u={};if(se)for(const p of Uc)u[p]=se.material.uniforms[p]?.value??0;t.autoClear=!1,t.clear();const d=Math.round(a*r*.5),f=a-d;if(t.setScissorTest(!0),se)for(const p of Uc)se.material.uniforms[p]&&(se.material.uniforms[p].value=0);if(i.position.copy(c).addScaledVector(Dc,-e_*r),t.setScissor(0,0,f,l),t.setViewport(0,0,a,l),t.render(e,n),se)for(const p of Uc)se.material.uniforms[p]&&(se.material.uniforms[p].value=u[p]);if(i.position.copy(c).addScaledVector(Dc,e_*r),t.setScissor(f,0,d,l),t.setViewport(0,0,a,l),t.render(e,n),t.setScissorTest(!1),t.setViewport(0,0,a,l),i.position.copy(c),t.autoClear=!0,Ue&&(Ue.visible=h),se)for(const p of Uc)se.material.uniforms[p]&&(se.material.uniforms[p].value=u[p])}}const hp={name:"outliers",visible:["umapGroup"],camera:"umap-pair",props:{rotation:"cloud-spin"},overlays:{title:"KNN Environment Outliers",subtitle:"Samples whose nearest UMAP neighbors belong to a different environmental niche"},legend:"outliers",uniforms:{umapCloud:{uMorphT:1}},properties:{umapCloud:{mix:0,highlight:0,gray:0,outlierMode:1,saltwaterOnly:0,metalMode:0,splitT:1,marineShift:0}},onEnter(){Sl(),TP()},onLeave(s){if(CP(),wl(),av(),!(s?.properties?.umapCloud?.splitT>0)){const t=document.getElementById("split-overlay");t&&(t.style.display="none")}},onUpdate:bl(.08),onRender:Em()},UP={name:"outlier-saltwater",visible:["umapGroup"],camera:"umap-pair",props:{rotation:"cloud-spin"},overlays:{title:"Salt-Water Outliers",subtitle:"20 non-marine samples that embed within the marine cluster"},legend:null,uniforms:{umapCloud:{uMorphT:1}},panels:["saltwater-outlier-panel"],properties:{umapCloud:{mix:0,highlight:0,gray:0,outlierMode:1,saltwaterOnly:1,metalMode:0,splitT:1,marineShift:1}},onEnter(){Sl(),av()},onLeave(s){wl(),s?.properties?.umapCloud?.splitT>0||Sm(0)},onUpdate:bl(.08),onRender:Em()},OP={name:"metal-tolerance",visible:["umapGroup"],camera:"umap-pair",props:{rotation:"cloud-spin"},overlays:{title:"Metal Tolerance Landscape",subtitle:"Fraction of community assigned to metal-tolerant genera (BacMet)"},legend:"niche",uniforms:{umapCloud:{uMorphT:1}},panels:["metal-panel"],properties:{umapCloud:{mix:0,highlight:0,gray:0,outlierMode:0,saltwaterOnly:0,metalMode:1,splitT:1,marineShift:0}},onEnter(){Sl()},onLeave(s){wl(),s?.properties?.umapCloud?.splitT>0||Sm(0)},onUpdate:bl(.08),onRender:Em()};let hi=null,Kn=null,jn=null,Io=null,Lo=null,Do=null,Am=0,up=null,dp=null,fp=null,bs=null,cr=null,hr=null,Ua=null,Oa=null,Fa=null,Gi=null;function FP(s){Am=s,Cm()}function NP(){Am=0,Cm()}const zP=.6;function BP(s){const t=s*zP;up&&(up.material.opacity=t),dp&&(dp.material.opacity=t),fp&&(fp.material.opacity=t)}function kP(s){Ua&&(Ua.material.opacity=s),Oa&&(Oa.material.opacity=s),Fa&&(Fa.material.opacity=s)}const cv=20,Tm=10,hv=4,GP=10,uv=20,dv=4;function Zd(s,t,e,n,i){const r=new ce;r.position.z=.02;const o=t/n,a=e/i,l=-t/2,c=-e/2,h=[],u=new Float32Array(n*i),d=new ei(o*.92,a*.92);for(let f=0;f<i;f++)for(let p=0;p<n;p++){const _=new re({color:8965375,transparent:!0,opacity:0,depthWrite:!1}),g=new Nt(d,_);g.position.set(l+(p+.5)*o,c+(f+.5)*a,.01),r.add(g),h.push(g)}return s.add(r),{group:r,cells:u,cols:n,rows:i,meshes:h,apply(){for(let f=0;f<u.length;f++)h[f].material.opacity=u[f]*.7}}}function VP(s){const t=s>.5;bs&&(bs.group.visible=t,t||(bs.cells.fill(0),bs.apply())),cr&&(cr.group.visible=t,t||(cr.cells.fill(0),cr.apply())),hr&&(hr.group.visible=t,t||(hr.cells.fill(0),hr.apply()))}function n_(){return bs?{v:bs,w:cr,h:hr}:null}const El=2.8/Tm,Uo=El*cv,ya=El*Tm,ur=El*hv,Kd=ya,qh=El*uv,Oc=El*dv,jd=.5,Jd=2771566,Qd=4491468,HP="#7090b0",WP="#88ccff";function tf(s,t,e,n){const i=new ce,r=new ei(s,t),o=new re({color:e,transparent:!0,opacity:.6});i.add(new Nt(r,o));const a=new Fr(r),l=new Yt({color:n,transparent:!0,opacity:.8});return i.add(new te(a,l)),i}function ai(s,{fontSize:t=48,color:e=HP,maxWidth:n=512}={}){const i=document.createElement("canvas"),r=i.getContext("2d");r.font=`${t}px system-ui, sans-serif`;const o=r.measureText(s),a=Math.min(Math.ceil(o.width)+20,n),l=t*1.4;i.width=a,i.height=l,r.font=`${t}px system-ui, sans-serif`,r.fillStyle=e,r.textAlign="center",r.textBaseline="middle",r.fillText(s,a/2,l/2);const c=new Ur(i);c.minFilter=be;const h=new os({map:c,transparent:!0}),u=new Cs(h),d=.35;return u.scale.set(d*(a/l),d,1),u}function i_(s){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle=WP,e.font="bold 96px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s,64,64);const n=new Ur(t),i=new os({map:n,transparent:!0,opacity:.9}),r=new Cs(i);return r.scale.set(1.2,1.2,1),r}function Cm(){if(!hi)return;const s=Am,t=1,e=ur+jd+qh,n=-14.819999999999999/2,i=n+ur/2,r=n+ur+jd/2,o=n+ur+jd+qh/2,a=n+e+t,l=n+e+t+t+Uo/2;if(hi.position.x=s*l,Kn&&(Kn.position.set(i,0,0),Kn.scale.setScalar(s)),Lo&&(Lo.position.set(r,0,0),Lo.scale.setScalar(s*.7)),jn&&(jn.position.set(o,0,0),jn.scale.setScalar(s)),Io&&(Io.position.set(a,0,0),Io.scale.setScalar(s*.8)),Gi&&Gi.scale.copy(Gi._baseScale).multiplyScalar(s),Do){const c=-Uo/2-.9,h=Uo/2+.5;Do.position.x=c+s*(h-c),Do.material.rotation=s*Math.PI/2}}async function XP({scene:s,sm:t}){const e=new ce;e.visible=!1,s.add(e),t.register("decompGroup",e),hi=tf(Uo,ya,Jd,Qd),up=hi.children[0],e.add(hi),Ua=ai("V",{fontSize:72,color:"#c0d8f0"}),Ua.position.set(0,0,.01),hi.add(Ua),Do=ai("2,844 samples",{fontSize:32}),Do.position.set(-Uo/2-.9,0,0),hi.add(Do);const n=ai("301,933 functions",{fontSize:32});n.position.set(0,-ya/2-.3,0),hi.add(n),hi.traverse(l=>{l.material&&(l.material._baseOpacity=l.material.opacity)}),Io=i_("≈"),Io.scale.setScalar(0),e.add(Io),Kn=tf(ur,Kd,Jd,Qd),dp=Kn.children[0],Kn.scale.setScalar(0),e.add(Kn),Oa=ai("W",{fontSize:56,color:"#c0d8f0"}),Oa.position.set(0,0,.01),Kn.add(Oa);const i=ai("2,844",{fontSize:28});i.position.set(-ur/2-.5,0,0),i.material.rotation=Math.PI/2,Kn.add(i);const r=ai("k",{fontSize:28});r.position.set(0,-Kd/2-.25,0),Kn.add(r),Lo=i_("×"),Lo.scale.setScalar(0),e.add(Lo),jn=tf(qh,Oc,Jd,Qd),fp=jn.children[0],jn.scale.setScalar(0),e.add(jn),Fa=ai("H",{fontSize:56,color:"#c0d8f0"}),Fa.position.set(0,0,.01),jn.add(Fa);const o=ai("k",{fontSize:28});o.position.set(0,Oc/2+.25,0),jn.add(o),Gi=ai("k = 4, 8, 16, ..., 128",{fontSize:24}),Gi.position.set(0,-ya/2-.6,0),Gi._baseScale=Gi.scale.clone(),Gi.scale.setScalar(0),e.add(Gi);const a=ai("301,933",{fontSize:28});a.position.set(0,-Oc/2-.25,0),jn.add(a),bs=Zd(hi,Uo,ya,cv,Tm),bs.group.visible=!1,cr=Zd(Kn,ur,Kd,hv,GP),cr.group.visible=!1,hr=Zd(jn,qh,Oc,uv,dv),hr.group.visible=!1,t.registerProperty("decomp","split",FP),t.registerProperty("decomp","fillOpacity",BP),t.registerProperty("decomp","labelsOpacity",kP),t.registerProperty("decomp","gridVisible",VP),Cm()}const $P={name:"matrix-full",visible:["decompGroup"],cameraType:"orthographic",camera:{target:new A(0,0,0),zoom:3},overlays:{title:"Functional Decomposition",subtitle:"2,844 genomes × 301,933 functions — a sparse binary matrix"},legend:null,properties:{decomp:{split:0,fillOpacity:1,labelsOpacity:1,gridVisible:0}},onEnter(){NP()}},qP={name:"matrix-decomposed",visible:["decompGroup"],cameraType:"orthographic",camera:{target:new A(0,0,0),zoom:3},overlays:{title:"NMF Decomposition",subtitle:"W × H ≈ V — samples × k archetypes × features"},legend:null,properties:{decomp:{split:1,fillOpacity:1,labelsOpacity:1,gridVisible:0}}},mo=8,xa=10,pp=10,YP=mo+xa+pp,ef=3;let nf=0,dr=-1,ys=-1;function fv(s){return 1-(1-s)*(1-s)}function ZP(s){return s===1?1:1-2**(-6*s)}function KP(s){return s===0?0:2**(6*s-6)}function jP(s){const t=fv(s);return t<.5?2*t*t:1-(-2*t+2)**2/2}function JP(s){const t=fv(s);return t<.5?2*t*t:1-(-2*t+2)**2/2}function sf(s,t){for(let e=0;e<s.cells.length;e++)s.cells[e]=Math.max(0,s.cells[e]-t)}function pv(s,t,e){t>=0&&t<s.rows&&e>=0&&e<s.cols&&(s.cells[t*s.cols+e]=1)}function mv(s,t){if(!(t<0||t>=s.rows))for(let e=0;e<s.cols;e++)s.cells[t*s.cols+e]=1}function gv(s,t){if(!(t<0||t>=s.cols))for(let e=0;e<s.rows;e++)s.cells[e*s.cols+t]=1}function QP(s,t){const e=Math.max(t.rows,t.cols),n=t.rows-1-Math.round(s*(t.rows-1)/(e-1)),i=Math.round(s*(t.cols-1)/(e-1));return{row:n,col:i}}function tI(s,t){const{v:e,w:n,h:i}=s,r=Math.max(e.rows,e.cols),o=t<.5?t*2:(1-t)*2,a=t<.5?ZP(o):KP(o),l=Math.min(Math.floor(a*r),r-1),c=ys<0?l:Math.min(ys,l),h=ys<0?l:Math.max(ys,l);for(let u=c;u<=h;u++){const{row:d,col:f}=QP(u,e);pv(e,d,f),mv(n,d),gv(i,f)}ys=l}function s_(s,t,e){const{v:n,w:i,h:r}=s,o=n.rows*n.cols,a=e?JP(t):jP(t),l=Math.min(Math.floor(a*o),o-1),c=dr<0?l:Math.min(dr+1,l),h=l;for(let u=c;u<=h;u++){const d=e?o-1-u:u,f=n.rows-1-Math.floor(d/n.cols),p=d%n.cols;pv(n,f,p),mv(i,f),gv(r,p)}dr=l}const eI={name:"matrix-highlight",visible:["decompGroup"],cameraType:"orthographic",camera:{target:new A(0,0,0),zoom:3},overlays:{title:"NMF Decomposition",subtitle:"Each entry V[i,j] ≈ W[i,:] · H[:,j]"},legend:null,properties:{decomp:{split:1,fillOpacity:0,labelsOpacity:0,gridVisible:1}},onEnter(){nf=0,dr=-1,ys=-1;const s=n_();s&&(s.v.cells.fill(0),s.w.cells.fill(0),s.h.cells.fill(0),s.v.apply(),s.w.apply(),s.h.apply())},onUpdate(s,t){const e=n_();if(!e)return;nf+=t;const n=nf%YP;if(sf(e.v,t*ef),sf(e.w,t*ef),sf(e.h,t*ef),n<mo)dr=-1,tI(e,n/mo);else if(n<mo+xa){ys=-1;const i=(n-mo)/xa;i*xa<t*2&&(dr=-1),s_(e,i,!1)}else{ys=-1;const i=(n-mo-xa)/pp;i*pp<t*2&&(dr=-1),s_(e,i,!0)}e.v.apply(),e.w.apply(),e.h.apply()}};let _v=0,Vi=null,fi=null,Dn=null,ha=null,ua=null,rf=null,r_=null,mp=[],gp=[],fr=null,Na=null,o_=[],Pr=null,a_=null;const Al=12,Rm=Al*Math.sqrt(3)/2,nI=Al*Math.sqrt(2/3),en=new A(-Al/2,-Rm/3,0),nn=new A(Al/2,-Rm/3,0),sn=new A(0,2*Rm/3,0),_p=2771566,Yh=4491468,iI="#7090b0",yp="#88ccff";function l_(s){_v=s,yv()}function c_(s){Pr&&(Pr.material.uniforms.uOpacity.value=s)}function xp(s,{fontSize:t=48,color:e=iI,maxWidth:n=512}={}){const i=document.createElement("canvas"),r=i.getContext("2d");r.font=`${t}px system-ui, sans-serif`;const o=r.measureText(s),a=Math.min(Math.ceil(o.width)+20,n),l=t*1.4;i.width=a,i.height=l,r.font=`${t}px system-ui, sans-serif`,r.fillStyle=e,r.textAlign="center",r.textBaseline="middle",r.fillText(s,a/2,l/2);const c=new Ur(i);c.minFilter=be;const h=new os({map:c,transparent:!0}),u=new Cs(h),d=1;return u.scale.set(d*(a/l),d,1),u}function yv(){const s=_v,t=nI*s,e=new A(0,0,t);for(const{line:n,baseVertex:i}of mp){const r=n.geometry.attributes.position.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=e.x,r[4]=e.y,r[5]=e.z,n.geometry.attributes.position.needsUpdate=!0,n.material.opacity=s*.8}for(const{mesh:n,va:i,vb:r}of gp){const o=n.geometry.attributes.position.array;o[0]=i.x,o[1]=i.y,o[2]=i.z,o[3]=r.x,o[4]=r.y,o[5]=r.z,o[6]=e.x,o[7]=e.y,o[8]=e.z,n.geometry.attributes.position.needsUpdate=!0,n.material.opacity=s*.15}fr&&(fr.position.set(0,0,t+1.2),fr.material.opacity=s),Na&&(Na.position.set(0,0,t),Na.material.opacity=s),Pr&&Vi&&sI(e)}function sI(s){const t=Pr.geometry.attributes.position.array,e=Vi.top4,n=Vi.samples;for(let i=0;i<n.length;i++){const r=n[i].theta,o=[r[e[0]],r[e[1]],r[e[2]],r[e[3]]],a=o[0]+o[1]+o[2]+o[3],l=a>0?o.map(c=>c/a):[.25,.25,.25,.25];t[i*3]=l[0]*en.x+l[1]*nn.x+l[2]*sn.x+l[3]*s.x,t[i*3+1]=l[0]*en.y+l[1]*nn.y+l[2]*sn.y+l[3]*s.y,t[i*3+2]=l[0]*en.z+l[1]*nn.z+l[2]*sn.z+l[3]*s.z}Pr.geometry.attributes.position.needsUpdate=!0}const vp=`
  uniform float uOpacity;
  uniform float uFogDensity;
  attribute vec3 nicheColor;
  varying vec3 vColor;
  varying float vOpacity;
  varying float vFogFactor;
  void main() {
    vColor = nicheColor;
    vOpacity = uOpacity;
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 2.0 * (120.0 / -mvPos.z);
    gl_PointSize = clamp(gl_PointSize, 0.5, 16.0);
    gl_Position = projectionMatrix * mvPos;
    float fogDist = length(mvPos.xyz);
    vFogFactor = 1.0 - exp(-uFogDensity * uFogDensity * fogDist * fogDist);
  }
`,Mp=`
  varying vec3 vColor;
  varying float vOpacity;
  varying float vFogFactor;
  uniform vec3 uFogColor;

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d2 = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d2 + e)), d2 / (q.x + e), q.x);
  }
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;

    vec3 hsv = rgb2hsv(vColor);
    if (hsv.y > 0.05) hsv.y = max(hsv.y, 0.55);
    hsv.z = min(hsv.z, 0.85);
    vec3 col = hsv2rgb(hsv);

    float outerEdge = smoothstep(0.5, 0.42, d);
    float innerEdge = smoothstep(0.36, 0.28, d);
    vec3 finalCol = mix(col * 0.25, col, innerEdge);

    finalCol = mix(finalCol, uFogColor, vFogFactor);
    float alpha = outerEdge * vOpacity * (1.0 - vFogFactor);
    gl_FragColor = vec4(finalCol, alpha);
  }
`,h_=[[3,6,5,1],[2,7,0,4]];let u_=[];async function rI({scene:s,sm:t}){fi=new ce,fi.visible=!1,s.add(fi),t.register("ldaDocumentGroup",fi),Dn=new ce,Dn.visible=!1,s.add(Dn),t.register("ldaSimplexGroup",Dn),ha=new ce,ha.visible=!1,s.add(ha),t.register("ldaPanelGroup",ha),ua=new ce,ua.visible=!1,s.add(ua),t.register("ldaUmapGroup",ua),t.registerProperty("lda","lift",l_),t.registerProperty("lda","sampleOpacity",c_),Vi=await(await fetch(Te("/data/lda_topics.json"))).json();const n=new _t;n.setAttribute("position",new ht([en.x,en.y,en.z,nn.x,nn.y,nn.z,sn.x,sn.y,sn.z],3)),n.setIndex([0,1,2]),n.computeVertexNormals(),r_=new Nt(n,new re({color:_p,transparent:!0,opacity:.3,side:Fe})),Dn.add(r_);const i=new _t;i.setAttribute("position",new ht([en.x,en.y,en.z,nn.x,nn.y,nn.z,nn.x,nn.y,nn.z,sn.x,sn.y,sn.z,sn.x,sn.y,sn.z,en.x,en.y,en.z],3)),rf=new te(i,new Yt({color:Yh,transparent:!0,opacity:.8})),rf.position.z=.01,Dn.add(rf);const r=[en,nn,sn];mp=[];for(const y of r){const b=new _t;b.setAttribute("position",new ht([y.x,y.y,y.z,0,0,0],3));const w=new Yt({color:Yh,transparent:!0,opacity:0}),E=new Mn(b,w);Dn.add(E),mp.push({line:E,baseVertex:y})}gp=[];const o=[[en,nn],[nn,sn],[sn,en]];for(const[y,b]of o){const w=new _t;w.setAttribute("position",new ht([y.x,y.y,y.z,b.x,b.y,b.z,0,0,0],3)),w.setIndex([0,1,2]);const E=new re({color:_p,transparent:!0,opacity:0,side:Fe}),T=new Nt(w,E);Dn.add(T),gp.push({mesh:T,va:y,vb:b})}const a=Vi.top4,l=[{v:en,dx:-1.5,dy:-.9},{v:nn,dx:1.5,dy:-.9},{v:sn,dx:0,dy:1.5}];for(let y=0;y<3;y++){const{v:b,dx:w,dy:E}=l[y],T=xp(`T${a[y]}`,{fontSize:40,color:yp});T.position.set(b.x+w,b.y+E,b.z),Dn.add(T)}fr=xp(`T${a[3]}`,{fontSize:40,color:yp}),fr.position.set(0,0,1.2),fr.material.opacity=0,Dn.add(fr);const c=new ti(.24,16);o_=[];for(const y of r){const b=new Nt(c,new re({color:8965375,transparent:!0,opacity:.9}));b.position.copy(y),b.position.z=.02,Dn.add(b),o_.push(b)}Na=new Nt(new ts(.24,16,16),new re({color:8965375,transparent:!0,opacity:0})),Dn.add(Na);const h=Vi.samples.length,u=new Float32Array(h*3),d=new Float32Array(h*3);for(let y=0;y<h;y++){const b=Vi.samples[y];d[y*3]=b.r/255,d[y*3+1]=b.g/255,d[y*3+2]=b.b/255}const f=new _t;f.setAttribute("position",new ht(u,3)),f.setAttribute("nicheColor",new ht(d,3));const p=new ye({uniforms:{uOpacity:{value:0},uFogDensity:{value:.015},uFogColor:{value:new at(657930)}},vertexShader:vp,fragmentShader:Mp,transparent:!0,depthWrite:!0,depthTest:!0});Pr=new on(f,p),Dn.add(Pr),yv(),oI(ha,Vi);const _=new Float32Array(h*3),g=new Float32Array(h*3);for(let y=0;y<h;y++){const b=Vi.samples[y];_[y*3]=b.ux,_[y*3+1]=b.uy,_[y*3+2]=b.uz,g[y*3]=b.r/255,g[y*3+1]=b.g/255,g[y*3+2]=b.b/255}const m=new _t;m.setAttribute("position",new ht(_,3)),m.setAttribute("nicheColor",new ht(g,3));const x=new ye({uniforms:{uOpacity:{value:1},uFogDensity:{value:.015},uFogColor:{value:new at(657930)}},vertexShader:vp,fragmentShader:Mp,transparent:!0,depthWrite:!0,depthTest:!0});a_=new on(m,x),ua.add(a_);const v=t.currentScene;if(v){if(v.properties)for(const[y,b]of Object.entries(v.properties))for(const[w,E]of Object.entries(b)){const T=w==="lift"?l_:w==="sampleOpacity"?c_:null;T&&T(E)}v.onEnter&&v.onEnter()}}function oI(s,t){const e=Al*.45,n=e*Math.sqrt(3)/2,i=e*Math.sqrt(2/3),r=e*1.8,o=new A(-e/2,-n/3,0),a=new A(e/2,-n/3,0),l=new A(0,2*n/3,0),c=new A(0,0,i),h=[o,a,l,c];u_=[];for(let u=0;u<h_.length;u++){const d=h_[u],f=new ce;f.position.x=(u===0?-1:1)*r;const p=[[0,1],[1,2],[2,0],[0,3],[1,3],[2,3]],_=[];for(const[w,E]of p)_.push(h[w].x,h[w].y,h[w].z,h[E].x,h[E].y,h[E].z);const g=new _t;g.setAttribute("position",new ht(_,3)),f.add(new te(g,new Yt({color:Yh,transparent:!0,opacity:.4})));const m=[new A(-1,-.5,0),new A(1,-.5,0),new A(0,1,0),new A(0,0,1)];for(let w=0;w<4;w++){const E=xp(`T${d[w]}`,{fontSize:40,color:yp}),T=m[w].clone().multiplyScalar(.8);E.position.copy(h[w]).add(T),f.add(E)}const x=t.samples.length,v=new Float32Array(x*3),y=new Float32Array(x*3);for(let w=0;w<x;w++){const E=t.samples[w],T=[E.theta[d[0]],E.theta[d[1]],E.theta[d[2]],E.theta[d[3]]],S=T[0]+T[1]+T[2]+T[3],M=S>0?T.map(P=>P/S):[.25,.25,.25,.25];v[w*3]=M[0]*o.x+M[1]*a.x+M[2]*l.x+M[3]*c.x,v[w*3+1]=M[0]*o.y+M[1]*a.y+M[2]*l.y+M[3]*c.y,v[w*3+2]=M[0]*o.z+M[1]*a.z+M[2]*l.z+M[3]*c.z,y[w*3]=E.r/255,y[w*3+1]=E.g/255,y[w*3+2]=E.b/255}const b=new _t;b.setAttribute("position",new ht(v,3)),b.setAttribute("nicheColor",new ht(y,3)),f.add(new on(b,new ye({uniforms:{uOpacity:{value:1},uFogDensity:{value:.02},uFogColor:{value:new at(657930)}},vertexShader:vp,fragmentShader:Mp,transparent:!0,depthWrite:!0,depthTest:!0}))),s.add(f),u_.push(f)}}const za=new at(1,.25,.2),Ba=new at(.3,.4,1),ka=new at(.1,.9,.5),go=[za,Ba,ka],Pm=7,Im=Pm*Math.sqrt(3)/2,Lm=7.5,Dm=0,Ni=new A(Lm-Pm/2,Dm-Im/3,0),zi=new A(Lm+Pm/2,Dm-Im/3,0),Bi=new A(Lm,Dm+2*Im/3,0),Mr=48,yi=[[16,16,16],[30,10,8],[8,32,8],[6,10,32],[24,24,0],[0,20,28],[20,4,24],[16,16,16]];function aI(s){return new at(s[0]*za.r+s[1]*Ba.r+s[2]*ka.r,s[0]*za.g+s[1]*Ba.g+s[2]*ka.g,s[0]*za.b+s[1]*Ba.b+s[2]*ka.b)}function xv(s){return new A(s[0]*Ni.x+s[1]*zi.x+s[2]*Bi.x,s[0]*Ni.y+s[1]*zi.y+s[2]*Bi.y,0)}function vv(s){return[s[0]/Mr,s[1]/Mr,s[2]/Mr]}const of=6,af=8,Fc=.85,Nc=.65,zc=.12,lI=-5.5,cI=0;let xs=[],br=null,_o=0,yo=0;const bp=1.5,Mv=.15,hI=1.5;let pi=[1/3,1/3,1/3],Ga=[],Zc=[],Sp=[],d_=!1;const lf=new at;function Zh(s){const[t,e]=s,n=new Array(Mr);for(let i=0;i<Mr;i++)i<t?n[i]=0:i<t+e?n[i]=1:n[i]=2;return n}function uI(s,t){const e=new Array(Mr),n=Zh(s),i=Zh(t),r=[],o=s[0],a=t[0]-s[0],l=s[0]+s[1],c=t[0]+t[1]-(s[0]+s[1]);for(let d=0;d<Mr;d++){if(n[d]===i[d]){e[d]=-1;continue}let f;a!==0&&(d>=o&&d<o+a||d<o&&d>=o+a)?f=(d-o)/a:c!==0?f=(d-l)/c:f=.5,f=Math.max(0,Math.min(1,Math.abs(f))),r.push({idx:d,flipT:f})}r.sort((d,f)=>d.flipT-f.flipT);const h=r.length,u=h>1?(bp-Mv)/(h-1):0;for(let d=0;d<h;d++)e[r[d].idx]=d*u;return e}function bv(s){for(let t=0;t<xs.length;t++)xs[t].material.color.copy(go[s[t]])}function dI(){if(d_||!fi)return;d_=!0;const s=of*Fc+(of-1)*zc,t=af*Nc+(af-1)*zc,e=lI-s/2+Fc/2,n=cI+t/2-Nc/2;for(let u=0;u<af;u++)for(let d=0;d<of;d++){const f=Fc*.92,p=Nc*.92,_=f*.25,g=f*.2,m=new _t;m.setAttribute("position",new ht([-f/2,p/2,0,-f/2+g,0,0,-f/2,-p/2,0,f/2-_,p/2,0,f/2-_,-p/2,0,f/2,0,0],3)),m.setIndex([0,1,3,1,4,3,1,2,4,3,4,5]),m.computeVertexNormals();const x=new re({color:16777215,transparent:!0,opacity:.85,side:Fe}),v=new Nt(m,x);v.position.set(e+d*(Fc+zc),n-u*(Nc+zc),0),fi.add(v),xs.push(v)}bv(Ga);const i=new _t;i.setAttribute("position",new ht([Ni.x,Ni.y,0,zi.x,zi.y,0,zi.x,zi.y,0,Bi.x,Bi.y,0,Bi.x,Bi.y,0,Ni.x,Ni.y,0],3)),fi.add(new te(i,new Yt({color:Yh,transparent:!0,opacity:.8})));const r=new _t;r.setAttribute("position",new ht([Ni.x,Ni.y,0,zi.x,zi.y,0,Bi.x,Bi.y,0],3)),r.setIndex([0,1,2]),fi.add(new Nt(r,new re({color:_p,transparent:!0,opacity:.2,side:Fe})));const o=[za,Ba,ka],a=[Ni,zi,Bi],l=new ti(.22,16);for(let u=0;u<3;u++){const d=new Nt(l,new re({color:o[u],transparent:!0,opacity:.95}));d.position.set(a[u].x,a[u].y,.02),fi.add(d)}const c=new ti(.28,24);br=new Nt(c,new re({color:16777215,transparent:!0,opacity:.95}));const h=xv(pi);br.position.set(h.x,h.y,.05),fi.add(br)}function Sv(s,t){Ga=Zh(yi[s]),Zc=Zh(yi[t]),Sp=uI(yi[s],yi[t])}function fI(){_o=0,yo=0,pi=vv(yi[0]),Sv(0,1%yi.length),dI(),wv()}function pI(s){if(!br)return;yo+=s;const t=bp+hI;if(yo>=t&&(yo-=t,_o=(_o+1)%yi.length,Sv(_o,(_o+1)%yi.length)),yo<bp)for(let i=0;i<xs.length;i++){if(Sp[i]<0){xs[i].material.color.copy(go[Ga[i]]);continue}const r=Math.max(0,Math.min(1,(yo-Sp[i])/Mv));r===0?xs[i].material.color.copy(go[Ga[i]]):r>=1?xs[i].material.color.copy(go[Zc[i]]):(lf.copy(go[Ga[i]]),lf.lerp(go[Zc[i]],r),xs[i].material.color.copy(lf))}else bv(Zc);const e=vv(yi[(_o+1)%yi.length]),n=1-Math.exp(-4*s);pi[0]+=(e[0]-pi[0])*n,pi[1]+=(e[1]-pi[1])*n,pi[2]+=(e[2]-pi[2])*n,wv()}function wv(){if(!br)return;const s=xv(pi);br.position.set(s.x,s.y,.05);const t=aI(pi);br.material.color.copy(t)}const mI={name:"lda-document",visible:["ldaDocumentGroup"],cameraType:"orthographic",camera:{target:new A(1,0,0),zoom:2},overlays:{title:"LDA — Genomic Document",subtitle:"Each gene carries a mixture of topics; together they form the document"},legend:null,onEnter(){fI()},onUpdate(s,t){pI(t)}},f_=128,gI=["nmf","lda","vae"],fn={sample:null,orf:null},Oo=new Ie(55,1,.5,500),Fo=new Ie(55,1,.5,500);Oo.position.set(0,0,10);Fo.position.set(0,0,10);let Um=!1,Ev=.08,Bc=0,Va=!1,Ha=0,Wa=0,Kc=null,jc=null;async function _I(s){const{scene:t,sm:e,renderer:n}=s;n.domElement.addEventListener("pointerdown",()=>{Va=!0}),window.addEventListener("pointerup",()=>{Va=!1,Ha=0,Wa=0}),n.domElement.addEventListener("pointermove",c=>{Va&&(Ha+=c.movementX,Wa+=c.movementY)});const r=await(await fetch(Te("/data/program_component_map.json"))).json(),o={};for(const c of gI)o[c]={samples:Te(`/data/umap_${c}_k${f_}_samples.json`),orfs:Te(`/data/umap_${c}_k${f_}_orfs.json`)};const[a,l]=await Promise.all([iP(o.nmf.samples,o.lda.samples,o.vae.samples,{programMap:r.nmf,p2Url:Te("/data/p2_sample_weights.json")}),KR(o.nmf.orfs,o.lda.orfs,o.vae.orfs)]);fn.sample=a,fn.orf=l,t.add(a.group),t.add(l.group),e.register("sampleDecompGroup",a.group),e.register("orfDecompGroup",l.group),e.register("sampleDecompCloud",a.cloud),e.register("orfDecompCloud",l.cloud),e.registerLegend("decomp-program",a.buildProgramLegend),e.registerLegend("decomp-p2",a.buildP2Legend),Kc=a.group,jc=l.group,yI()}function yI(){const s=p_(fn.sample.cloud),t=p_(fn.orf.cloud),e=ru.degToRad(55/2),n=s/Math.tan(e)*1.55,i=t/Math.tan(e)*1.55;Oo.position.set(0,0,n),Oo.lookAt(0,0,0),Fo.position.set(0,0,i),Fo.lookAt(0,0,0)}function p_(s){return s.geometry.computeBoundingSphere(),s.geometry.boundingSphere?.radius||xI}const xI=8.5;function Du(s=.08){Um=!0,Ev=s}function Uu(){Um=!1}function Ou(s,t){if(fn.sample?.update&&fn.sample.update(s),fn.orf?.update&&fn.orf.update(s),fn.sample?.glowCloud&&(fn.sample.glowCloud.material.uniforms.uMorphT.value=fn.sample.cloud.material.uniforms.uMorphT.value,fn.sample.glowCloud.material.uniforms.uP2Mode.value=fn.sample.cloud.material.uniforms.uP2Mode.value),!Um)return;let e,n=0;Va&&(Ha!==0||Wa!==0)?(e=Ha*.005,n=Wa*.005,Ha=0,Wa=0,Bc=0):(Bc+=((Va?0:Ev)-Bc)*(1-Math.exp(-.3*t)),e=Bc*t),Kc&&(Kc.rotation.y+=e,Kc.rotation.x+=n),jc&&(jc.rotation.y+=e,jc.rotation.x+=n)}const Av=()=>document.getElementById("split-divider");function Fu(){return function(t,e,n){const i=fn.sample,r=fn.orf;if(!i||!r){t.render(e,n);return}const o=t.domElement.width,a=t.domElement.height,l=Math.round(o/2);Oo.aspect=l/a,Oo.updateProjectionMatrix(),Fo.aspect=(o-l)/a,Fo.updateProjectionMatrix();const c=i.group.visible,h=r.group.visible;t.autoClear=!1,t.clear(),t.setScissorTest(!0),i.group.visible=!0,r.group.visible=!1,t.setScissor(0,0,l,a),t.setViewport(0,0,l,a),t.render(e,Oo),i.group.visible=!1,r.group.visible=!0,t.setScissor(l,0,o-l,a),t.setViewport(l,0,o-l,a),t.render(e,Fo),t.setScissorTest(!1),t.setViewport(0,0,o,a),t.autoClear=!0,i.group.visible=c,r.group.visible=h}}function Nu(){const s=Av();s&&(s.style.display="block")}function zu(){const s=Av();s&&(s.style.display="none")}const vI={name:"umap-nmf",visible:["sampleDecompGroup","orfDecompGroup"],cameraType:"perspective",camera:{target:new A(0,0,0)},overlays:{title:"NMF Features (k=128)",subtitle:"Non-negative matrix factorization · 2,844 samples × 301k ORFs"},legend:"decomp-program",panels:["decomp-info-panel"],uniforms:{sampleDecompCloud:{uMorphT:0,uP2Mode:0},orfDecompCloud:{uMorphT:0}},onEnter(){Du(),Nu()},onLeave(){Uu(),zu()},onUpdate:Ou,onRender:Fu()},MI={name:"umap-lda",visible:["sampleDecompGroup","orfDecompGroup"],cameraType:"perspective",camera:{target:new A(0,0,0)},overlays:{title:"LDA Features (k=128)",subtitle:"Latent Dirichlet allocation · 2,844 samples × 301k ORFs"},legend:"decomp-program",panels:["decomp-info-panel"],uniforms:{sampleDecompCloud:{uMorphT:1,uP2Mode:0},orfDecompCloud:{uMorphT:1}},onEnter(){Du(),Nu()},onLeave(){Uu(),zu()},onUpdate:Ou,onRender:Fu()},bI={name:"umap-vae",visible:["sampleDecompGroup","orfDecompGroup"],cameraType:"perspective",camera:{target:new A(0,0,0)},overlays:{title:"VAE Features (k=128)",subtitle:"Embedding VAE (DRVI-style) · 2,844 samples × 301k ORFs"},legend:"decomp-program",panels:["decomp-info-panel"],uniforms:{sampleDecompCloud:{uMorphT:2,uP2Mode:0},orfDecompCloud:{uMorphT:2}},onEnter(){Du(),Nu()},onLeave(){Uu(),zu()},onUpdate:Ou,onRender:Fu()},SI={name:"umap-vae-p2",visible:["sampleDecompGroup","orfDecompGroup"],cameraType:"perspective",camera:{target:new A(0,0,0)},overlays:{title:"P2 Program Utilization",subtitle:"Carbon fix + biofilm · NMF archetype weight per sample"},legend:"decomp-p2",panels:["decomp-info-panel"],uniforms:{sampleDecompCloud:{uMorphT:2,uP2Mode:1},orfDecompCloud:{uMorphT:2}},onEnter(){Du(),Nu()},onLeave(){Uu(),zu()},onUpdate:Ou,onRender:Fu()},Tv={overhead:{target:new A(0,0,0),position:new A(0,0,10)},"orbit-3d":{target:new A(0,0,0),position:new A(10,12,16)},"iso-chart":{target:new A(0,0,0),zoom:.85},"umap-wide":{target:new A(0,0,0),zoom:22},"umap-pair":{target:new A(0,0,0),zoom:28},"umap-close":{target:bm,zoom:10}},wI={"cloud-spin":{x:0,y:0}},EI=Object.assign({"./transitions/ab48-2-outliers.js":Bv,"./transitions/ab48-2-sample-overview.js":Gv,"./transitions/clustering-2-pcoa-pair.js":Hv,"./transitions/genomic-region-2-genomic-region-annotated.js":x2,"./transitions/lda-document-2-umap-nmf.js":M2,"./transitions/matrix-decomposed-2-matrix-highlight.js":S2,"./transitions/matrix-full-2-matrix-decomposed.js":E2,"./transitions/matrix-highlight-2-lda-document.js":T2,"./transitions/metal-tolerance-2-matrix-full.js":R2,"./transitions/niche-2-ab48.js":I2,"./transitions/outlier-saltwater-2-metal-tolerance.js":D2,"./transitions/outliers-2-outlier-saltwater.js":O2,"./transitions/pcoa-pair-2-pcoa-simpson.js":N2,"./transitions/pcoa-simpson-2-umap-simpson.js":B2,"./transitions/ranked-abundance-2-decomposition.js":G2,"./transitions/sample-overview-2-genomic-region.js":H2,"./transitions/umap-lda-2-umap-vae.js":X2,"./transitions/umap-nmf-2-umap-lda.js":q2,"./transitions/umap-simpson-2-niche.js":Z2}),AI=Object.values(EI).flatMap(s=>s.transitions??[]),Jc=[WC,p3,aR,yx,Mx,xR,_R,PR,lP,cP,hP,LP,DP,hp,UP,OP,$P,qP,eI,mI,vI,MI,bI,SI];let Cv={};try{const s=await fetch(Te("/presenter.json"));s.ok&&(Cv=await s.json())}catch{}const TI=document.getElementById("canvas"),es=new hx({canvas:TI,antialias:!0});es.setSize(window.innerWidth,window.innerHeight);es.setPixelRatio(window.devicePixelRatio);es.setClearColor(0);const Sr=new Gp,wp=window.innerWidth/window.innerHeight,Ir=new Ie(55,wp,.5,500);Ir.position.set(0,0,10);const wo=12,wi=new Ml(-wo*wp,wo*wp,wo,-wo,.1,200);wi.position.set(0,0,50);let Eo=wi;const Ve=new Sx(Eo,es.domElement);Ve.enableDamping=!0;Ve.dampingFactor=.06;Ve.enableRotate=!1;Ve.enablePan=!1;Ve.enableZoom=!1;Ve.enabled=!1;const CI=new cm(16777215,.4);Sr.add(CI);const Bu=new lm(16777215,1.5);Bu.position.set(5,2,4);Bu.layers.enable(1);Sr.add(Bu);window.addEventListener("resize",()=>{const s=window.innerWidth/window.innerHeight;Ir.aspect=s,Ir.updateProjectionMatrix(),wi.left=-wo*s,wi.right=wo*s,wi.updateProjectionMatrix(),es.setSize(window.innerWidth,window.innerHeight),RI()});function RI(){const s=mn.currentScene;if(!s)return;const t=s.camera,e=typeof t=="string"?Tv[t]:t;if(!e)return;const n={};e.target instanceof A&&(n.target=e.target),e.zoom!=null&&(n.zoom=e.zoom),e.position&&(n.position=e.position),Object.keys(n).length&&mn.director.setKeyframe(n)}HC();const m_=document.getElementById("title");m_&&(m_.innerHTML="");const g_=document.getElementById("slide-counter");let cf=-1;const mn=GC({scenes:Jc,transitions:AI,camera:Ir,controls:Ve,orthoCamera:wi,scene:Sr,directorOpts:{idleDelay:3},props:{camera:Tv,rotation:wI}});mn.register("perspCamera",Ir);function PI(s){if(!s||s.zoom==null)return s;const t=window.innerWidth/window.innerHeight;if(t>=1)return s;const e=mn.activeCamera===wi;return{...s,zoom:e?s.zoom*t:s.zoom/t}}const II=mn.director.setKeyframe.bind(mn.director);mn.director.setKeyframe=s=>II(PI(s));const si={scene:Sr,controls:Ve,renderer:es,sm:mn,camera:Eo,perspCamera:Ir,orthoCamera:wi,sunLight:Bu};await m3(si);await lR(si);a2(si);g2(si);yR(si);await DR(si);const{simpsonUmapPositions:LI}=await rP(si);await IP(si,{simpsonUmapPositions:LI});XP(si);await rI(si);await _I(si);if(new URLSearchParams(location.search).has("compile")){const{compileSnapshots:s}=await Nv(async()=>{const{compileSnapshots:t}=await import("./compile-2zVyXaiG.js");return{compileSnapshots:t}},[]);window.__compileSnapshots=t=>s({...t,THREE:qT,scene:Sr,sm:mn,renderer:es,perspCamera:Ir,orthoCamera:wi,scenes:Jc}),window.__snapshotReady=!0}else{let n=function(){requestAnimationFrame(n),e+=.016,mn.update(e,.016),mn.currentIndex!==cf&&(cf=mn.currentIndex,g_&&(g_.textContent=`${cf+1} / ${Jc.length}`));const i=mn.activeCamera;i!==Eo&&(Eo=i,Ve.object=i,i===wi?(Ve.enableRotate=!1,Ve.enablePan=!1,Ve.enableZoom=!1,Ve.enabled=!1):(Ve.enableRotate=!0,Ve.enablePan=!0,Ve.enableZoom=!0,Ve.enabled=!0)),Ve.update();const r=mn.currentScene,o=ov(),a=r?.onRender?r:o>.01&&hp.onRender?hp:r;if(a?.onRender?a.onRender(es,Sr,Eo):es.render(Sr,Eo),o<.01){const l=document.getElementById("split-overlay");l&&l.style.display!=="none"&&(l.style.display="none")}};const s=Cv.startScene,t=typeof s=="number"?s:typeof s=="string"?Jc.findIndex(i=>i.name===s):0;mn.goTo(Math.max(0,t));let e=0;n()}
