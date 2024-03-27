/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandiesNumber = Math.max(...candies);
	let res = [];
	for (let i = 0; i < candies.length; i++) res.push(candies[i] + extraCandies >= maxCandiesNumber);
	return res;
};