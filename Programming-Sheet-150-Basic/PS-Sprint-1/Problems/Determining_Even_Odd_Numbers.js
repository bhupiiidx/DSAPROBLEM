// ! 1. **Determining Even/Odd Numbers**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming  
//    **Description**: Write a program to check whether a number is even or odd.  
//    **Example**:  
//    Input: `number = 4`  
//    Output: `Even`  
//    Explanation: Since 4 is divisible by 2, it is an even number. 

function checkEvenOdd(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
};

var number = prompt("Enter Number :- ")
if (isNaN(number)) {
    console.log("Enter Valid Number")
} else {
    console.log("Number is ", checkEvenOdd(Number(number.trim())))
}