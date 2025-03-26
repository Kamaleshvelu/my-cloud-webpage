// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value; // Add the clicked value to the display
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = ''; // Clear the display
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById("display");
    
    try {
        // Evaluate the mathematical expression in the display
        display.value = eval(display.value);
        
        // If eval fails or invalid input is provided, handle errors gracefully
        if (display.value === "Infinity" || isNaN(display.value)) {
            throw new Error("Invalid Calculation");
        }
        
    } catch (error) {
        // Display an error message temporarily
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear after showing error
    }
}
