page('/', home);
page('/movies', moviePage);
page('/tv', tvPage);
page('/books', bookPage);
page('/games', gamePage);
// page('/ranking', rankingPage);
// page('/contact', contactPage);
page();

$(document).ready(function(){
})

function home() {
  $('main').html(renderHome());
};

function moviePage() {
  getMovieQuiz();
  $('main').html(renderGameStartTemplate());
};

function tvPage() {
  getTvQuiz();
  $('main').html(renderGameStartTemplate());
};

function bookPage() {
  getBookQuiz();
  $('main').html(renderGameStartTemplate());
};

function gamePage() {
  getGameQuiz();
  $('main').html(renderGameStartTemplate());
};

// function rankingPage() {
//   renderRanking();
// };

// function contactPage() {
//   renderContact();
// };