class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */

  topKFrequent(nums, k) {
    const map = new Map();
    const result = [];
    const bucket = [];

    for (const num of nums) {
      map.set(num, map.get(num) + 1 || 1);
    }

    for (const [key, value] of map) {
      if (!bucket[value]) {
        bucket[value] = [];
      }
      bucket[value].push(key);
    }

    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
      if (bucket[i]) {
        result.push(...bucket[i]);
      }
    }

    return result;
  }
}

console.log(new Solution().topKFrequent([1, 2, 2, 3, 3, 3], 2));
console.log(new Solution().topKFrequent([7, 7], 1));
