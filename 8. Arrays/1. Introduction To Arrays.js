// Arrays are variables that can hold more than one value/item.
// Items can be strings, numbers, booleans, objects, etc.

let fruits = ["Apple", "Mango", "Banana"];      // Simple array of strings
console.log(fruits[0], fruits[1], fruits[2]);   // Output: Mango
console.log(fruits.length);

let marks = ["Lukky", 69, "Chunnu", 96, "Munnu", 99, "Munni", 66];
// This array has both strings and numbers — allowed in JS!

let Only_marks = [69, 96, , 99, 66];             // Note: there is a missing element at index 2
console.log(Only_marks);                         // See the full array
console.log(Only_marks.length);                  // Output: 5 — the empty slot still counts!

console.log(Only_marks[1]);                      // Output: 96
console.log(Only_marks[20]);                     // Output: undefined (index 20 doesn’t exist).

Only_marks[4] = 44;                              // Add or update value at index 4
Only_marks[4] = 6969;                            // Update value again

console.log(Only_marks[0]);                      // Output: 69
