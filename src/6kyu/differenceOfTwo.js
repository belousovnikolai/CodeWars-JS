function twosDifference(input){
    let result = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            let tmp = input[i] + 2;
            if (input[j] === tmp) {
                result.push([input[i], input[j]])
            }
        }
        
    }
    
    return result;
}

module.exports = twosDifference;