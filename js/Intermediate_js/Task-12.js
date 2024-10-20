function findIntersection() {
    let array1, array2;

    try {
        array1 = JSON.parse(document.getElementById('array1Input').value);
        array2 = JSON.parse(document.getElementById('array2Input').value);
    } catch (e) {
        document.getElementById('result').innerText = 'Please enter valid arrays in JSON format.';
        return;
    }
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        document.getElementById('result').innerText = 'Both inputs must be valid arrays.';
        return;
    }

    let intersection = array1.filter(value => array2.includes(value));

    document.getElementById('result').innerText = `Intersection: [${intersection.join(', ')}]`;
}
