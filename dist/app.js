$(document).ready(function(){
  $('main').on('click', '.option', selectAnswer);
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

const handleResponse = data => {
  let triviaData = data['results'];

  showQuestions(triviaData);
}

const showQuestions = (triviaData) => {
  $('main').empty();

  for (i = 0; i < 6; i++) {
    setDelay(i, triviaData);
  }
}

function setDelay(i, triviaData) {
  setTimeout(function(){
    let question = triviaData[i]['question'];
    let answer = triviaData[i]['correct_answer'];
    let optOne = triviaData[i]['incorrect_answers'][0];
    let optTwo = triviaData[i]['incorrect_answers'][1];
    let optThree = triviaData[i]['incorrect_answers'][2];
    let questionNumber = i;

    let answerRoll = [answer, optOne, optTwo, optThree];
    let shuffledAnswered = shuffle(answerRoll);

    insertTemplate(questionNumber, question, shuffledAnswered);
  }, i*6000);
    // countdown();
}

const shuffle = array => {
  let counter = array.length;

  while (counter > 0) {
      let randomNumb = Math.floor(Math.random() * counter);

      counter--
      
      let temp = array[counter];
      array[counter] = array[randomNumb];
      array[randomNumb] = temp;
  }
  return array;
}

const insertTemplate = (questionNumber, question, shuffledAnswered) => {
  let template = `
    <div class="question-container">
      <div class="timer-bar">
        <div class="timer" id="timer"></div>
      </div>
      <h3>${question}</h3>
      <div class="option" data-option="one" data-question-number="${questionNumber}">
        <span>${shuffledAnswered[0]}</span> 
      </div>
      <div class="option" data-option="two" data-question-number="${questionNumber}">
        <span>${shuffledAnswered[1]}</span> 
      </div>
      <div class="option" data-option="three" data-question-number="${questionNumber}">
        <span>${shuffledAnswered[2]}</span> 
      </div>
      <div class="option" data-option="four" data-question-number="${questionNumber}">
        <span>${shuffledAnswered[3]}</span> 
      </div>
    </div>
  `

  $('main').html(template);
}

// const countdown = () => {
//   let width = 100;
//   let id = setInterval(frame, 60);

//   function frame() {
//     while (width !== 0) {
//       width--;
//       console.log(width);
//       $('#timer').width(`${width}%`); 
//     }
//   }
// }

const selectAnswer = (e) => {
  const clickTarget = e.target;
  
  $(clickTarget).addClass('selected-answer');
}