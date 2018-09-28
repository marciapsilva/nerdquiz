page('/', home);
page('/movies', moviePage);
page('/tv', tvPage);
page('/books', bookPage);
page('/games', gamePage);
page();

$(document).ready(function(){
  $('#qmovies').on('click', () => page('/movies'));
  $('#qtelevision').on('click', () => page('/tv'));
  $('#qbooks').on('click', () => page('/books'));
  $('#qgames').on('click', () => page('/games'));
})

function home() {
  $('main').html(renderHome());
}

function moviePage() {renderMovieQuiz()};

function tvPage() {renderTvQuiz()};

function bookPage() {renderBookQuiz()};

function gamePage() {renderGameQuiz()};
