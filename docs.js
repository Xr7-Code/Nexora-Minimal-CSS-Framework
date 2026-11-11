/* =====================================================
   NEXORA DOCS — page logic
   copy buttons, scroll spy, smooth anchor scroll
   ===================================================== */

(function () {
  'use strict';

  /* ---------- copy buttons ---------- */

  function initCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const codeBlock = btn.closest('.code');
        if (!codeBlock) return;
        const pre = codeBlock.querySelector('pre');
        if (!pre) return;

        const text = pre.textContent;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
          } else {
            // fallback for file:// or older browsers
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
          }

          const original = btn.textContent;
          btn.textContent = 'copied';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = original;
            btn.classList.remove('copied');
          }, 1500);
        } catch (err) {
          console.error('copy failed', err);
          btn.textContent = 'error';
        }
      });
    });
  }

  /* ---------- scroll spy for sidebar ---------- */

  function initScrollSpy() {
    const sections = document.querySelectorAll('.docs-section[id]');
    const links = document.querySelectorAll('.docs-sidebar a[href^="#"]');
    if (!sections.length || !links.length) return;

    const map = new Map();
    links.forEach((link) => {
      const id = link.getAttribute('href').slice(1);
      map.set(id, link);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link = map.get(entry.target.id);
          if (!link) return;
          links.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* ---------- smooth scroll offset for sticky nav ---------- */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href').slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();

        const navH = document.querySelector('.navbar')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });

        // update url without jumping
        history.pushState(null, '', '#' + id);
      });
    });
  }

  /* ---------- init ---------- */

  function init() {
    initCopyButtons();
    initScrollSpy();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
