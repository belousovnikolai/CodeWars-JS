const region = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&\"";

const validate = (char) => {
  if (!region.includes(char)) throw new Error(`Char: "${char}" not found.`);
  return char;
};

const getCharCode = (c) => region.indexOf(c);

const switchCase = (char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());

const revertStringCases = (char, index) => (index % 2 !== 0 ? switchCase(char) : char);

const toEncrypted = (index) => (index < 0 ? region[index + region.length] : region[index]);

const getDiff = (char, index, chars) => {
  if (index === 0) {
    return region.length - getCharCode(char) - 1;
  }
  return getCharCode(chars[index - 1]) - getCharCode(char);
};

function encrypt(text) {
  if (!text || text.length === 0) return text;
  return text.split("")
    .map((char) => validate(char))
    .map(revertStringCases)
    .map(getDiff)
    .map(toEncrypted)
    .join("");
}

function decrypt(encryptedText) { // export
  if (!encryptedText || encryptedText.length === 0) return encryptedText;
  encryptedText.split("").forEach((char) => validate(char));

  const decrypted = [region.length - getCharCode(encryptedText[0]) - 1];
  for (let i = 1; i < encryptedText.length; i++) {
    decrypted[i] = (decrypted[i - 1] - getCharCode(encryptedText[i])) % region.length;
  }

  return decrypted
    .map(toEncrypted)
    .map(revertStringCases)
    .join("");
}

module.exports = { encrypt, decrypt };
