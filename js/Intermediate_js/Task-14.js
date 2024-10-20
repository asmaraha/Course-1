function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}

function updateResult(value) {
    document.getElementById('result').innerText = `You typed: ${value}`;
}

const throttledUpdate = throttle(updateResult, 1000);

function handleInput() {
    const inputValue = document.getElementById('throttleInput').value;
    throttledUpdate(inputValue);
}
