// script.js

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Resume button functionality
document.getElementById('resumeBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // In a real implementation, this would link to your resume PDF
    alert('Resume download would start here in a real implementation');
    // window.open('path/to/your/resume.pdf', '_blank');
});

// Modal functionality for project images
function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('mobileNavOverlay');

function closeMenu() {
    navLinks.classList.remove('active');
    hamburgerBtn.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
}

hamburgerBtn.addEventListener('click', function() {
    const isActive = navLinks.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open', isActive);
});

overlay.addEventListener('click', closeMenu);

// Optional: close menu on nav link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});