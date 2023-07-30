import app from './global/app';

const openModal = document.getElementById(app.ABOUT_LINK_A_ELEMENT_ID);
const backdropModal = document.getElementById(
  app.ABOUT_WINDOW_BACKDROP_DIV_ELEMENT_ID
);
const closeModal = document.getElementById('about-window-close');

openModal.addEventListener('click', function (e) {
  e.preventDefault();
  backdropModal.style.display = 'block';
});

closeModal.addEventListener('click', function () {
  backdropModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === backdropModal) {
    backdropModal.style.display = 'none';
  }
});

document.addEventListener('keydown', function (ev) {
  if (ev.key === 'Escape') {
    backdropModal.style.display = 'none';
  }
});
