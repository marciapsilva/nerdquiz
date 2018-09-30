const renderHome = () => {
  return `
  <div class="main-container">
    <h1>Do you think you are a pop culture expert?</h1>
    <h2>Find out by taking one of our nerdquizzes!</h2>
    <h3>How to play:</h3>
    <p>It's easy, select one of the categories on the main menu and click start to begin playing.</p>
  </div>
  `;
};

const renderGameStartTemplate = category => {
  return `
    <div class="question-container">
      <h1>${category} Quiz</h1>
      <h4>Rules:</h4>
      <ul>
        <li>The game has 5 questions;</li>
        <li>You'll have 10 seconds to answer each question;</li>
        <li>Once you've selected an answer you can not change it;</li>
        <li>You can play as long as you want. Our database has plenty of questions to test your nerd knowledge. ;-)</li>
      </ul>
      <p>May the force be with you.</p>
      <button class="start-game">Start</button>
    </div>
  `;
};

const renderQuestionTemplate = (questionNumber, question, shuffledAnswered) => {
  return `
    <div class="question-container">
      <div class="timer-bar">
        <div class="timer" id="timer"></div>
      </div>
      <h3>${question}</h3>
      <div class="option" data-option="one" data-question-number="${questionNumber}">${shuffledAnswered[0]}</div>
      <div class="option" data-option="two" data-question-number="${questionNumber}">${shuffledAnswered[1]}</div>
      <div class="option" data-option="three" data-question-number="${questionNumber}">${shuffledAnswered[2]}</div>
      <div class="option" data-option="four" data-question-number="${questionNumber}">${shuffledAnswered[3]}</div>
    </div>
  `;
};

const renderScoreTemplate = score => {
  return `
    <div class="results-container">
      <h1>Game Over!</h1>
      <p>You got ${score} out of 5 right.</p>
    </div>
  `;
};

const renderContact = () => {
  return `
    <div class="contact-container">
      <h1>Contact</h1>
      <h3>Have you found any bug in the game? Do you have any complaint or suggestion how we can improve your game experience? Send us an e-mail. We'll love to hear your opinion about our quizzes.</h3>
      <form action="">
        <input type="text" id="form-name" placeholder="Name">
        <input type="text" id="form-email" placeholder="E-mail">
        <textarea name="" id="form-message" cols="30" rows="10" placeholder="Message"></textarea>
        <button id="send-message" type="button">Send</button>
      </form>
    </div>
  `;
};

const renderSentMessageConfirmation = () => {
  return `
    <div class="contact-container">
      <h3>Message delivered with success! We'll contact you back soon! Thank you.</h3>
    </div>
  `;
};