// Conversion rates relative to meter
const unitConversions = {
    "kilometre": 1000,
    "metre": 1,
    "centimetre": 0.01,
    "millimetre": 0.001,
    "micrometre": 0.000001,
    "nanometre": 1e-9,
    "mile": 1609.34,
    "yard": 0.9144,
    "foot": 0.3048,
    "inch": 0.0254,
    "nautical-mile": 1852,
};

// Function to convert units
function convert(inputValue, inputUnit, outputUnit) {
    // Check if input unit and output unit are valid
    if (!unitConversions[inputUnit] || !unitConversions[outputUnit]) {
        throw new Error(`Invalid unit: ${inputUnit} or ${outputUnit}`);
    }

    // Convert the input value to meters first
    const meters = inputValue * unitConversions[inputUnit];

    // Check for division by zero
    if (unitConversions[outputUnit] === 0) {
        throw new Error("Division by zero");
    }

    // Convert from meters to the output unit
    const result = meters / unitConversions[outputUnit];

    return result;
}

// Function to handle input and output conversion
function handleConversion() {
    try {
        const inputValue = parseFloat(document.getElementById("inputValue").value);
        const inputUnit = document.getElementById("inputUnit").value;
        const outputUnit = document.getElementById("outputUnit").value;

        if (isNaN(inputValue)) {
            throw new Error("Please enter a valid number.");
        }

        const result = convert(inputValue, inputUnit, outputUnit);
        document.getElementById("outputValue").value = result.toFixed(6);
    } catch (error) {
        alert(error.message);
    }
}

// Function to handle navigation between Home and About
function setupNavigation() {
    // Event listener for "About" button to navigate to 'about.html'
    const aboutButton = document.getElementById('aboutBtn');
    if (aboutButton) {
        aboutButton.addEventListener('click', function () {
            window.location.href = 'about.html';
        });
    }

    // Event listener for "Home" button to navigate to 'index.html'
    const homeButton = document.getElementById('homeBtn');
    if (homeButton) {
        homeButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
}

// Initialize event listeners for conversion inputs and units
function setupConversionListeners() {
    document.getElementById("convertBtn").addEventListener("click", handleConversion);
    document.getElementById("inputValue").addEventListener("input", handleConversion);
    document.getElementById("inputUnit").addEventListener("change", handleConversion);
    document.getElementById("outputUnit").addEventListener("change", handleConversion);
}

// Event listener to ensure DOM is fully loaded before attaching events
document.addEventListener('DOMContentLoaded', function () {
    setupNavigation(); // Setup navigation buttons
    setupConversionListeners(); // Setup listeners for conversion functionality
});
