// Dynamic Footer Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.style.color = '#10b981';
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        } else {
            formMessage.textContent = 'Please fill out all required fields.';
            formMessage.style.color = '#ef4444';
        }
    });
}
