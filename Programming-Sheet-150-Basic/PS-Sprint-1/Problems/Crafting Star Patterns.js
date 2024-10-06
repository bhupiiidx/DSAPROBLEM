// 7. **Crafting Star Patterns**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Patterns  
//    **Description**: Write a program to create different star patterns (e.g., pyramid, diamond).  
//    **Example**:  
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


function craftingPyramid(height) {
    for (let rows = 0; rows < height; rows++) {
        let str = "";
        for (let columns = 0; columns < height - rows - 1; columns++) {
            str += "- ";
        }
        // however space can also be consoled
        // r-0 => c-4 - - - -
        // r-1 => c-3 - - -
        // r-2 => c-2 - -
        // r-3 => c-1 -
        // r-4 => c-0 
        for (let columns = 0; columns < (2 * rows) + 1; columns++) {
            str += "* ";
        }
        // r-0 => c-1 *
        // r-1 => c-3 * * *
        // r-2 => c-5 * * * * *
        // r-3 => c-7 * * * * * * *
        // r-4 => c-9 * * * * * * * * *
        console.log(str);
        // - - - - *
        // - - - * * *
        // - - * * * * *
        // - * * * * * * *
        // * * * * * * * * *

    }
}


// ? Pyramid of height 5
craftingPyramid(5)