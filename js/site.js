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

// Story sharing.
// Adds a "Share story" button to story pages that use the standard final-question block.
// Phones/tablets use the native share sheet when available; otherwise the story link is copied.
const shareActions = document.querySelector('.final-question .card-actions.centered');

if (shareActions && !shareActions.querySelector('[data-share-story]')) {
  const shareButton = document.createElement('button');
  shareButton.type = 'button';
  shareButton.className = 'button ghost';
  shareButton.dataset.shareStory = '';
  shareButton.textContent = 'Share story';
  shareButton.setAttribute('aria-label', 'Share this story');
  shareButton.style.fontFamily = 'inherit';
  shareButton.style.cursor = 'pointer';

  shareActions.prepend(shareButton);

  const copyStoryLink = async (url) => {
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
      return true;
    }

    const helper = document.createElement('textarea');
    helper.value = url;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();

    let copied = false;
    try {
      copied = document.execCommand('copy');
    } finally {
      helper.remove();
    }

    return copied;
  };

  shareButton.addEventListener('click', async () => {
    const title =
      document.querySelector('meta[property="og:title"]')?.content ||
      document.title;

    const text =
      document.querySelector('meta[property="og:description"]')?.content ||
      '';

    const url =
      document.querySelector('meta[property="og:url"]')?.content ||
      window.location.href.split('#')[0];

    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        return;
      }

      const copied = await copyStoryLink(url);
      if (copied) {
        const original = shareButton.textContent;
        shareButton.textContent = 'Link copied ✓';
        setTimeout(() => {
          shareButton.textContent = original;
        }, 1800);
      } else {
        window.prompt('Copy this story link:', url);
      }
    } catch (error) {
      if (error?.name === 'AbortError') return;

      try {
        const copied = await copyStoryLink(url);
        if (copied) {
          const original = shareButton.textContent;
          shareButton.textContent = 'Link copied ✓';
          setTimeout(() => {
            shareButton.textContent = original;
          }, 1800);
        } else {
          window.prompt('Copy this story link:', url);
        }
      } catch {
        window.prompt('Copy this story link:', url);
      }
    }
  });
}

// GoatCounter analytics for Sinscripted.
// Loaded here once so every page using /js/site.js is tracked automatically.
const goatCounterScript = document.createElement('script');
goatCounterScript.dataset.goatcounter = 'https://sinscripted.goatcounter.com/count';
goatCounterScript.async = true;
goatCounterScript.src = 'https://gc.zgo.at/count.js';
document.head.appendChild(goatCounterScript);
