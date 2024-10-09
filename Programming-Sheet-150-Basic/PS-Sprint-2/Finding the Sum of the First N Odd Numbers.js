// ! 9. **Finding the Sum of the First N Odd/Even Numbers**  
//    **Difficulty**: Easy  
//    **Topics**: Mathematical Computations  
//    **Description**: Write a program to calculate the sum of the first N odd numbers.  
//    **Example - For Odd**:  
//    Input: `N = 5`  
//    Output: `25`  
//    Explanation: Sum of the first 5 odd numbers (1 + 3 + 5 + 7 + 9) is 25.
//    **Example - For Even**:  
//    Input: `N = 5`  
//    Output: `30`  
//    Explanation: Sum of the first 5 even numbers (2 + 4 + 6 + 8 + 10) is 30.

const prompt = require("prompt-sync")();
var promptNumber = prompt("Enter the N:- ");
function findSumOfNOddNo__Brute(n) {
    let sum = 0;
    let count = 0;
    let index = 1;
    while (count < n) {
        if (index % 2 !== 0) {
            sum += index;
            count++
        }
        index++
    }
    return sum;
}

function findSumOfNEvenNo__Brute(n) {
    let sum = 0;
    let count = 0;
    let index = 1;
    while (count < n) {
        if (index % 2 === 0) {
            sum += index;
            count++
        }
        index++
    }
    return sum;
}
function findSumOfNOddNo__Optimal(n) {
    return n * n
}

function findSumOfNEvenNo__Optimal(n) {
    return Number(n) + n * n;
}


console.log("findSumOfNOddNo__Brute ->", findSumOfNOddNo__Brute(promptNumber))
console.log("findSumOfNEvenNo__Brute ->", findSumOfNEvenNo__Brute(promptNumber))
console.log("findSumOfNOddNo__Optimal ->", findSumOfNOddNo__Optimal(promptNumber))
console.log("findSumOfNEvenNo__Optimal ->", findSumOfNEvenNo__Optimal(promptNumber))

