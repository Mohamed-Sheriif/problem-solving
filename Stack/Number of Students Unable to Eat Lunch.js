/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let count = 0;
  let i = 0;
  while (students.length > 0 && i < students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      i = 0;
      count = 0;
    } else {
      students.push(students.shift());
      i++;
      count++;
    }
    if (count === students.length) {
      return count;
    }
  }
  return count;
};
