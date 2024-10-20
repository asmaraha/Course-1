function double(x) {
    return x * 2;
}

function addFive(x) {
    return x + 5;
}

function square(x) {
    return x * x;
}

function createPipeline(...fns) {
    return function (input) {
        return fns.reduce((acc, fn) => fn(acc), input);
    };
}

function runPipeline() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    const pipeline = createPipeline(double, addFive, square);

    const result = pipeline(inputValue);

    document.getElementById('result').innerText = `Pipeline Result: ${result}`;
}
