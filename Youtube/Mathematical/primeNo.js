const primeNo_Brute = (value) => {
	for (let i = 2; i < value; i++) {
		if (value % i === 0) return false;
	}
	return true;
};
const primeNo_Optimal = (value) => {
	for (let i = 2; i < Math.sqrt(value); i++) {
		if (value % i === 0) return false;
	}
	return true;
};

// Example usage
let checkPrime = 10;
console.log(`${checkPrime} is prime? ${primeNo_Brute(checkPrime)}`);
checkPrime = 13;
console.log(`${checkPrime} is prime? ${primeNo_Brute(checkPrime)}`);
checkPrime = 16;
console.log(`${checkPrime} is prime? ${primeNo_Brute(checkPrime)}`);
