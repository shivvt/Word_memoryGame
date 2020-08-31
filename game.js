var gamePattern = [];
var userClickedPattern = [];
var started = false;
var points = -1;






$(".btn").click(function() {
  if (!started) {

    nextSequence();
    started = true;
  }
});


$(document).keypress(function(event) {
  userClickedPattern.push(event.key);
  checkPattern(userClickedPattern.length - 1);

});

function nextSequence() {
  points++;
  $(".score").text("Score: " + points);
  userClickedPattern = [];
  var str = "abcdefghijklmnopqrstuvwxyz";

  var randomLetter = str.charAt(Math.floor(Math.random() * str.length));
  $("#level-title").text(randomLetter);
  gamePattern.push(randomLetter);

}


function checkPattern(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("You're a LOSER");
    setTimeout(function() {
      $("body").removeClass("game-over");
      $("#level-title").text("Oh its OK, I know you can do better!😃");
    }, 300);

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];

  started = false;
}
