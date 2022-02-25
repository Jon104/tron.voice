var audio = null

export const playMusic = () => {
  audio = new Audio('./weBuiltThisCity.mp3');
  audio.play();
}

export const stopMusic = () => {
  audio.pause();
  audio.currentTime = 0;
}
