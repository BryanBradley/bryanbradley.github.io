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

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function animateElements(selector, duration = 500, delay = 100, property = "rotateX") {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (isElementInViewport(element)) {
      element.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
      element.style.transitionDelay = `${index * delay}ms`;
      element.classList.add("animate");
    }
  });
}

function fadeAnimation(selector, direction, duration = 1000, delay = 0) {
  const element = document.querySelector(selector);
  if (isElementInViewport(element) && !element.classList.contains("animated")) {
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

function fadeUpAnimation(selector, duration = 500, delay = 100) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (isElementInViewport(element) && !element.classList.contains("animate")) {
      element.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
      element.style.transitionDelay = `${index * delay}ms`;
      element.classList.add("animate");
    }
  });
}

function initializeAnimations() {
  animateElements(".footer-icon", 800, 150, "rotateX");
  animateElements(".skill-card", 500, 150, "rotateY");
  fadeAnimation(".about-image", "right", 600);
  fadeAnimation(".social", "left", 600);
  fadeUpAnimation(".project-card", 500, 100);
}

window.addEventListener("load", initializeAnimations);
window.addEventListener("scroll", initializeAnimations);
