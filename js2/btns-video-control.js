const btnPlay = document.querySelector(".play.hide");
const btnPause = document.querySelector(".pause.show");
const btnSwitchOn = document.querySelector(".switchOn.show");
const btnSwitchOff = document.querySelector(".switchOff.hide");
const video = document.querySelector(".background-video");

const playButton = () => {
  video.play();
  btnPlay.classList.toggle("show");
  btnPause.classList.toggle("show");
};

const pauseButton = () => {
  video.pause();
  btnPause.classList.remove("show");
  btnPause.classList.add("hide");
  btnPlay.classList.toggle("show");
};

const switchOn = () => {
  btnSwitchOn.classList.remove("show");
  btnSwitchOn.classList.add("hide");
  btnSwitchOff.classList.add("show");
  video.muted = false;
};

const switchOff = () => {
  btnSwitchOn.classList.toggle("show");
  btnSwitchOff.classList.toggle("show");
  video.muted = true;
};

btnPlay.addEventListener("click", playButton);
btnPause.addEventListener("click", pauseButton);
btnSwitchOff.addEventListener("click", switchOff);
btnSwitchOn.addEventListener("click", switchOn);
