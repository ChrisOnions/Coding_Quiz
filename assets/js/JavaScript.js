var timercount = document.querySelector("#timerDisplay");
var questionDisplay = document.querySelector("#questionsText");
var navButton = document.querySelector(".navButton");
var playButton = document.querySelector(".playButton");
var highScore = document.querySelector(".highscore");
var answerButtonsElem = document.querySelector("#answerButtons");
var playButton = document.querySelector(".playButton");
var formInputVar = document.querySelector(".formInput")
var clearScores = document.querySelector(".clearScores")
var questionFeedback = document.querySelector(".questionFeedback")
var viewHighScore = document.querySelector("#viewHighScore")


var timercountRemaining = 60
var scoreTotalElem = 0




//Array of qyestions to be asked 
var questionArray = [
  {
    question: "What is HTML short for?",
    options: ["Hyper Text MarkDown Language  ", "Happy Text Markup Language", "Hyper Test Markup Language", "Header Test Markup Language"],
    answer: "Hyper Test Markup Language"
  },
  {
    question: "What does the this Keyword do? ",
    options: ["This is a reference variable that refers to the current object", "This is a reference variable that refers to the current variable", "This is a reference object that refers to the current object", "This is a reference object that refers to the current variable"],
    answer: "This is a reference variable that refers to the current object"

  },
  {
    question: "Whats is the diference between == and === comparison operators in Java Script ",
    options: ["One is a typo", "=== compares type and value == is just value", " == compares type and value === is just value", " more === more fun"],
    answer: "=== compares type and value == is just value"

  },
  {
    question: "What is jQuery?",
    options: ["jQuery is a lightweight, write less, do more, JavaScript library", "jQuery is a Query on the j element ", " jQuery is a Function to run JavaScript ", " jQuery is a Class selector to select elemenets in css"],
    answer: "jQuery is a lightweight, write less, do more, JavaScript library"

  },
  {
    question: "what is git used for?",
    options: ["Git is a CheatSheet used for learing JavaScript", "Git is Slang telling somone somthing", "Git used for Version control", " Git is a resource for attatching documents to html"],
    answer: "Git used for Version control"

  },
  {
    question: "When would i use a Wireframe",
    options: ["When writing html document", " When hanging a picure ", "When planning basic structure a web page", " When choosing the correct css elements"],
    answer: "When planning basic structure a web page"

  },
  {
    question: "Choose the correct syntax",
    options: ["var = x  0;", "var x = 0", "var 1 = 0;", "var x = 0;"],
    answer: "var x = 0;"

  }
]
// play game function attatched to play button
function play_game() {
  countDownTimer();
  askQuestions();
  console.log("Playing Game");
};

// Generated buttons and question
function askQuestions() {
  //referance the inner html and removes the play button and text
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
        // if the answer is correct or incorrect
        if (event.target.textContent == questionArray[currentIndex].answer) {
          answerButtonsElem.innerHTML = ""
          currentIndex++
          generateButtons();
          highScore = highScore + timercountRemaining
          console.log(highScore)
          questionFeedback.textContent = "Correct";
        }
        else {
          answerButtonsElem.innerHTML = ""
          currentIndex++
          generateButtons();
          highScore = highScore - 10
          questionFeedback.textContent = "Incorrect";
        }
      }
      else {
        //set timer interval after all questions have been asked to 1 so game timer ends and runs game over function
        timercountRemaining = 1
        questionFeedback.innerHTML = ""
      }
    }
  });
  // Generates answer buttons
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
// when game is over function that stops game
function gameOver() {
  // if game over funtion is run timer count remaing stops and sets to 0
  timercountRemaining = 1

  questionDisplay.setAttribute("class", "hideButton");
  answerButtonsElem.setAttribute("class", "hideButton");
  endGameScreen();
};
//Display end screen function
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
  submit.setAttribute("class", "playButton ")
  submit.textContent = "Submit"
  formInputVar.appendChild(submit)

  // Event to Submit name and score to Local storage
  submit.addEventListener("click", function (event) {

    var newScore = {
      "name": nameInput.value,
      "score": highScore
    }
    //gets the current list and if no list creates one
    var ScoreExistingVar = JSON.parse(localStorage.getItem("HighScore"))
    if (!ScoreExistingVar) {
      ScoreExistingVar = []
    }
    //adds New score to list
    ScoreExistingVar.push(newScore);
    localStorage.setItem("HighScore", JSON.stringify(ScoreExistingVar));

    // checks to see if name has been enterd 
    if (nameInput.value == "") {
      console.log("No Value")
      alert("please enter a valid name");
      event.preventDefault();
    }
    //if value enteted dispalys scores
    else {
      DisplayHighScores();
    }

    function DisplayHighScores() {
      formInputVar.innerHTML = ""
      //iterates over all stored scores to display them in ul 
      for (i = 0; i <= ScoreExistingVar.length - 1; i++) {

        var displayAllHighscores = document.createElement("ul")
        displayAllHighscores.setAttribute("class", "scoresCurrent ")
        displayAllHighscores.textContent = "Name - " + ScoreExistingVar[i].name + " Score - " + ScoreExistingVar[i].score
        formInputVar.appendChild(displayAllHighscores)

      }
      //creates buttons for play again and clear scores
      var playAgain = document.createElement("button")
      playAgain.setAttribute("class", "navButton")
      playAgain.textContent = "Play Again"
      formInputVar.appendChild(playAgain)
      var clearScores = document.createElement("button")
      clearScores.setAttribute("class", "navButton clearScores")
      clearScores.textContent = "Clear Scores"
      formInputVar.appendChild(clearScores)

      //clears the local storage resetting high scores    
      clearScores.addEventListener("click", function () {
        ScoreExistingVar = []
        window.localStorage.clear();
        DisplayHighScores();
        console.log(window.localStorage.HighScore)
      });
    }
  });
}
//High score event listener to show high scores
viewHighScore.addEventListener("click", function (event) {
  var ScoreExistingVar = JSON.parse(localStorage.getItem("HighScore"))
  timercountRemaining = 1
  //sets the page blank to add new assets
  playButton.setAttribute("class", "hideButton")
  answerButtonsElem.innerHTML = ""
  questionDisplay.innerHTML = ""
  formInputVar.innerHTML = ""

  // if no score to display Alert!
  if (!ScoreExistingVar) {
    alert("sorry no scores to display")
  }
  // Displays all scores in ul 
  else {
    for (i = 0; i <= ScoreExistingVar.length - 1; i++) {

      var displayAllHighscores = document.createElement("ul")
      displayAllHighscores.setAttribute("class", "scoresCurrent ")
      displayAllHighscores.textContent = "Name - " + ScoreExistingVar[i].name + " / Score - " + ScoreExistingVar[i].score
      formInputVar.appendChild(displayAllHighscores)
      event.preventDefault();


    }
  };
  // creates buttons to navigate  
  var playAgain = document.createElement("button")
  playAgain.setAttribute("class", "navButton")
  playAgain.textContent = "Play Again"
  formInputVar.appendChild(playAgain)
  var clearScores = document.createElement("button")
  clearScores.setAttribute("class", "navButton clearScores")
  clearScores.textContent = "Clear Scores"
  formInputVar.appendChild(clearScores)
  //clears the local storage resetting high scores
  clearScores.addEventListener("click", function () {
    ScoreExistingVar = []
    window.localStorage.clear();
    DisplayHighScores();
    console.log(window.localStorage.HighScore)
  });
});



// listen for click of the play button 
playButton.addEventListener("click", function () {

  play_game();
  playButton.setAttribute("class", "hideButton");

});


