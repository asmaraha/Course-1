function reverseString() {
    let input = document.getElementById('userInput').value;

    if (input === "") {
        document.getElementById('result').innerText = 'Please enter a valid string.';
        return;
    }

    let reversed = input.split('').reverse().join('');

    document.getElementById('result').innerText = `Reversed string: ${reversed}`;
}
