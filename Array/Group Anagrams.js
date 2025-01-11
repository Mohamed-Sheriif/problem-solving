class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();
    for (let str of strs) {
      const key = [...str].sort().join("");
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(str);
    }
    return Array.from(map.values());
  }
}

console.log(
  new Solution().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
); // [["eat","tea","ate"],["tan","nat"],["bat"]]
