function calculate(num1, operation, num2) {
    if (num2 === 0 && operation === "/") {
        return null;
    }

    if (operation === "+") {
        return num1 + num2;
    } else if (operation === "-") {
        return num1 - num2;
    } else if (operation === "/") {
        return num1 / num2;
    } else if (operation === "*") {
        return num1 * num2;
    }

    return null;
}

module.exports = calculate;
