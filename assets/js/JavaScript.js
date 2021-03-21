var timercount = document.querySelector("#timerDisplay");
var questionDisplay = document.querySelector("#questionsText");
var navButton = document.querySelector(".navButton");
var playButton = document.querySelector(".playButton");
var highScore = document.querySelector(".highscore");
var answerButtonsElem = document.querySelector("#answerButtons");
var playButton = document.querySelector(".playButton");
var formInputVar = document.querySelector(".formInput")
var clearScores = document.querySelector(".clearScores")

var timercountRemaining = 30
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
    // check answer using the funtion 
    checkAnswer();

    function checkAnswer() {
      // if the index matches run the next if ... if not game over
      if (currentIndex < questionArray.length - 1) {

        if (event.target.textContent == questionArray[currentIndex].answer) {

          answerButtonsElem.innerHTML = ""
          currentIndex++
          generateButtons();
          highScore = highScore + timercountRemaining
          console.log(highScore)

        }
        else {

          answerButtonsElem.innerHTML = ""
          currentIndex++
          generateButtons();
          console.log(highScore)
          highScore = highScore - 10
          console.log(highScore)

        }
      }
      else {
        //set timer interval after all questions have been asked to 1 so game timer ends and funs game over funtion
        timercountRemaining = 1
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

    if (timercountRemaining <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
};

function gameOver() {
  // if game over funtion is run timer count remaing stops and sets to 0
  timercountRemaining = 1

  questionDisplay.setAttribute("class", "hideButton");
  answerButtonsElem.setAttribute("class", "hideButton");
  endGameScreen();
};

function endGameScreen() {
  var GameOverElm = document.createElement("div")
  GameOverElm.setAttribute("id", "questionsText");
  GameOverElm.textContent = "Game over please enter your name and submit to see high scores"
  formInputVar.appendChild(GameOverElm)

  var showScore = document.createElement("p")
  showScore.setAttribute("class", "formInput ")
  showScore.textContent = "Your Score is : " + highScore
  formInputVar.appendChild(showScore)

  var nameInput = document.createElement("input")
  nameInput.setAttribute("type", "text")
  nameInput.setAttribute("class", "formInput")
  nameInput.setAttribute("placeholder", "Please enter name")
  formInputVar.appendChild(nameInput)


  var submit = document.createElement("button")
  submit.setAttribute("class", "navButton ")
  submit.textContent = "Submit"
  formInputVar.appendChild(submit)


  submit.addEventListener("click", function (event) {

    var newScore = {
      "name": nameInput.value,
      "score": highScore
    }
    var ScoreExistingVar = JSON.parse(localStorage.getItem("HighScore"))
    if (!ScoreExistingVar) {
      ScoreExistingVar = []
    }
    ScoreExistingVar.push(newScore);
    localStorage.setItem("HighScore", JSON.stringify(ScoreExistingVar));

    DisplayHighScores();


    function DisplayHighScores() {
      formInputVar.innerHTML = ""

      for (i = 0; i <= ScoreExistingVar.length - 1; i++) {

        var displayAllHighscores = document.createElement("ul")
        displayAllHighscores.setAttribute("class", "scoresCurrent")
        displayAllHighscores.textContent = "Name - " + ScoreExistingVar[i].name + "Score - " + ScoreExistingVar[i].score
        formInputVar.appendChild(displayAllHighscores)

      }

      var playAgain = document.createElement("button")
      playAgain.setAttribute("class", "navButton")
      playAgain.textContent = "Play Again"
      formInputVar.appendChild(playAgain)
      var clearScores = document.createElement("button")
      clearScores.setAttribute("class", "navButton clearScores")
      clearScores.textContent = "Clear Scores"
      formInputVar.appendChild(clearScores)

      clearScores.addEventListener("click", function () {
        ScoreExistingVar = []
        window.localStorage.clear();
        DisplayHighScores();
        console.log(window.localStorage.HighScore)
      });




    }
  });
}




// listen for click of the play button 
playButton.addEventListener("click", function () {

  play_game();
  playButton.setAttribute("class", "hideButton");

});

// stop propogation in nav button EL
// stlye hide function css
// event.target.textContent

// Add Questions feedback
