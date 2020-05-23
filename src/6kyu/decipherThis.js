function isNumber(string) {
  return !isNaN(string);
}

function decrypt(str) {
  const digits = [...str];
  let firstLetterDigits = "";

  if (isNumber(digits[2])) {
    firstLetterDigits = digits.splice(0, 3).join("");
    digits.unshift(String.fromCharCode(firstLetterDigits));
  } else if (isNumber(digits[1])) {
    firstLetterDigits = digits.splice(0, 2).join("");
    digits.unshift(String.fromCharCode(firstLetterDigits));
  }

  if (digits.length >= 3) {
    const temp = digits[1];
    digits[1] = digits[digits.length - 1];
    digits[digits.length - 1] = temp;
  }

  return digits.join("");
}

function decipherThis(str) {
  return str.split(" ").map((word) => decrypt(word)).join(" ");
}

module.exports = decipherThis;
