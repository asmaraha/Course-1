function findLargestNumber() {
    let input = document.getElementById('numbersInput').value;
    let numbers = input.split(',').map(num => parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        document.getElementById('result').innerText = 'Please enter valid numbers separated by commas.';
        return;
    }

    let largest = Math.max(...numbers);

    document.getElementById('result').innerText = `The largest number is: ${largest}`;
}
