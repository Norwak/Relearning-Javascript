const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const volume = document.getElementById('volume');

const currentTime = document.getElementById('current-time');

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
stop.addEventListener('click', function () {
  audio.pause();
  audio.currentTime = 0;
});

audio.addEventListener('timeupdate', function() {
  currentTime.innerHTML = audio.currentTime;
});

volume.addEventListener('change', function() {
  audio.volume = volume.value;
});