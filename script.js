// ── Elementi ──────────────────────────────────────────────────
const header      = document.getElementById('nav');
const menuButton  = document.querySelector('.menu');
const menuPanel   = document.getElementById('primary-navigation');
const mobileQuery = window.matchMedia('(max-width: 800px)');

// ── Sticky nav su scroll ───────────────────────────────────────
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Apri / chiudi menu ─────────────────────────────────────────
function setMenu(open) {
  const isOpen = Boolean(open && mobileQuery.matches);
  menuPanel.classList.toggle('open', isOpen);
  header.classList.toggle('menu-open', isOpen);
  document.body.classList.toggle('menu-lock', isOpen);
  document.documentElement.classList.toggle('menu-lock', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Chiudi menu' : 'Apri menu');
}

// ── Click sul bottone hamburger ────────────────────────────────
menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

// ── Click su un link del menu → chiudi ────────────────────────
menuPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

// ── Tasto Escape → chiudi ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') setMenu(false);
});

// ── Ridimensionamento finestra → chiudi se desktop ────────────
mobileQuery.addEventListener('change', () => setMenu(false));

// ── Scroll reveal ─────────────────────────────────────────────
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.section, .quote, .hero-visual').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}
