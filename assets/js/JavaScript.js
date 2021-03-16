var timercount = document.querySelector("#timerDisplay");
var questionDisplay = document.querySelector("#questionsText");
var navButton = document.querySelector("#navButton");
var highScore = document.querySelector(".highscore");
var answerButtonsElem = document.querySelector("#answerButtons");

var timercountRemaining = 4

var questionArray = [
  {
    question: "what bla bla bla",
    options: ["choice a", " ", " "],
    answer: "choice a"
  },
  {
    question: "what bla bla bla",
    options: ["choice a", " ", " "],
    answer: "choice c"
  }
]

function play_game() {
  countDownTimer();
  askQuestions();

  console.log("Playing");
};


function askQuestions() {
  answerButtonsElem.innerHTML = ""
  for (var i = 0; i < questionArray.length; i++) {
    questionDisplay.textContent = questionArray[i].question

    for (var j = 0; j < questionArray[i].options.length; j++) {
      var buttonElem = document.createElement("button")
      buttonElem.setAttribute("class", ".button");
      buttonElem.value = questionArray[i].options[j]
      answerButtonsElem.appendChild(buttonElem)
    }
  }
};





//timer function
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
  console.log(event)
  play_game();
});

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





