// cursos-utils.js – lógica UI avanzada para cursos.html
// ---------------------------------------------------------------
// Dark mode toggle (persisted in localStorage)
function initDarkMode() {
  const stored = localStorage.getItem('darkMode');
  const html = document.documentElement;
  if (stored === 'true') html.classList.add('dark');
  const toggle = document.getElementById('dark-toggle');
  if (toggle) toggle.checked = stored === 'true';
}
function toggleDarkMode(e) {
  const html = document.documentElement;
  if (e.target.checked) {
    html.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }
}

// Autocomplete for global search (simple static list)
function initAutocomplete() {
  const input = document.getElementById('global-search');
  const suggestions = COURSES.map(c => c.title);
  let listEl;
  input.addEventListener('input', () => {
    const val = input.value.toLowerCase();
    closeList();
    if (!val) return;
    listEl = document.createElement('div');
    listEl.setAttribute('class', 'autocomplete-items absolute left-0 right-0 bg-white border border-slate-200 rounded-b-xl z-10');
    input.parentNode.appendChild(listEl);
    suggestions.filter(s => s.toLowerCase().includes(val)).slice(0,5).forEach(s => {
      const item = document.createElement('div');
      item.innerHTML = `<strong>${s.substr(0, val.length)}</strong>${s.substr(val.length)}`;
      item.addEventListener('click', () => {
        input.value = s;
        closeList();
        applyFilters();
      });
      listEl.appendChild(item);
    });
  });
  function closeList() { if (listEl) listEl.remove(); }
  document.addEventListener('click', (e) => { if (e.target !== input) closeList(); });
}

// GSAP animations
function animateEntrance() {
  gsap.fromTo('aside', {x:-40,autoAlpha:0},{x:0,autoAlpha:1,duration:0.6, ease:'power3.out'});
  gsap.fromTo('header',{y:-20,autoAlpha:0},{y:0,autoAlpha:1,duration:0.5,delay:0.15, ease:'power3.out'});
  gsap.fromTo('.hero', {autoAlpha:0, y:30},{autoAlpha:1, y:0, duration:0.8, ease:'power3.out'});
}

// Render categories carousel
function renderCategories(){
  const row=document.getElementById('cat-row');
  row.innerHTML = CATEGORIES.map((c,i)=>`
    <div class="cat-item flex flex-col items-center gap-2 shrink-0 cursor-pointer" onclick="filterByCategory('${c.label}')">
      <div class="cat-icon w-14 h-14 bg-white/10 border-2 border-white rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-105">
        <i class="fa-solid ${c.icon} text-lg text-purple-400"></i>
      </div>
      <span class="text-[11px] font-bold text-slate-600 text-center w-16">${c.label}<br><span class="text-xs text-slate-500">${c.count} cursos</span></span>
    </div>`).join('');
  gsap.fromTo('.cat-item', {autoAlpha:0, y:20},{autoAlpha:1, y:0, stagger:0.07, duration:0.4});
}
function scrollCats(dir){
  document.getElementById('cat-row').scrollBy({left:dir*160,behavior:'smooth'});
}
function filterByCategory(cat){
  document.getElementById('filter-cat').value = cat;
  applyFilters();
}

// Apply filters (search + selects)
function applyFilters(){
  const query = document.getElementById('search-courses').value.toLowerCase();
  const cat = document.getElementById('filter-cat').value;
  const level = document.getElementById('filter-level').value;
  const modality = document.getElementById('filter-modality').value;
  const price = document.getElementById('filter-price')?.value || '';
  const language = document.getElementById('filter-language')?.value || '';
  let filtered = COURSES;
  if (query) filtered = filtered.filter(c=>c.title.toLowerCase().includes(query)||c.desc.toLowerCase().includes(query));
  if (cat) filtered = filtered.filter(c=>c.category===cat);
  if (level) filtered = filtered.filter(c=>c.level===level);
  if (modality) filtered = filtered.filter(c=>c.modality===modality);
  if (price) {
    const [min,max] = price.split('-');
    filtered = filtered.filter(c=> c.price>=Number(min) && (max==='+'?true:c.price<=Number(max)) );
  }
  if (language) filtered = filtered.filter(c=> c.language===language);
  renderCourses(filtered);
}

// Render course cards with glassmorphism and badge gradients
function renderCourses(list){
  const container=document.querySelector('[data-tab-content="explorar"]');
  container.innerHTML='';
  if(list.length===0){container.innerHTML='<p class="col-span-3 text-center text-slate-400">No se encontraron cursos.</p>';return;}
  list.forEach(c=>{
    const badgeClass = c.badge==='Popular' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                       c.badge==='Nuevo' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                       'bg-gradient-to-r from-blue-500 to-indigo-500 text-white';
    const card=document.createElement('div');
    card.className='course-card relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300';
    card.innerHTML=`
      <div class="relative h-48">
        <img src="${c.img}" class="w-full h-full object-cover" alt="${c.title}">
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <span class="absolute top-3 left-3 ${badgeClass} text-xs font-bold px-2 py-1 rounded">${c.badge}</span>
        <div class="absolute -bottom-5 left-4 w-10 h-10 ${c.iconColor} rounded-xl flex items-center justify-center shadow-lg border-2 border-white">
          <i class="fa-solid ${c.icon} text-white text-sm"></i>
        </div>
      </div>
      <div class="pt-8 px-4 pb-4 flex flex-col flex-1">
        <h3 class="font-extrabold text-white text-sm mb-1">${c.title}</h3>
        <p class="text-[11px] text-white/80 font-medium leading-relaxed mb-2">${c.desc}</p>
        <div class="flex items-center justify-between mb-3 text-sm">
          <span class="text-purple-300 font-bold">$${c.price}</span>
          <span class="flex items-center text-yellow-300"><i class="fa-solid fa-star"></i> ${c.rating}</span>
        </div>
        <button onclick="alert('Ver curso: ${c.title}')" class="w-full py-2.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-purple-400">Ver curso</button>
      </div>`;
    container.appendChild(card);
  });
  gsap.fromTo('.course-card', {autoAlpha:0, y:20},{autoAlpha:1, y:0, stagger:0.07, duration:0.4});
}

// Render user's progress courses list
function renderMyCourses(){
  const list=document.getElementById('my-courses');
  list.innerHTML='';
  USER.activeCourses.forEach(c=>{
    const item=document.createElement('div');
    item.className='flex items-center gap-3';
    item.innerHTML=`
      <img src="${c.img}" class="w-12 h-12 rounded-xl object-cover" alt="${c.title}">
      <div class="flex-1 min-w-0">
        <p class="font-bold text-white truncate">${c.title}</p>
        <div class="w-full bg-white/20 rounded-full h-1.5 mt-1">
          <div class="bg-purple-600 h-1.5 rounded-full" style="width:${c.progress}%"></div>
        </div>
        <span class="text-xs text-white/70">${c.progress}% completado</span>
      </div>`;
    list.appendChild(item);
  });
}

// Render learning paths with sparkline (Chart.js line)
function renderLearningPaths(){
  const container=document.getElementById('learning-paths');
  container.innerHTML='';
  LEARNING_PATHS.forEach(p=>{
    const card=document.createElement('div');
    card.className='bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20';
    const canvasId=`spark-${p.id}`;
    card.innerHTML=`
      <h5 class="font-bold text-white mb-1">${p.name}</h5>
      <p class="text-sm text-white/70 mb-2">${p.desc}</p>
      <canvas id="${canvasId}" height="40"></canvas>
      <div class="w-full bg-white/20 rounded-full h-1.5 mt-2">
        <div class="bg-purple-600 h-1.5 rounded-full" style="width:${p.progress}%"></div>
      </div>
      <p class="text-xs text-white/70 mt-1">${p.progress}% • ${p.totalCourses} cursos • ${p.totalHours} hrs</p>`;
    container.appendChild(card);
    // sparkline data (random for demo)
    const ctx=document.getElementById(canvasId).getContext('2d');
    new Chart(ctx,{type:'line',data:{labels:Array(5).fill(''),datasets:[{data:Array(5).fill(0).map(()=>Math.random()*100),borderColor:'#a78bfa',borderWidth:2,fill:false,pointRadius:0}]},options:{responsive:true,maintainAspectRatio:false,scales:{x:{display:false},y:{display:false}},plugins:{legend:{display:false},tooltip:{enabled:false}}});
  });
}

// Dashboard: donut chart total progress
function initDonut(){
  const ctx=document.getElementById('donutChart').getContext('2d');
  new Chart(ctx,{type:'doughnut',data:{datasets:[{data:[USER.progress,100-USER.progress],backgroundColor:['#7c3aed','#2d3748'],borderWidth:0,cutout:'80%'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{enabled:false}}});
  document.getElementById('donutLabel').textContent = `${USER.progress}%`;
}
function renderCertifications(){
  const container=document.getElementById('cert-list');
  container.innerHTML='';
  USER.certifications.forEach(cert=>{
    const item=document.createElement('div');
    item.className='flex items-center gap-2 text-sm text-white/80';
    item.innerHTML=`<i class="fa-solid fa-check-circle text-purple-400"></i><span>${cert.title} <span class="text-xs text-white/60">(${cert.date})</span></span>`;
    container.appendChild(item);
  });
}

// Tabs handling with GSAP fade
function initTabs(){
  const tabs=document.querySelectorAll('[data-tab]');
  const panels=document.querySelectorAll('[data-tab-content]');
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(b=>b.classList.remove('border-b-2','border-primary','text-primary','font-bold'));
    t.classList.add('border-b-2','border-primary','text-primary','font-bold');
    const target=t.dataset.tab;
    panels.forEach(p=>{
      const show = p.dataset.tabContent===target;
      p.classList.toggle('hidden',!show);
      if(show) gsap.fromTo(p,{autoAlpha:0,y:20},{autoAlpha:1,y:0,duration:0.4});
    });
    // load specific content if needed
    if(target==='explorar') renderCourses(COURSES);
    if(target==='mis') renderMyCourses();
    if(target==='rutas') renderLearningPaths();
  }));
}

// Init all on DOMContentLoaded
document.addEventListener('DOMContentLoaded',()=>{
  initDarkMode();
  const toggle=document.getElementById('dark-toggle');
  if(toggle) toggle.addEventListener('change',toggleDarkMode);
  initAutocomplete();
  renderCategories();
  renderCourses(COURSES);
  initDonut();
  renderMyCourses();
  renderCertifications();
  initTabs();
  animateEntrance();
});
