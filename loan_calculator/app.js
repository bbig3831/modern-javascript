// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

// Calculate results function
function calculateResults(e) {
  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  // Result variables
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // Calculations
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / (100*12);
  const calculatedPayments = parseFloat(years.value) * 12;

  // Monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x-1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly *calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly* calculatedPayments) - principal).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }
}

// Show error function
function showError(){

  // None results
  document.getElementById('results').style.display = 'none';
  
  // Hide loader
  document.getElementById('loading').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';
  errorDiv.role = 'alert';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error function
function clearError() {
  document.querySelector('.alert').remove();
}