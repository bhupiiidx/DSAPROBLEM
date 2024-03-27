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

function two_sComplement(dec) {
	const oneComplement = one_sComplement(dec);
	const additionFactor = [...Array(oneComplement.length - 1).fill(0)];
	additionFactor.push(1);
	return oneComplement.join("") | additionFactor.join("");
}

console.log("two_sComplement", two_sComplement(13));
