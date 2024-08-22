document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".hidden", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.2,
        rotateX: 0
    });
    
});



function copyText() {
    var text = "brajendrayoubtech062@fam";
    navigator.clipboard.writeText(text).then(function() {

    }, function(err) {
        alert('Could not copy text. Please try again.');
        console.error('Could not copy text: ', err);
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbyd_Eqhk268vnt6riDqes5LeBWmccgT4NtcH-K2lqvqXPO45jXHfnubIAz68h806Gaw/exec ', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        if (text === 'Success') {
            document.getElementById('success-message').style.display = 'block';
            document.getElementById('contact-form').reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    }).catch(function(error) {
        alert('Error: ' + error);
    });
});
