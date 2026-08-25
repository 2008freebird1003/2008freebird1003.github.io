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

const flightTrigger = document.querySelector('.interest-trigger');
const flightDialog = document.querySelector('#flight-story');
const flightDialogClose = document.querySelector('.story-close');

flightTrigger?.addEventListener('click', () => {
  if (typeof flightDialog?.showModal === 'function') {
    flightDialog.showModal();
  } else {
    flightDialog?.setAttribute('open', '');
  }
});

flightDialogClose?.addEventListener('click', () => flightDialog?.close());

flightDialog?.addEventListener('click', (event) => {
  if (event.target === flightDialog) flightDialog.close();
});

flightDialog?.addEventListener('close', () => flightTrigger?.focus());
