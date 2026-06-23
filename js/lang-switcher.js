const langSwitcher = document.getElementById('langSwitcher');
const langToggle = document.getElementById('langToggle');
const langDropdown = document.getElementById('langDropdown');

const openSwitcher = () => {
  langDropdown.classList.add('is-open');
  langToggle.setAttribute('aria-expanded', 'true');
};

const closeSwitcher = () => {
  langDropdown.classList.remove('is-open');
  langToggle.setAttribute('aria-expanded', 'false');
};

langToggle.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = langDropdown.classList.contains('is-open');
  isOpen ? closeSwitcher() : openSwitcher();
});

document.addEventListener('click', e => {
  if (!langSwitcher.contains(e.target)) {
    closeSwitcher();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSwitcher();
});
