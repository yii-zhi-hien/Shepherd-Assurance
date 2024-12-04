
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form data
    const formData = new FormData(this);
    const formObject = {};

    // Convert FormData to a regular object
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Create the request payload (you can modify this as needed)
    const requestData = {
        name: formObject.name,
        email: formObject.email,
        phone: formObject.phone,
        type: formObject.enquiryType,
        comment: formObject.message
    };

    // Use fetch to send the data to the server (replace with your backend URL)
    fetch('https://email-app.shepherdassurance.com/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => {
        alert("Thank you for dropping us a message! We will reach out to you shortly.");
        window.location.reload();
    })
    .catch(error => {
        console.error("Error:", error);
        // alert("An unexpected error occurred. Please try again.");
    });
});
