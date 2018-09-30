$(document).ready(() => {
  page('/', home);
  page('/movies', moviePage);
  page('/tv', tvPage);
  page('/books', bookPage);
  page('/games', gamePage);
  page('/contact', contactPage);
  page();
})

function home() {
  requestToken();
  $('main').html(renderHome());
};

function moviePage() {
  getMovieQuiz();
  let category = 'Movie';
  $('main').html(renderGameStartTemplate(category));
};

function tvPage() {
  getTvQuiz();
  let category = 'Tv';
  $('main').html(renderGameStartTemplate(category));
};

function bookPage() {
  getBookQuiz();
  let category = 'Literature';
  $('main').html(renderGameStartTemplate(category));
};

function gamePage() {
  getGameQuiz();
  let category = 'Game';
  $('main').html(renderGameStartTemplate(category));
};

function contactPage() {
  $('main').html(renderContact());
};