class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    let result = [];
    let n = nums.length;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
      if (i > 0 && nums[i] == nums[i - 1]) continue;

      let left = i + 1;
      let right = n - 1;

      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];

        if (sum == 0) {
          result.push([nums[i], nums[left], nums[right]]);
          left++;

          while (left < right && nums[left] == nums[left - 1]) left++;
        } else if (sum < 0) left++;
        else right--;
      }
    }

    return result;
  }
}

console.log(new Solution().threeSum([-1, 0, 1, 2, -1, -4]));
