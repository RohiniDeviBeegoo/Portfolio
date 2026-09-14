//Theme Toggle
const themeToggle = document.querySelector('.theme-switch__checkbox');
const htmlElement = document.documentElement;

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    htmlElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  htmlElement.setAttribute('data-theme', 'dark');
  themeToggle.checked = true;
}

//Fade-in on scroll
const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

//Hamburger button
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mainNav.classList.toggle('open');
});

document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mainNav.classList.remove('open');
  });
});