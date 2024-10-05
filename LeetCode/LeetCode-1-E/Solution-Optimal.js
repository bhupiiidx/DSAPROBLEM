/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let dict = {}
    let indices = []
    for(let i = 0; i<nums.length;i++){
        // check if the difference between target and current element is in the dictionary
        // if it is, that means we have found two numbers that add up to the target
        // break the loop and return the indices of the two numbers
        if((dict[target - nums[i]]) !== undefined){
            indices =  [dict[target - nums[i]],i]
            break;
        }
        dict[nums[i]] = i
    }
    return indices;
}