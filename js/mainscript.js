var countdown =10;
var seconds = 0;
var running = false;
var flashing = false;

$(document).ready(function() {
  updateClock();
});

function flashDispaly() {
  if (flashing) {
    $("#clock").toggleClass("bg-red");
    setTimeout(flashDispaly, 500);
  } else {
    $("#clock").removeClass("bg-red");
  }
}

function updateDisplay() {
  var str = ("00" + countdown).slice(-2);
  if (seconds % 2 && running) {
    str += ' ';
  } else {
    str += ':';
  }
  str += ("00" + seconds).slice(-2);
  $("#time").text(str);
}

function updateClock() {
  if (running) {
    if (countdown > 0 || seconds > 0) {
      seconds--;
      if (seconds <= 0 && countdown > 0) {
        countdown--;
        seconds = 59;
      }

    } else {
      running = false;
      flashing = true;
      flashDispaly();
    }
    setTimeout(updateClock, 1000);
  }
  updateDisplay();
}

$('#plus').click(function() {
  countdown += 1;
  updateDisplay();
});

$('#minus').click(function() {
  if (countdown > 0) {
    countdown -= 1;
  }
  updateDisplay();
});

$('#toggle').click(function() {
  if (running || flashing) {
    running = false;
    flashing = false;
    $("#toggle .text").html("start");
    $("#toggle .icon").html("<i class='fa fa-play'></i>");
  } else {
    running = true;
    $("#toggle .text").html("stop");
    $("#toggle .icon").html("<i class='fa fa-pause'></i>");
  }
  setTimeout(updateClock, 1000);
});

$('#reset').click(function() {
  running = false;
  flashing = false;
  countdown = 10;
  seconds = 0;
  $("#toggle .text").html("start");
  $("#toggle .icon").html("<i class='fa fa-play'></i>");
  updateDisplay();
});