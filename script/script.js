var highscoreBtn = document.getElementById("view-highscore");
var timerElement = document.querySelector(".timer-number");
var quizBox = document.getElementById("quiz-box");
var highscoreBox = document.getElementById("highscore-box")
var question = document.getElementById("question");
var answerText = document.querySelectorAll(".answer-text");
var startBtn = document.getElementById("start-button");
var clearHighscoreBtn = document.getElementById("clear-button");

var timerCount = 60;
var score = 0;

var answerDone = [false, false, false, false, false]


var questions = ["What does 'DOM' stand for in regards to HTML?", "How do you make a rounded border in css?", "What is the 'i' in a 'for' loop called?"]
var answers = [
["Dot Object Matrix", "Dark Orange Mouse", "Dissolution Of Marriage", "Document Object Model"],
["border-corner:", "border-radius:", "round-border:", "radius-value:"],
["Integer", "Variable", "Iterator", "Identity"]
];

//starts timer, displays first question and answers,
//and hides start button when pressed
startBtn.addEventListener("click", function() {
    //defining the local variable for the answer boxes and changing their 
    var answerBoxes = document.querySelectorAll(".filler")
    answerBoxes.forEach(element => {
        element.removeAttribute("class", "filler");
        element.setAttribute("class", "answers");
    })
    renderQuestion1();
    startTimer();
    startBtn.style.display = "none";

})

//starts the timer when called on and prevents negative time
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0 && answerDone[2]) {
            clearInterval(timer);
        } else if (timerCount <= 0 && !answerDone[2]) {
            clearInterval(timer);
            quizFinished();
        }
    }, 1000);
}

//renders the first question and answers
function renderQuestion1() {
    //defining local variable for answer boxes
    var answerBoxes = document.querySelectorAll(".answers");

    question.textContent =  questions[0];
           
    for (i = 0; i <= 3; i++) {
        answerText[i].textContent = answers[0][i];
    }

    answerBoxes.forEach(element => {

        element.addEventListener("click", function() {
            //checks if given answer is correct and marks question as answered
            //also adds score or subtracts available time depending on if correct or not
            if (element === answerBoxes[3] && !answerDone[0]) {
                console.log ("correct!");
                answerDone[0] = true;
                score = score  + 20
                renderQuestion2();
            }else if (!answerDone[0]) {
                console.log ("nope!");
                answerDone[0] = true;
                timerCount = timerCount - 5;
                renderQuestion2();
            }
        });
    })    
}

//works the same as renderQuestion1 with updated question and
//answer sets
function renderQuestion2() {
    var answerBoxes = document.querySelectorAll(".answers");

    question.textContent =  questions[1];

    for (i = 0; i <= 3; i++) {
        answerText[i].textContent = answers[1][i];
    }

    answerBoxes.forEach(element => {
        element.addEventListener("click", function() {
            if (element === answerBoxes[1] && !answerDone[1]){
                console.log ("correct!");
                answerDone[1] = true;
                score = score + 20;
                renderQuestion3();
            }else if (!answerDone[1]){
                console.log ("nope!");
                answerDone[1] = true;
                timerCount = timerCount - 5;
                renderQuestion3();
            }
        })
    });    
}

//works the same as renderQuestion1 and renderQuestion2 with updated
//question and answer sets
function renderQuestion3() {
    var answerBoxes = document.querySelectorAll(".answers");

    question.textContent =  questions[2];

    for (i = 0; i <= 3; i++) {
        answerText[i].textContent = answers[2][i];
    }
    
    answerBoxes.forEach(element => {
        element.addEventListener("click", function() {
            if (element === answerBoxes[2] && !answerDone[2]){
                console.log ("correct!");
                answerDone[2] = true;
                score = score + 20;
                quizFinished();
            }else if (!answerDone[2]){
                console.log ("nope!");
                answerDone[2] = true;
                timerCount = timerCount - 5;
                quizFinished();
            }
        })
    });
}

//runs the displayHighscore function when
//the "view highscore" button is clicked
highscoreBtn.addEventListener ("click", function() {
    displayHighscore();

})

//clears the local storage of highscore and initial values
clearHighscoreBtn.addEventListener("click", function () {
    localStorage.setItem("highscore", "");
    localStorage.setItem("initials", "")
    highscoreBox.children[0].children[0].textContent = ""
})

//saves the score to local storage, initiates the getInitial and
//displayHighscore functions when the quiz is completed
function quizFinished() {
    console.log("score: " + score);
    localStorage.setItem("highscore", score);
    getInitials();
    displayHighscore();
}

//prompts the user for their initials when the quiz is completed
//and saves them to local storage
function getInitials() {
    var initials = prompt("Please Enter Your Initials").toUpperCase();
    if (!initials){
        alert("Enter your initials smart-ass !");
        getInitials();
    } else {
        initials = initials.replaceAll(" ","");
        console.log(initials);
        localStorage.setItem("initials", initials)
    }
}

//displays the highscore box and hides the quiz box
//also fetches the highscore and initials from local storage
function displayHighscore() {
    startBtn.style.display = "none";
    quizBox.style.display = "none";
    highscoreBox.style.display = "block";
    if (localStorage.getItem("initials") !== "" && localStorage.getItem("highscore") !== "" ) {
        highscoreBox.children[0].children[0].textContent = localStorage.getItem("initials") + " --- score: " + localStorage.getItem("highscore");
    }
}

// CONDENSING ATTEMPT
// var answerOn = 0

// function renderQuestion() {
//     var answerBoxes = document.querySelectorAll(".answers")

//     console.log(answerOn);

//     question.textContent = questions[answerOn]

//     renderAnswers();

//     answerBoxes.forEach(element => {
//         element.addEventListener("click", function() {
//             console.log("click")
//             //question 1
//             if (answerOn = 0 && element === answerBoxes[3]) {
//                 console.log ("correct!");
//                 score = score  + 20;
//                 answerOn++;
//                 renderQuestion();    
//             } else if (answerOn = 0 && element !== answerBoxes[3]) {
//                 console.log ("nope!");
//                 timerCount = timerCount - 5;
//                 answerOn++;
//                 renderQuestion();
//                 //question 2
//             } else if (answerOn = 1 && element === answerBoxes[1]) {
//                 console.log ("correct!");
//                 score = score  + 20;
//                 answerOn++;
//                 renderQuestion();  
//             } else if (answerOn = 1 && element !== answerBoxes[1]) {
//                 console.log ("nope!")
//                 renderQuestion();
//                 //question 3
//             } else if (answerOn = 2 && element === answerBoxes[2]) {
//                 console.log ("correct!");
//                 score = score  + 20;
//                 answerOn++;
//                 quizFinished(); 
//             } else if (answerOn = 2 && element !== answerBoxes[2]) {
//                 console.log("nope!")
//                 quizFinished();
//             }
//         })
//     })
// }

// function renderAnswers() {
//     for (i = 0; i <=3; i++) {
//         answerText[i].textContent = answers[answerOn][i];
//     }
// }