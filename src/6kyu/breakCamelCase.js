function solution(string) {
    return string.split(/(?=[A-Z])/).join(" ");
}

module.exports = solution;
