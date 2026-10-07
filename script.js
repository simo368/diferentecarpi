const nav=document.querySelector('.nav');const menu=document.querySelector('.menu');const links=document.querySelectorAll('.nav a');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40));
menu?.addEventListener('click',()=>{document.querySelector('.nav nav').classList.toggle('open')});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.section,.quote,.hero-visual').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
