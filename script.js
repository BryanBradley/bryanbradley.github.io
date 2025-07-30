// Hamburger Menu

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarList = document.querySelector('.navbar-list');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navbarList.classList.toggle('show');
});

// Dark Mode

const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

function setDarkMode(isDark) {
  if (isDark) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
  localStorage.setItem('darkMode', isDark);
}

const savedDarkMode = localStorage.getItem('darkMode');

if (savedDarkMode !== null) {
  setDarkMode(savedDarkMode === 'true');
}

darkModeToggle.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode');
  setDarkMode(isDarkMode);
});

// Submit Form to Google Sheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbzxTpnDDiE0kperFdtNqqJ3NEjZIWW7VTLdk2KrWc5auUXAkKCBAHDdlYha5Zlq0LNW/exec';
const form = document.forms['portfolio-contact-form'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const submitBtn = document.querySelector('.submit-btn');
  const loadingBtn = document.querySelector('.loading-btn');
  const alert = document.querySelector('.alert');
  const closeBtn = document.querySelector('.close-btn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.style.display = 'none';
    loadingBtn.style.display = 'inline-flex';

    setTimeout(function () {
      loadingBtn.style.display = 'none';
      submitBtn.style.display = 'inline-flex';
      alert.style.display = 'block';
      form.reset();
    }, 5000);
  });

  closeBtn.addEventListener('click', function () {
    alert.style.display = 'none';
  });
});
