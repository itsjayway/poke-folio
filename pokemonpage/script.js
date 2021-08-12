function toggleSound(img) {
  img.src = img.src == "http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png" ? "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/music_off-512.png" :
    "http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png";
  if (img.src == "http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png") {
    resumeAll();
  } else {
    muteAll();
  }
}

function toggleMusic(img) {
  var music_on = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Music_run.svg/640px-Music_run.svg.png";
  var music_off = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Music_cancel.svg/640px-Music_cancel.svg.png"
  img.src = img.src == music_on ? music_off :
    music_on;
  if (img.src == music_on) {
    resumeAll();
  } else {
    document.getElementById("welcomeSound").pause();
  }


}

function playAttack() {
  var attack_sound = document.getElementById("attack-sound");
  attack_sound.play();
}

let close_button = document.getElementById("resume-close");
close_button.addEventListener("click", hideModal);
var temp = "";
var tempId = "";
var hideId = "";
var ppId = "";
// var f = "PP 7/9 DARK";
// f[3] = parseInt(f[3])--.toString();

function hideModal() {
  hideId = tempId;
  document.getElementById("modal-popup").style.display = "none";
  document.getElementById(hideId).style.display = "none";
  document.getElementById("typewriter-sentence").style.display = "none";
  //test if hp-num == 0
  // then pop up final modal
  if (this.id != "resume-close") {
    if (parseInt(document.getElementById("hp-num").innerHTML) <= 0) {
      document.getElementById("modal-popup").style.display = "flex";
      document.getElementById("modal-final").style.display = "initial";
      document.getElementById("form-contents").style.display = "initial";
    }
  }

  showChoices();
}

function showModal() {
  attack();
  console.log("after attack");
  if (this.id == "resume-text") {
    tempId = "modal-resume";
    typewriter_contents = "Jibran showed his resume!";
  } else if (this.id == "experience-text") {
    tempId = "modal-experience";
    typewriter_contents = "Jibran did a back flip!";
  } else if (this.id == "projects-text") {
    tempId = "modal-projects";
    typewriter_contents = "Jibran compiled a project!";
  } else if (this.id == "about-text") {
    tempId = "modal-about";
    typewriter_contents = "Jibran told his past!";
  }
  var sent = document.getElementById("typewriter-sentence");
  sent.style.display = "flex";
  var typewriter_contents;
  sent.innerHTML = typewriter_contents;
  reset_animation();

  setTimeout(function() {
    document.getElementById("modal-popup").style.display = "flex";
    document.getElementById(tempId).style.display = "initial";
    document.getElementById("typewriter-sentence").style.display = "none";
  }.bind(this), 3000);


  console.log("outside setTimeout");
}

function reset_animation() {
  var el = document.getElementById('typewriter-id');
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = null;
}

function mouseOver() {
  temp = this.innerHTML;
  document.getElementById("item-select").play();
  target = document.getElementById("easter");
  if (this.id == "resume-text") {
    target.innerHTML = "PP 7/9 DARK";
    // target.innerHTML = "PP " + temp +"/9 DARK";
  } else if (this.id == "experience-text") {
    target.innerHTML = "PP 5/6 PSYCHIC";
  } else if (this.id == "projects-text") {
    target.innerHTML = "PP 6/6 STEEL";
  } else if (this.id == "about-text") {
    target.innerHTML = "PP 1/1 FIRE";
  } else {
    target.innerHTML = "";
  }

}

function mouseOut() {
  target = document.getElementById("easter");
  target.innerHTML = "";
  this.innerHTML = temp;
}

function showChoices() {
  if (this.id != "resume-close") {
    if (parseInt(document.getElementById("hp-num").innerHTML) == 0) {
      document.getElementById("modal-popup").style.display = "flex";
      document.getElementById("modal-final").style.display = "initial";
      document.getElementById("victorySound").play();
      document.getElementById("welcomeSound").pause();
    } else {
      choice_container = document.getElementById("choice-container");
      choice_container.style.display = "initial";
    }
  }
}

function removeVal(array, val) {
  return arr.filter(function(v) {
    return v != val;
  });
}

function attack() {
  playAttack();
  let colors = ["red", "orange", "green", "yellow", "blue", "purple"];
  const curr = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("attack").style.backgroundColor = curr;
  document.getElementById("attack").style.display = "inline";

  var hpnum = document.getElementById("hp-num").innerHTML;
  var next_hpnum = parseInt(hpnum) - 5;

  var oldbar = hp.clientWidth;

  console.log(oldbar);
  if (parseInt(oldbar) < 35 || next_hpnum == 0) {
    var hpbar = 0 + "px";
  } else {
    var hpbar = parseInt(oldbar) - (parseInt(oldbar) * .2) + "px";
  }

  choice_container = document.getElementById("choice-container");
  choice_container.style.display = "none";

  let start = Date.now(); // remember start time

  let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 680) {
      clearInterval(timer); // finish the animation after 2 seconds
      return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);

  }, 20);
  setTimeout(function() {
    hideAttack();
    document.getElementById("hp-num").innerHTML = next_hpnum.toString();
    if (next_hpnum <= 10) {
      hp.style.backgroundColor = "yellow";
      if (next_hpnum <= 5) {
        hp.style.backgroundColor = "red";
      }
    }

    hp.style.width = hpbar.toString();
    console.log(getComputedStyle(hp).width);
  }, 680);

}

function hideAttack() {
  document.getElementById("attack").style.display = "none";
}

function draw(timePassed) {
  document.getElementById("attack").style.left = 30 + timePassed / 15 + 'vw';
  document.getElementById("attack").style.top = 26 + 3 - timePassed / 25 + 'vw';
}

function mute(sound) {
  sound.muted = true;
  sound.pause();
}

function unmute(sound) {
  sound.muted = false;
}

function muteAll() {
  var sounds = document.querySelectorAll("audio");

  [].forEach.call(sounds, function(sound) {
    mute(sound);
  });
}

function resumeAll() {
  var sounds = document.querySelectorAll("audio");

  [].forEach.call(sounds, function(sound) {
    unmute(sound);
  });
  document.getElementById("welcomeSound").play();
}
