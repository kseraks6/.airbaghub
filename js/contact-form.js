const contactForm = document.querySelector('#contactForm');

if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const status = document.querySelector('#contactFormStatus');

    if (status) {
      status.textContent =
        'Новые заявки на ремонт сейчас не принимаются. Форма не отправлена.';
    }
  });
}
