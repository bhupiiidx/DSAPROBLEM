// Find Largest Item in Array
// ! Brute force
function largestEl_BF(arr) {
	const newArr = [...arr];
	newArr.sort((a, b) => a - b); // O(n) => n(log(n))
	return newArr[newArr.length - 1];
}
// ! Optimal algorithm
function largestEl_OS(arr) {
	let largestEl = 0;
	for (let i = 0; i < arr.length; i++) arr[i] > largestEl && (largestEl = arr[i]); // O(n) => n
	return largestEl;
}

// ? TestCase 1
// console.time(`doSomething`);
// console.log(largestEl([3, 7, 5, 1, 5, 8, 4, 3, 9, 3, 73, 2, 5, 82, 33, 65]));
// console.timeEnd(`doSomething`);

function randomArrayGenerator(len) {
	return [...Array(len)].map(() => Math.ceil(Math.random() * len));
}

for (let i = 0; i < 20; i++) {
	const randArray = randomArrayGenerator(i);
	console.log("\n");
	console.log(" randArray generated", randArray);
	console.time(`largestEl_BF for n=${i} timeTaken=`);
	console.log("largestEl_BF " + largestEl_BF(randArray));
	console.timeEnd(`largestEl_BF for n=${i} timeTaken=`);
	console.time(`largestEl_OS for n=${i} timeTaken=`);
	console.log("largestEl_OS " + largestEl_OS(randArray));
	console.timeEnd(`largestEl_OS for n=${i} timeTaken=`);
}
