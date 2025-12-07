// Simple script for smooth scrolling and basic interactions

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Simple form validation for contact (if added later)
function validateForm() {
    const email = document.getElementById('email');
    if (email && !email.value.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

// Contact form handler (works with Formspree if you replace {your_form_id})
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const action = contactForm.getAttribute('action') || '';
        if (action.includes('{your_form_id}')) {
            alert('Contact form is configured as a Formspree stub.\nPlease sign up for Formspree and replace {your_form_id} in the form action with your real form ID.');
            return;
        }

        const formData = new FormData(contactForm);
        try {
            const res = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (res.ok) {
                alert('Message sent — thank you!');
                contactForm.reset();
            } else {
                alert('There was a problem sending your message. Please try again or email directly.');
            }
        } catch (err) {
            alert('Network error when sending message. Please try email directly.');
        }
    });
});
