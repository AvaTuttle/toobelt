// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to handle temperature conversion
function convertTemperature() {
    let tempInput = document.getElementById("temperatureInput").value.trim();
    let temperature, resultText;

    // Check if input contains 'C' or 'F' to determine which conversion to perform
    if (tempInput.toLowerCase().endsWith("c")) {
        temperature = parseFloat(tempInput.slice(0, -1)); // Get temperature without 'C'
        if (isNaN(temperature)) {
            resultText = "Please enter a valid temperature (e.g., 32C or 89F)";
        } else {
            let fahrenheit = celsiusToFahrenheit(temperature);
            resultText = `${fahrenheit.toFixed(2)} °F`;
            updateThermometer(fahrenheit); // Update thermometer based on Fahrenheit
        }
    } else if (tempInput.toLowerCase().endsWith("f")) {
        temperature = parseFloat(tempInput.slice(0, -1)); // Get temperature without 'F'
        if (isNaN(temperature)) {
            resultText = "Please enter a valid temperature (e.g., 32C or 89F)";
        } else {
            let celsius = fahrenheitToCelsius(temperature);
            resultText = `${celsius.toFixed(2)} °C`;
            updateThermometer(temperature); // Update thermometer based on Fahrenheit
        }
    } else {
        resultText = "Please enter a valid temperature (e.g., 32C or 89F)";
    }

    // Update the result paragraph
    document.getElementById("result").textContent = resultText;
}

// Attach event listener to the convert button
document.getElementById("convertButton").addEventListener("click", convertTemperature);
