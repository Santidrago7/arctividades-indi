const cards = document.querySelectorAll('.feature-card, .result-card, .download-card, .intro-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

cards.forEach(card => observer.observe(card));
