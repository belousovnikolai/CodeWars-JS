function splitByValue(k, elements) {
  const lower = [];
  const bigger = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element < k) {
      lower.push(element);
    } else {
      bigger.push(element);
    }
  }
  return lower.concat(bigger);
}
