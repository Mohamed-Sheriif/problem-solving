/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  if (index === -1) {
    return word;
  }
  let prefix = word.slice(0, index + 1);
  let suffix = word.slice(index + 1);
  return prefix.split("").reverse().join("") + suffix;
};

console.log(reversePrefix("abcdefd", "d"));
