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
  const category = 'movie';
  const categoryId = '11';
  getQuizData(categoryId);
  $('main').html(renderGameStartTemplate(category));
}

function tvPage() {
  const category = 'tv';
  const categoryId = '14';
  getQuizData(categoryId);
  $('main').html(renderGameStartTemplate(category));
}

function bookPage() {
  const category = 'book';
  const categoryId = '10';
  getQuizData(categoryId);
  $('main').html(renderGameStartTemplate(category));
}

function gamePage() {
  const category = 'game';
  const categoryId = '15';
  getQuizData(categoryId);
  $('main').html(renderGameStartTemplate(category));
}

function contactPage() {
  $('main').html(renderContact());
}