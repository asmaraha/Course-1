async function sendRequest() {
    const requestType = document.getElementById('requestType').value;
    const url = document.getElementById('urlInput').value;
    const data = document.getElementById('dataInput').value;

    let options = {
        method: requestType,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (requestType === 'POST' || requestType === 'PUT') {
        try {
            options.body = JSON.stringify(JSON.parse(data));
        } catch (e) {
            document.getElementById('response').innerText = 'Invalid JSON data.';
            return;
        }
    }

    try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        document.getElementById('response').innerText = JSON.stringify(responseData, null, 2);
    } catch (error) {
        document.getElementById('response').innerText = `Error: ${error.message}`;
    }
}
