let num = [0, 1, 2, 3, 4, 5, 69];

// Convert array to string (comma-separated)
let a = num.toString();
console.log(num);            // Output: [0, 1, 2, 3, 4, 5, 69]
console.log(a, typeof(a))    // Output: "0,1,2,3,4,5,69" 'string'

// Join array elements using "_" instead of ","
let b = num.join("_");
console.log(b);                     // Output: "0_1_2_3_4_5_69"

// Remove the last element and store it in 'c'
let c = num.pop();
console.log(num, c);                // num: [0, 1, 2, 3, 4, 5], c: 69

// Add a new element at the end
let d = num.push(50);
console.log(num, d);                   // [0, 1, 2, 3, 4, 5, 50]

// Remove the first element (fix: use parentheses)
num.shift();
console.log(num);                   // [1, 2, 3, 4, 5, 50]

// Add a new element at the beginning
num.unshift(96);
console.log(num);                   // [96, 1, 2, 3, 4, 5, 50]

// Delete element at index 3 (value becomes 'undefined')
delete num[3];
console.log(num);                   // [96, 1, 2, undefined, 4, 5, 50]

// Create another array
let num1 = [10, 11, 12, 13, 14, -1, -2, -3];

// Concatenate num + num1 (creates a new array)
let num2 = num.concat(num1);
console.log(num2);  
/* Output: 
[96, 1, 2, undefined, 4, 5, 50, 10, 11, 12, 13, 14, -1, -2, -3]
*/

// Sort array (lexicographically by default — not numerically!)
num2.sort();
console.log(num2);
/* Output will be:
[-1, -2, -3, 1, 10, 11, 12, 13, 14, 2, 4, 5, 50, 96, undefined]
Because 'sort()' converts values to strings by default.
*/