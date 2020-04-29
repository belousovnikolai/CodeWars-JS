function cache(func) {
    const cache = {};
    
    return function() {
        const key = JSON.stringify(arguments);
        
        if (key in cache) return cache[key];
        else return (cache[key] = func(...arguments));
    };
}

module.exports = cache;
