function flattenArray() {
    let input = document.getElementById('arrayInput').value;

    let nestedArray;
    try {
        nestedArray = JSON.parse(input);
    } catch (e) {
        document.getElementById('result').innerText = 'Please enter a valid array in JSON format.';
        return;
    }

    function flatten(arr) {
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    }

    let flattenedArray = flatten(nestedArray);

    document.getElementById('result').innerText = `Flattened Array: [${flattenedArray.join(', ')}]`;
}
