// ! 4. **Calculating Armstrong Numbers**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Number Theory  
//    **Description**: Write a program to check if a number is an Armstrong number.  
//    **Example**:  
//    Input: `number = 153`  
//    Output: `Armstrong Number`  
//    Explanation: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153. 
//    Explanation: 1634 is an Armstrong number because 1^4 + 6^4 + 3^4 + 4^4 = 153. 

//    *power willl be length

const prompt = require("prompt-sync")()
var promptNumber = Number(prompt("Enter Number :- "));

function checkArmstrong(num) {
    let sum = 0;
    let digits = String(num);
    let len = digits.length;
    for (const digit of digits) {
        sum += Math.pow(digit, len);
    }
    return sum === promptNumber;
}

console.log("Is " + promptNumber + " Armstrong Number :-", checkArmstrong(promptNumber));
