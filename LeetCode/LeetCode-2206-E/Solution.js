/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const divideArrayObj = {};
    for(let val of nums) (divideArrayObj[val] = (divideArrayObj[val] || 0) + 1);
    let status = true;
    for(let cur of Object.keys(divideArrayObj)){
        if(divideArrayObj[cur] % 2 !== 0){
            status = false
            break;
        }
    }
    return status
};