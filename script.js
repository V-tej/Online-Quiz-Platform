const quizData = [
    {
        question: 'What Language do they speak in Brazil?',
        options: ['Spanish', 'Portuguese', 'Brazilian', 'Pune'],
        correctAnswer: 'Portuguese'
    },
    // Add more quiz questions here
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
    },
     // Add more quiz questions here
     {
        question: 'What is the closest STAR in the Earth?',
        options: ['The Moon', 'The Sun', 'The Jupiter', 'The Venus'],
        correctAnswer: 'The Sun'
    },
      // Add more quiz questions here
      {
        question: 'How many hours are there in a day?',
        options: ['24 hours', '10 hours', '12 hours', '2 hours'],
        correctAnswer: '24 hours'
    },
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.innerText === quizData[currentQuestionIndex].correctAnswer;
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = `You scored ${score} out of ${quizData.length}!`;
}

startQuiz();