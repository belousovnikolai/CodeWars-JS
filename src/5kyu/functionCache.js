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

function sample(a, b) {
    return a + b;
}

const cachedFunction = cache(sample);

console.log(cachedFunction('foo', 'bar')); // complex function should be executed
console.log(cachedFunction('foo', 'bar')); // complex function should not be invoked again, instead the cached result should be returned
console.log(cachedFunction('foo', 'baz')); // should be executed, because the method wasn't invoked before with these arguments

// module.exports = cache;
