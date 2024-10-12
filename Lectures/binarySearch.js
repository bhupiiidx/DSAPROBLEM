// * Ascending Sorted Array
const sortedArr = [4, 5, 6, 7, 12, 16, 20, 30, 45, 60]
function binarySearch(arr, target) {
    console.log('---Ascending Sorted Array-----');
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = parseInt(start + ((end - start) / 2))
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            start = mid + 1
        }
        else if (arr[mid] > target) {
            end = mid - 1
        }
    }
    return -1;
}
console.log("Binary Ascending Search output ->", binarySearch(sortedArr, 20))
console.log("Binary Ascending Search output ->", binarySearch(sortedArr, 17))

// * Descending Sorted Array
const sortedDescArr = [60, 45, 30, 20, 16, 12, 7, 6, 5, 4]
function binarySearchDescending(arr, target) {
    console.log('---Descending Sorted Array-----');
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = parseInt(start + ((end - start) / 2))
        if (target > arr[mid]) {
            end = mid - 1
        }
        else if (target < arr[mid]) {
            start = mid + 1
        }
        else {
            return mid;
        }
    }
    return -1;
}
console.log("Binary Descending Search output ->", binarySearchDescending(sortedDescArr, 20))
console.log("Binary Descending Search output ->", binarySearchDescending(sortedDescArr, 17))

// * OrderAgnostic BS
function orderAgnostic(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    if (arr[start] > arr[end]) {
        // Descending Order
        return binarySearchDescending(arr, target)
    } else if (arr[start] < arr[end]) {
        // Asceneding Order
        return binarySearch(arr, target)
    } else {
        // All elements in array are equal
        return 0;
    }
}

console.log("orderAgnostic Binary Ascending Search output ->", orderAgnostic(sortedArr, 20))
console.log("orderAgnostic Binary Ascending Search output ->", orderAgnostic(sortedArr, 17))
console.log("orderAgnostic Binary Descending Search output ->", orderAgnostic(sortedDescArr, 20))
console.log("orderAgnostic Binary Descending Search output ->", orderAgnostic(sortedDescArr, 17))

// * Unaware sorting Type Ascending or descending
function binarySearchForOrderAgnostic(arr, target) {
    if (arr[0] < arr[arr.length - 1]) {
        // Asccending
        return binarySearch(arr, target)
    }
    else {
        // Descending
        return binarySearchDescending(arr, target)
    }
}

console.log("binarySearchForOrderAgnostic Binary Ascending Search output ->", binarySearchForOrderAgnostic(sortedArr, 20))
console.log("binarySearchForOrderAgnostic Binary Ascending Search output ->", binarySearchForOrderAgnostic(sortedArr, 17))
console.log("binarySearchForOrderAgnostic Binary Descending Search output ->", binarySearchForOrderAgnostic(sortedDescArr, 20))
console.log("binarySearchForOrderAgnostic Binary Descending Search output ->", binarySearchForOrderAgnostic(sortedDescArr, 17))