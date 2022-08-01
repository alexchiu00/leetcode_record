/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  const sortedArr = [...sortedMap.keys()];

  return sortedArr.slice(0, k);
};
