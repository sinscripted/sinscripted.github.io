document.querySelectorAll('#year').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

// Respect reduced-motion preferences while keeping future animation hooks safe.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  document.documentElement.classList.add('motion-ok');
}
