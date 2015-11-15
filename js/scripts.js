// scripts for Click With Friends game

var decTimer;
var secondsLeft = 3;
var count = 0;
var clickableImages = document.getElementsByClassName("count-click");

// TIMER FUNCTIONS

// Start countdown by clicking on start button:
document.getElementById("startButton").addEventListener("click", startTimer);

// Sets countdown to decrease by 1 every second
function startTimer(){
  decTimer = setInterval(timer, 1000);
  this.setAttribute('data-clickable', 'true');
};

// Shows the countdown on the page. When countdown ends it initiates game over sequence
function timer() {
  if(secondsLeft > 0) {
    document.getElementById("time").innerHTML = secondsLeft-=1;
  } else {
      gameOver();
      location.reload();
  }
};

// Game over sequence
function gameOver() {
  alert("Your time is up!");
  if (count === 20) {
    alert("You clicked all " + count + " characters! You won! Congratulations!")
  } else if (count === 0) {
    alert("You didn't click any charcters. You needed to click on all 20 characters. You lose!")
  } else if (count === 1) {
    alert("You clicked " + count + " character. You needed to click on 19 more. You lose!")
  } else {
    alert("You clicked on " + count + " characters. You needed to click on " + (20 - count) + " more. You lose!")
  }
  clearInterval(decTimer);
};

// CLICK COUNTER FUNCTIONS

function counter() {
  if (this.getAttribute('data-clickable') == 'true') {
    count++;
    this.setAttribute('data-clickable', 'false');
  }
  document.getElementById("clickTotal").innerHTML = count;
};

for(i = 0; i < clickableImages.length; i++) {
  clickableImages[i].addEventListener("click", counter); 
};