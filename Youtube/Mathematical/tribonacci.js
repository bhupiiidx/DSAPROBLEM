const tribonacci = (value, store) => {
	if (store[value - 1] === undefined) store[value - 1] = tribonacci(value - 1, store);
	if (store[value - 2] === undefined) store[value - 2] = tribonacci(value - 2, store);
	if (store[value - 3] === undefined) store[value - 3] = tribonacci(value - 3, store);

	return store[value - 1] + store[value - 2] + store[value - 3];
};

// where t1 = 0, t2 =  1, t3 = 1
const store = { 0: 0, 1: 1, 2: 1 };

// * If value needed
// console.log("tribonacci sum",tribonacci(10, store));

// * If array needed
// tribonacci(10, store);
// const arr = [...Object.keys(store).map((key) => store[key])];
// console.log("tribonacci array", arr);
