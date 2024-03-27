/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
	let leng = nums.length;
	for (let i = 0; i < leng; i++) {
		nums[i + leng] = nums[i];
	}
	return nums;
};
