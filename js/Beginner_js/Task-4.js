function convertToFahrenheit() {
    let celsius = parseFloat(document.getElementById('celsiusInput').value);

    if (isNaN(celsius)) {
        document.getElementById('result').innerText = 'Please enter a valid temperature in Celsius.';
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;

    document.getElementById('result').innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
}
