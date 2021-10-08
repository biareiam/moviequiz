// First, save the ids into variables
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answer-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

const nextButton = document.querySelector(".next-btn");
const leaveButton = document.querySelectorAll(".leave-btn");

const questionLimit = 15;


/* create a variable for the current question and a variable 
for the available question, leave it an emptt string to be 
fill in with the different questions.*/
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;


/* push the questions into availableQuestions Array*/
/* the "quiz" is on the questions.js*/
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i]);
    }
}


/*Fuction to get a new question*/
// set question number, question and options
function getNewQuestion() {
    //set question number -  change the text that is why innerHTML
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questionLimit;

    // set question text
    // get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    // this variable was already created in the beginning
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question; // this q was defined in the other javascript file.

    // get the position of the questionIndex from the availableQuestions array
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the questionIndex from the availableQuestions 
    //array so the question will not be repeated
    availableQuestions.splice(index1, 1); //The splice() method adds and/or removes array elements. splice() overwrites the original array.

    // set options
    // get the length of options 9 this variable is on the questions file.

    const optionLen = currentQuestion.options.length;
    // push options into  availableOptions Array
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i);
    }

    optionContainer.innerHTML = '';
    // animation of the options
    let animationDelay = 0.15;

    // create options in html
    for (let i = 0; i < optionLen; i++) {

        // random option
        const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get this position of optionIndex from the availableoptions
        const index2 = availableOptions.indexOf(optonIndex);
        //remove the optionIndex from the availableOptions, so it does not repeat
        availableOptions.splice(index2, 1);


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


// creating getResult function, which will get the result of the curent attempt

function getResult(element) {
    const id = parseInt(element.id);

    //geting the answer by comparing the id of clicked option  
    if (id === currentQuestion.answer) {
        // set the green color to the correct option
        element.classList.add("correct");
        // add the indicator to correct mark
        updateAnswerIndicator("correct");

        correctAnswers++;
        unclickableOptions();
    } else {
        // set the red color to the incorrect option
        element.classList.add("wrong");
        // add the indicator to incorrect mark
        updateAnswerIndicator("wrong");
        unclickableOptions();

        // if the answer is incorrect then show the correct option by adding green colour to it
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");

            }
        }
        attempt++;
    }
}


// /////make all the options unclickable once the user selcts a option(restrict the user to change the option again)
function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}




function answerIndicator() {
    answerIndicatorContainer.innerHTML = '';
    const totalQuestion = questionLimit;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType) {
    //console.log(markType);
    answerIndicatorContainer.children[questionCounter - 1].classList.add(markType);
}



// create a fuction to the button next
function next() {
    // if  it is the last question, end the quiz, if not go to the next question
    if (questionCounter === questionLimit) {
        //console.log("quiz over");
        quizOver();
    } else {
        getNewQuestion();
    }

}

function leaveQuiz() {
    // show home box
    homeBox.classList.remove("hide");
    //hide quiz quiz-box
    quizBox.classList.add("hide");
    questionCounter = 0;
    currentQuestion;
    attempt = 0;

}


function quizOver() {
    //hide quiz quiz-box
    quizBox.classList.add("hide");
    // show result Box
    resultBox.classList.remove("hide");
    quizResult();
}

// get the quiz result
function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = questionLimit;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = questionLimit - correctAnswers;

    const percentage = (correctAnswers / questionLimit) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed() + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + questionLimit;

}

// function to reset the quiz
function resetQuiz() {
    questionCounter = 0;
    currentQuestion;
    attempt = 0;
}

function tryAgainQuiz() {
    // hide the resultBox
    resultBox.classList.add("hide")
    // show quiz box
    quizBox.classList.remove("hide");

    // reset the quiz
    resetQuiz();
    startQuiz()
}

function goToHome() {

    // hide results box
    resultBox.classList.add("hide");
    //show home box 
    homeBox.classList.remove("hide");
    resetQuiz();
}


/* starting point
 
/* when the screen load, it will show an available question and get anew question*/
function startQuiz() {
    // hide home box
    homeBox.classList.add("hide");
    // show quiz box
    quizBox.classList.remove("hide");

    // First we will set all questions in avalaibleQuestions Array
    setAvailableQuestions();

    //second we will call the getNewQuestion function
    getNewQuestion();

    // to create indicator of answers
    answerIndicator();

}


window.onload = function () {
    homeBox.querySelector(".total-question").innerHTML = questionLimit;
}