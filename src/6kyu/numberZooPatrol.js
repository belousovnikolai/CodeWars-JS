function findNumber(array) {
    let result = 0;

    for (let i = 0; i < array.length; i += 1) {
        result += (i + 1) - array[i];
    }
    return result + array.length + 1;
}

module.exports = findNumber;
