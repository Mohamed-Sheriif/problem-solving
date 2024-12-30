/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const resArr = [""];

  for (let c of s) {
    let top = resArr[resArr.length - 1];
    if (top.toLowerCase() == c.toLowerCase() && top != c) resArr.pop();
    else resArr.push(c);
  }

  return resArr.join("");
};

console.log(makeGood("kkdsFuqUfSDKK"));
console.log(makeGood("abBAcC"));
console.log(makeGood("s"));
console.log(makeGood(""));
