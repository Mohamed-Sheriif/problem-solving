/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const resArr = [];

  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      resArr.push(s[i]);
    } else {
      if (resArr[resArr.length - 1] === s[i]) {
        resArr.pop();
      } else {
        resArr.push(s[i]);
      }
    }
  }

  return resArr.join("");
};

console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
console.log(removeDuplicates("abcc"));
console.log(removeDuplicates("a"));
console.log(removeDuplicates("aaa"));
