/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const pricesAfterDiscount = [];
  let discount;
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i]; //8
    discount = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= price) {
        discount = prices[j];
        break;
      }
    }

    pricesAfterDiscount.push(price - discount);
  }

  return pricesAfterDiscount;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
console.log(finalPrices([1, 2, 3, 4, 5]));
console.log(finalPrices([10, 1, 1, 6]));
