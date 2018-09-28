$(document).ready(function(){
  // $('main').on('click', '#show-signup-modal', showSignUpModal);
})

const renderHome = () => {
  return `
  <div class="quiz-container">
    <h1>NerdQuiz</h1>
    <h4>Regras:</h4>
    <p>O jogo contém 15 perguntas de graus de dificuldade diferentes. São 5 perguntas de nível fácil, 5 de nível médio e 5 de nível difícil. Será que você é capaz de adivinhar todas e se consagrar um nerd de carteirinha?</p>
    <p>Para jogar, clique na categoria desejada no menu. Que a força esteja com você!</p>
  </div>
  `
}

const renderMovieQuiz = () => {
  $.ajax({
    url: 'https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple'
  }).done(handleResponse);
}

const renderTvQuiz = () => {
  $.ajax({
    url: 'https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple'
  }).done(handleResponse);
}

const renderBookQuiz = () => {
  $.ajax({
    url: 'https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple'
  }).done(handleResponse);
}

const renderGameQuiz = () => {
  $.ajax({
    url: 'https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple'
  }).done(handleResponse);
}

const handleResponse = (data) => {
  let triviaData = data['results'];

  showQuestions(triviaData);
}

const showQuestions = (data) => {
  $('main').empty();

  for (i = 0; i < 6; i++) {
    let question = data[i]['question'];
    let answer = data[i]['correct_answer'];
    let optOne = data[i]['incorrect_answers'][0];
    let optTwo = data[i]['incorrect_answers'][1];
    let optThree = data[i]['incorrect_answers'][2];

    let answerRoll = [answer, optOne, optTwo, optThree];

    let template = `
      <div class="question-container">
        <h3>${question}</h3>
        <div class="option" data-option="one">
          <span>${answerRoll[0]}</span> 
        </div>
        <div class="option" data-option="two">
          <span>${answerRoll[1]}</span> 
        </div>
        <div class="option" data-option="three">
          <span>${answerRoll[2]}</span> 
        </div>
        <div class="option" data-option="four">
          <span>${answerRoll[3]}</span> 
        </div>
      </div>
    `

    $('main').append(template);
  }
}
