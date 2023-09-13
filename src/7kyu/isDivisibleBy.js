function isDivisible() {
  const n = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (n % arguments[i] !== 0) {
      return false;
    }
  }
  return true;
}
