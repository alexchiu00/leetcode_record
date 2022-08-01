/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  const sort = (string) => string.split("").sort().join("");

  strs.forEach((string) => {
    const sortedString = sort(string);
    if (!map[sortedString]) {
      map[sortedString] = [string];
    } else {
      map[sortedString].push(string);
    }
  });
  return Object.values(map);
};
