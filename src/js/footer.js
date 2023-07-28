import app from './global/app';

const openAboutWindow = document.getElementById('about-us');
const closeAboutWindow = document.getElementById('about-window-close');
const backdropAboutWindow = document.getElementById('about-window-backdrop');

openAboutWindow.addEventListener('click', openModal);
closeAboutWindow.addEventListener('click', closeModal);
backdropAboutWindow.addEventListener('keydown', closeModal);
backdropAboutWindow.addEventListener('click', escapeModal);

const closeModal = () => {
  document.removeEventListener('keydown', escapeModal);
  document.removeEventListener('click', closeModal);
  backdropAboutWindow.classList.add('hidden');
};

const openModal = () => {
  backdropAboutWindow.classList.remove('idden');
};

const escapeModal = e => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

app.apiTest('footer.js');
