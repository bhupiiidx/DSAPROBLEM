/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
	let newArr = [];
	nums.map((v, i) => newArr.push(nums[nums[i]]));
	return newArr;
};
