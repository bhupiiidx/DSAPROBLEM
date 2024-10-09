// ! 7. **Generating a Matrix with Multiplication Table**  
//    **Difficulty**: Easy  
//    **Topics**: Arrays, Matrix Operations  
//    **Description**: Write a program to generate a matrix where each element at position (i, j) is the product of i and j.  
//    **Example**:  
//    Input: `size = 3`  
//    Output:  
//    ```
//    1 2 3  
//    2 4 6  
//    3 6 9  
//    ```

const prompt = require("prompt-sync")();
var promptSize = prompt("Enter the size of matrix:- ");

function generatingAMatrix(size){
    for (let i = 1; i <= size; i++) {
        let str = ""
        for (let j = 1; j <= size; j++) {
            str += i * j + " "
        }
        console.log(str)
    }
}
console.log(generatingAMatrix(promptSize))