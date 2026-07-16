/* ============================================================
   ANIMATIONS — Scroll-triggered fade-in animations (manual AOS-lite)
   ============================================================ */

(function setupAnimations() {
  'use strict';

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // If reduced motion, make all elements visible immediately
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.classList.add('aos-visible');
    });
    return;
  }

  // IntersectionObserver for scroll-triggered animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-visible');
        // Unobserve after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });

  // Store setup function globally for content-renderer.js
  window.setupAOS = function() {
    document.querySelectorAll('[data-aos]:not(.aos-visible)').forEach(el => {
      observer.observe(el);
    });
  };

  // Re-check reduced motion preference if it changes
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    if (e.matches) {
      document.querySelectorAll('[data-aos]').forEach(el => {
        el.classList.add('aos-visible');
      });
      observer.disconnect();
    }
  });
})();
