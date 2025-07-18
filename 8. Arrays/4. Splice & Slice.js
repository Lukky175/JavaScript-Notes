/* Splice
- Modifies the original array, Returns array of deleted elements  
x.splice(starting index, number of elements to be deleted, elements to be added)
                         or
Syntax: array.splice(startIndex, deleteCount, item1, item2, ...) */
let arr2 = [551, 22, 3, 14, 5, 6 ,7, 8, 229]
let updated = num.splice(2 , 3 , 1021, 1022, 1023, 1024, 1025)

console.log(updated);  // [3, 14, 5] → elements removed
console.log(arr2);     // [551, 22, 1021, 1022, 1023, 1024, 1025, 6, 7, 8, 229]


/* Slice
Syntax: array.slice(startIndex, endIndex)
- endIndex is NOT included
- Does NOT modify the original array
- Returns a new array (shallow copy of portion) */

let arr = [10, 20, 30, 40, 50];
let sliced = arr.slice(1, 4);  // Elements at index 1, 2, 3 → [20, 30, 40]

console.log(sliced);   // [20, 30, 40]
console.log(arr);      // [10, 20, 30, 40, 50] → remains unchanged