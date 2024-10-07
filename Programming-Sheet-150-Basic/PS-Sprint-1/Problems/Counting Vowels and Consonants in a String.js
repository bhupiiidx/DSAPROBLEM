// ! 12. **Counting Vowels and Consonants in a String**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, String Manipulation  
//     **Description**: Write a program to count vowels and consonants in a given string.  
//     **Example**:  
//     Input: `string = "hello world"`  
//     Output: `Vowels: 3, Consonants: 7`  
//     Explanation: "hello world" contains 3 vowels (e, o, o) and 7 consonants (h, l, l, w, r, l, d).


const prompt = require("prompt-sync")();
var promptStr = prompt("Enter String To Calculate :- ");


function findConstantsAndVowels(checkStr) {
    checkStr = checkStr.toLowerCase();
    let consonant = 0;
    let vowel = 0;
    for (const s of checkStr) {
        if (s === " ") continue;
        else if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") vowel++
        else consonant++
    }
    return { vowel, consonant }
}


console.log("findConstantsAndVowels -> ", findConstantsAndVowels(promptStr))

