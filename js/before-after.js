document.querySelectorAll('.works-section__slider').forEach((slider) => {
  const comparison = slider.closest('.works-section__comparison');

  if (!(comparison instanceof HTMLElement)) {
    return;
  }

  const updateComparison = () => {
    comparison.style.setProperty(
      '--comparison-position',
      `${slider.value}%`,
    );
  };

  slider.addEventListener('input', updateComparison);
  updateComparison();
});
