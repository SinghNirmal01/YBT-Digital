function copyText() {
    var text = "brajendrayoubtech062@fam";
    navigator.clipboard.writeText(text).then(function () {
        alert("UPI copied to clipboard: " + text);
    }, function (err) {
        alert('Could not copy text. Please try again.');
        console.error('Could not copy text: ', err);
    });
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbyd_Eqhk268vnt6riDqes5LeBWmccgT4NtcH-K2lqvqXPO45jXHfnubIAz68h806Gaw/exec', {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        if (text === 'Success') {
            gsap.to("#success-message", { opacity: 1, duration: 1 });
            document.getElementById('contact-form').reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    }).catch(function (error) {
        alert('Error: ' + error);
    });
});

// GSAP Animations
window.onload = function () {
    gsap.from("nav", { y: -50, opacity: 0, duration: 1 });
    gsap.to("form", { opacity: 1, x: 0, duration: 1 });
    gsap.to(".how-to-buy", { opacity: 1, duration: 1.5 });
}