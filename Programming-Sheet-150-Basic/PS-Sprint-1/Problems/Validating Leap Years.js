// ! 3. **Validating Leap Years**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Date Handling  
//    **Description**: Write a program to check if a given year is a leap year.  
//    **Example**:  
//    Input: `year = 2020`  
//    Output: `Leap Year`  
//    Explanation: 2020 is divisible by 4 but not by 100, or it is divisible by 400, so it is a leap year.  
const prompt = require("prompt-sync")()
var year = prompt("Enter year :- ");

function checkLeapYear(yr) {
    if (yr % 4 === 0 && yr % 100 !== 0) {
        return true;
    }
    else if (yr % 4 === 0 && yr % 100 === 0) {
        if (yr % 400 === 0) {
            return true;
        }
    }
    return false
}

console.log("Leap year or not: ", checkLeapYear(Number(year)))