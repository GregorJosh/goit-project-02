import app from './global/app';

const paginationDiv = document.querySelector('div.pagination');

function onPaginationDivClick(event) {
  const elementWhichWasClicked = event.target;
  if (elementWhichWasClicked.nodeName === 'BUTTON') {
    const buttonId = elementWhichWasClicked.id;

    if (buttonId === 'left-btn') {
      if (app.currentPage > 1) {
        app.currentPage -= 1;
      }
    } else if (buttonId === 'right-btn') {
      if (app.currentPage < app.totalPages - 1) {
        app.currentPage += 1;
      }
    } else {
      app.currentPage = elementWhichWasClicked.value;
    }

    console.log('current page: ' + app.currentPage);

    if (app.currentKeyword) {
      app.getMoviesByKeyWord(app.currentKeyword, app.currentPage);
    } else {
      app.getMoviesTodayTrends(app.currentPage);
    }
  }
}

paginationDiv.addEventListener('click', onPaginationDivClick);
