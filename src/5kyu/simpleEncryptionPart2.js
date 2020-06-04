function buildRegion() {
  const region = {};
  let index = 0;

  for (let i = 65; i <= 90; i++) {
    region[String.fromCharCode(i)] = index++;
  }
  for (let i = 97; i <= 122; i++) {
    region[String.fromCharCode(i)] = index++;
  }
  for (let i = 48; i <= 57; i++) {
    region[String.fromCharCode(i)] = index++;
  }
  region[String.fromCharCode(46)] = index++;
  region[String.fromCharCode(44)] = index++;
  region[String.fromCharCode(58)] = index++;
  region[String.fromCharCode(59)] = index++;
  region[String.fromCharCode(45)] = index++;
  region[String.fromCharCode(63)] = index++;
  region[String.fromCharCode(33)] = index++;
  region[String.fromCharCode(32)] = index++;
  region[String.fromCharCode(39)] = index++;
  region[String.fromCharCode(40)] = index++;
  region[String.fromCharCode(41)] = index++;
  region[String.fromCharCode(36)] = index++;
  region[String.fromCharCode(37)] = index++;
  region[String.fromCharCode(38)] = index++;
  region[String.fromCharCode(34)] = index++;

  return region;
};

function verifyText(text, region) {
  // If the input-string is null or empty return exactly this value!
  if (!text || text == null) {
    return text;
  }

  // If the input-string has chars, that are not in the region, throw an Error(JavaScript).
  for (let i = 0; i < text.length; i++) {
    if (!region.hasOwnProperty(text.charAt(i))) { throw new Error(`Char "${text.charAt(i)}" not found.`); }
  }
};

function encrypt(text) {
  const region = buildRegion()
  // console.log(region);
  verifyText(text, region);

  // Step 1
  let encrypted = "";

  for (let i = 0; i < text.length; i++) {
    if (i % 2 != 0) {
      encrypted += text.charAt(i).toUpperCase();
    } else {
      encrypted += text.charAt(i);
    }
  }

  // Step 2
  let str = encrypted.charAt(0);

  for (let j = 1; j < text.length; j++) {
    let diff = region[encrypted.charAt(j - 1)] - region[encrypted.charAt(j)];
    if (diff < 0) {
      diff += 77;
    }
    Object.keys(region).forEach((key) => {
      if (region[key] == diff) str += key;
    });
  }

  // Step 3
  let encrypted2 = "";
  Object.keys(region).forEach((key) => {
    if (region[key] == -(region[str.charAt(0)] - 76)) encrypted2 += key;
  });
  
  return encrypted2.concat(str.slice(1));
}


function decrypt(encryptedText) {
  verifyText(text, buildRegion());
}

// module.exports = { encrypt, decrypt };

// console.log(encrypt("hello world /"));
console.log(encrypt("hello world"));
console.log(encrypt("hello world"));
