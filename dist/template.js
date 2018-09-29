const renderHome = () => {
  return `
  <div class="quiz-container">
    <h1>NerdQuiz</h1>
    <h4>Regras:</h4>
    <p>O jogo contém 15 perguntas de graus de dificuldade diferentes. São 5 perguntas de nível fácil, 5 de nível médio e 5 de nível difícil. Será que você é capaz de adivinhar todas e se consagrar um nerd de carteirinha?</p>
    <p>Para jogar, clique na categoria desejada no menu. Que a força esteja com você!</p>
  </div>
  `;
}

const renderGameStartTemplate = () => {
  return `
    <div class="quiz-container">
      <h1>NerdQuiz</h1>
      <h4>Regras:</h4>
      <p>O jogo contém 15 perguntas de graus de dificuldade diferentes. São 5 perguntas de nível fácil, 5 de nível médio e 5 de nível difícil. Será que você é capaz de adivinhar todas e se consagrar um nerd de carteirinha?</p>
      <button class="start-game">Começar</button>
    </div>
  `;
}

const questionTemplate = (questionNumber, question, shuffledAnswered) => {
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
}

const scoreTemplate = score => {
  return `
    <div class="results-container">
      <h1>Fim de jogo!</h1>
      <p>Você acertou ${score} de 5 perguntas.</p>
    </div>
  `;
}

//      <button class="play-again">Jogar novamente</button>
