document.querySelectorAll('.sidebar').forEach((sidebar) => {
  const toggle = sidebar.querySelector('.sidebar__menu-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('is-menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
});
