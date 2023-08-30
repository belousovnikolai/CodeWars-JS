function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function peak(arr) {
  const given = [...arr];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = given.shift();
    if (sum === sumOfArray(given)) {
      return i;
    }
    sum += num;
  }
  return -1;
}
