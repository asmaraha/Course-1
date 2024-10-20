function calculateFactorial() {
    let number = parseInt(document.getElementById('numberInput').value);

    if (isNaN(number) || number < 0) {
        document.getElementById('result').innerText = 'Please enter a non-negative number.';
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById('result').innerText = `The factorial of ${number} is: ${factorial}`;
}
