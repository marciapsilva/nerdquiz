$(document).ready(() => {
  $('main').on('click', '.start-game', startGame);
  $('main').on('click', '.option', selectAnswer);
  $('.quit-test').on('click', stopQuiz);
  $('main').on('click', '#send-message', sentMessageConfirmation);
});

const requestToken = () => {
  if (localStorage.getItem('nerdquizToken') === null) {
    $.ajax({
      url: 'https://opentdb.com/api_token.php?command=request'
    }).done(handleTokenResponse);
  }
};

const handleTokenResponse = data => {
  localStorage.setItem('nerdquizToken', data['token']); 
};

const localStorageToken = () => {
  return localStorage.getItem('nerdquizToken');
};

const getQuizData = categoryId => {
  $.ajax({
    url: `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=easy&type=multiple&token=${localStorageToken()}`
  }).done(data => handleQuizDataResponse(data, categoryId));
};

let quizData;
const handleQuizDataResponse = (data, categoryId) => {
  if (data['response_code'] === 1 || data['response_code'] === 3 || data['response_code'] === 4) {
    localStorage.removeItem('nerdquizToken');
    requestToken();
    setTimeout(() => {getQuizData(categoryId)}, 500);
  } else {
    quizData = data['results'];
  }
};

let score = 0;
const startGame = () => {

  $('main').empty();
  score = 0;

  let i = 0;
  getQuestionData(i);
  i++;
  nextQuestions(i);
};

const getQuestionData = (i) => {
  const question = quizData[i]['question'];
  const answer = quizData[i]['correct_answer'];
  const optOne = quizData[i]['incorrect_answers'][0];
  const optTwo = quizData[i]['incorrect_answers'][1];
  const optThree = quizData[i]['incorrect_answers'][2];
  const questionNumber = i;

  const answerRoll = [answer, optOne, optTwo, optThree];
  const shuffledAnswered = shuffle(answerRoll);

  $('main').html(renderQuestionTemplate(questionNumber, question, shuffledAnswered));
  countdown();
}

const shuffle = array => {
  let counter = array.length;

  while (counter > 0) {
      const randomNumb = Math.floor(Math.random() * counter);

      counter--
      
      let temp = array[counter];
      array[counter] = array[randomNumb];
      array[randomNumb] = temp;
  }
  return array;
};

const countdown = () => {
  let width = 100;
  const id = setInterval(frame, 70);

  function frame() {
    if (width === 0) {
      clearInterval(id);
    } else {
      width -= 1;
      $('main #timer').css('width', `${width}%`);
    }
  }
};

let newQstnEveryEightSec;    
const nextQuestions = i => { 
  newQstnEveryEightSec = setInterval(() => {
    getQuestionData(i);
    i++;

    if (i === 5) { 
      stopQuiz();
      setTimeout(() => {showScore()}, 8000);
    }
  }, 8000);
};

const stopQuiz = () => {
  clearInterval(newQstnEveryEightSec);
};

const showScore = () => {
  return $('main').html(renderScoreTemplate(score));
};

const selectAnswer = e => {
  const clickTarget = e.target;
  const userAnswer = $(clickTarget).text();

  if (!$(clickTarget).hasClass('disabled')) { 

    if (userAnswer === quizData[$(clickTarget).attr('data-question-number')].correct_answer) {
      $(clickTarget).addClass('selected-right');
      score += 1;
    } else {
      $(clickTarget).addClass('selected-wrong');
    }
  }

  $('main .option').map(index => {
    if (!$(`main .option:eq(${index})`).hasClass('selected-right') && !$(`main .option:eq(${index})`).hasClass('selected-wrong')) {
      $(`main .option:eq(${index})`).addClass('disabled');
    }
  })

  $('main .disabled').map(index => {
    console.log('oi');
    if ($(`main .disabled:eq(${index})`).text() === quizData[$(clickTarget).attr('data-question-number')].correct_answer) {
      console.log('oi oi');
      $(`main .disabled:eq(${index})`).addClass('selected-right');
    }
  })
};

const sentMessageConfirmation = () => {
  return $('main').html(renderSentMessageConfirmation());
};