// https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9

function sc(apple) {
  for (let i = 0; i < apple.length; i++) {
    for (let j = 0; j < apple[i].length; j++) {
      if (apple[i][j] === "B") {
        return [i, j];
      }
    }
  }
}
