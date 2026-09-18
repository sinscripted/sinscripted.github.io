document.querySelectorAll('#year').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  document.documentElement.classList.add('motion-ok');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
}

// GoatCounter analytics for Sinscripted.
// Loaded here once so every page using /js/site.js is tracked automatically.
const goatCounterScript = document.createElement('script');
goatCounterScript.dataset.goatcounter = 'https://sinscripted.goatcounter.com/count';
goatCounterScript.async = true;
goatCounterScript.src = 'https://gc.zgo.at/count.js';
document.head.appendChild(goatCounterScript);
