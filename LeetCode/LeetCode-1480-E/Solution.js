/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const runningSumArr = [];
    let runningTotalSum = 0
    for (let i = 0; i < nums.length; i++) {
        runningTotalSum += nums[i]
        runningSumArr.push(runningTotalSum);
    }
    return runningSumArr;
};