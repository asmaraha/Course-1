function checkEvenOrOdd() {
    let number = parseInt(document.getElementById('userInput').value);

    if (isNaN(number)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }
    if (number % 2 === 0) {
        document.getElementById('result').innerText = `The number ${number} is Even.`;
    } else {
        document.getElementById('result').innerText = `The number ${number} is Odd.`;
    }
}
