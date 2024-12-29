/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const matching = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < s.length; i++) {
    if (s.length == 1) return false;

    if (["(", "{", "["].includes(s[i])) {
      stack.push(s[i]);
    } else if ([")", "}", "]"].includes(s[i])) {
      if (stack.length == 0 || stack.pop() !== matching[s[i]]) {
        return false;
      }
    }
  }
  if (stack.length != 0) return false;

  return true;
};

console.log(isValid("[")); // true
console.log(isValid("({[]})")); // true
console.log(isValid("({[)]}"));
