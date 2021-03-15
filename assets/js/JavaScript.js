var navButton = document.querySelector(".navButton")


function play() {
  console.log("var");
}

document.getElementById("#navButton").addEventListener("click", function (event) {
  play();
  

  document.getElementById("navButton").removeEventListener()
});

play();

// function (event){}