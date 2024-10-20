function sortArray() {
    let input = document.getElementById('arrayInput').value;

    let array = input.split(',').map(num => parseFloat(num.trim()));

    if (array.some(isNaN)) {
        document.getElementById('result').innerText = 'Please enter valid numbers separated by commas.';
        return;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap the elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    document.getElementById('result').innerText = `Sorted Array: [${array.join(', ')}]`;
}
