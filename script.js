const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  });
});

document.getElementById('searchBtn')?.addEventListener('click', () => {
  const location = document.getElementById('location').value;
  const type = document.getElementById('type').value;
  const price = document.getElementById('price').value;

  const parts = [location, type, price].filter(Boolean);
  const message = parts.length
    ? `Showing properties for: ${parts.join(' • ')}`
    : 'Showing all available properties.';

  alert(message);
});

document.getElementById('year').textContent = new Date().getFullYear();
