const loanForm = document.getElementById('loan-form');
const amountInput = document.getElementById('loan-amount');
const interestInput = document.getElementById('loan-interest');
const yearsInput = document.getElementById('loan-years');
const loanResults = document.getElementById('loan-results');
const monthlyResult = document.getElementById('monthly-result');
const paymentResult = document.getElementById('payment-result');
const interestResult = document.getElementById('interest-result');
const errMsg = document.getElementById('error');
const spinner = document.getElementById('spinner');


// https://stackoverflow.com/a/58550111
const isNumeric = (num) => (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num);


function showError(msg) {
  errMsg.style.transform = 'translateY(-450px) translateX(-50%)';
  errMsg.innerText = msg;

  setTimeout(() => {
    errMsg.style.transform = 'translateY(-1000px) translateX(-50%)';
  }, 3000);
}


function onLoanFormSubmit(e) {
  e.preventDefault();

  // Validate input
  if (amountInput.value === '') {
    showError('Please fill in amount field!');
    return;
  }
  if (interestInput.value === '') {
    showError('Please fill in interest field!');
    return;
  }
  if (yearsInput.value === '') {
    showError('Please fill in years field!');
    return;
  }

  // Calculate values
  const principal = parseFloat(amountInput.value);
  const monthlyInterest = parseFloat(interestInput.value) / 100 / 12;
  const numberOfPayments = parseFloat(yearsInput.value) * 12;

  const x = Math.pow(1 + monthlyInterest, numberOfPayments);
  const monthly = ((principal * x * monthlyInterest) / (x - 1)).toFixed(2);
  const total = (monthly * numberOfPayments).toFixed(2);
  const interest = (monthly * numberOfPayments - principal).toFixed(2);

  // Validate calculations
  if (!isNumeric(monthly)) {
    showError('Please check your numbers');
    return;
  }

  // Clear old results
  loanResults.style.display = 'none';
  monthlyResult.innerText = '';
  paymentResult.innerText = '';
  interestResult.innerText = '';

  // Display results
  monthlyResult.innerText = '$' + monthly;
  paymentResult.innerText = '$' + total;
  interestResult.innerText = '$' + interest;

  // Show spinner and then results
  spinner.style.display = 'block';
  setTimeout(() => {
    spinner.style.display = 'none';
    loanResults.style.display = 'block';
  }, 1000);
}

loanForm.addEventListener('submit', onLoanFormSubmit);