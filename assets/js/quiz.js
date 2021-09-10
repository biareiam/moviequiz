const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");


let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

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

    // get the position of the questionIndec from the availableQuestion array
    const index1 = availableQuestions.indexOf(questionIndex);
    // cosole.log(index1);
    // console.log(questionIndex);

    // if a question was already picked, it should not come up again
    availableQuestions.splice(index1, 1);
    // console.log(availableQuestions);

    // set alternatives
    // first get their length. They will be also displayed randomly each time.
    // console.log(currentQuestin.options);

    const optionLen = currentQuestion.options.length;
    // like with the questions, the options will be pushed into and 
    // empty array and interate though.
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i);
    }

    optionContainer.innerHTML = '';

    // creatr an animation
    let animationDelay = 0.15;


    // create options in inner HTML
    for (let i = 0; i < optionLen; i++) {
        // set the options to be display randomly
        const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get the position of the alternatives by index from the available options
        const index2 = availableOptions.indexOf(optonIndex);

        // make sure that the alternatives are not repeated
        availableOptions.splice(index2, 1);
        // console.log(optonIndex);
        // console.log(availableOptions);




        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = i;
        option.style.animationDelay = animationDelay + "s";
        animetionDelay = animetionDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    }
    questionCounter++;
}


/**
 * This function gets the results of the attempt question
 */

function getResult(element) {
    const id = parseInt(element.id);

    //getting the answer by comparing the id of the choosen one by the user
    // and the right answer

    if (id === currentQuestion.answer) {
        //console.log("answer is corrent");

        // set the color green for right answer
        element.classList.appendChild("correct");
        // add the indicator tp correct mark
        updateAnswerIndicator("correct");

        correctAnswers++;
        //console.log(correctAnswers);
    } else {
        // console.log(" wrong answer");
        // set the color red for wrong answer

        element.classList.appendChild("wrong");
        // add the indicator tp incorrect mark
        updateAnswerIndicator("wrong");

        // if the answer is incorrenct, show the right one by adding the green color to it
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {

            }
        }
    }
    attempt++;
    unclickableOptions();
}

/**
 * This fuction will prevent users to change their answer once they already picked one
 * 
 */

function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

/**
 * This fuction is to identify if the answer given by the user is the 
 * right one or not. So if eather, the user was correct or wrong
 */

function answerIndicator() {
    answerIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}


/**
 * This fucntion will update the markType
 */

function updateAnswerIndicator(markType) {
    // console.log(markType);
    answerIndicatorContainer.children[questionCounter - 1].classList.add(markType);

}

/**
 * This fuction will indicate what will happen when the user clicks
 * on the next button. If the length of the quiz is the same as the current question,
 * the quiz show be over, otherwise, the fuction shows gets the next question.
 */
function next() {
    if (questionCounter === quiz.length) {
        //console.log("quiz over");
        quizOver();
    } else {
        getNewQuestion();
    }
}


/**
 * This fuction will execute if the user decide to leave the quiz while
 * in the middle of it. They will be redirected to the home page.
 */
function leaveQuiz() {}

/**
 * This fuction will execute once the quiz is over.
 */

function quizOver() {
    // hide quiz box
    quizBox.classList.add("hide");
    // show result box
    resultBox.classList.remove("hide");
    quizResult();
}

/**
 * This function will calculate the result of the quiz.
 */
function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = questionLimit;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = questionLimit - correctAnswers;

    const percentage = (correctAnswers / questionLimit) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed() + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + questionLimit;
}

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
    // to create an indicator of answer
    answerIndicator();

}






/**
 * This function will say what will happen as soon as the page is loaded
 */
window.onload = function () {
    setAvailableQuestions();
}