class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        return true;
      }
      set.add(nums[i]);
    }
    return false;
  }
}

const solution = new Solution();
console.log(solution.hasDuplicate([1, 2, 3, 1])); // true
console.log(solution.hasDuplicate([1, 2, 3, 3])); // true
console.log(solution.hasDuplicate([1, 2, 3, 4])); // true
