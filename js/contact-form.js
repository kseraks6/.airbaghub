const contactForm = document.querySelector('#contactForm');

if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const status = document.querySelector('#contactFormStatus');

    if (status instanceof HTMLElement) {
      const messages = {
        en: 'We are not accepting new repair requests right now. Your message has not been sent.',
        uk: 'Наразі ми не приймаємо нові заявки на ремонт. Повідомлення не надіслано.',
        ru: 'Новые заявки на ремонт сейчас не принимаются. Сообщение не отправлено.',
      };

      status.textContent =
        messages[document.documentElement.lang] ?? messages.ru;
    }
  });
}
