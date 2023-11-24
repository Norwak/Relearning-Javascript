const poll = new Map();
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0);

function displayResults() {
  const results = document.getElementById('results');
  results.innerHTML = '';
  for (const [option, votes] of poll) {
    const optionElement = `
    <div class="border-bottom p-2 d-flex justify-content-between">
      <strong>${option}:</strong> ${votes} votes
    </div>
    `;
    results.insertAdjacentHTML('beforeend', optionElement);
  }
}

document.getElementById('poll-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const selectedOption = document.querySelector('input[name="poll-option"]:checked');

  if (!selectedOption) {
    alert('Please select an option!');
    return;
  }

  poll.set(selectedOption.value, poll.get(selectedOption.value) + 1);

  displayResults();
});