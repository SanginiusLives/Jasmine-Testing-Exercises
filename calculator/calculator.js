window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");

  const values = {loan: 10000, time: 5, theRate: 5};
  loanAmount.value = values.loan;
  years.value = values.time;
  rate.value = values.theRate;
  update();


}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentStart = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentStart))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthRate = (values.rate / 100) / 12;
  const number = Math.floor(values.years * 12);
  return (
    (monthRate * values.amount) / (1 - Math.pow((1 + monthRate), -number))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthCal = document.getElementById("monthly-payment");
  monthCal.innerText = "$" + monthly
}
