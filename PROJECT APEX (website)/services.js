// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

// Navbar link highlight
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
