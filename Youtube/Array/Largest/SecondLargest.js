// // TestTases
const testCaseArr1 = [3, 7, 5, 1, 5, 8, 4, 3, 9, 3, 73, 2, 5, 82, 33, 65];
const testCaseArr2 = [1, 2, 7, 4, 7, 10, 10, 9, 3];
const testCaseArr3 = [1, 7, 7, 7, 7];
const testCaseArr4 = [7, 7, 7, 7, 7];

// // Algorithms
// ! Brute Force
// ! Method 1
// function secondLargest_BF(arr) {
// 	const newArr = [...arr].sort((a, b) => a - b);
// 	return newArr[newArr.length - 2];
// }
// ? O(n) => n(log(n))
// ! Problem with this method is that when
// ! -> 1st or the largest element got repeated then it will not give proper o/p
// ! -> in between final and Kth element if any value got repeated then it will not give proper o/p
// ! -> [1,  2,  7,  4,  7, 10, 10, 9,  3]
// ! -> [nr, nr, r,  nr, r, r,  r,  nr, nr]
// ----------------------------------------------------------------
// ! Method 2
// function secondLargest_BF(arr) {
// 	let largest = -1;
// 	let secondLargest = -1;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > largest) {
// 			secondLargest = largest;
// 			largest = arr[i];
// 		}
// 	}
// 	return secondLargest;
// }
// ? O(n) => n
// ! Problem with this method is that when
// ! ->largest element got repeated and smaller than that element got in last this wont work
// ! -> [1,  2,  7,  4,  7, 10, 10, 9,  3]
// ! -> [nr, nr, r,  nr, r, r,  r,  nr, nr]
// ! -> in above testcase 10 is largest and 9 is second largest
// ----------------------------------------------------------------
// ! Method 3
// function secondLargest_BF(arr) {
// 	let largest = -1;
// 	let secondLargest = -1;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > largest) largest = arr[i];
// 	}
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > secondLargest && arr[i] < largest) secondLargest = arr[i];
// 	}
// 	return secondLargest;
// }
// ? O(n) => n+n

// console.log(secondLargest_BF(testCaseArr1));
// console.log(secondLargest_BF(testCaseArr2));
// console.log(secondLargest_BF(testCaseArr3));
// console.log(secondLargest_BF(testCaseArr4));

// ! Method 2 is optimal
// ! By correcting is mistake
function secondLargest_OS(arr) {
	let largest = -1;
	let secondLargest = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			secondLargest = largest;
			largest = arr[i];
		}
		// This modified
		else if (arr[i] < largest && arr[i] > secondLargest) {
			secondLargest = arr[i];
		}
	}
	return secondLargest;
}

console.log(secondLargest_OS(testCaseArr1));
console.log(secondLargest_OS(testCaseArr2));
console.log(secondLargest_OS(testCaseArr3));
console.log(secondLargest_OS(testCaseArr4));
