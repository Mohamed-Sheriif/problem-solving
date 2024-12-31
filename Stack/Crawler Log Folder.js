/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = [];

  for (const log of logs) {
    if (log === "../") {
      if (stack.length) stack.pop();
    } else if (log === "./") continue;
    else stack.push(log);
  }

  return stack.length;
};

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
console.log(minOperations(["d1/", "../", "../", "../"]));
