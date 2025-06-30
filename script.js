// script.js
const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["2", "3", "4", "5"],
    correct: "4",
  },
  {
    question: "Which language is used for styling?",
    answers: ["HTML", "CSS", "JavaScript", "C++"],
    correct: "CSS",
  },
  {
    question: "What is the full form of CSS?",
    answers: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: ["<link>", "<a>", "<href>", "<url>"],
    correct: "<a>"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<js>", "<javascript>", "<code>"],
    correct: "<script>"
  }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

function showQuestion() {
  resetState();
  const q = questions[currentQuestion];
  questionContainer.innerText = q.question;

  q.answers.forEach((ans) => {
    const button = document.createElement("button");
    button.innerText = ans;
    button.onclick = () => selectAnswer(ans, q.correct);
    answerButtons.appendChild(button);
  });
}

function selectAnswer(ans, correct) {
  if (ans === correct) score++;
  nextBtn.style.display = "block";
}

function resetState() {
  nextBtn.style.display = "none";
  answerButtons.innerHTML = "";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionContainer.innerText =` Quiz Completed!`;
  scoreContainer.innerText = `Your score: ${score} / ${questions.length}`;
  nextBtn.style.display = "none";
}

showQuestion();
