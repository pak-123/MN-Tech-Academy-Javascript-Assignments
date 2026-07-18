// Quiz Questions
let quiz = [
    {
        question: "1. Which HTML tag is used to create a hyperlink?",
        options: ["link", "a", "href", "url"],
        answer: 1
    },
    {
        question: "2. Which CSS property is used to change text color?",
        options: ["background-color", "font-size", "color", "text-align"],
        answer: 2
    },
    {
        question: "3. Which keyword is used to declare a JavaScript variable?",
        options: ["let", "int", "string", "char"],
        answer: 0
    },
    {
        question: "4. Which HTML tag is used to insert an image?",
        options: ["image", "img", "picture", "src"],
        answer: 1
    },
    {
        question: "5. Which CSS property makes text bold?",
        options: ["font-style", "font-weight", "text-decoration", "font-family"],
        answer: 1
    }
];

let currentQuestion = 0;
let userAnswers = [];

// Show Question
function showQuestion() {
    let q = quiz[currentQuestion];

    document.getElementById("quiz").innerHTML = `
        <div class="question">
            <h3>${q.question}</h3>

            <label><input type="radio" name="answer" value="0"> ${q.options[0]}</label>
            <label><input type="radio" name="answer" value="1"> ${q.options[1]}</label>
            <label><input type="radio" name="answer" value="2"> ${q.options[2]}</label>
            <label><input type="radio" name="answer" value="3"> ${q.options[3]}</label>
            <button onclick="${currentQuestion == quiz.length - 1 ? 'submitQuiz()' : 'nextQuestion()'}">
                ${currentQuestion == quiz.length - 1 ? 'Submit Quiz' : 'Next'}
            </button>
        </div>
    `;
}

// Next Question
function nextQuestion() {
    let answer = document.querySelector('input[name="answer"]:checked');
    if (answer == null) {
        alert("Please select an answer.");
        return;
    }
    userAnswers[currentQuestion] = Number(answer.value);
    currentQuestion++;
    showQuestion();
}

// Submit Quiz
function submitQuiz() {
    let answer = document.querySelector('input[name="answer"]:checked');
    if (answer == null) {
        alert("Please select an answer.");
        return;
    }

    userAnswers[currentQuestion] = Number(answer.value);
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        if (userAnswers[i] == quiz[i].answer) {
            score++;
        }
    }

    let percentage = (score / quiz.length) * 100;
    let grade;
    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else {
        grade = "Fail";
    }

    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").innerHTML = `
        <h2>Quiz Completed! 🎉</h2>
        <p>Score: ${score} / ${quiz.length}</p>
        <p>Percentage: ${percentage}%</p>
        <p>Grade: ${grade}</p>`;
}

// Start Quiz
showQuestion();