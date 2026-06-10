// ======================
// Smooth Scrolling
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });

        }

    });

});

// ======================
// Mobile Menu Toggle
// ======================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {

    hamburger.addEventListener('click', () => {

        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

    });

}

// ======================
// Close Mobile Menu
// ======================

document.querySelectorAll('.nav-link').forEach(link => {

    link.addEventListener('click', () => {

        if (hamburger) {
            hamburger.classList.remove('active');
        }

        if (navMenu) {
            navMenu.classList.remove('active');
        }

    });

});

// ======================
// Contact Form
// ======================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', function (e) {

        e.preventDefault();

        const status = document.getElementById('form-status');

        if (status) {

            status.innerHTML =
                "✅ Thank you! Your message has been sent successfully.";

            status.style.color = "#8b5cf6";

            setTimeout(() => {
                status.innerHTML = "";
            }, 5000);

        }

        this.reset();

    });

}

// ======================
// Resume Download
// ======================

function downloadResume() {

    const fileUrl = "Ishi_Singla_Resume (1).pdf";

    const a = document.createElement("a");

    a.href = fileUrl;
    a.download = "Ishi_Singla_Resume (1).pdf";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

}

const resumeBtn = document.getElementById("downloadResumeBtn");

if (resumeBtn) {

    resumeBtn.addEventListener(
        "click",
        downloadResume
    );

}

// ======================
// Typed.js Animation
// ======================

if (document.getElementById("typed")) {

    new Typed("#typed", {

        strings: [
            "Computer Science Engineer",
            "Python Developer",
            "Data Analyst",
            "Web Developer",
            "AI Enthusiast",
            "Problem Solver"
        ],

        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true

    });

}

// ======================
// Navbar Scroll Effect
// ======================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(0, 0, 0, 0.95)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(139,92,246,0.3)";

    }

    else {

        navbar.style.background =
            "rgba(0, 0, 0, 0.85)";

        navbar.style.boxShadow = "none";

    }

});

// ======================
// Fade In Animation
// ======================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach(section => {

    observer.observe(section);

});

// ======================
// Console Welcome Message
// ======================

console.log(
    "Welcome to Ishi Singla's Portfolio 🚀"
);

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

const slides = document.querySelectorAll(".service-slide");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

slides.forEach(slide=>{
slide.classList.remove("active");
});

dots.forEach(d=>{
d.classList.remove("active");
});

slides[index].classList.add("active");
dot.classList.add("active");

});

});
let currentSlide = 0;

setInterval(()=>{

slides[currentSlide].classList.remove("active");
dots[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

slides[currentSlide].classList.add("active");
dots[currentSlide].classList.add("active");

},3000);