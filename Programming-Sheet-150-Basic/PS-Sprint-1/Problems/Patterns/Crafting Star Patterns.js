// ! 7. **Crafting Star Patterns**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Patterns  
//    **Description**: Write a program to create different star patterns (e.g., pyramid, diamond).  
//    **Example - 1**:  
//    Input: `patternType = "pyramid", height = 5`  
//    Output:  
//    ```
//        *
//       ***
//      *****
//     *******
//    *********
//    ```  
//    Explanation: A pyramid pattern with a height of 5 is generated.

function craftingStarPatterns(t, h) {
    if (t === 'pyramid') {
        // empty space
        for (let row = 0; row < h; row++) {
            let str = ""
            for (let column = 0; column < height - row - 1; column++) {
                str += "- "
            }
            for (let column = 0; column <= row; column++) {
                str += "* "
            }
            for (let column = 1; column <= row; column++) {
                str += "* "
            }
            console.log(str)
        }
    }
}

let patternType = "pyramid"
let height = 5;
craftingStarPatterns(patternType, height)
