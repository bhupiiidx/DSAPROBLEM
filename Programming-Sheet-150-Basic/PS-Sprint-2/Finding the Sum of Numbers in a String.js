// ! 15. **Finding the Sum of Numbers in a String**  
//     **Difficulty**: Easy  
//     **Topics**: String Manipulation  
//     **Description**: Write a program to extract and sum all numbers present in a given string.  
//     **Example**:  
//     Input: `string = "The numbers are 12 and 34"`  
//     Output: `46`  
//     Explanation: The sum of numbers 12 and 34 is 46.



const prompt = require("prompt-sync")();
var promptString = prompt("Enter the string:- ");

function stringAdd(str) {
    let number = '';
    let sum = 0;
    for (const c of str) {
        if (!isNaN(c) && c !== ' ') {
            number += c;
        }
        else {
            if (number !== '') {
                sum += parseInt(number);
                number = '';
            }
        }
    }
    if (number !== '') {
        sum += parseInt(number);
        number = '';
    }
    return sum;
}

console.log("stringAdd ->", stringAdd(promptString));