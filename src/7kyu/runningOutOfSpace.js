function spacey(array) {
  const arr = array.slice();
  for (let i = 1; i < array.length; i++) {
    arr[i] = arr[i - 1] + arr[i];
  }
  return arr;
}
