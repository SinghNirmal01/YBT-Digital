document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".hidden", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.1,
        rotateX: 0
    });
    
});



function addToCart(productName, price) {
    window.location.href = 'payment.html';
}








document.querySelectorAll('.rating input').forEach(input => {
    input.addEventListener('change', function() {
        const allLabels = document.querySelectorAll('.rating label');
        allLabels.forEach(label => label.style.color = '#ddd');
        document.querySelector('#rating-message').style.display = 'block'
        const checkedLabel = document.querySelector(`label[for=${this.id}]`);
        let currentLabel = checkedLabel;

        while (currentLabel) {
            currentLabel.style.color = '#ffcc00';
            currentLabel = currentLabel.previousElementSibling;
        }
    });
});


const gallery = document.querySelector('.gallery');

gallery.addEventListener('touchstart', () => {
    gallery.style.animationPlayState = 'paused';
});

gallery.addEventListener('touchend', () => {
    gallery.style.animationPlayState = 'running';
});
gallery.addEventListener('click', () => {
    gallery.style.animationPlayState = 'paused';
});