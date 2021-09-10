const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

/**
 * This fuction will put the questions into an array and iterate through it.
 *
 */
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        //console.log(quiz[i]);
    }
}

/**
 * This function will say what will happen as soon as the page is loaded
 */
window.onload = function () {
    setAvailableQuestions();
}