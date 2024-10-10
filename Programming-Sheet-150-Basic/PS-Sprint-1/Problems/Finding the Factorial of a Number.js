// ! 8. **Finding the Factorial of a Number**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Mathematical Computations  
//    **Description**: Write a program to compute the factorial of a given number.  
//    **Example**:  
//    Input: `number = 5`  
//    Output: `120`  
//    Explanation: 5! (factorial) is 5 × 4 × 3 × 2 × 1 = 120. 

const prompt = require("prompt-sync")();
var promptNumber = prompt("Enter Number To Calculate Factorial:- ");

function findFactorial(num){
    if(num <= 1) return num;
    let factorial = 1;
    let index = 1;
    while(index <= num){
        factorial *= index;
        index++
    }
    return factorial
}

console.log("Factorial of " + promptNumber + " is :-", findFactorial(promptNumber));
