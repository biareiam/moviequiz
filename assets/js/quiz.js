const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answer-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionLimit = 15; // limiting the number of questions b=being displayed at the time.

var timer = document.querySelector("#timer");

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
        availableQuestions.push(quiz[i]);
    }
}

/**
 * This function will get a new question
 */

function getNewQuestion() {

    // set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questionLimit;

    // set question itself randomly
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question;
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
        option.id = optonIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
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
        element.classList.add("correct");
        // add the indicator tp correct mark
        updateAnswerIndicator("correct");

        correctAnswers++;
        //console.log(correctAnswers);
        unclickableOptions();
    } else {
        // console.log(" wrong answer");
        // set the color red for wrong answer

        element.classList.add("wrong");
        // add the indicator tp incorrect mark
        updateAnswerIndicator("wrong");
        unclickableOptions();
        // if the answer is incorrenct, show the right one by adding the green color to it
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");

            }
        }
        attempt++;
    }
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
    const totalQuestion = questionLimit;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}


/**
 * This fucntion will update the markType
 */

function updateAnswerIndicator(markType) {
    //console.log(markType);
    answerIndicatorContainer.children[questionCounter - 1].classList.add(markType);
}


/**
 * This fuction will indicate what will happen when the user clicks
 * on the next button. If the length of the quiz is the same as the current question,
 * the quiz show be over, otherwise, the fuction shows gets the next question.
 */
function next() {
    if (questionCounter === questionLimit) {
        setTimeout(function () {
            quizBox.classList.add("hide");
            resultBox.classList.remove("hide");
            quizResult();
        }, 500);
        //timer stops 
        setTimeout(function () {
            clearInterval(timerInterval);
        }, 500);
        //if not all questions are answered, go to next question
    } else {
        getNewQuestion();
    }
}

/**
 * The fuction will set a timer to the quiz
 */

//Timer function
var secondsLeft = 120;
var timerInterval;

function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft + " sec";

        //if run out of time, go straight to user initial page to record score
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            quizBox.classList.add("hide");
            homeBox.classList.remove("hide");
            alert("Sorry, You are out of time!");
            resetQuiz();
        }
    }, 1000);

    return timerInterval;
}

/**
 * This fuction will execute if the user decide to leave the quiz while
 * in the middle of it. They will be redirected to the home page.
 */
function leaveQuiz() {
    // show home box
    homeBox.classList.remove("hide");
    //hide quiz quiz-box
    quizBox.classList.add("hide");
    resetQuiz();
    startTimer();
    secondsLeft = 120;
}

/**
 * This fuction will execute once the quiz is over.
 */

function quizOver() {
    //hide quiz quiz-box
    quizBox.classList.add("hide");
    // show result Box
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
function goToHome() {
    // hide results box
    resultBox.classList.add("hide");
    //show home box 
    homeBox.classList.remove("hide");
    resetQuiz();
}



/**
 * After seeing the results, if the user decides to try the quiz again.
 * They just need to press the "try again" button and these fuctions will be
 * executed, reseting the quiz.
 */
function tryAgainQuiz() {
    // hide the resultBox
    resultBox.classList.add("hide");
    // show quiz box
    quizBox.classList.remove("hide");
    // reset the quiz
    resetQuiz();
    secondsLeft = 120;
    startQuiz();

}

function resetQuiz() {
    questionCounter = 0;
    currentQuestion;
    attempt = 0;
    secondsLeft = 120;
}

/**
 * When the screen is loaded this function will execute to start the quiz
 */

function startQuiz() {

    // hide home box
    homeBox.classList.add("hide");
    // show quiz box
    quizBox.classList.remove("hide");
    // first the questions will be selected
    setAvailableQuestions();
    // start timer
    startTimer();
    // A new question will be selected randomly
    getNewQuestion();
    // to create an indicator of answer
    answerIndicator();

}
/**
 * This function will say what will happen as soon as the page is loaded
 */
window.onload = function () {
    homeBox.querySelector(".total-question"), innerHTML = quiz.length;
};