const nav=document.querySelector('.nav');
const menuBtn=document.getElementById('menu-btn');
const navPanel=document.querySelector('.nav nav');

// Sticky nav shadow on scroll
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40));

// Hamburger toggle
menuBtn?.addEventListener('click',()=>{
  const isOpen=navPanel.classList.toggle('open');
  nav.classList.toggle('menu-open',isOpen);
  menuBtn.setAttribute('aria-expanded',isOpen);
});

// Close menu when a nav link is clicked
navPanel?.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>{
    navPanel.classList.remove('open');
    nav.classList.remove('menu-open');
    menuBtn?.setAttribute('aria-expanded','false');
  });
});

// Scroll reveal
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.section,.quote,.hero-visual').forEach(el=>{el.classList.add('reveal');observer.observe(el)});

