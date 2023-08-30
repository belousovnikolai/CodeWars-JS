// In the initial task it is requested just change the passed array without returning from function,
// here behavior changed for testing purpose

function reverse(arr) {
    const middle = arr.length / 2;

    for (let i = 0; i < middle; i += 1) {
        const tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }
    return arr;
}
