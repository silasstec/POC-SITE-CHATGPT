/*
 * script.js
 *
 * This file contains the minimal JavaScript required for the responsive
 * navigation and a basic contact form handler. The navigation toggle allows
 * users on small devices to open and close the menu. The form handler
 * demonstrates client‑side behaviour on submission without any backend.
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('nav ul');

  // Toggle the navigation on small screens
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  // Smooth scroll to anchor targets and close the mobile menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const targetId = anchor.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        event.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        navList.classList.remove('active');
      }
    });
  });

  // Simple feedback for the contact form (no backend integration)
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    contactForm.reset();
  });

  // Scroll reveal animations
  // Use an IntersectionObserver to watch all elements with the 'scroll-reveal'
  // class.  When an element scrolls into view, the observer adds the 'show'
  // class to trigger the CSS transition defined in style.css.  Once
  // revealed, the element is unobserved to avoid unnecessary callbacks.
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
});
