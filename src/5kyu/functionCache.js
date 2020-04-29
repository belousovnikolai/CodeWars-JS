function cache(func) {
    const hash = {};
    
    return (val1, val2) => {
        const key = val1 + val2;
        if (key in hash) {
            return hash[key];
        } else {
            const res = func(val1, val2);
            hash[key] = res;
            return res;
        }
    };
}

module.exports = cache;
