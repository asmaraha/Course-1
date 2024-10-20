function convertNumberToString() {

    let number = parseFloat(document.getElementById('numberInput').value);

    if (isNaN(number)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }
    let stringRepresentation = number.toString();

    document.getElementById('result').innerText = `The string representation is: "${stringRepresentation}"`;
}
