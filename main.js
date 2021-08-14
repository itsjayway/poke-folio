var text = "";
function showText() {
  var curr = this.id;
  console.log(curr + " hovered");
  if (curr == "resume-icon") {
    text = "Resume";
    console.log("inside resumeif");
    console.log(text);
  }
  else if (curr == "game-icon") {
    text = "Pokemon";
    console.log("inside gameif");
    console.log(text);
  }
  else if (curr == "more-icon") {
    text = "More";
    console.log("inside moreif");
    console.log(text);
  }
  document.getElementById(curr).innerHTML = text;
}

function hideText() {
  var curr = this.id;
  console.log(curr + " hovered");
  if (curr == "resume-icon") {
    text = '<i class="fa fa-file-text" aria-hidden="true">';
    console.log("inside resumeif");
    console.log(text);
  }
  else if (curr == "game-icon") {
    text = '<i class="fa fa-gamepad"></i>';
    console.log("inside gameif");
    console.log(text);
  }
  else if (curr == "more-icon") {
    text = '<i class="fa fa-sign-in" aria-hidden="true">';
    console.log("inside moreif");
    console.log(text);
  }
  document.getElementById(curr).innerHTML = text;
}
