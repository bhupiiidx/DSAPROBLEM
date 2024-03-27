/**
 * @param {number[][]} accounts
 * @return {number}
 */
// M1
var maximumWealth = function (accounts) {
	let richest = 0;
	for (i in accounts) {
		let currTotal = 0;
		for (j in accounts[i]) {
			currTotal += accounts[i][j];
		}
		richest = Math.max(currTotal, richest);
	}
	return richest;
};
