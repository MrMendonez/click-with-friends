/*jslint browser:true */
/*global window*/
// Scripts for Click With Friends game

$(document).ready(function(){
  //GLOBAL VARIABLES
  "use strict";
  var decTimer;
  var secondsLeft = 20;
  var count = 0;
  var clickableImages = document.getElementsByClassName("count-click");
  var startButton = document.getElementById("startButton");
  $('#verify').on('click',function(){
    $('#myMessages').text("Jean Carlos Henriquez verified this page");
    $('#myModal').modal({
      backdrop: 'static',
      show: true
    });
  })

// TIMER FUNCTIONS

  // Game over sequence
  function gameOver() {
    clearInterval(decTimer);

    if (count === 0) {
      $('#myMessages').empty();
      $('#myMessages').text("Your time is up! You didn't click any characters. You needed to click on all 20 characters. You lose!");
      $('#myModal').modal({
        backdrop: 'static',
        show: true
      }).on('hidden.bs.modal',function(){location.reload();});
    } else if (count === 1) {
      $('#myMessages').empty();
      $('#myMessages').text("Your time is up! You clicked " + count + " character. You need 19 more. You lose!");
      $('#myModal').modal({
        backdrop: 'static',
        show: true
      }).on('hidden.bs.modal',function(){location.reload();});
    } else {
      $('#myMessages').empty();
      $('#myMessages').text("Your time is up! You clicked on " + count + " characters. You need " + (20 - count) + " more. You lose!");
      $('#myModal').modal({
        backdrop: 'static',
        show: true
      }).on('hidden.bs.modal',function(){location.reload();});
    }

  }

  // Shows the countdown on the page. When countdown ends it initiates game over sequence
  function timer() {
    if(secondsLeft > 0) {
      secondsLeft = secondsLeft - 1;
      document.getElementById("time").innerHTML = secondsLeft;
    }else {
      gameOver();
    }
  }

// Sets countdown to decrease by 1 every second
  function startTimer() {
    var i;
    decTimer = setInterval(timer, 1000);
    for(i = 0; i < clickableImages.length; i+=1) {
      clickableImages[i].setAttribute("data-clickable", "true");
      startButton.setAttribute("class", "btn btn-danger btn-block center-block");
    }
  }

// Anonymous Function/Event Listener - Start countdown by clicking on start button:
  startButton.addEventListener("click", startTimer);

// CLICK COUNTER FUNCTIONS

  // Increase click count when player clicks on each character and
  // engages win message
  // if player wins.
  function counter() {
    if (this.getAttribute('data-clickable') === 'true') {
      count = count + 1;
      this.setAttribute('data-clickable', 'false');
      this.className = "img-circle count-click img-responsive center-block dimmed";
    }
    document.getElementById("clickTotal").innerHTML = count;
    if (count === 20) {
      clearInterval(decTimer);
      $('#myMessages').empty();
      $('#myMessages').text("You clicked all " + count + " characters in " + (20 - secondsLeft) + " seconds! You won! Congratulations! =) " +
                            "Now, can you do it faster?");
      $('#myModal').modal({
        backdrop: 'static',
        show: true
      }).on('hidden.bs.modal',function(){location.reload();});
    }
  }

// Anonymous Function/Event Listener - when player clicks on character
// counter function is engaged.
  var i;
  for(i = 0; i < clickableImages.length; i+=1) {
    clickableImages[i].addEventListener("click", counter);
  }

});