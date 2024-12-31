/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      stack.push((stack[stack.length - 1] + stack[stack.length - 2]) * 1);
    } else if (operations[i] === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (operations[i] === "C") {
      stack.pop();
    } else {
      stack.push(Number(operations[i]));
    }
  }

  return stack.reduce((acc, a) => acc + a, 0);
};

console.log(calPoints(["1", "D", "D", "D"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1", "C"]));
