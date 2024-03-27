// ! Method 1
// * binaryNo = 100 => Decimal = 4

// const binary2decimal = (binaryNo) => {
//     let arr = String(binaryNo).split("")
//     let sum = 0
//     for(let i = arr.length - 1; i >= 0; i--){
//         let power = arr.length -1 - i
//         sum += Math.pow(2,power)*arr[i]
//     }
//     return sum
// }

// ! Method 2
// * binaryNo = 100 => Decimal = 4

const binary2decimal = (binaryNo) => {
	let arr = String(binaryNo).split("");
	let sum = 0;
	let power = 1;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] == 1) {
			sum += power * arr[i];
		}
		power *= 2;
	}
	return sum;
};
