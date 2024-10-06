// ! 2. **Checking for Prime Numbers**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Number Theory  
//    **Description**: Write a program to determine if a number is prime.  
//    **Example**:  
//    Input: `number = 7`  
//    Output: `Prime`  
//    Explanation: 7 has no divisors other than 1 and itself, so it is a prime number. 

const prompt = require("prompt-sync")()

function checkPrime(num) {
    if (num < 0) {
        num *= -1;
    }
    if (num === 1 || num === 2 || num === 3) return true;
    // # either this (i * i < n ) or that (i < Math.sqrt(num))
    // while using Math function we are calling method 
    // which will take more time comparatively i * i
    for (let index = 2; index * index < num; index++) {
        if (num % index === 0) return false;
    }
    return true;

}

var num = prompt("Enter Prime Number to check: ");
console.log("prime or not: ", checkPrime(Number(num)))