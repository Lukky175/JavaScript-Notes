let str1 = "Please give me Rs. 1000"

let str2 = str1.length() - 4
console.log(str1.slice(str2))

//or (using regex)

let amount = str1.match(/\d+/)[0];  // finds first number
console.log(amount);  // 1000
