
document.getElementById(emailInput)

function sendMail() {


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "eddieblack159@gmail.com",
        Password: "A17867125C51956A1AF7C0155B992C65D75D",
        To: 'eddieblack159@gmail.com',
        From: "kwakuedem80@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}