function validateEmail() {
    let email = document.getElementById('emailInput').value;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
        document.getElementById('result').innerText = `"${email}" is a valid email address.`;
    } else {
        document.getElementById('result').innerText = `"${email}" is not a valid email address.`;
    }
}
