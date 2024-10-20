function deepCloneObject() {
    let inputObject;
    try {
        inputObject = JSON.parse(document.getElementById('objectInput').value);
    } catch (e) {
        document.getElementById('result').innerText = 'Please enter a valid JSON object.';
        return;
    }

    function deepClone(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(item => deepClone(item));
        }

        const clonedObj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key]);
            }
        }
        return clonedObj;
    }

    const clonedObject = deepClone(inputObject);
    document.getElementById('result').innerText =
        `Original Object: ${JSON.stringify(inputObject, null, 2)}\n\nCloned Object: ${JSON.stringify(clonedObject, null, 2)}`;
}
