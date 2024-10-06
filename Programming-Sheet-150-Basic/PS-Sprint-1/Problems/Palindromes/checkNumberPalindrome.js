// ! 6. **Identifying Palindromes**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Number Manipulation  
//    **Description**: Write a program to check if a string or number is a palindrome.  
//    **Example**:  
//    Input: 12521  
//    Output: `Palindrome`  
//    Explanation: "12521" reads the same backward as forward.  




const prompt = require("prompt-sync")()
var promptNum = Number(prompt("Enter data for Identifying Palindromes :- "));

function checkNumberPalindrome(num) {
    let reverse = 0;
    let val = num;
    while (val > 0) {
        reverse = reverse * 10 + val % 10;
        val = Math.floor(val / 10);
    }
    return num === reverse;
}

console.log(`Is ${promptNum}  Palindromes :-`, checkNumberPalindrome(promptNum));
