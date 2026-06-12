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
  const closeBtn = document.querySelector('.nav-mobile-close');

  const closeMenu = () => {
    mobileNav?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
    const icon = toggle?.querySelector('i');
    if (icon) {
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    }
  };

  const openMenu = () => {
    mobileNav?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
    const icon = toggle?.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  };

  toggle?.addEventListener('click', () => {
    if (mobileNav?.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  mobileNav?.querySelectorAll('.nav-mobile-links a').forEach(a => a.addEventListener('click', closeMenu));

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
