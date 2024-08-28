/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let remainder1 = 0;
  let remainder2 = 0;
  let temp = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 == 0) continue;

    remainder1 = nums[i] % 3;
    remainder2 = 0;
    temp = nums[i];

    while (temp % 3 != 0) {
      temp++;
      remainder2++;
    }

    result += remainder1 > remainder2 ? remainder2 : remainder1;
  }

  return result;
};

console.log(minimumOperations([3, 6, 9]));
