const $=s=>document.querySelector(s);
const GOALS={
"Spark New Friendships":["Small-Group Clusters","Hybrid: you set groups, students pick a role or seat within them","Seating near non-friends is linked to far more new friendships over a semester (Faur & Laursen, 2022)."],
"Run Whole-Class Discussions":["Full Circle / Fishbowl","Teacher-assigned positions, student choice of speaking order","Layouts that let everyone see each other support the peer talk that Vygotsky's social constructivism relies on (Vygotsky, 1978)."],
"Reduce Off-Task Chatter":["Traditional Rows or U-Shape","More structure: teacher-assigned with a student preference survey","Nearby peers' engagement shapes your own, so mix focused and easily distracted students (Gremmen et al., 2018)."],
"Support Independent Focus":["Flexible Learning Zones","Hybrid: students choose from a few pre-approved zones","Unguided choice can sort students by achievement, so offer set options rather than open choice (Gremmen et al., 2017)."]};
const chips=$("#chips");
Object.keys(GOALS).forEach(g=>{const b=document.createElement("button");b.className="chip";b.textContent=g;b.setAttribute("aria-pressed","false");
b.onclick=()=>{chips.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed","false"));b.setAttribute("aria-pressed","true");
const [l,c,r]=GOALS[g];$("#result").innerHTML=`<dl><dt>Layout</dt><dd>${l}</dd><dt>Choice level</dt><dd>${c}</dd></dl><div class="note"><b>Research takeaway:</b> ${r}</div>`};chips.appendChild(b)});

// Floor-plan diagrams
const d=(x,y,w=22,h=16)=>`<rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="3" fill="#2E6F65" opacity=".85"/>`;
const front='<rect x="110" y="8" width="100" height="10" rx="3" fill="#D97706"/>';
function rows(){let s="";for(let r=0;r<4;r++)for(let c=0;c<5;c++)s+=d(60+c*50,45+r*32);return s}
function clusters(){let s="";[[85,55],[235,55],[85,125],[235,125]].forEach(([x,y])=>{[[-13,-10],[13,-10],[-13,10],[13,10]].forEach(([a,b])=>s+=d(x+a*1.6,y+b*1.4,24,16))});return s}
function ushape(){let s="";for(let i=0;i<6;i++)s+=d(70,45+i*20,16,16);for(let i=0;i<6;i++)s+=d(250,45+i*20,16,16);for(let i=1;i<5;i++)s+=d(70+i*36,155,22,16);return s}
function circle(){let s="";for(let i=0;i<14;i++){const a=i/14*Math.PI*2;s+=d(160+Math.cos(a)*62,95+Math.sin(a)*52,18,14)}return s+'<circle cx="160" cy="95" r="14" fill="none" stroke="#D97706" stroke-width="2" stroke-dasharray="4 3"/>'}
function zones(){return `<rect x="30" y="35" width="90" height="60" rx="8" fill="none" stroke="#D97706" stroke-dasharray="5 4"/><rect x="200" y="35" width="90" height="60" rx="8" fill="none" stroke="#D97706" stroke-dasharray="5 4"/><rect x="30" y="110" width="90" height="60" rx="8" fill="none" stroke="#D97706" stroke-dasharray="5 4"/>`+d(50,60)+d(75,60)+d(100,60)+d(225,65)+d(255,65)+d(240,85)+d(50,135)+d(100,150)+`<circle cx="235" cy="145" r="22" fill="#2E6F65" opacity=".85"/>`}
const L=[
["Traditional Rows",rows,"Direct instruction, tests, quiet individual work","Little peer interaction; back-row avoidance and fixed neighbors","Upper elementary–high school; lectures, assessments","Seat choice in rows can sort students by confidence (Wasendorf et al., 2023)."],
["Small-Group Clusters",clusters,"Collaboration, projects, peer tutoring, building friendships","Noise; some students face away from the board","K–12; group tasks, labs, stations","Nearby peers shape engagement and new friendships (Gremmen et al., 2018; Faur & Laursen, 2022)."],
["U-Shape / Horseshoe",ushape,"Mixed lecture and discussion; sightlines to the teacher and each other","Takes space; students at the ends can feel distant","Grades 3–12; seminars, demonstrations, Q&A","Mutual visibility invites student talk, a core social constructivist condition (Vygotsky, 1978)."],
["Full Circle / Fishbowl",circle,"Whole-class discussion, community circles, Socratic seminar","Hard for writing; quieter students may feel exposed","K–12; morning meetings, debates","Everyone is equally near everyone, which reduces back-row effects (Wasendorf et al., 2023)."],
["Flexible Learning Zones",zones,"Mixed tasks: focus, collaboration, and teacher-led groups at once","Needs routines; can become unstructured without set options","K–12 with established routines; choice-based work","Structured options limit achievement-based clustering (Gremmen et al., 2017)."]];
$("#layouts").innerHTML=L.map(([n,f,b,w,g,r])=>`<article class="card layout"><svg viewBox="0 0 320 190" role="img" aria-label="Top-down floor plan: ${n}">${front}${f()}</svg><h3>${n}</h3><dl><dt>Best used for</dt><dd>${b}</dd><dt>Watch out for</dt><dd>${w}</dd><dt>Ideal grade/activity fit</dt><dd>${g}</dd></dl><p style="margin-top:14px"><span class="badge">Research Connection</span></p><p>${r}</p></article>`).join("");

// Toolkit
const T=[
["Tool 1: 5-Question Student Seating Preference Survey",`Seating Preference Survey (Private: only I will see your answers)
1. Where do you focus best? (front / middle / back / near a window / near the door / no preference)
2. Name two classmates you work well with, and one you'd like to get to know better.
3. What helps you do your best work? (quiet / some talking / music-free / movement / a clear view of the board)
4. Is there anything about sound, light, space, or visibility that makes class harder for you? (optional)
5. Is there anything else I should know when I plan our seats?`],
["Tool 2: The 60-Second Room Reset Routine",`60-Second Room Reset
Before: Post the target layout (row / cluster / circle) on the board and assign a desk "captain" per group.
0:00 Announce the layout and start a visible 60-second timer.
0:10 Students stand, push in chairs, and clear desk tops.
0:15 Captains point to their new spots; students move desks to the floor-tape markers or the diagram.
0:45 Check for clear walkways and that everyone can see the board or each other.
0:55 Students sit and give a thumbs-up when ready.
1:00 Begin. Celebrate the time and note one thing to improve.
Practice it three times in the first two weeks, then use it as a regular routine.`],
["Tool 3: Seating Plan Reflection Checklist",`Before You Finalize the Seating Chart
[ ] Does every student sit near at least one peer they work well with?
[ ] Is any student sitting near no one they know, and have I planned a bridge for them?
[ ] Have I mixed engagement levels rather than clustering similar students?
[ ] Do sensory, vision, hearing, and mobility needs have a quiet, non-stigmatizing solution?
[ ] Is the front row rotated or opt-in, rather than a "behavior seat"?
[ ] Did I use student survey responses where I could?
[ ] Does the layout match today's learning task?
[ ] Do I have a date to review and rotate seats?`]];
$("#tools").innerHTML=T.map(([t,x],i)=>`<article class="card" style="margin-bottom:18px"><h3>${t}</h3><pre id="t${i}">${x}</pre><button class="btn" data-i="${i}">Copy Text</button><span class="copied" role="status"></span></article>`).join("");
$("#tools").addEventListener("click",async e=>{const b=e.target.closest("button");if(!b)return;const t=$("#t"+b.dataset.i).textContent;const m=b.nextElementSibling;
try{await navigator.clipboard.writeText(t);m.textContent="Copied"}catch(_){const r=document.createRange();r.selectNodeContents($("#t"+b.dataset.i));const s=getSelection();s.removeAllRanges();s.addRange(r);m.textContent="Text selected. Press Ctrl/Cmd+C to copy."}
setTimeout(()=>m.textContent="",3000)});

// Routing
function route(){const h=(location.hash||"#home").slice(1);const id=document.getElementById(h)&&document.getElementById(h).classList.contains("view")?h:"home";
document.querySelectorAll(".view").forEach(v=>v.classList.toggle("on",v.id===id));
document.querySelectorAll("nav a").forEach(a=>a.getAttribute("href")==="#"+id?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current"));window.scrollTo(0,0)}
addEventListener("hashchange",route);route();
