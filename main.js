const HASH='744f17f361d315f4e11e8769614cae6430abf73b3d32a7fef1d970e4cad4cb87';
const L=[
"عارفة يا ضوضتي، في ناس وجودها بيغير شكل اليوم كله، وإنتي من الناس اللي وجودهم بيخلي كل حاجة ألطف.",
"مش لازم كل يوم يكون مميز، ساعات وجودك في يوم عادي بيخليه مميز لوحده.",
"يمكن مش بعرف أقول كل اللي جوايا بطريقة مثالية، بس حقيقي وجودك ليه مكانة حلوة عندي.",
"في تفاصيل صغيرة كتير ممكن تتنسي، بس في ناس بتفضل تفاصيلهم حلوة في الذاكرة.",
"يا ضوضتي، الصفحة دي كلها معمولة عشان أقولك إنك شخص مميز، وإن في كلام كتير حلو لسه متقالش.",
"ضحكتك بتفكرني إن الدنيا لسه بخير، وإن فيه أسباب بسيطة كتير تفرّح.",
"لو الكلام كان بيتوزن، كنت وزنت كل كلمة حلوة وبعتهالك في ظرف.",
"في الأيام التقيلة بفتكر إن فيه حد طيب زيك في الدنيا، فبهدا شوية.",
"إنتي مش محتاجة تعملي حاجة مخصوصة عشان تبقي غالية، كفاية إنك إنتي.",
"اسمك لوحده بيجيب ابتسامة، تخيلي بقى صاحبته.",
"بحب إنك بتشوفي الحاجات البسيطة حلوة، لأن ده بيخلي اللي حواليكي يشوفوها كده كمان.",
"لو يوم حسيتي إن الدنيا زحمة، افتكري إن فيه حد هنا بيدعيلك من قلبه.",
"مش بقول كلام كتير، بس اللي بقوله بيبقى طالع من قلبي بجد.",
"أحلى حاجة في أي حكاية إنها تبدأ بحاجة بسيطة وتكبر لوحدها.",
"خدي وقتك في كل حاجة، وفي كل الحالات إنتي أجمل من اللي بتتخيليه عن نفسك."];
const M=[
"إنتي أحلى حاجة في يومي النهارده.","ابتسمي، عشان الدنيا بتحلو بيكي.","وجودك بيفرق، صدقيني.",
"فيه ناس بتبقى هدية من غير مناسبة، وإنتي منهم.","قلبك الطيب ده أغلى من أي حاجة.","كل ما أفتكر اسمك، يومي يتظبط.",
"إنتي تستاهلي كل حاجة حلوة.","حتى أبسط كلامك بيبقى له طعم.",
"الرسالة دي طارت لحد عندك مخصوص، عشان تضحكي.","الحلو بيجي لوحده لما تكوني إنتي موجودة.","خليكي زي ما إنتي، كده بالظبط حلوة.",
"اليوم ده يستاهل ابتسامة منك.","فيه حد بيفكر فيكي بخير دايمًا.",
"النجمة دي بتقولك: إنتي منورة.","حتى السما محتاجة نجمة زيك.","كل الكلام الحلو لسه جاي، استني."];
const LONG=`يا ضوضتي،

مش عارف أبدأ منين، فقلت أبدأ بأبسط حاجة: شكراً إنك موجودة.

فيه ناس بتعدي في حياتنا وبتعدي، وفيه ناس بتسيب أثر حلو من غير ما تقصد، وإنتي من التانيين.

عملت العالم الصغير ده عشان أقولك كلمتين، بس اكتشفت إن الكلام الحلو اللي ليكي أكتر من إن صفحة تشيله.

فخدي الصفحة دي كأنها ورقة صغيرة من قلبي، وافتكري إنك مهما كنتي مشغولة أو تعبانة، فيه حد هنا شايفك حلوة.

والكلام الحلو... لسه مخلصش.`;

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],H='♥';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function mk(t,c,h,p){const e=document.createElement(t);if(c)e.className=c;if(h)e.innerHTML=h;(p||document.body).appendChild(e);return e}
async function type(el,txt,sp=45){const k=el._k=(el._k||0)+1;el.textContent='';for(const c of txt){if(el._k!==k)return 0;el.textContent+=c;await wait(sp)}return 1}
function burst(x,y,n=12,c='bs'){for(let i=0;i<n;i++){const e=mk('span',c,c=='sp'?'':H),a=Math.random()*6.28,d=40+Math.random()*80;e.style.cssText=`left:${x}px;top:${y}px;--dx:${Math.cos(a)*d}px;--dy:${Math.sin(a)*d}px;font-size:${10+Math.random()*12}px`;setTimeout(()=>e.remove(),1500)}}
let nt;function note(t){const n=$('#note');n.textContent=t;n.classList.add('on');clearTimeout(nt);nt=setTimeout(()=>n.classList.remove('on'),4300)}
let bag=[];function nextMsg(){if(!bag.length)bag=[...M].sort(()=>Math.random()-.5);return bag.pop()}

/* ---------- Three.js ---------- */
let gl=1,R,S,C,G,mesh,names,stars,geo,mat,N,st,tg,pos,mode='gate',fin=0,boost=1,cs=1,t0=0,mx=0,my=0,Y=8;
const clamp=x=>Math.max(0,Math.min(1,x)),ease=x=>x*x*(3-2*x);
function dot(){const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d'),g=x.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'#fff');g.addColorStop(.3,'rgba(255,220,230,.8)');g.addColorStop(1,'rgba(255,200,215,0)');x.fillStyle=g;x.fillRect(0,0,64,64);return new THREE.CanvasTexture(c)}
try{
R=new THREE.WebGLRenderer({canvas:$('#gl'),antialias:true,alpha:true});
R.setPixelRatio(Math.min(devicePixelRatio,2));
S=new THREE.Scene();C=new THREE.PerspectiveCamera(50,1,.1,500);
const tex=dot();
// background stars
const sg=new Float32Array(1200);for(let i=0;i<1200;i++)sg[i]=(Math.random()-.5)*220;
const sgeo=new THREE.BufferGeometry();sgeo.setAttribute('position',new THREE.BufferAttribute(sg,3));
stars=new THREE.Points(sgeo,new THREE.PointsMaterial({size:1,map:tex,transparent:true,opacity:.8,depthWrite:false,blending:THREE.AdditiveBlending}));S.add(stars);
// gate heart (extruded 3D)
const sh=new THREE.Shape();sh.moveTo(25,25);sh.bezierCurveTo(25,25,20,0,0,0);sh.bezierCurveTo(-30,0,-30,35,-30,35);sh.bezierCurveTo(-30,55,-10,77,25,95);sh.bezierCurveTo(60,77,80,55,80,35);sh.bezierCurveTo(80,35,80,0,50,0);sh.bezierCurveTo(35,0,25,25,25,25);
const eg=new THREE.ExtrudeGeometry(sh,{depth:22,bevelEnabled:true,bevelThickness:8,bevelSize:6,bevelSegments:6});eg.center();eg.rotateZ(Math.PI);
mesh=new THREE.Mesh(eg,new THREE.MeshStandardMaterial({color:0xc2415c,metalness:.35,roughness:.3,emissive:0x3a0d1e}));mesh.scale.setScalar(.14);S.add(mesh);
S.add(new THREE.AmbientLight(0xffd9e0,.45));const pl=new THREE.PointLight(0xffb3c4,1.6,0);pl.position.set(15,25,40);S.add(pl);const pl2=new THREE.PointLight(0xb3475f,1,0);pl2.position.set(-25,-10,20);S.add(pl2);
// particle heart
N=innerWidth<700?1800:3200;st=new Float32Array(N*3);tg=new Float32Array(N*3);pos=new Float32Array(N*3);const col=new Float32Array(N*3);
const pal=[[1,.7,.78],[1,.95,.92],[.9,.3,.42],[1,.8,.85]];
for(let i=0;i<N;i++){const a=Math.random()*6.283,b=Math.acos(2*Math.random()-1),r=45+Math.random()*55;
st[i*3]=r*Math.sin(b)*Math.cos(a);st[i*3+1]=r*Math.sin(b)*Math.sin(a);st[i*3+2]=r*Math.cos(b);
const t=Math.random()*6.283,k=Math.random()<.45?1:Math.sqrt(Math.random());
tg[i*3]=16*Math.pow(Math.sin(t),3)*k;tg[i*3+1]=(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t)+2)*k;tg[i*3+2]=(Math.random()-.5)*9*k;
const c=pal[Math.random()*4|0];col.set(c,i*3)}
geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));geo.setAttribute('color',new THREE.BufferAttribute(col,3));
mat=new THREE.PointsMaterial({size:1.3,map:tex,vertexColors:true,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
G=new THREE.Group();G.add(new THREE.Points(geo,mat));S.add(G);
// names
const cv=document.createElement('canvas');cv.width=1024;cv.height=256;const x=cv.getContext('2d');
const FT='600 100px "Cormorant Garamond",Georgia,serif',TXT='OMAR × DODOTY';
function drawNames(p){x.clearRect(0,0,1024,256);if(p>0){x.font=FT;x.textAlign='left';x.textBaseline='middle';const w=x.measureText(TXT).width,l=512-w/2,ex=l+w*p;
x.save();x.beginPath();x.rect(0,0,ex,256);x.clip();const lg=x.createLinearGradient(l,0,l+w,0);lg.addColorStop(0,'#e8b4c0');lg.addColorStop(.5,'#fff8f2');lg.addColorStop(1,'#e8b4c0');x.fillStyle=lg;x.shadowColor='#ff9bb3';x.shadowBlur=26;x.fillText(TXT,l,128);x.restore();
if(p<1){const g=x.createRadialGradient(ex,128,0,ex,128,60);g.addColorStop(0,'rgba(255,245,240,.95)');g.addColorStop(.4,'rgba(255,170,195,.45)');g.addColorStop(1,'rgba(255,170,195,0)');x.fillStyle=g;x.fillRect(ex-60,68,120,120);
for(let i=0;i<10;i++){const a=Math.random()*6.28,d=Math.random()*70;x.fillStyle='rgba(255,235,240,'+(.4+Math.random()*.6)+')';x.beginPath();x.arc(ex+Math.cos(a)*d*.8,128+Math.sin(a)*d,1+Math.random()*3,0,6.28);x.fill()}}}
names.material.map.needsUpdate=true}


names=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(cv),transparent:true,opacity:0,depthTest:false}));names.scale.set(32,8,1);names.position.z=8;S.add(names);names.userData.p=0;names.userData.draw=drawNames;
G.visible=false;
function rs(){const w=innerWidth,h=innerHeight,a=w/h;R.setSize(w,h,false);C.aspect=a;C.position.z=Math.max(48,42/a);C.updateProjectionMatrix();Y=C.position.z*.17}
addEventListener('resize',rs);rs();
}catch(e){gl=0;document.body.classList.add('nogl')}
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function loop(n){requestAnimationFrame(loop);if(!gl)return;
stars.rotation.y=n*1e-5;
if(mode=='gate'){mesh.rotation.y=n*8e-4;mesh.rotation.x=Math.sin(n*6e-4)*.15;mesh.position.y=Y+Math.sin(n*1e-3);mesh.position.x=mx*3}
else{const t=(n-t0)/1000,e=ease(clamp((t-3)/4.5));
for(let i=0;i<N*3;i++)pos[i]=st[i]+(tg[i]-st[i])*e;geo.attributes.position.needsUpdate=true;
mat.opacity=Math.min(1,t/2);
G.rotation.y=fin?n*6e-4:(1-e)*t*.6+e*(Math.sin(t*.4)*.5+mx*.8);G.rotation.x=e*my*.4;
cs+=(boost-cs)*.08;const pu=e>.9?Math.sin(t*2.2):0;G.scale.setScalar(cs*(1+.03*pu)*(fin?1.1:1));
G.position.y+=((fin?5:0)-G.position.y)*.05;
mat.size=1.3+(e>.9?.45*Math.max(0,pu):0);
const wp=clamp((t-7)/5);names.material.opacity=fin?0:1;if(wp!==names.userData.p||(wp>0&&wp<1)){names.userData.p=wp;names.userData.draw(wp)}names.scale.set(32*cs,8*cs,1)}
R.render(S,C)}
requestAnimationFrame(loop);

/* ---------- gate ---------- */
async function sha(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
type($('#wl'),'في عالم صغير معمول مخصوص ليكي...',70);
$('#f').onsubmit=async e=>{e.preventDefault();const err=$('#err');
let ok=false;try{ok=(await sha($('#pw').value))===HASH}catch(x){err.textContent='المتصفح ده مش بيدعم التحقق، افتحي الرابط من متصفح تاني.';return}
if(!ok){err.textContent='مش دي الكلمة الصح يا ضوضتي، جربي تاني ❤️';$('#f').classList.remove('shk');void $('#f').offsetWidth;$('#f').classList.add('shk');return}
err.textContent='';$('#f').style.display='none';
const r=$('#pw').getBoundingClientRect();burst(innerWidth/2,innerHeight*.78,40,'sp');
$('#ld').style.display='block';
await type($('#wl'),'بنفتحلك العالم...  ٣  ٢  ١',90);await wait(500);start()};
function start(){$('#gate').classList.add('out');mode='main';if(gl){mesh.visible=false;G.visible=true}t0=performance.now();
$('#nav').style.display='flex';$('#mu').style.display='block';$$('.bd').forEach(b=>b.style.display='block');go('heart');setTimeout(()=>$('#gate').style.display='none',1300)}

/* ---------- navigation ---------- */
const PG=['heart','letters','garden','sky','omar','end'];let cur=0,omarDone=0;
function go(id){
cur=PG.indexOf(id);$('#pv').disabled=cur==0;$('#nx').disabled=cur==PG.length-1;$('#pg').textContent=(cur+1)+' / '+PG.length;
$$('.sc').forEach(s=>s.classList.remove('on'));$('#'+id).classList.add('on');


$('#gl').classList.toggle('dim',!['heart','sky','end'].includes(id));
if(gl){G.visible=id!='sky';fin=id=='end'}
if(id=='omar'&&!omarDone){omarDone=1;writeLetter()}}
$('#pv').onclick=()=>go(PG[cur-1]);$('#nx').onclick=()=>go(PG[cur+1]);
async function writeLetter(){const o=$('#ot');o.classList.add('typ');$('#sg').style.opacity=0;if(await type(o,LONG,60)){o.classList.remove('typ');$('#sg').style.opacity=1}}
$('#heart').onclick=e=>{boost=Math.min(1.5,boost+.1);burst(e.clientX,e.clientY,10)};

/* ---------- letters ---------- */
L.forEach((m,i)=>{const e=mk('div','env','<i>'+H+'</i><small>رسالة '+(i+1)+'</small>',$('#grid'));e.onclick=async()=>{e.classList.add('op');await wait(450);openLetter(m);e.classList.remove('op');e.classList.add('rd')}});
let fh;function openLetter(m){const md=$('#mod');md.classList.add('on');type($('#tx'),m,55);clearInterval(fh);fh=setInterval(()=>{const p=$('.pa'),h=mk('span','fh',H,p);h.style.left=Math.random()*95+'%';h.style.fontSize=10+Math.random()*14+'px';setTimeout(()=>h.remove(),3600)},350)}
function closeL(){$('#mod').classList.remove('on');clearInterval(fh);$('#tx')._k++}
$('#cl').onclick=closeL;$('#mod').onclick=e=>{if(e.target.id=='mod')closeL()};
$('#rb').onclick=e=>{note(nextMsg());burst(e.clientX,e.clientY,8)};

/* ---------- garden ---------- */
const fc=['#e8b4c0','#fff3ec','#d9778f','#f3c9d2','#fff3ec','#e8b4c0','#d9778f','#f3c9d2'];
fc.forEach((c,i)=>{let p='';for(let k=0;k<6;k++)p+=`<ellipse cx="30" cy="16" rx="7" ry="13" fill="${c}" transform="rotate(${k*60} 30 30)"/>`;
const f=mk('button','fl',`<svg viewBox="0 0 60 150"><path d="M30 34V150" stroke="#6b8f71" stroke-width="3" fill="none"/><path d="M30 110Q12 100 8 86Q24 88 30 110" fill="#6b8f71"/><g class="pt">${p}</g><circle cx="30" cy="30" r="6" fill="#c9a24a"/></svg>`,$('#gd'));
f.style.setProperty('--y',(i%3)*8+'px');f.setAttribute('aria-label','وردة');
f.onclick=()=>{f.classList.add('b');note(M[i])}});

/* ---------- sky ---------- */
$('#sky').onclick=e=>burst(e.clientX,e.clientY,14);
[13,14,15,0,1].forEach((k,i)=>{const s=mk('button','st',H,$('#sky'));s.style.cssText=`top:${18+Math.random()*60}%;left:${8+i*19+Math.random()*8}%;animation-delay:${i*.4}s`;s.textContent='✦';s.onclick=e=>{e.stopPropagation();s.style.opacity=.2;note(M[k]);burst(e.clientX,e.clientY,10)}});

/* ---------- birds ---------- */
for(let i=0;i<5;i++){const b=mk('div','bd','<svg viewBox="0 0 40 24"><path d="M2 6Q12 0 20 12Q28 0 38 6Q28 8 20 20Q12 8 2 6Z" fill="#e8b4c0"/></svg>');
b.style.top=12+i*14+Math.random()*6+'%';b.style.animationDuration=15+Math.random()*12+'s';b.style.animationDelay=-Math.random()*20+'s';
b.onclick=e=>{note(M[8+i]);burst(e.clientX,e.clientY,8)}}

/* ---------- music (soft synthesized pad, off by default) ---------- */
let ac,on=0;$('#mu').onclick=()=>{if(!ac){ac=new(window.AudioContext||webkitAudioContext)();const g=ac.createGain();g.gain.value=.05;g.connect(ac.destination);
[110,164.81,220,277.18,329.63].forEach((f,i)=>{const o=ac.createOscillator(),l=ac.createGain(),m=ac.createOscillator(),mg=ac.createGain();o.frequency.value=f;l.gain.value=.5;o.connect(l);l.connect(g);m.frequency.value=.05+i*.03;mg.gain.value=.4;m.connect(mg);mg.connect(l.gain);o.start();m.start()})}
on=!on;on?ac.resume():ac.suspend();$('#mu').textContent=on?'موسيقى: شغالة':'موسيقى: واقفة'};

/* ---------- restart ---------- */
$('#rs').onclick=()=>{omarDone=0;$('#ot').textContent='';$('#ot')._k++;$('#sg').style.opacity=0;$$('.env').forEach(e=>e.classList.remove('rd'));$$('.fl').forEach(f=>f.classList.remove('b'));$$('.st').forEach(s=>s.style.opacity=1);
boost=1;cs=1;t0=performance.now();go('heart')};
