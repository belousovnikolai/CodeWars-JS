function dropCap(n) {
  const words = n.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 2) {
      let normalized = word.toLowerCase();
      result[i] = normalized[0].toUpperCase() + normalized.substr(1);
    } else {
      result[i] = word;
    }
  }

  return result.join(" ");
}
