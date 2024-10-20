function checkAnagram() {
    let string1 = document.getElementById('string1Input').value;
    let string2 = document.getElementById('string2Input').value;

    let cleanString1 = string1.replace(/\s+/g, '').toLowerCase();
    let cleanString2 = string2.replace(/\s+/g, '').toLowerCase();

    function sortString(str) {
        return str.split('').sort().join('');
    }

    if (sortString(cleanString1) === sortString(cleanString2)) {
        document.getElementById('result').innerText = `"${string1}" and "${string2}" are anagrams.`;
    } else {
        document.getElementById('result').innerText = `"${string1}" and "${string2}" are not anagrams.`;
    }
}
