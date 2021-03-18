var timercount = document.querySelector("#timerDisplay");
var questionDisplay = document.querySelector("#questionsText");
var navButton = document.querySelector("#navButton");
var highScore = document.querySelector(".highscore");
var answerButtonsElem = document.querySelector("#answerButtons");

var timercountRemaining = 4

var questionArray = [
  {
    question: "what bla bla bla",
    options: ["choice A", "choice B ", " choice C ", " choice D "],
    answer: "choice a"
  },
  {
    question: "what la di ad",
    options: ["choice a", " button ", " no button", " no button"],
    answer: "choice c"

  },
  {
    question: "what waa waa waaa",
    options: ["choice a", " button ", " no button", " no button"],
    answer: "choice d"

  }
]

function play_game() {
  countDownTimer();
  askQuestions();

  console.log("Playing");
};


function askQuestions() {
  //referance the inner html and removes the play button
  answerButtonsElem.innerHTML = ""


  //for loop iterating over items in questionsArray
  for (var i = 0; i < questionArray.length; i++) {
    generateButtons()
    questionDisplay.textContent = questionArray[i].question

    function generateButtons() {
      for (var j = 0; j < questionArray[i].options.length; j++) {

        var buttonElem = document.createElement("button")
        console.log("button created")
        buttonElem.setAttribute("id", "#navButton");
        console.log("button given attrubute nav")
        buttonElem.textContent = questionArray[i].options[j]
        console.log("button passed value")
        answerButtonsElem.appendChild(buttonElem)
        console.log("button appended");


      }
    }
  }
};


//Count down timer function
function countDownTimer() {
  var timerInterval = setInterval(function () {
    timercountRemaining--;
    timercount.textContent = timercountRemaining;

    if (timercountRemaining === 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

function gameOver() {

  console.log("gameover")
};

// listen for click of the play button 
navButton.addEventListener("click", function (event) {

  play_game();
});

// navButton.addEventListener("click", function (event) {
//   generateButtons();
//   if (questionArray.question[i] === questionArray.question.answer) {
//     console.log("correct")
//   } else {
//     console.log("incorrect")
//   }
//   console.log("Event listener")
// });

// when start game button clicked 
//     start timer function
//     style page
//     pull questions and answers from Object
//     insert questions & answers on page
//     wait for click  
//     create buttons on click 
//        check answer function

// function for timer
//   count for timer
//   if timer == 0 stop program 

// on click check if answers match 
//   stop timer
//   style window
//   if corect display correct
//   else incorrect 
//   THEN time is subtracted from the clock
//   WHEN all questions are answered or the timer reaches 0

//   next question by index?

//   endgame function

