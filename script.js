// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Function to handle resume download
function downloadResume() {
  // Resume file ka path (yaha same folder me rakha hai)
  const fileUrl = "ishisingla_resume.pdf";

  // Ek hidden <a> banake download trigger karte hain
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = "ishisingla_resume.pdf"; // download hone par naam
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.getElementById("downloadResumeBtn").addEventListener("click", downloadResume);


