// Typing animation
const text = "Sanket Sharma";
let index = 0;
const typingEl = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
  const btn = document.querySelector(".theme-toggle");
  btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
}

// Scroll animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));