$(document).ready(() => {
  page('/', home);
  page('/movies', moviePage);
  page('/tv', tvPage);
  page('/books', bookPage);
  page('/games', gamePage);
  page('/contact', contactPage);
  page();

  requestToken();
})

function home() {
  $('main').html(renderHome());
}

function moviePage() {
  const category = 'Movie';
  const categoryId = '11';
  getQuizData(categoryId);
  $('main').html(renderGameStartTemplate(category));
}

function tvPage() {
  const category = 'Tv';
  const categoryId = '14';
  getQuizData(categoryId);
  $('main').html(renderGameStartTemplate(category));
}

function bookPage() {
  const category = 'Literature';
  const categoryId = '10';
  getQuizData(categoryId);
  $('main').html(renderGameStartTemplate(category));
}

function gamePage() {
  const category = 'Game';
  const categoryId = '15';
  getQuizData(categoryId);
  $('main').html(renderGameStartTemplate(category));
}

function contactPage() {
  $('main').html(renderContact());
}