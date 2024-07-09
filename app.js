document.getElementById("nameplate").onclick = function () {
  soundPlay();
};

function soundPlay() {
  var audio = new Audio("squeak.mp3");
  audio.volume = 0.3;
  audio.play();
  console.log("Squeak!");
}
