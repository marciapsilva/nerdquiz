$(document).ready(function(){
  $('main').on('click', '.option', selectAnswer);
  $('main').on('click', '.start-game', startGame);
  $('main').on('click', '.play-again', () => {
    getMovieQuiz();
    $('main').html(renderGameStartTemplate());
  });
})

let score = 0;

const getMovieQuiz = () => {
  $.ajax({
    url: 'https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple'
  }).done(handleResponse);
}

const getTvQuiz = () => {
  $.ajax({
    url: 'https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple'
  }).done(handleResponse);
}

const getBookQuiz = () => {
  $.ajax({
    url: 'https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple'
  }).done(handleResponse);
}

const getGameQuiz = () => {
  $.ajax({
    url: 'https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple'
  }).done(handleResponse);
}

let quizData;
const handleResponse = data => {
  quizData = data['results'];
}

const startGame = () => {
  score = 0;
  $('main').empty();

  let i = 0;
  let question = quizData[i]['question'];
  let answer = quizData[i]['correct_answer'];
  let optOne = quizData[i]['incorrect_answers'][0];
  let optTwo = quizData[i]['incorrect_answers'][1];
  let optThree = quizData[i]['incorrect_answers'][2];
  let questionNumber = i;

  let answerRoll = [answer, optOne, optTwo, optThree];
  let shuffledAnswered = shuffle(answerRoll);

  insertTemplate(questionNumber, question, shuffledAnswered);
  countdown();
  i++;

  nextQuestions(i);
}

const nextQuestions = (i) => { 
  let teste2 = setInterval(() => {
    let question = quizData[i]['question'];
    let answer = quizData[i]['correct_answer'];
    let optOne = quizData[i]['incorrect_answers'][0];
    let optTwo = quizData[i]['incorrect_answers'][1];
    let optThree = quizData[i]['incorrect_answers'][2];
    let questionNumber = i;

    let answerRoll = [answer, optOne, optTwo, optThree];
    let shuffledAnswered = shuffle(answerRoll);

    insertTemplate(questionNumber, question, shuffledAnswered);
    countdown();

    i++;

    if (i === 5) { 
      clearInterval(teste2);
      showScore();
    }
  }, 6000);
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
  $('main').html(questionTemplate(questionNumber, question, shuffledAnswered));
  $('main .question-container').css('border', 'none');
}

function countdown() {
  var width = 100;
  var id = setInterval(frame, 48);

  function frame() {
      if (width === 0) {
          clearInterval(id);
      } else {
          width -= 1;
          $('main #timer').css('width', `${width}%`);
      }
  }
} 

const selectAnswer = (e) => {
  const clickTarget = e.target;
  let userAnswer = $(clickTarget).text();

  $(clickTarget).addClass('selected-answer');

  if (userAnswer === quizData[$(clickTarget).attr('data-question-number')].correct_answer) {
    $('main .question-container').css('border', '4px solid green');
    score += 1;
  } else {
    $('main .question-container').css('border', '4px solid red');
  }
}

const showScore = () => {
  return $('main').html(scoreTemplate(score));
}