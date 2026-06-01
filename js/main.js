document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const currentPath = window.location.pathname.replace(/\\/g, '/');
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const normalized = href.replace(/^\.\./, '').replace(/^\./, '');
    if (currentPath.endsWith(normalized) ||
        (normalized === '/' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')))) {
      link.classList.add('active');
    }
  });
});
