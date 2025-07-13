let a = prompt("Enter a Number");     // Example: 69
console.log(typeof(a));     //Output: String bcz Prompt always Return String.

//To Convert String into Number.

a = Number.parseInt(a)
console.log(typeof(a));  //Int

//Or ANother Way To Convert prompt into Number Directly.

let b = Number(prompt("Enter Another Number"));
console.log(typeof(b));