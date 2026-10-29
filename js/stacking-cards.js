(() => {
  const main = document.querySelector('main');
  const sections = main ? Array.from(main.children).filter(
    (child) => child.matches('section')
  ) : [];
  const hero = sections[0];
  const cover = sections[1];
  const desktopViewport = window.matchMedia(
    '(min-width: 1024px) and (min-height: 760px) and (pointer: fine)'
  );
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const supportsSticky =
    window.CSS && window.CSS.supports('position', 'sticky');
  let wrapper = null;
  let animationFrame = 0;
  let enabled = false;

  if (!hero || !hero.matches('.hero-section') || !cover || !supportsSticky) {
    return;
  }

  const updateHero = () => {
    animationFrame = 0;
    const coverTop = cover.getBoundingClientRect().top;
    const progress = Math.max(
      0,
      Math.min(1, 1 - coverTop / window.innerHeight)
    );
    hero.style.setProperty(
      '--stack-scale',
      (1 - progress * 0.05).toFixed(3)
    );
    hero.style.setProperty('--stack-overlay', (progress * 0.28).toFixed(3));
  };

  const requestHeroUpdate = () => {
    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(updateHero);
    }
  };

  const setEnabled = (shouldEnable) => {
    if (enabled === shouldEnable) {
      return;
    }

    enabled = shouldEnable;
    document.body.classList.toggle('stacking-enabled', enabled);

    if (enabled) {
      wrapper = document.createElement('div');
      wrapper.className = 'stacking-intro';
      main.insertBefore(wrapper, hero);
      wrapper.append(hero, cover);
      requestHeroUpdate();
      return;
    }

    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
    if (wrapper) {
      main.insertBefore(hero, wrapper);
      main.insertBefore(cover, wrapper);
      wrapper.remove();
      wrapper = null;
    }
    hero.style.removeProperty('--stack-scale');
    hero.style.removeProperty('--stack-overlay');
  };

  const syncMotionMode = () => {
    setEnabled(desktopViewport.matches && !reducedMotion.matches);
  };

  window.addEventListener('scroll', requestHeroUpdate, { passive: true });
  window.addEventListener('resize', () => {
    syncMotionMode();
    if (enabled) {
      requestHeroUpdate();
    }
  });
  desktopViewport.addEventListener('change', syncMotionMode);
  reducedMotion.addEventListener('change', syncMotionMode);
  syncMotionMode();
})();
