function countWordOccurrences() {
    let text = document.getElementById('textInput').value;

    if (!text.trim()) {
        document.getElementById('result').innerText = 'Please enter some text.';
        return;
    }
    let words = text.toLowerCase().match(/\b\w+\b/g);

    let wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    let resultText = '';
    for (let word in wordCount) {
        resultText += `${word}: ${wordCount[word]}\n`;
    }

    document.getElementById('result').innerText = resultText;
}
