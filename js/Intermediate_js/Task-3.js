let myObject = {};

function displayObject() {
    document.getElementById('objectDisplay').innerText = JSON.stringify(myObject, null, 2);
}
function addOrUpdateProperty() {
    let key = document.getElementById('keyInput').value;
    let value = document.getElementById('valueInput').value;

    if (key === "") {
        alert("Please enter a valid key.");
        return;
    }
    myObject[key] = value;

    displayObject();
}

function removeProperty() {
    let key = document.getElementById('keyInput').value;

    if (key === "" || !(key in myObject)) {
        alert("Please enter a valid key that exists in the object.");
        return;
    }

    delete myObject[key];

    displayObject();
}
displayObject();
