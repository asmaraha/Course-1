function calculateSum() {
    let input = document.getElementById('arrayInput').value;

    let numbersArray = input.split(',').map(num => parseFloat(num.trim()));

    if (numbersArray.some(isNaN)) {
        document.getElementById('result').innerText = 'Please enter valid numbers separated by commas.';
        return;
    }

    let sum = numbersArray.reduce((acc, num) => acc + num, 0);

    document.getElementById('result').innerText = `The sum of the array elements is: ${sum}`;
}
