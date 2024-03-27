// // TestTases
const testCaseArr1 = [1, 7, 7, 7, 7];
const testCaseArr2 = [7, 7, 7, 7, 7];

// // Algorithm
// ! // Two-Pointer Optimal Solution
function removeDuplicate(arr) {
	let i = 0;
	for (let j = 0; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			++i;
			arr[i] = arr[j];
		}
	}
	arr.length = i + 1;
	return arr;
}

// // Output
console.log(removeDuplicate(testCaseArr1));
console.log(removeDuplicate(testCaseArr2));









// ? Highlight
// Here two pointer is assigned based on that we keep track of the first value
// and update the next value by traversing wherever we find different value than i(i is index of array so this will point to value)

// [1,2,2,2,2,4,5] 

// Global i = 0

//  -------------- Loop Started

// When j = 0, i = 0
// Currently arr[j] is 1 & arr[i] is 1
// i and j are equal then nothing happens
// Now, arr[] is [1,2,2,2,2,4,5]

// When j = 1, i = 0
// Currently arr[j] is 2 & arr[i] is 1
// arr[j] is different than arr[i] so 
// ++i, hence i become 1
// now arr[i](where i is 1) = arr[j] 
// Now, arr[] is [1,2,2,2,2,4,5]

// When j = 2, i = 1
// Currently arr[j] is 2 & arr[i] is 2
// arr[i] and arr[j] are equal then nothing happens
// Now, arr[] is [1,2,2,2,2,4,5]

// When j = 3, i = 1
// Currently arr[j] is 2 & arr[i] is 2
// arr[i] and arr[j] are equal then nothing happens
// Now, arr[] is [1,2,2,2,2,4,5]

// When j = 4, i = 1
// Currently arr[j] is 2 & arr[i] is 2
// arr[i] and arr[j] are equal then nothing happens
// Now, arr[] is [1,2,2,2,2,4,5]

// When j = 5, i = 1
// Currently arr[j] is 4 & arr[i] is 2
// arr[j] is different than arr[i] so 
// ++i, hence i become 2
// now arr[i](where i is 2) = arr[j] 
// Now, arr[] is [1,2,4,2,2,4,5]

// When j = 6, i = 2
// Currently arr[j] is 5 & arr[i] is 4
// arr[j] is different than arr[i] so 
// ++i, hence i become 3
// now arr[i](where i is 3) = arr[j] 
// Now, arr[] is [1,2,4,5,2,4,5]

//  -------------- Loop Ended

// Now, arr[] is [1,2,4,5,2,4,5] & i is 3
// reduce arr[] length to i and return arr[]