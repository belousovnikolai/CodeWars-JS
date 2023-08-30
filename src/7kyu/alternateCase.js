function alternateCase(s) {
    let reversed = "";
    
    for (const letter of s) {
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
