const encryptThis = (text) => {
  const words = text.split(" ");
  const encrypted = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let tmp = "";
    let chunk = "";

    for (let j = 0; j < word.length; j++) {
      if (j === 0) {
        chunk += word.charAt(j).charCodeAt();
      } else if (j === 1) {
        tmp = word.charAt(j);
        chunk += word.charAt(word.length - 1);
      } else if (j === word.length - 1) {
        chunk += tmp;
      } else {
        chunk += word.charAt(j);
      }
    }
    encrypted.push(chunk);
  }
  return encrypted.join(" ");
};
