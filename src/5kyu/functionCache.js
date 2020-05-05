function cache(func) {
    const c = {};

    return function memo(...args) {
        const key = JSON.stringify(args);

        if (key in c) return c[key];
        c[key] = func(...args);
        return c[key];
    };
}

module.exports = cache;
