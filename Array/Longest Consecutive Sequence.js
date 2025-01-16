class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const uniqueNums = new Set(nums);
    let longest = 0,
      curr,
      long;

    for (const num of nums) {
      long = 0;
      curr = num;
      while (uniqueNums.has(curr)) {
        long++;
        curr++;
      }
      longest = Math.max(longest, long);
    }

    return longest;
  }
}

console.log(new Solution().longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
console.log(new Solution().longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]));
