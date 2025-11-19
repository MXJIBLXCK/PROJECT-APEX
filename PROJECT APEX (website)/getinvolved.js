// ========== NAVBAR SHADOW ON SCROLL ==========
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ========== SMOOTH SCROLL REVEAL ANIMATIONS ==========
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ========== FADE-IN FOR HERO TEXT ==========
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-content");
    if (hero) {
        setTimeout(() => hero.classList.add("visible"), 200);
    }
});


// ========== SERVICE CARD HOVER FLIP (IF USED) ==========
const flipCards = document.querySelectorAll(".service-card");

flipCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("flipped");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("flipped");
    });
});


// ========== CONTACT PAGE: ICON HOVER GLOW ==========
const contactItems = document.querySelectorAll(".contact-item");

contactItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
        item.classList.remove("active");
    });
});
