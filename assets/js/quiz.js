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
        // console.log(i);
        availableQuestions.push(quiz[i]);
    }
    //console.log(availableQuestions);
}

/**
 * This function will get a new question
 */

function getNewQuestion() {}


/**
 * This function gets the results of the quiz
 */

function getResult() {}

/**
 * This fuction is to identify if the answer given by the user is the 
 * right one or not. So if eather, the user was correct or wrong
 */

function answerIndicator() {}


/**
 * This fuction will indicate what will happen when the user clicks
 * on the next button. If the length of the quiz is the same as the current question,
 * the quiz show be over, otherwise, the fuction shows gets the next question.
 */
function next() {}


/**
 * This fuction will execute if the user decide to leave the quiz while
 * in the middle of it. They will be redirected to the home page.
 */
function leaveQuiz() {}

/**
 * This fuction will execute once the quiz is over.
 */

function quizOver() {}








/**
 * This function will say what will happen as soon as the page is loaded
 */
window.onload = function () {
    setAvailableQuestions();
}