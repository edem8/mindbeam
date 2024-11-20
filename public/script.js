
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitBtn");
    const emailInput = document.getElementById("emailInput");
    


    submitButton.addEventListener("click", function () {



        const email = emailInput.value.trim();

        //validate email input && sendMail accordingly
        if (validateEmail(email)) {
            sendEmailToWaitlist(email);
        } else {
            alert("Please enter a valid email address.");
        }
    });



    // Validate email format (basic regex validation)
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    // Send email data to the server using Fetch API (POST request)
    function sendEmailToWaitlist(email) {
        fetch("https://your-backend-api.com/send-waitlist-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
            }),
        })
            .then(response => {
                if (response.ok) {
                    alert("You have been added to the waitlist!");
                    emailInput.value = ""; // Clear the input field after successful submission
                } else {
                    alert("There was an error. Please try again later.");
                }
            })
            .catch(error => {
                console.error("Error sending email:", error);
                alert("An error occurred. Please try again later.");
            });
    }
});
