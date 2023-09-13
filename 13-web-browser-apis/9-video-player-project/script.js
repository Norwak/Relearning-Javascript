const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
let isProgressClicked = false;

function playVideo() {
  video.play()
  video.classList.add('playing');
  play.querySelector('i.fa').classList.remove('fa-play');
  play.querySelector('i.fa').classList.add('fa-pause');

}
function pauseVideo() {
  video.pause()
  video.classList.remove('playing');
  play.querySelector('i.fa').classList.remove('fa-pause');
  play.querySelector('i.fa').classList.add('fa-play');
}

function playPause() {
  if (video.classList.contains('playing')) {
    pauseVideo();
  } else {
    playVideo();
  }
}

play.addEventListener('click', playPause);

stop.addEventListener('click', () => {
  video.currentTime = 0;
  pauseVideo();
});

progress.addEventListener('change', () => {
  video.currentTime = (progress.value / 100) * video.duration;
  playVideo();
});

progress.addEventListener('mousedown', () => isProgressClicked = true);
progress.addEventListener('touchstart', () => isProgressClicked = true);

progress.addEventListener('mouseup', () => isProgressClicked = false);
progress.addEventListener('touchend', () => isProgressClicked = false);

video.addEventListener('click', playPause);

video.addEventListener('timeupdate', () => {
  // progress bar
  if (!isProgressClicked) {
    const currentTime = video.currentTime;
    const duration = video.duration;
    progress.value = (currentTime / duration) * 100;
  }

  // timestamp
  const currentTimeRounded = Math.floor(video.currentTime);
  const minutes = Math.floor(currentTimeRounded / 60);
  const seconds = currentTimeRounded % 60;
  timestamp.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

video.addEventListener('ended', () => {
  pauseVideo();
});