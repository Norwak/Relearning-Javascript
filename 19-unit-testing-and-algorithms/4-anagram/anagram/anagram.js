function buildCharMap(string) {
  const charMap = {};

  for (const char of string.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagram(string1, string2) {
  const map1 = buildCharMap(string1);
  const map2 = buildCharMap(string2);

  for (const char in map1) {
    if (Object.hasOwnProperty.call(map1, char)) {
      if (map1[char] !== map2[char]) {
        return false;
      };
    } else {
      return false;
    }
  }

  return true;
}

module.exports = anagram;