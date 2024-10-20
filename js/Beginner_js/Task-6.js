function checkPalindrome() {
    let input = document.getElementById('userInput').value;

    let cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    let isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

    if (isPalindrome) {
        document.getElementById('result').innerText = `"${input}" is a palindrome.`;
    } else {
        document.getElementById('result').innerText = `"${input}" is not a palindrome.`;
    }
}
