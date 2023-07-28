import app from './global/app';

app.apiTest('search-form.js');

const formError = document.querySelector('.FormError');
const formInput = document.querySelector('.FormInput');
const formSearch = document.querySelector('.FormSearch');

formError.style.display = 'none';

onSearchFailed();

function onSearchFailed() {
  formSearch.addEventListener('submit', event => {
    event.preventDefault();

    if (formInput.value.length === 0) {
      formError.style.display = 'block';
    } else {
      formError.style.display = 'none';
    }

    return;
  });
}
