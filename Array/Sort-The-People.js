/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push({ name: names[i], height: heights[i] });
  }
  arr.sort((a, b) => {
    if (a.height === b.height) {
      return a.name < b.name ? -1 : 1;
    }
    return b.height - a.height;
  });

  return arr.map((item) => item.name);
};

console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); // ["Kevin", "Alex", "James"]
