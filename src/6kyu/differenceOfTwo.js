function twosDifference(input) {
    const result = [];
    input.sort((a, b) => a - b);
    for (let i = 0; i < input.length; i += 1) {
        for (let j = 0; j < input.length; i += 1) {
            if (input[i] === input[j] + 2) {
                console.log(i, j)
                result.push([input[i], input[j]]);
            }
        }
    }
    console.log(result)
    return result;
}

twosDifference([1, 2, 3, 4]);
module.exports = twosDifference;
