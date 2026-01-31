// Typing effect
const text = "Sanket Sharma";
let i = 0;
const el = document.querySelector(".typing");

function typeText() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeText, 120);
  }
}
typeText();

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
  document.querySelector(".theme-toggle").textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
}

// Scroll reveal
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

// Cursor glow follow
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
