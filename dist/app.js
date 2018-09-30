$(document).ready(function(){
  $('main').on('click', '.option', selectAnswer);
  $('main').on('click', '.start-game', startGame);
  $('main').on('click', '#send-message', sentMessageConfirmation);
  $('.quit-test').on('click', stopStuff);
})

const requestToken = () => {
  $.ajax({
    url: 'https://opentdb.com/api_token.php?command=request'
  }).done(handleTokenResponse);
}

const getMovieQuiz = () => {
  console.log(token);
  $.ajax({
    url: `https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple&token=${token}`
  }).done(handleQuizResponse);
}

const getTvQuiz = () => {
  console.log(token);
  $.ajax({
    url: `https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple&token=${token}`
  }).done(handleQuizResponse);
}

const getBookQuiz = () => {
  console.log(token);
  $.ajax({
    url: `https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple&token=${token}`
  }).done(handleQuizResponse);
}

const getGameQuiz = () => {
  console.log(token);
  $.ajax({
    url: `https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple&token=${token}`
  }).done(handleQuizResponse);
}

let quizData;
const handleQuizResponse = data => {
  quizData = data['results'];
}

let token;
const handleTokenResponse = data => {
  if (data['response_code'] === 4 || data['response_code'] === 1) {
    requestToken();
  } else {
    token = data['token'];
  }
}

let score = 0;
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

var interval = null;    
const nextQuestions = (i) => { 
  interval = setInterval(() => {
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
      stopStuff();
      setTimeout(() => {showScore()}, 10000);
    }
  }, 10000);
}

const stopStuff = () => {
  clearInterval(interval);
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
  $('main').html(renderQuestionTemplate(questionNumber, question, shuffledAnswered));
  $('main .question-container').css('border', 'none');
}

function countdown() {
  var width = 100;
  var id = setInterval(frame, 100);

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

  if (!$(clickTarget).hasClass('disabled')) { 
    $(clickTarget).addClass('selected-answer');

    if (userAnswer === quizData[$(clickTarget).attr('data-question-number')].correct_answer) {
      $('main .question-container').css('border', '4px solid green');
      score += 1;
    } else {
      $('main .question-container').css('border', '4px solid red');
    }
  }

  $('main .option').map(index => {
    if (!$(`main .option:eq(${index})`).hasClass('selected-answer')) {
      $(`main .option:eq(${index})`).addClass('disabled');
    }
  })
}

const showScore = () => {
  return $('main').html(renderScoreTemplate(score));
}

const sentMessageConfirmation = () => {
  return $('main').html(renderSentMessageConfirmation());
}