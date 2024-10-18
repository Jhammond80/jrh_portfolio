// Function to generate random stars on the page
function generateStars() {
    const starCount = 300;  // Number of stars
    const body = document.querySelector('body');

    for (let i = 0; i < starCount; i++) {
        // Create a star element
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random size for the star
        const size = Math.random() * 3 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;

        // Random position for the star
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';

        // Random animation duration for twinkling
        star.style.animationDuration = Math.random() * 2 + 1 + 's';

        // Append the star to the body
        body.appendChild(star);
    }
}

// Call the function to generate stars when the page loads
window.onload = generateStars;
