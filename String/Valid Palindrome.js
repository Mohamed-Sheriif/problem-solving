class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      if (!this.isAlphaNum(s[i])) {
        i++;
        continue;
      }
      if (!this.isAlphaNum(s[j])) {
        j--;
        continue;
      }
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

  isAlphaNum(c) {
    //return /^[a-zA-Z0-9]$/.test(c);
    // return (
    //   (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) ||
    //   (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) ||
    //   (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)
    // );
    return (
      ("a".charCodeAt(0) <= c.charCodeAt(0) &&
        c.charCodeAt(0) <= "z".charCodeAt(0)) ||
      ("A".charCodeAt(0) <= c.charCodeAt(0) &&
        c.charCodeAt(0) <= "Z".charCodeAt(0)) ||
      ("0".charCodeAt(0) <= c.charCodeAt(0) &&
        c.charCodeAt(0) <= "9".charCodeAt(0))
    );
  }
}
console.log(new Solution().isPalindrome("Was it a car or a cat I saw?"));
