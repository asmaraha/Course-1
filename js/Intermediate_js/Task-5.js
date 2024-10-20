function findPrimeNumbers() {
    let limit = parseInt(document.getElementById('limitInput').value);

    if (isNaN(limit) || limit < 2) {
        document.getElementById('result').innerText = 'Please enter a number greater than or equal to 2.';
        return;
    }

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    document.getElementById('result').innerText = `Prime numbers up to ${limit}: ${primes.join(', ')}`;
}
