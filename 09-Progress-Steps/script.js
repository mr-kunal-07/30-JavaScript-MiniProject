// Get DOM elements for the progress bar, buttons, and circle steps
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// Set the initial active circle to 1 (first circle)
let currentActive = 1;

// Event listener for the 'Next' button click
next.addEventListener('click', () => {
    // Increment the current active step
    currentActive++;

    // Prevent currentActive from exceeding the number of circles
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    // Call the update function to reflect changes in the UI
    update();
});

// Event listener for the 'Previous' button click
prev.addEventListener('click', () => {
    // Decrement the current active step
    currentActive--;

    // Prevent currentActive from going below 1 (first circle)
    if (currentActive < 1) {
        currentActive = 1;
    }

    // Call the update function to reflect changes in the UI
    update();
});

// Function to update the UI based on the currentActive step
function update() {
    // Loop through each circle to check its position relative to currentActive
    circles.forEach((circle, idx) => {
        // Add 'active' class to circles that are less than or equal to currentActive
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            // Remove 'active' class from circles greater than currentActive
            circle.classList.remove('active');
        }
    });

    // Select all circles that currently have the 'active' class
    const actives = document.querySelectorAll('.active');

    // Update the width of the progress bar based on the active circles
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // Disable the 'Previous' button if we're on the first step
    if (currentActive === 1) {
        prev.disabled = true;
        // Disable the 'Next' button if we're on the last step
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        // Enable both buttons when we are between the first and last steps
        prev.disabled = false;
        next.disabled = false;
    }
}
