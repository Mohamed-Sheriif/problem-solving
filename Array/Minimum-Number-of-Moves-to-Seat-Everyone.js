/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  const sortdSeats = seats.sort((a, b) => a - b);
  const sortedStudents = students.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < seats.length; i++) {
    result += Math.abs(sortdSeats[i] - sortedStudents[i]);
  }

  return result;
};

console.log(
  minMovesToSeat(
    [3, 20, 17, 2, 12, 15, 17, 4, 15, 20],
    [10, 13, 14, 15, 5, 2, 3, 14, 3, 18]
  )
);
