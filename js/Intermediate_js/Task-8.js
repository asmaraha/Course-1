function getUniqueValues() {
    let input = document.getElementById('arrayInput').value;

    let array;
    try {
        array = JSON.parse(input);
    } catch (e) {
        document.getElementById('result').innerText = 'Please enter a valid array in JSON format.';
        return;
    }

    let uniqueValues = [...new Set(array)];

    document.getElementById('result').innerText = `Unique Values: [${uniqueValues.join(', ')}]`;
}
