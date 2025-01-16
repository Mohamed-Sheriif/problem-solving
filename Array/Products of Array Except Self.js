class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const res = [];
    let p = 1;

    for (let i = 0; i < nums.length; i++) {
      res.push(p);
      p *= nums[i];
    }

    p = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
      res[i] = res[i] * p;
      p *= nums[i];
    }

    return res;
  }
}

console.log(new Solution().productExceptSelf([1, 2, 4, 6]));
console.log(new Solution().productExceptSelf([-1, 0, 1, 2, 3]));
