import app from './global/app';

app.apiTest('keyword.js');

app.getMoviesByKeyWord = async function (keyword) {
  const galleryULElement = document.getElementById(
    app.MOVIE_CARDS_PARENT_ELEMENT_ID
  );

  app.Loading.circle();
  app.currentKeyword = keyword;
  const movies = await app.api.get(
    `search/keyword?query=${keyword}&page=${app.currentPage}`
  );

  Loading.remove();
  if (movies.total_results > 0) {
    const moviesHTML = app.showMovieCards(movies);
    galleryULElement.insertAdjacentHTML('afterbegin', moviesHTML);
    app.onSearchSuccess();
  } else {
    app.onSearchFailed();
  }
};
