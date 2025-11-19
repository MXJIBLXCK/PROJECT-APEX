document.getElementById("enquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let service = document.getElementById("service").value;
    let details = document.getElementById("details").value.trim();
    let response = document.getElementById("responseMsg");

    // Validation
    if (!name || !email || !service || !details) {
        response.style.color = "red";
        response.textContent = "Please fill in all fields before submitting.";
        response.classList.remove("hidden");
        return;
    }

    // Simulate sending
    response.style.color = "#ff9800";
    response.textContent = "Sending your enquiry...";
    response.classList.remove("hidden");

    setTimeout(() => {
        response.style.color = "#00e676";
        response.textContent = `Thanks ${name}! Your enquiry about "${service}" has been sent successfully. We’ll respond shortly.`;
    }, 1500);
});
