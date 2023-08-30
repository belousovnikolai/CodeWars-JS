function capitalize(s) {
    const letters = s.split("");
    let l = "";
    let r = "";

    for (let i = 0; i < letters.length; i++) {
        if (i % 2 === 0) {
            l += letters[i].toUpperCase();
            r += letters[i].toLowerCase();
        } else {
            l += letters[i].toLowerCase();
            r += letters[i].toUpperCase();
        }
    }
    return [l, r];
}
