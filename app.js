const nav=document.getElementById('nav'),burger=document.getElementById('burger'),menu=document.getElementById('menu');
const onScroll=()=>nav.classList.toggle('solid',scrollY>40);onScroll();addEventListener('scroll',onScroll,{passive:true});
const toggle=open=>{menu.classList.toggle('open',open);burger.setAttribute('aria-expanded',open);document.body.style.overflow=open?'hidden':''};
burger.addEventListener('click',()=>toggle(!menu.classList.contains('open')));menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggle(false)));
document.querySelectorAll('.mas .reveal').forEach((el,i)=>el.style.setProperty('--s',(i%3)*.08+'s'));
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.ph img').forEach(img=>img.addEventListener('error',()=>img.closest('.ph')?.classList.add('missing')));
const cine=document.querySelector('.cine-img'),heroMedia=document.querySelector('.hero-img'),reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!reduced){addEventListener('scroll',()=>{if(cine){const r=cine.parentElement.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)cine.style.transform=`translateY(${(r.top*-.055).toFixed(1)}px)`}if(heroMedia&&scrollY<innerHeight*1.15)heroMedia.style.transform=`translateY(${(scrollY*.035).toFixed(1)}px)`},{passive:true})}
