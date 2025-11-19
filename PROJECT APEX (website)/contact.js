// Add .visible when scrolling into view
const triggers = document.querySelectorAll(
  ".fade-in, .slide-left, .slide-right"
);

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

triggers.forEach(el => appearOnScroll.observe(el));


// NAVBAR SCROLL EFFECT
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (scrollY > 30) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});
// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});
