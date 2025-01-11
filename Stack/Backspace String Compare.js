/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
  let sStack = [];
  let tStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      sStack.pop();
    } else {
      sStack.push(s[i]);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      tStack.pop();
    } else {
      tStack.push(t[i]);
    }
  }

  return sStack.join("") === tStack.join("");
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));
