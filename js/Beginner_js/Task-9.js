function runFizzBuzz() {
    let number = parseInt(document.getElementById('numberInput').value);

    if (isNaN(number) || number <= 0 || number > 100) {
        document.getElementById('result').innerText = 'Please enter a valid number between 1 and 100.';
        return;
    }
    let result = '';

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz<br>';
        } else if (i % 3 === 0) {
            result += 'Fizz<br>';
        } else if (i % 5 === 0) {
            result += 'Buzz<br>';
        } else {
            result += i + '<br>';
        }
    }

    document.getElementById('result').innerHTML = result;
}
