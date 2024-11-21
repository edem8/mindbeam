


// document.addEventListener("DOMContentLoaded", function () {
//     const submitButton = document.getElementById("submitBtn");
//     const emailInput = document.getElementById("emailInput");



//     submitButton.addEventListener("click", function (event) {
   
//         const email = emailInput.value.trim();

//         // Validate email input && sendMail accordingly
//         if (validateEmail(email)) {
//             sendEmailToWaitlist(email);
//         } else {
//             alert("Please enter a valid email address.")
//         }
//     });

//     // Validate email input
//     function validateEmail(email) {
//         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         return emailRegex.test(email);
//     }

//     // Send email data
//     function sendEmailToWaitlist(email) {
//         fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 email: email,
//             }),
//         })
//             .then(response => {
//                 if (response.ok) {
//                     alert("You have been added to the waitlist")
//                     emailInput.value = ""; // Clear the input field after successful submission
//                 } else {
//                     alert("An error occurred. Please try again later.")
//                 }
//             })
//             .catch(error => {
//                 console.error("Error sending email:", error);
//                 alert("An error occurred. Please try again later.")
//             });
//     }
// });

