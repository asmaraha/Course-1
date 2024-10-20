function generateFibonacci() {
    let n = parseInt(document.getElementById('numberInput').value);

    if (isNaN(n) || n <= 0) {
        document.getElementById('result').innerText = 'Please enter a positive integer.';
        return;
    }

    let fibSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    if (n === 1) {
        fibSequence = [0];
    }

    document.getElementById('result').innerText = fibSequence.join(', ');
}
