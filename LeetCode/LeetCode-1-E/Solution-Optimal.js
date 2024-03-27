/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let dict = {}
    let indices = []
    for(let i = 0; i<nums.length;i++){
        if((dict[target - nums[i]]) !== undefined){
            indices =  [dict[target - nums[i]],i]
            break;
        }
        dict[nums[i]] = i
    }
    return indices;
}