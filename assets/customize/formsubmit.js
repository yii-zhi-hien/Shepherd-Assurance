document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    const recaptchaResponse = grecaptcha.getResponse(); // Get reCAPTCHA response token

    if (!recaptchaResponse) {
        //alert("Please complete the reCAPTCHA");
        //return;
    }
    
    showLoading();

    // Get form data
    const formData = new FormData(this);
    const formObject = {};

    // Convert FormData to a regular object
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Create the request payload with the reCAPTCHA response
    const requestData = {
        name: formObject.name,
        email: formObject.email,
        phone: formObject.phone,
        type: formObject.enquiryType,
        comment: formObject.message,
        recaptchaResponse: recaptchaResponse // Add reCAPTCHA response token
    };

    Use fetch to send the data to the server (replace with your backend URL)
    fetch('https://email-app.shepherdassurance.com/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            hideLoading();
            alert("Thank you for dropping us a message! We will reach out to you shortly.");
            window.location.reload();
        } else {
            alert("Failed to send the message. Please try again.");
        }
    })
    .catch(error => {
        hideLoading();
        console.error("Error:", error);
        alert("An unexpected error occurred. Please try again.");
    });
});


function showLoading() {
    document.getElementById('loadingOverlay').classList.remove('hide');
    document.getElementById('loadingSpinner').classList.remove('hide');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.add('hide');
    document.getElementById('loadingSpinner').classList.add('hide');
}