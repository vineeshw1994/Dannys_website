document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
    header.classList.toggle('scrolled', window.scrollY > 60);
  }

  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  const overlay = document.querySelector('.nav-overlay');

  const closeMenu = () => {
    mobileNav?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggle?.addEventListener('click', () => {
    mobileNav?.classList.toggle('open');
    overlay?.classList.toggle('open');
    document.body.style.overflow = mobileNav?.classList.contains('open') ? 'hidden' : '';
  });

  overlay?.addEventListener('click', closeMenu);
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent';
      btn.disabled = true;
      setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; form.reset(); }, 2800);
    });
  }
});
