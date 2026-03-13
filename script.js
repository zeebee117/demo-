const navLinks = [...document.querySelectorAll('.js-scroll')];
const navMenu = document.querySelector('.nav-links');
const navToggle = document.querySelector('.nav-toggle');
const sections = [...document.querySelectorAll('main section[id]')];
const revealNodes = [...document.querySelectorAll('[data-reveal]')];
const cubeScene = document.querySelector('.cube-scene');
const heroVisual = document.querySelector('.hero-visual');
const siteHeader = document.querySelector('.site-header');
const parallaxNodes = [...document.querySelectorAll('[data-parallax]')];
const tiltCards = [...document.querySelectorAll('.js-tilt')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const closeMobileMenu = () => {
  if (!siteHeader || !navToggle) return;
  siteHeader.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
};

if (navToggle && siteHeader) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!siteHeader.contains(target)) {
      closeMobileMenu();
    }
  });
}

revealNodes.forEach((node, index) => {
  node.style.setProperty('--reveal-delay', `${(index % 7) * 65}ms`);
});

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');

    if (targetId === '#home' || targetId === '#top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      closeMobileMenu();
      return;
    }

    const target = document.querySelector(targetId);
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    closeMobileMenu();
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('is-active', isCurrent);
        });
      }
    });
  },
  {
    threshold: 0.42,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -8% 0px',
  }
);

revealNodes.forEach((node) => revealObserver.observe(node));

const updateHeaderState = () => {
  if (!siteHeader) return;
  const scrolled = window.scrollY > 20;
  siteHeader.classList.toggle('is-scrolled', scrolled);

  if (window.scrollY <= 24) {
    navLinks.forEach((link) => {
      const isHome = link.getAttribute('href') === '#top';
      link.classList.toggle('is-active', isHome);
    });
  }
};

updateHeaderState();

window.addEventListener('scroll', () => {
  updateHeaderState();

  if (reduceMotion) return;
  const y = window.scrollY;
  parallaxNodes.forEach((node) => {
    const speed = Number(node.dataset.parallax || 0);
    node.style.transform = `translate3d(0, ${y * speed}px, 0)`;
  });
}, { passive: true });

window.addEventListener('resize', () => {
  if (window.innerWidth > 840) {
    closeMobileMenu();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
});

if (!reduceMotion) {
  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const tiltY = (x - 0.5) * 10;
      const tiltX = (0.5 - y) * 10;

      card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', '3deg');
      card.style.setProperty('--tilt-y', '-3deg');
    });
  });
}

if (cubeScene) {
  window.addEventListener('mousemove', (event) => {
    const xRatio = (event.clientX / window.innerWidth - 0.5) * 2;
    const yRatio = (event.clientY / window.innerHeight - 0.5) * 2;
    if (heroVisual) {
      heroVisual.style.setProperty('--cube-glow-x', `${(xRatio * 14).toFixed(2)}px`);
      heroVisual.style.setProperty('--cube-glow-y', `${(yRatio * 10).toFixed(2)}px`);
    }
  });
}
