/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
  let curr = "";

  for (const ch of path + "/") {
    if (ch === "/") {
      if (curr === "..") {
        if (stack.length) {
          stack.pop();
        }
      } else if (curr != "" && curr != ".") {
        stack.push(curr);
      }
      curr = "";
    } else curr += ch;
  }

  return "/" + stack.join("/");
};

console.log(simplifyPath("/home/user/Documents/../Pictures"));
console.log(simplifyPath("/home/"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/.../a/../b/c/../d/./"));
