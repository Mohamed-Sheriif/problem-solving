/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = [""];
  let check;

  for (const ch of s) {
    check = `${stack[stack.length - 1]}${ch}`;

    if (check === "AB" || check === "CD") stack.pop();
    else stack.push(ch);
  }

  return stack.length - 1;
};

console.log(minLength("ABFCACDB"));
console.log(minLength("ACBBD"));
