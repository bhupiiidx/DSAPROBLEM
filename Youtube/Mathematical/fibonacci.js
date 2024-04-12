function fibonacci(value, store) {
	if (store[value - 1] === undefined) store[value - 1] = fibonacci(value - 1, store);
	if (store[value - 2] === undefined) store[value - 2] = fibonacci(value - 2, store);

	return store[value - 1] + store[value - 2];
}

const store = { 0: 0, 1: 1 };

// * If value needed
// console.log("fibonacci sum",fibonacci(10, store));

// * If array needed
// fibonacci(10, store);
// const arr = [...Object.keys(store).map((key) => store[key])];
// console.log("fibonacci array", arr);
