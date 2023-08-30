function digitalRoot(n) {
    let number = n;
    let sum = 0;

    if (number < 10) {
        return number;
    }
    while (number > 0) {
        sum += number % 10;
        number = parseInt(number / 10, 10);
    }
    return digitalRoot(sum);
}
