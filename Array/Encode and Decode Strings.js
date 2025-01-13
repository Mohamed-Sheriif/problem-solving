class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (const str of strs) {
      res += str.length + "#" + str;
    }

    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] != "#") j += 1;

      let len = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + len;
      console.log(i, j);
      res.push(str.substring(i, j));
      i = j;
    }

    return res;
  }
}

console.log(new Solution().encode(["abc", "def"]));
console.log(new Solution().decode("3#abc3#def"));
