var timercount = document.querySelector("#timerDisplay");
var questionDisplay = document.querySelector("#questionsText");
var navButton = document.querySelector(".navButton");
var highScore = document.querySelector(".highscore");
var answerButtonsElem = document.querySelector("#answerButtons");
var playButton = document.querySelector(".playButton");

var timercountRemaining = 1000
var scoreTotalElem = 0


var questionArray = [
  {
    question: "what bla bla bla",
    options: ["choice A", "choice B", "choice C", "choice D"],
    answer: "choice A"
  },
  {
    question: "what la di da",
    options: ["choice a", "choice c", "no button", "no button"],
    answer: "choice c"

  },
  {
    question: "what waa waa waaa",
    options: ["choice a", " button ", " no button", " choice d"],
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

  var currentIndex = [0]
  var answer = [2]

  generateButtons();
  //set the text contenet to be the index of the questions array
  questionDisplay.textContent = questionArray[currentIndex].question
  // event listener to see click events
  answerButtonsElem.addEventListener("click", function (event) {
    console.dir(questionArray.length - 1);
    console.log(currentIndex)
    // check answer using the funtions 

    checkAnswer();



    function checkAnswer() {
      // if the index matches run the next if ... if not game over
      if (currentIndex < questionArray.length - 1) {

        if (event.target.textContent == questionArray[currentIndex].answer) {

          answerButtonsElem.innerHTML = ""
          currentIndex++
          generateButtons();
          console.log("generating correct buttons")
        }
        else {

          answerButtonsElem.innerHTML = ""
          currentIndex++
          generateButtons();
          console.log("generating failure buttons")
        }
      }
      else {
        questionDisplay.setAttribute("class", "hideButton");
        answerButtonsElem.setAttribute("class", "hideButton");
        gameOver();
      }
    }
  });

  function generateButtons() {
    for (var j = 0; j < questionArray[currentIndex].options.length; j++) {
      var buttonElem = document.createElement("button")
      buttonElem.setAttribute("class", "navButton buttonElem");
      buttonElem.textContent = questionArray[currentIndex].options[j]
      answerButtonsElem.appendChild(buttonElem)
      questionDisplay.textContent = questionArray[currentIndex].question


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
};

function gameOver() {
  var buttonElem = document.createElement("div")
  buttonElem.setAttribute("class", "navButton");
  buttonElem.textContent = "Game over"
  console.log("gameover")
  console.log(playButton)
  playButton.appendChild(buttonElem)

};

// listen for click of the play button 
navButton.addEventListener("click", function () {

  play_game();
  navButton.setAttribute("class", "hideButton");

});

// stop propogation in nav button EL
// stlye hide function css
// event.target.textContent




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

