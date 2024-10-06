// ! 6. **Identifying Palindromes**  
// ! Programming-Sheet-150-Basic\PS-Sprint-1\Problems\Palindromes\checkStringPalindrome.js
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, String Manipulation  
//    **Description**: Write a program to check if a string or number is a palindrome.  
//    **Example**:  
//    Input: `string = "radar"`  
//    Output: `Palindrome`  
//    Explanation: "radar" reads the same backward as forward.  




const prompt = require("prompt-sync")()
var promptString = prompt("Enter String for Identifying Palindromes :- ");

function checkStringPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

console.log(`Is ${promptString}  Palindromes :-`, checkStringPalindrome(promptString));
