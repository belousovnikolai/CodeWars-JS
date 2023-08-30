function getMiddle(s) {
    const len = s.length;
    
    if (len % 2 !== 0) {
        return s.substring(len / 2, len / 2 + 1);
    }
    return s.substring(len / 2 - 1, len / 2 + 1);
}
