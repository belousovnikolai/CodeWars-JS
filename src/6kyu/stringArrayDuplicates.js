function removeDuplicates(word) {
  let previous = "";
  let res = "";
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    if (char !== previous) {
      res += char;
      previous = char;
    }
  }
  return res;
}

function dup(s) {
  return s.map((str) => removeDuplicates(str));
}
