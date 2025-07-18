//Basic Property
let name = "Lukky's";
console.log(name.length);                     // 7 → Escape sequence '\' is not counted as an extra character

let a = "Munnu";
// Accessing individual characters
console.log(a[0] + a[1] + a[2] + a[3] + a[4]); // Munnu
// We can use a loop to print each character of the string
for (let i in a) {
    console.log(a[i]);
}


// Case Conversion

console.log(name.toUpperCase());              // Make sure to use () to call the function
console.log(name.toLowerCase());              // Same here



// Slicing & Substring

console.log(name.slice(2, 4));                // kk → characters at index 2 and 3
console.log(name.slice(2));                   // kky → from index 2 till end
console.log(substring(start, end));



// Searching in String

let b = "Munni";
console.log(indexOf("i"));                    //Prints Index of i
console.log(lastIndexOf("n"));
console.log(includes("nn"));
console.log(startsWith("Mu"));
console.log(endsWith("ni"));
console.log(charAt(2));



// Modifying String
let c = b.concat(" is a friend of ", a);
console.log(c);                               // Munni is a friend of Munnu
Console.log(b.repeat(3));

console.log(b.replace("nu", "na"));           // Mu**na**i → returns new string
console.log(b);                               // Munni → original string unchanged

let d = "               Hi                       ";
console.log(d.trim());                        // "Hi" → removes leading & trailing spaces

let e = "A,B,C,D,E"
console.log(split(","));

/*
*********** NOTE ***********
Strings are IMMUTABLE in JavaScript!

All string methods (like toUpperCase, replace, trim, etc.)
RETURN A NEW STRING. They DO NOT modify the original string.
*/
