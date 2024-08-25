/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      if (count) {
        result += s[i];
      }
      count++;
    } else if (s[i] == ")") {
      count--;
      if (count) {
        result += s[i];
      }
    }
  }

  return result;
};

console.log(removeOuterParentheses("()()"));
