/* =========================
   GSAP SETUP
========================= */
gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO INTRO (STABIL)
   - text cinematic
   - buton DOAR fade-in
========================= */
window.addEventListener("load", () => {

    gsap.fromTo(
        ".hero-content h1",
        { y: 60, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            clearProps: "transform"
        }
    );

    gsap.fromTo(
        ".hero-content p",
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            clearProps: "transform"
        }
    );

    /* CTA – FADE IN PUR (FĂRĂ MIȘCARE) */
    gsap.fromTo(
        ".hero-content a",
        { opacity: 0 },
        {
            opacity: 1,
            duration: 0.8,
            delay: 0.9,
            ease: "power2.out",
            clearProps: "opacity"
        }
    );

});

/* =========================
   PARALLAX HERO (BACKGROUND ONLY)
========================= */
let lastScrollY = 0;

window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const scrollY = window.scrollY;

    // limităm update-ul ca să fie fluid
    if (Math.abs(scrollY - lastScrollY) < 2) return;
    lastScrollY = scrollY;

    hero.style.backgroundPosition = `center ${65 + scrollY * 0.04}%`;
});

/* =========================
   SCROLL ANIMATIONS (SECTIONS)
========================= */
gsap.utils.toArray(".fade-up").forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

gsap.utils.toArray(".fade-left").forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

gsap.utils.toArray(".fade-right").forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

gsap.utils.toArray(".zoom-in").forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out"
    });
});

/* =========================
   PROGRESS BAR ANIMATION
========================= */
const progressFill = document.querySelector(".progress-fill");

if (progressFill) {
    const progressValue = progressFill.getAttribute("data-progress");

    gsap.to(progressFill, {
        scrollTrigger: {
            trigger: ".progress-box",
            start: "top 80%",
            once: true
        },
        width: progressValue + "%",
        duration: 1.6,
        ease: "power3.out"
    });
}

/* =========================
   VERSET – MICRO ANIMATIE
========================= */
const verse = document.querySelector(".verse-section");

if (verse) {
    gsap.fromTo(
        verse,
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: verse,
                start: "top 85%",
                once: true
            }
        }
    );
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }
});
