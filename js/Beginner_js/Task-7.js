function countVowels() {
    let input = document.getElementById('userInput').value.toLowerCase();

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelCount = 0;

    for (let char of input) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    document.getElementById('result').innerText = `The number of vowels is: ${vowelCount}`;
}
