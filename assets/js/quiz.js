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

function getNewQuestion() {

    // set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + "of" + quiz.length;

    // set question itself randomly
    const questionIdex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIdex;
    questionText.innerHTML = currentQuestion.questionCounter;
    //console.log(questionIdex);


}


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
 * This function will calculate the result of the quiz.
 */
function quizResult() {}

/**
 * Once the quiz is finished and the user was able to see the results, if desired
 * they can leave the quiz for good.This function will execute once they click on the
 * go home button
 */
function tryAgainQuiz() {}


/**
 * After seeing the results, if the user decides to try the quiz again.
 * They just need to press the "try again" button and these fuctions will be
 * executed, reseting the quiz.
 */
function tryAgainQuiz() {}


function resetQuiz() {}

/**
 * When the screen is loaded this function will execute to start the quiz
 */

function startQuiz() {

    // first the questions will be selected
    setAvailableQuestions();
    // A new question will be selected randomly
    getNewQuestion();
}






/**
 * This function will say what will happen as soon as the page is loaded
 */
window.onload = function () {
    setAvailableQuestions();
}