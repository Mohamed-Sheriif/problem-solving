class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left != right) {
      if (numbers[left] + numbers[right] == target)
        return [left + 1, right + 1];
      else if (numbers[left] + numbers[right] < target) left++;
      else if (numbers[left] + numbers[right] > target) right--;
    }

    return [];
  }
}

console.log(new Solution().twoSum([1, 2, 3, 4], 3));
