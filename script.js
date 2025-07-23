// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typing Effect
const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "Shopify Developer",
  "UI/UX Designer",
  "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let typing = true;

const typedSpan = document.getElementById("typed-role");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (typing) {
    typedSpan.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      typing = false;
      setTimeout(typeEffect, 1500);
    } else {
      setTimeout(typeEffect, 100);
    }
  } else {
    typedSpan.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 300);
    } else {
      setTimeout(typeEffect, 50);
    }
  }
}

typeEffect();


function showMoreProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.classList.add('show-projects');
  document.querySelector('.view-all').style.display = 'none';
}

// Success Message
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      form.reset();
      form.style.display = "none";
      successMessage.style.display = "block";
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please check your connection.");
  }
});


// Show/Hide Scroll Button
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to Top on Click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Active Links
  const sections = document.querySelectorAll("section");
  const Links = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    Links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);

  // Also set active class on click
  Links.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });




