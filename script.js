
// Create a variable to store the counter value
let count = 0;

// Get the counter element from HTML
let countDisplay = document.getElementById("count");

// Get the three buttons from HTML
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

// Increase button functionality
increaseBtn.addEventListener("click", function () {

    // Add 1 to the counter
    count++;

    // Display the updated number
    countDisplay.textContent = count;

});

// Decrease button functionality
decreaseBtn.addEventListener("click", function () {

    // Subtract 1 from the counter
    count--;

    // Display the updated number
    countDisplay.textContent = count;

});

// Reset button functionality
resetBtn.addEventListener("click", function () {

    // Set the counter back to zero
    count = 0;

    // Display zero
    countDisplay.textContent = count;

});
