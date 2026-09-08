/* ==========================================================================
   MOBILE NAV TOGGLE
   ========================================================================== */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   ACTIVE NAV LINK ON SCROLL
   Highlights the nav link matching whichever section is in view.
   ========================================================================== */
(function initActiveNavLink() {
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');
  if (!sections.length || !navAnchors.length) return;

  const linkFor = (id) =>
    document.querySelector(`.nav__links a[href="#${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = linkFor(entry.target.id);
          if (!link) return;
          navAnchors.forEach((a) => a.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
})();

/* ==========================================================================
   BACKGROUND PARTICLE NETWORK
   One quiet, orchestrated ambient animation behind the whole page —
   slow-drifting nodes with connecting lines, subtle enough not to compete
   with content. Respects prefers-reduced-motion.
   ========================================================================== */
(function initNetworkBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width, height, particles;
  const PARTICLE_COUNT_DIVISOR = 14000; // lower = more particles
  const MAX_LINK_DISTANCE = 150;
  const SPEED = 0.15;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(120, Math.floor((width * height) / PARTICLE_COUNT_DIVISOR));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: Math.random() * 1.4 + 0.6,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    // draw links first (so nodes sit on top)
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_LINK_DISTANCE) {
          const opacity = (1 - dist / MAX_LINK_DISTANCE) * 0.18;
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // draw nodes
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(148, 160, 189, 0.55)';
      ctx.fill();
    });

    if (!prefersReducedMotion) {
      requestAnimationFrame(step);
    }
  }

  window.addEventListener('resize', resize);
  resize();
  step(); // draw at least one static frame even if motion is reduced
})();