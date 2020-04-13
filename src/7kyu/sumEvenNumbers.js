function sumEvenNumbers(input) {
    let sum = 0;

    for (let index = 0; index < input.length; index++) {
        if (input[index] % 2 ==0) {
            sum += input[index];
        }
        
    }
    return sum;
}

module.exports = sumEvenNumbers;