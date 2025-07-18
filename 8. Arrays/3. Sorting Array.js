let compare = (a, b) => {
    return a - b; // For ascending order
};

let num = [69, 96, 66, 99, 175, 100, 50, 1000, 10];

// Sorting using compare function
let num1 = num.sort(compare);
console.log(num1);  
// Output: [10, 50, 66, 69, 96, 99, 100, 175, 1000]

// Reverse the sorted array
console.log(num1.reverse());  
// Output: [1000, 175, 100, 99, 96, 69, 66, 50, 10]