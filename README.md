# nexora

a tiny css framework for minimal company sites.

light-first, automatic dark mode, no build step, no dependencies.

**docs & live preview:** https://xr7-code.github.io/Nexora-Minimal-CSS-Framework/

---

## install

### cdn (jsdelivr)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Xr7-Code/Nexora-Minimal-CSS-Framework@main/framework.css">
```

### github pages

```html
<link rel="stylesheet" href="https://xr7-code.github.io/Nexora-Minimal-CSS-Framework/framework.css">
```

### local

```html
<link rel="stylesheet" href="./framework.css">
```

> don't use the `raw.githubusercontent.com` url. github serves it as
> `text/plain` and browsers block it.

### optional js

```html
<script src="https://cdn.jsdelivr.net/gh/Xr7-Code/Nexora-Minimal-CSS-Framework@main/nexora.js" defer></script>
```

---

## what's inside

- design tokens (colors, spacing, type, radii, shadows)
- automatic dark mode via `prefers-color-scheme`
- navbar, hero, cards, grids, forms, faq, stats, testimonials, cta, footer
- responsive by default (`auto-fit` / `minmax`)
- accessible: skip-link, focus rings, `prefers-reduced-motion`, `sr-only`
- tiny js for mobile nav + active links + form feedback

---

## quick start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>my site</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Xr7-Code/Nexora-Minimal-CSS-Framework@main/framework.css">
</head>
<body>
  <a href="#main" class="skip-link">skip to content</a>

  <header class="navbar">
    <div class="container nav-inner">
      <a href="/" class="logo">brand<span>.</span></a>
      <button class="nav-toggle" aria-label="menu" aria-expanded="false">☰</button>
      <nav class="nav-links" aria-label="main">
        <a href="#features">features</a>
        <a href="#contact">contact</a>
      </nav>
      <a href="#contact" class="btn btn-primary btn-small">get started</a>
    </div>
  </header>

  <main id="main">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>hello.</h1>
          <p class="lead">a minimal site in 10 lines.</p>
          <div class="hero-actions">
            <a href="#" class="btn btn-primary">start</a>
            <a href="#" class="btn btn-outline">docs</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-inner">
      <p>© 2026</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/gh/Xr7-Code/Nexora-Minimal-CSS-Framework@main/nexora.js" defer></script>
</body>
</html>
```

---

## components

- layout: `.container`, `.container-narrow`, `.section`, `.section-sm`, `.section-heading`
- nav: `.navbar`, `.nav-inner`, `.nav-links`, `.nav-toggle`, `.logo`
- buttons: `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.btn-small`, `.btn-block`
- grid: `.grid`, `.grid-2`, `.grid-3`, `.grid-4`
- cards: `.card`, `.card-icon`
- forms: `.form`, `.form-row`, `.field`, `.label`, `.input`, `.textarea`, `.select`
- faq: `.faq`, `.faq-item` (native `<details>`)
- stats: `.stats`, `.stat-value`, `.stat-label`
- testimonials: `.testimonial`, `.testimonial-quote`, `.testimonial-author`
- cta: `.cta`
- footer: `.footer`, `.footer-inner`, `.footer-links`
- utils: `.text-muted`, `.text-accent`, `.text-center`, `.flex`, `.flex-col`, `.items-center`, `.justify-between`, `.gap-2/3/4`, `.mt-0/4/6`, `.mb-4/6`, `.hidden`, `.sr-only`, `.divider`

full examples on the docs page.

---

## theming

override tokens in your own css **after** the framework link:

```css
:root {
  --color-primary: #0066ff;
  --color-primary-hover: #0052cc;
  --color-primary-soft: #e6f0ff;
  --container-width: 1280px;
}
```

dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #66a3ff;
    --color-on-primary: #000;
  }
}
```

---

## browser support

latest chrome, firefox, safari, edge. no ie.

---

## license

mit
