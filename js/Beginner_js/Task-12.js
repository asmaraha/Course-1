function generateRandomNumber() {
    let min = parseInt(document.getElementById('minInput').value);
    let max = parseInt(document.getElementById('maxInput').value);

    if (isNaN(min) || isNaN(max)) {
        document.getElementById('result').innerText = 'Please enter valid numbers for both fields.';
        return;
    }
    if (min >= max) {
        document.getElementById('result').innerText = 'Minimum value must be less than maximum value.';
        return;
    }

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerText = `Random number between ${min} and ${max} is: ${randomNumber}`;
}
