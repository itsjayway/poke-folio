// let resume_icon = document.getElementById("resume-icon");
// let game_icon = document.getElementById("game-icon");
// let more_icon = document.getElementById("more-icon");
//
// resume_icon.addEventListener("mouseover", showText);
// game_icon.addEventListener("mouseover", showText);
// more_icon.addEventListener("mouseover", showText);

function showText() {
  var curr = this.id;
  var text = "";
  if (curr == "resume-icon") {
    text = "Resume";
  }
  else if (curr == "game-icon") {
    text = "Pokemon";
  }
  else if (curr == "more_icon") {
    text = "More";
  }
  document.getElementById("curr").innerHTML = text;
}
