// Hamburger Menu

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarList = document.querySelector(".navbar-list");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navbarList.classList.toggle("show");
});

// Dark Mode

const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

function setDarkMode(isDark) {
  if (isDark) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
  localStorage.setItem("darkMode", isDark);
}

const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode !== null) {
  setDarkMode(savedDarkMode === "true");
}

darkModeToggle.addEventListener("click", () => {
  const isDarkMode = body.classList.toggle("dark-mode");
  setDarkMode(isDarkMode);
});

// AOS

function isElementInViewport(el, offset = 0) {
  const rect = el.getBoundingClientRect();
  return rect.top < (window.innerHeight || document.documentElement.clientHeight) - offset && rect.bottom >= 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.right >= 0;
}

function animateElements(selector, duration = 500, delay = 100, property = "rotateX", offset = 100) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (isElementInViewport(element, offset) && !element.classList.contains("animated")) {
      element.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
      element.style.transitionDelay = `${index * delay}ms`;
      element.classList.add("animated", "animate");
    }
  });
}

function fadeAnimation(selector, direction, duration = 1000, delay = 0, offset = 100) {
  const element = document.querySelector(selector);
  if (isElementInViewport(element, offset) && !element.classList.contains("animated")) {
    element.style.opacity = "0";
    element.style.transform = direction === "right" ? "translateX(-50px)" : "translateX(50px)";
    element.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
    element.style.transitionDelay = `${delay}ms`;

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateX(0)";
      element.classList.add("animated");
    }, 100);
  }
}

function fadeUpAnimation(selector, duration = 500, delay = 100, offset = 100) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (isElementInViewport(element, offset) && !element.classList.contains("animated")) {
      element.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
      element.style.transitionDelay = `${index * delay}ms`;
      element.classList.add("animated", "animate");
    }
  });
}

function initializeAnimations() {
  animateElements(".footer-icon", 800, 150, "rotateX", 0);
  fadeAnimation(".social", "left", 600, 0, 0);

  animateElements(".skill-card", 500, 150, "rotateY", 100);
  fadeAnimation(".about-image", "right", 1000, 0, 250);
  fadeUpAnimation(".project-card", 1000, 100, 150);
}

window.addEventListener("load", initializeAnimations);
window.addEventListener("scroll", initializeAnimations);

// Submit Form to Google Sheets

const scriptURL = "https://script.google.com/macros/s/AKfycbzxTpnDDiE0kperFdtNqqJ3NEjZIWW7VTLdk2KrWc5auUXAkKCBAHDdlYha5Zlq0LNW/exec";
const form = document.forms["portfolio-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const submitBtn = document.querySelector(".submit-btn");
  const loadingBtn = document.querySelector(".loading-btn");
  const alert = document.querySelector(".alert");
  const closeBtn = document.querySelector(".close-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitBtn.style.display = "none";
    loadingBtn.style.display = "inline-flex";

    setTimeout(function () {
      loadingBtn.style.display = "none";
      submitBtn.style.display = "inline-flex";
      alert.style.display = "block";
      form.reset();
    }, 5000);
  });

  closeBtn.addEventListener("click", function () {
    alert.style.display = "none";
  });
});
