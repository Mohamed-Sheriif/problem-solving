class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let max = 0;
    let start = 0;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
        start = Math.max(map.get(s[i]) + 1, start);
      }
      map.set(s[i], i);
      max = Math.max(max, i - start + 1);
    }

    return max;
  }
}

console.log(new Solution().lengthOfLongestSubstring("abcabcbb")); // 3
console.log(new Solution().lengthOfLongestSubstring("bbbbb")); // 1
console.log(new Solution().lengthOfLongestSubstring("abbac")); // 2
