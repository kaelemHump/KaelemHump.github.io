
const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')
//Options



const questions = [
  {
    correct: 2,
    option: ['jury', 'assess'],
    quiz: ['value', 'estimate', 'evaluate'],
  },
  {
    correct: 2,
    option: ['trace', 'adjacent'],
    quiz: ['close', 'near', 'next'],
  },
  {
    correct: 2,
    option: ['mad', 'exotic'],
    quiz: ['foreign', 'national', 'ethnic'],
  },
  {
    correct: 1,
    option: ['forecast', 'sustainable'],
    quiz: ['assume', 'insight', 'weather'],
  },
  {
    correct: 2,
    option: ['charity', 'rapid'],
    quiz: ['fast', 'quick', 'prompt'],
  },
]

let clicked = []
let score = 0

scoreDisplay.textContent = score


function populateQuestions() {
  //question boxes
  questions.forEach((question) => {
    //question box div
    const questionBox = document.createElement('div')
    questionBox.classList.add('question-box')
    //logo display 
    const logoDisplay = document.createElement('h1')
    logoDisplay.textContent = '✒'
    questionBox.append(logoDisplay)
    //tip div
    question.quiz.forEach((tip) => {
      const tipText = document.createElement('p')
      tipText.textContent = tip
      questionBox.append(tipText)
    })
    //question buttons
    const questionButtons = document.createElement('div')
    questionButtons.classList.add('question-buttons')
    questionBox.append(questionButtons)
    question.option.forEach((option, optionIndex) => {
      const questionButton = document.createElement('button')
      questionButton.classList.add('question-button')
      questionButton.textContent = option
      questionButton.addEventListener('click', () =>
      //answer mechanic
        checkAnswer(
          questionBox,
          questionButton,
          option,
          optionIndex + 1,
          question.correct
        )
      )
      questionButtons.append(questionButton)
    })
    //answer display
    const answerDisplay = document.createElement('div')
    answerDisplay.classList.add('answer-display')

    questionBox.append(answerDisplay)
    questionDisplay.append(questionBox)
  })
}

populateQuestions()
//answer checker
function checkAnswer(
  questionBox,
  questionButton,
  option,
  optionIndex,
  correctAnswer
) {
  //correct answer
  if (optionIndex === correctAnswer) {
    score++
    scoreDisplay.textContent = score
    addResult(questionBox, 'Correct!', 'correct')
  //false answer
  } else {
    score--
    scoreDisplay.textContent = score
    addResult(questionBox, 'Wrong!', 'wrong')
  }
  //button to select answer
  clicked.push(option)
  questionButton.disabled = clicked.includes(option)
}
//display answer (wrong/Correct)
function addResult(questionBox, answer, className) {
  const answerDisplay = questionBox.querySelector('.answer-display')
  answerDisplay.classList.remove('wrong')
  answerDisplay.classList.remove('correct')
  answerDisplay.classList.add(className)
  answerDisplay.textContent = answer
}