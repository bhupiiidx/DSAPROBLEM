const binaryArr = [];
function decimal2binary(dec) {
	binaryArr.unshift(dec % 2 === 0 ? 0 : 1);
	let rem = Math.floor(dec / 2);
	rem === 1 ? binaryArr.unshift(1) : decimal2binary(rem);
}

decimal2binary(13);
console.log("binaryArr", binaryArr.join(""));
