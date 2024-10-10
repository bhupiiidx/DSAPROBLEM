// ! 9. **Summing Digits of a Number**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Mathematical Computations  
//    **Description**: Write a program to calculate the sum of digits of a number.  
//    **Example**:  
//    Input: `number = 1234`  
//    Output: `10`  
//    Explanation: The sum of the digits 1 + 2 + 3 + 4 = 10. 
const prompt = require("prompt-sync")()

function findDigitSum(num) {
    let sum = 0;
    // ? m1
    // let str = String(num)
    // for (let digit of str) {
    //     sum += parseInt(digit)
    // }
    // ? m2
    while (num > 0) {
        sum += num % 10;
        num = parseInt(num / 10)
    }
    return sum;
}

var num = prompt("Enter Number to find sum : ");
console.log("sum: ", findDigitSum(Number(num)))