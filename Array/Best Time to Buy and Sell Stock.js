class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let max = 0;
    let left = 0;
    let right = 1;

    while (right < prices.length) {
      let diff = prices[right] - prices[left];
      if (prices[left] < prices[right]) {
        max = Math.max(max, diff);
      } else {
        left = right;
      }
      right++;
    }

    return max;
  }
}
