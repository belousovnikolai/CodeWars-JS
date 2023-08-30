const fizzBuzzCustom = (stringOne = "Fizz", stringTwo = "Buzz", numOne = 3, numTwo = 5) => {
  const sequence = [];
  for (let i = 1; i <= 100; i++) {
    if (i % numOne === 0 && i % numTwo === 0) {
      sequence.push(stringOne + stringTwo);
    } else if (i % numOne === 0) {
      sequence.push(stringTwo);
    } else if (i % numTwo === 0) {
      sequence.push(stringOne);
    } else {
      sequence.push(i);
    }
  }
  return sequence;
};
