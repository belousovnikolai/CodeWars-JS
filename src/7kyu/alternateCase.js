function alternateCase(s) {
    let reversed = "";

    for (let letter of s) {
        if (letter === letter.toUpperCase()) {
            reversed += letter.toLowerCase();
        } else if (letter === letter.toLowerCase()) {
            reversed += letter.toUpperCase();
        } else {
            reversed += letter;
        }
    }

    return reversed;
}

module.exports = alternateCase;