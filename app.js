const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.querySelector('h1').style.transform = 'translateY(-50px)'; // Move H1 text up
        box.querySelector('p').style.top = '50%'; // Center the P text vertically
        box.querySelector('p').style.transform = 'translateY(-50%)'; // Ensure it stays centered
        box.querySelector('p').style.opacity = '1'; // Make the P text visible
    });

    box.addEventListener('mouseleave', () => {
        box.querySelector('h1').style.transform = 'translateY(0)'; // Reset H1 text position
        box.querySelector('p').style.top = '100%'; // Hide the P text
        box.querySelector('p').style.transform = 'translateY(0)'; // Reset transform
        box.querySelector('p').style.opacity = '0'; // Make the P text invisible
    });
});

