function twosDifference(input) {
    const result = [];

    for (let i = 0; i < input.length; i += 1) {
        for (let j = 0; j < input.length; j += 1) {
            const tmp = input[i] + 2;
            if (input[j] === tmp) {
                result.push([input[i], input[j]]);
            }
        }
    }
    return result;
}
