page('/', home);
page('/movies', moviePage);
page('/tv', tvPage);
page('/books', bookPage);
page('/games', gamePage);
page('/ranking', rankingPage);
page('/contact', contactPage);
page();

$(document).ready(function(){

})

function home() {
  $('main').html(renderHome());
};

function moviePage() {
  renderMovieQuiz();
};

function tvPage() {
  renderTvQuiz();
};

function bookPage() {
  renderBookQuiz();
};

function gamePage() {
  renderGameQuiz();
};

function rankingPage() {
  renderRanking();
};

function contactPage() {
  renderContact();
};
