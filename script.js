const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const yearEl = document.getElementById('year');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href')?.substring(1);
    const targetEl = targetId && document.getElementById(targetId);
    if (targetEl) {
      event.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
      navLinks?.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});
