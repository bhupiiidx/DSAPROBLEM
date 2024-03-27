// // TestTases
const testCaseArr1 = [3, 7, 5, 1, 5, 8, 4, 3, 9, 3, 73, 2, 5, 82, 33, 65];
const testCaseArr2 = [1, 2, 7, 4, 7, 10, 10, 9, 3];
const testCaseArr3 = [1, 7, 7, 7, 7];
const testCaseArr4 = [7, 7, 7, 7, 7];

// // Algorithms

function secondSmallest_OS(arr) {
	let smallest = Number.MAX_SAFE_INTEGER;
	let secondSmallest = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			secondSmallest = smallest;
			smallest = arr[i];
		} else if (arr[i] != smallest && arr[i] > secondSmallest) {
			secondSmallest = arr[i];
		}
	}
	return smallest;
}

console.log(secondSmallest_OS(testCaseArr1));
console.log(secondSmallest_OS(testCaseArr2));
console.log(secondSmallest_OS(testCaseArr3));
console.log(secondSmallest_OS(testCaseArr4));
