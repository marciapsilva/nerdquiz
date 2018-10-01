const renderHome = () => {
  return `
  <div class="home-container d-flex j-around al-start">
    <div class="home-img d-flex j-center">
      <img class="iphone-img" src="/dist/assets/imgs/nerdquiz-mobile-01.png">
    </div>
    <div class="home-text d-flex f-dir-col j-start al-start">
      <div class="home-title d-flex f-dir-col j-start al-start">
        <h1 class="home-h1">Do you think you are a pop culture expert?</h1>
        <h2>Find out by taking one of our nerdquizzes!</h2>
      </div>
      <div class="home-howtoplay d-flex j-start al-start">
        <h2>how to play</h2>
        <p>It's easy, select one of the categories on the main menu and click start to begin playing.</p>
      </div>
    </div>
  </div>
  `;
};

const renderGameStartTemplate = category => {
  return `
    <div class="main-container d-flex f-dir-col j-start al-center">
      <div class="rules-container d-flex j-center al-start">
        <h1>${category} quiz</h1>
        <h3>rules:</h3>
        <ul class="no-bullets">
          <li>The game has 5 questions;</li>
          <li>You'll have 10 seconds to answer each question;</li>
          <li>Once you've selected an answer you can not change it;</li>
          <li>You can play as long as you want. Our database has plenty of questions to test your nerd knowledge. ;-)</li>
        </ul>
      </div>
      <div class="d-flex f-dir-col j-center al-center">
        <p>May the force be with you.</p>
        <button class="start-game">start</button>
      </div>
    </div>
  `;
};

const renderQuestionTemplate = (questionNumber, question, shuffledAnswered) => {
  return `
    <div class="main-container">
      <div class="timer-bar">
        <div class="timer" id="timer"></div>
      </div>
      <h4>${question}</h4>
      <div class="option" data-option="one" data-question-number="${questionNumber}">${shuffledAnswered[0]}</div>
      <div class="option" data-option="two" data-question-number="${questionNumber}">${shuffledAnswered[1]}</div>
      <div class="option" data-option="three" data-question-number="${questionNumber}">${shuffledAnswered[2]}</div>
      <div class="option" data-option="four" data-question-number="${questionNumber}">${shuffledAnswered[3]}</div>
    </div>
  `;
};

const renderScoreTemplate = score => {
  return `
    <div class="main-container d-flex f-dir-col al-start j-start">
      <h1 class="results-title">game over!</h1>
      <p class="results-score">You got <span class="player-score">${score}</span> out of <span class="game-score">5</span> right.</p>
    </div>
  `;
};

const renderContact = () => {
  return `
    <div class="main-container d-flex f-dir-col j-start al-center">
      <div class="rules-container d-flex j-center al-start">
        <h1>contact</h1>
        <div class="contact-text">
          <h4>Have you found any bug in the game?</h4>
          <h4>Do you have any complaint or suggestion how we can improve your game experience?</h4>
          <h4>Send us an e-mail. We'll love to hear your opinion about our quizzes.</h4>
        </div>
      </div>
      <form class="contact-form d-flex f-dir-col f-wrap j-center al-center">
        <div class="form-short-container d-flex j-between">
          <input type="text" id="form-name" class="form-short" placeholder="name">
          <input type="text" id="form-email" class="form-short" placeholder="e-mail">
        </div>
        <textarea id="form-message" class="form-textarea" rows="4" placeholder="message"></textarea>
        <button id="send-message" class="send-message" type="button">send</button>
      </form>
    </div>
  `;
};

const renderSentMessageConfirmation = () => {
  return `
    <div class="main-container">
      <h4>Message delivered with success!</h4>
      <h4>We'll contact you back soon!</h4>
      <h4>Thank you.</h4>
    </div>
  `;
};