// A for loop that will count from 0 to 69

for (let i = 0; i <= 69; i++){
    console.log(i)
}



// A Program to add first N Integers

let sum = 0;
let n = Number(prompt("Enter the Value of N"))

for(let j = 0; j <= n; j++){
    sum += j;
}

alert(sum);

// console.log(j);

/* If we execute this 'console.log(j)' there will be an Error this is because we used 'let' to define 'j' inside our loop 
and 'let' has block level scope and we are Trying to define 'j' outside our loop/block, Resulting in an Error */
