// parameters
var button;
var sound;
var sound_img;
var sound_idx;
var slider;
var intensity;
var vol_img;


// event functions
function init() {
  button = document.getElementById("honk-btn");
  sound = document.getElementById("horn-sound");
  sound_img = document.getElementById("sound-image");
  sound_idx = document.getElementById("audio-selection");
  slider = document.getElementById("volume-slider");
  intensity = document.getElementById("volume-number");
  vol_img = document.getElementById("volume-image");


  // init listeners
  document.getElementById("radio-air-horn").addEventListener("click",
      update_sounds);
  document.getElementById("radio-car-horn").addEventListener("click",
      update_sounds);
  document.getElementById("radio-party-horn").addEventListener("click",
      update_sounds);

  button.addEventListener("click", honk);
  intensity.addEventListener("change", intensity_changed);
  slider.addEventListener("change", slider_changed);
}

function honk(event) {
  event.preventDefault();
  sound.play();
}

function update_sounds() {
  if(document.getElementById("radio-air-horn").checked) {
    sound.src = "./assets/media/audio/air-horn.mp3";
    sound_img.src = "./assets/media/images/air-horn.svg";
  }
  else if(document.getElementById("radio-car-horn").checked) {
    sound.src = "./assets/media/audio/car-horn.mp3";
    sound_img.src = "./assets/media/images/car.svg";
  }
  else {
    sound.src = "./assets/media/audio/party-horn.mp3";
    sound_img.src ="./assets/media/images/party-horn.svg";
  }
}

function update_volume() {
  // update volume value
  sound.volume = intensity.value/100;
  // button.disabled = false;
  // update volume icon
  if (intensity.value >= 67) {
    vol_img.src = "./assets/media/icons/volume-level-3.svg";
  }
  else if (intensity.value >= 34) {
    vol_img.src = "./assets/media/icons/volume-level-2.svg";
  }
  else if (intensity.value >= 1) {
    vol_img.src = "./assets/media/icons/volume-level-1.svg";
  }
  else {
    vol_img.src = "./assets/media/icons/volume-level-0.svg";
    button.disabled = true;
  }
}

function slider_changed() {
  intensity.value = slider.value;
  update_volume();
}

function intensity_changed() {
  slider.value = intensity.value;
  update_volume();
}

// init document
document.addEventListener("DOMContentLoaded", init);
