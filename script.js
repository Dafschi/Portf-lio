const header = document.querySelector('.topbar');
const menuToggle = document.querySelector('.menu-toggle');
const themeToggle = document.querySelector('.theme-toggle');

menuToggle.addEventListener('click', () => {
  header.classList.toggle('open');
  menuToggle.textContent = header.classList.contains('open') ? '×' : '☰';
  menuToggle.setAttribute('aria-expanded', header.classList.contains('open'));
});

document.querySelectorAll('.topbar nav a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    menuToggle.textContent = '☰';
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

function setTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
  themeToggle.setAttribute('title', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀' : '☾';
  themeToggle.querySelector('.theme-label').textContent = isDark ? 'Modo claro' : 'Modo escuro';
}

const savedTheme = localStorage.getItem('daffner-theme');
setTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  localStorage.setItem('daffner-theme', nextTheme);
});
