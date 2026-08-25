const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const setupDialog = (triggerSelector, dialogSelector, closeSelector) => {
  const trigger = document.querySelector(triggerSelector);
  const dialog = document.querySelector(dialogSelector);
  const closeButton = dialog?.querySelector(closeSelector);

  trigger?.addEventListener('click', () => {
    if (typeof dialog?.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog?.setAttribute('open', '');
    }
  });

  closeButton?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener('close', () => trigger?.focus());
};

setupDialog('.story-trigger', '#flight-story', '.story-close');
setupDialog('.gallery-trigger', '#aeromodel-gallery', '.gallery-close');
