// !  5. **Generating the Fibonacci Series**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Sequences  
//    **Description**: Write a program to generate the Fibonacci series up to a given number.  
//    **Example**:  
//    Input: `limit = 10`  
//    Output: `[0, 1, 1, 2, 3, 5, 8]`  
//    Explanation: The Fibonacci series up to 10 is generated as [0, 1, 1, 2, 3, 5, 8].  


const prompt = require("prompt-sync")()
var promptNumber = Number(prompt("Enter Number for Generating the Fibonacci Series :- "));

function generateFibonacci(num) {
    const fibonacciSeries = [0, 1]
    let lastIndex = 1;
    while (true) {
        const sum = fibonacciSeries[lastIndex] + fibonacciSeries[lastIndex - 1];
        if (sum > num) break;
        fibonacciSeries.push(sum)
        lastIndex++;
    }
    return fibonacciSeries;
}
console.log("Fibonacci Series is:- ", generateFibonacci(promptNumber));
