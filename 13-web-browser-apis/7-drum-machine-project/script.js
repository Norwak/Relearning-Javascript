let timeout;

function playSound(e) {
  const key = e.code;
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);

  if (audio === null) return;

  audio.currentTime = 0;
  audio.play();
  keyElement.classList.add('playing');

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    keyElement.classList.remove('playing');
  }, 100);
}

window.addEventListener('keydown', playSound);