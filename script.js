/* ============================================
   PORTFOLIO — INTERACTIVITY
   ============================================ */

// ─── PARTICLE BACKGROUND ───
(function () {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w, h;
  const particles = [];
  const PARTICLE_COUNT = 80;

  const colors = [
    'rgba(99, 102, 241, ',   // indigo
    'rgba(139, 92, 246, ',   // violet
    'rgba(6, 182, 212, ',    // cyan
    'rgba(168, 162, 255, ',  // soft purple
    'rgba(255, 255, 255, ',  // white
  ];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticle() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 2.5 + 0.5;
    const opacity = Math.random() * 0.6 + 0.15;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      size,
      baseOpacity: opacity,
      opacity,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.01 + 0.005,
    };
  }

  function init() {
    resize();
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += p.pulseSpeed;
      p.opacity = p.baseOpacity + Math.sin(p.pulse) * 0.15;

      // Wrap around viewport
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      // Draw glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = p.color + (p.opacity * 0.2) + ')';
      ctx.fill();

      // Draw core
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.opacity + ')';
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  init();
  animate();
})();

// ─── MAIN PORTFOLIO INTERACTIVITY ───
(function () {
  'use strict';

  // ─── DOM ELEMENTS ───
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const backToTop = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const typewriterEl = document.getElementById('typewriter');

  // ─── TYPEWRITER EFFECT ───
  const titles = [
    'Sistem Informasi Student',
    'Data Science Enthusiast',
    'Web Developer',
    'Problem Solver',
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function typeEffect() {
    const current = titles[titleIndex];

    if (isDeleting) {
      typewriterEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typewriterEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      typeSpeed = 2000; // pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typeSpeed = 400; // pause before next word
    }

    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();

  // ─── NAVBAR SCROLL EFFECT ───
  let lastScroll = 0;

  function handleScroll() {
    const scrollY = window.scrollY;

    // Scrolled class
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Active nav link
    updateActiveLink();

    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ─── ACTIVE NAV LINK ───
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-links a').forEach((a) => a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }

  // ─── MOBILE MENU TOGGLE ───
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ─── BACK TO TOP ───
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── SCROLL REVEAL (IntersectionObserver) ───
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ─── SKILL BAR FILL ANIMATION ───
  const skillFills = document.querySelectorAll('.skill-fill');

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          entry.target.style.width = width + '%';
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillFills.forEach((bar) => skillObserver.observe(bar));

  // (Contact form removed — using direct links instead)

  // ─── SMOOTH SCROLL FOR ALL ANCHOR LINKS ───
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ─── STAGGER REVEAL FOR GRID ITEMS ───
  const staggerContainers = document.querySelectorAll('.skills-grid, .projects-grid');

  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll('.reveal');
    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.1}s`;
    });
  });

  // ─── CERTIFICATION EXPAND / COLLAPSE ───
  document.querySelectorAll('.cert-toggle-btn').forEach(btn => {
    let expanded = false;
    btn.addEventListener('click', () => {
      const grid = document.getElementById(btn.dataset.target);
      if (!grid) return;
      expanded = !expanded;
      grid.querySelectorAll('.cert-hidden').forEach(card => {
        card.classList.toggle('cert-show', expanded);
      });
      btn.classList.toggle('expanded', expanded);
      btn.textContent = expanded
        ? (btn.dataset.labelLess || 'Show Less ▲')
        : (btn.dataset.labelMore || 'Show More ▼');
    });
  });

  // ─── CERT LIGHTBOX (zoom) ───
  const lb = document.getElementById('certLightbox');
  const lbImg = document.getElementById('certLightboxImg');
  const lbClose = document.getElementById('certLightboxClose');

  if (lb && lbImg) {
    document.querySelectorAll('.cert-img, .project-image').forEach(el => {
      el.addEventListener('click', () => {
        const img = el.querySelector('img');
        if (!img) return;
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }

    lb.addEventListener('click', (e) => {
      if (e.target === lb || e.target === lbClose) closeLightbox();
    });
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lb.classList.contains('active')) closeLightbox();
    });
  }
})();
