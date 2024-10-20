function checkSubstring() {
    let mainString = document.getElementById('mainStringInput').value;
    let substring = document.getElementById('substringInput').value;

    if (mainString.includes(substring)) {
        document.getElementById('result').innerText = `"${substring}" is a substring of "${mainString}".`;
    } else {
        document.getElementById('result').innerText = `"${substring}" is not a substring of "${mainString}".`;
    }
}
