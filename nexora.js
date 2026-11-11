/* =====================================================
   NEXORA JS
   Version: 1.1.0
   Optional interactions for the Nexora CSS Framework
   No dependencies. ~2 KB.
   ===================================================== */

(function () {
  'use strict';

  /* ===================================================
     1. MOBILE NAVIGATION
     =================================================== */

  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links  = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    function setOpen(open) {
      links.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'close menu' : 'open menu');
    }

    toggle.addEventListener('click', () => {
      setOpen(!links.classList.contains('is-open'));
    });

    links.addEventListener('click', (e) => {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });

    document.addEventListener('click', (e) => {
      if (!links.contains(e.target) && !toggle.contains(e.target)) {
        setOpen(false);
      }
    });
  }

  /* ===================================================
     2. ACTIVE NAV LINK
     =================================================== */

  function initActiveLink() {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    const links = document.querySelectorAll('.nav-links a[href]');

    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http')) return;

      const normalized = href.replace(/\/$/, '');
      if (normalized === path) link.classList.add('active');
    });
  }

  /* ===================================================
     3. FORM FEEDBACK
     =================================================== */

  function initFormFeedback() {
    const forms = document.querySelectorAll('[data-nexora-form]');

    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
          form.classList.remove('is-success');
          form.classList.add('is-error');
          return;
        }

        form.classList.remove('is-error');
        form.classList.add('is-success');

        setTimeout(() => {
          form.classList.remove('is-success');
          form.reset();
        }, 2000);
      });
    });
  }

  /* ===================================================
     4. INIT
     =================================================== */

  function init() {
    initMobileNav();
    initActiveLink();
    initFormFeedback();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
