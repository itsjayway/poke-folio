function toggleSound(img) {
  img.src = img.src == "http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png" ? "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/music_off-512.png" :
    "http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png";
  // var sound = document.getElementById("welcomeSound");
  // sound.muted = sound.muted == true ? false : true;
  if (img.src == "http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png") {
    resumeAll();
  } else {
    muteAll();
  }
}
window.onload = function() {
  // collecting elements
  var welcomeSound = document.getElementById("welcomeSound");
  var welcomeTxt = document.getElementById("resume-text");
  //playing welcome sound on mouse over
  welcomeTxt.onload = function() {
    welcomeSound.play();
    return false;
  };
};

function playAttack() {
  var attack_sound = document.getElementById("attack-sound");
  attack_sound.play();
}

// sorry you had to see these...
document.getElementById("resume-text").addEventListener("mouseover", mouseOver);
document.getElementById("resume-text").addEventListener("mouseout", mouseOut);

document.getElementById("experience-text").addEventListener("mouseover", mouseOver);
document.getElementById("experience-text").addEventListener("mouseout", mouseOut);

document.getElementById("projects-text").addEventListener("mouseover", mouseOver);
document.getElementById("projects-text").addEventListener("mouseout", mouseOut);

document.getElementById("about-text").addEventListener("mouseover", mouseOver);
document.getElementById("about-text").addEventListener("mouseout", mouseOut);


document.getElementById("resume-text").addEventListener("click", showModal);
document.getElementById("experience-text").addEventListener("click", showModal);
document.getElementById("projects-text").addEventListener("click", showModal);
document.getElementById("about-text").addEventListener("click", showModal);

document.getElementById("modal-popup").addEventListener("click", hideModal);

document.getElementById("resume-close").addEventListener("click", showChoices);
document.getElementById("experience-close").addEventListener("click", showChoices);
document.getElementById("projects-close").addEventListener("click", showChoices);
document.getElementById("about-close").addEventListener("click", showChoices);
document.getElementById("final-close").addEventListener("click", hideModal);


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
  //test if hp-num == 0
  // then pop up final modal
  if (this.id != "resume-close") {
    if (parseInt(document.getElementById("hp-num").innerHTML) == 0) {
      document.getElementById("modal-popup").style.display = "flex";
      document.getElementById("modal-final").style.display = "initial";
    }
  }

  showChoices();
}

function showModal() {
  attack();
  console.log("after attack");


  setTimeout(function() {
    var ppNum;
    console.log("inside timeout");
    document.getElementById("modal-popup").style.display = "flex";
    if (this.id == "resume-text") {
      tempId = "modal-resume";
    } else if (this.id == "experience-text") {
      tempId = "modal-experience";
    } else if (this.id == "projects-text") {
      tempId = "modal-projects";
    } else if (this.id == "about-text") {
      tempId = "modal-about";
    }
    document.getElementById(tempId).style.display = "initial";
    console.log("outside if");
  }.bind(this), 700);

  console.log("outside setTimeout");
}

function mouseOver() {
  temp = this.innerHTML;
  document.getElementById("item-select").play();
  // this.innerHTML = this.id;
  target = document.getElementById("easter");
  if (this.id == "resume-text") {
    target.innerHTML = "PP 7/9 DARK";
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
