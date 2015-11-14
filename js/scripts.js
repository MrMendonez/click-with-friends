// scripts for click with friends game

var decTimer;

function startTimer(){
  decTimer = setInterval(timer, 1000);
};

document.getElementById("startButton").addEventListener("click", startTimer);

var secondsLeft = 20;

var count = 0
var clickableImages = document.getElementsByClassName("count-click");

function timer() {
  if(secondsLeft > 0) {
    document.getElementById("time").innerHTML = secondsLeft-=1;
  } else {
      document.getElementById("timeLine").innerHTML = "Your time is up.";
      document.getElementById("timeLine").className = "change";
      alert("Congratulations! You click " + count + " characters!");
      clearInterval(decTimer);
  }
}

function counter() {
  if (this.getAttribute('data-clickable') == 'true') {
    count++;
    this.setAttribute('data-clickable', 'false');
  }
  document.getElementById("clickTotal").innerHTML = count;
}

for(i = 0; i < clickableImages.length; i++) {
  clickableImages[i].addEventListener("click", counter); 
}

  

// from shamoon's demo

// var secondsCount = 0;
// var timerInterval;
// var toggleBtn = document.getElementById("toggleBtn");

// setTimeout(function() {
//   toggleBtn.parentNode.removeChild(toggleBtn);
//   alert("You need to playfast!");
// }, 15000);

// function addSeconds() {
//   secondsCount++;
// }

// function toggleTime()  {
//   if(this.getAttribute("data-slate") === "start") {
//     this.innerHTML = "Stop";
//     this.setAttribute("data-state", "stop");
//     secondsCount = 0;
//     timerInterval = setInterval(addSeconds, 1000);
//   } else {

//   }
// }