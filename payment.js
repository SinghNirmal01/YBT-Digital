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
document.querySelector('#upi').style.boxShadow = ' 5px 5px 8px #777 inset'
setTimeout(()=>{
  document.querySelector('#upi').style.boxShadow = ' -5px -5px 8px #777 inset'
},250)
    }, function(err) {
        alert('Could not copy text. Please try again.');
        console.error('Could not copy text: ', err);
    });
}
let formData;
let orderId;
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
   formData = new FormData(this);
document.getElementById('order-confirmation-container').style.display = 'block';



orderId = Math.floor(Math.random()*99999)
document.querySelector('#order-id').innerHTML =` Order Number: <strong>#${orderId}</strong>`




});

document.getElementById('order-now').addEventListener('click', function() {
  
  fetch('https://script.google.com/macros/s/AKfycbyd_Eqhk268vnt6riDqes5LeBWmccgT4NtcH-K2lqvqXPO45jXHfnubIAz68h806Gaw/exec', {
    method: 'POST',
    body: formData
  }).then(function(response) {
    return response.text();
  }).then(function(text) {
    if (text === 'Success') {
    window.location.href = 'success.html';

    } else {
      alert('Something went wrong. Please try again.');
    }
  }).catch(function(error) {
    alert('Error: ' + error);
  });

  
});