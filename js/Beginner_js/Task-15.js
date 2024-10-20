function showDateTime() {

    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();

    document.getElementById('result').innerText = `Current Date: ${date} \nCurrent Time: ${time}`;
}
