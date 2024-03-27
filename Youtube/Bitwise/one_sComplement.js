function decimal2binary(dec, binaryArr) {
	binaryArr.unshift(dec % 2 === 0 ? 0 : 1);
	let rem = Math.floor(dec / 2);
	rem === 1 ? binaryArr.unshift(1) : decimal2binary(rem, binaryArr);
}

function one_sComplement(dec) {
	const binaryArr = [];
	decimal2binary(dec, binaryArr);
	return binaryArr.map((x) => (x === 1 ? 0 : 1));
}

console.log("one_sComplement", one_sComplement(13));
