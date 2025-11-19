document.addEventListener("DOMContentLoaded", function() {
  
  // 1. GET DATA FROM URL (Sent from Booking Page)
  const params = new URLSearchParams(window.location.search);
  const sessionName = params.get('session');
  const sessionPrice = params.get('price');

  const titleElement = document.getElementById('sessionTitle');
  const priceElement = document.getElementById('sessionPrice');

  // Display the data
  if (sessionName) {
    titleElement.innerText = `Booking: ${sessionName}`;
  }
  if (sessionPrice) {
    priceElement.innerText = `Total: R${sessionPrice}`;
  }

  // 2. HANDLE FORM SUBMISSION
  const form = document.getElementById('cardForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page refresh

    const btn = document.querySelector('.pay-btn');
    btn.innerText = "Processing...";
    btn.style.backgroundColor = "#555";

    // Fake processing delay (2 seconds) -> Then go to Success
    setTimeout(() => {
      window.location.href = "success.html";
    }, 2000);
  });
});

// 3. SELECT PAYMENT METHOD (Toggles the form)
function selectMethod(method) {
  const form = document.getElementById('cardForm');
  const status = document.getElementById('status');

  if (method === 'Card') {
    form.classList.remove('hidden'); // Show form
    status.innerText = "";
  } else {
    form.classList.add('hidden'); // Hide form
    // For Apple/Google Pay, we just show a message for this demo
    status.innerText = `Redirecting to ${method}... (Simulation)`;
    
    // Simulate auto-redirect for Google/Apple Pay
    setTimeout(() => {
      window.location.href = "success.html";
    }, 2000);
  }
}