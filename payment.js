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
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
   formData = new FormData(this);
document.getElementById('order-confirmation').style.display = 'block';
});

document.getElementById('order-now').addEventListener('click', function() {
  
  fetch('https://script.google.com/macros/s/AKfycbyd_Eqhk268vnt6riDqes5LeBWmccgT4NtcH-K2lqvqXPO45jXHfnubIAz68h806Gaw/exec', {
    method: 'POST',
    body: formData
  }).then(function(response) {
    return response.text();
  }).then(function(text) {
    if (text === 'Success') {
      // Hide the contact form
     
alert('Your order has been placed successfully!');

      // Show the order confirmation
      
    } else {
      alert('Something went wrong. Please try again.');
    }
  }).catch(function(error) {
    alert('Error: ' + error);
  });
  // Process the order here
  
  // Optionally, you can redirect the user to a different page or reset the UI
  // window.location.href = 'order-success.html';
});