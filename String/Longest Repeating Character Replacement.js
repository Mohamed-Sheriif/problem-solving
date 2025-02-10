class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let left = 0;
    let right = 0;
    let max = 0;
    let map = {};

    while (right < s.length) {
      map[s[right]] = (map[s[right]] || 0) + 1;
      right++;

      if (right - left - Math.max(...Object.values(map)) > k) {
        map[s[left]]--;
        left++;
      }

      max = Math.max(max, right - left);
    }

    return max;
  }
}
