const header=document.querySelector('.nav');
const menuButton=document.querySelector('.menu');
const menuPanel=document.querySelector('#primary-navigation');
const mobileQuery=window.matchMedia('(max-width: 800px)');

function setMenu(open){
  if(!header||!menuButton||!menuPanel)return;
  const shouldOpen=Boolean(open&&mobileQuery.matches);
  menuPanel.classList.toggle('open',shouldOpen);
  header.classList.toggle('menu-open',shouldOpen);
  document.body.classList.toggle('menu-lock',shouldOpen);
  document.documentElement.classList.toggle('menu-lock',shouldOpen);
  menuButton.setAttribute('aria-expanded',String(shouldOpen));
  menuButton.setAttribute('aria-label',shouldOpen?'Chiudi menu':'Apri menu');
}

menuButton?.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
menuPanel?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape')setMenu(false)});
mobileQuery.addEventListener('change',()=>setMenu(false));
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>40),{passive:true});

if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
  document.querySelectorAll('.section,.quote,.hero-visual').forEach(element=>{element.classList.add('reveal');observer.observe(element)});
}
