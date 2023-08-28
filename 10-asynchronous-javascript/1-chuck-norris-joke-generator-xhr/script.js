const output = document.getElementById('joke');

function getJoke() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    const response = JSON.parse(this.responseText);

    output.innerText = response.value;
  });

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.send();
}

document.getElementById('joke-btn').addEventListener('click', getJoke);
getJoke();