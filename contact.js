const formContact = document.querySelector('.contact-form');
formContact.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let formData = {
        "access_key" : "f969745d-6f56-4093-816d-5bffec043b3f",
        "name" : name,
        "email" : email,
        "subject" : subject,
        "message" : message
    }
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(formData) 
    }) .then(function(response) {
        return response.json();
    }) .then(function(data) {
        if (data.success === true) {
            alert('Votre message a bien été envoyé');
        } else {
            alert('Une erreur est survenue, veuillez réessayer');
        }
    })
})