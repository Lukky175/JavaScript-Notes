for(i of "Lukky"){
    console.log(i);
}

//x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

// Difference Betwwen For...in & For...of Loop
// 1. for...in Loop:- It is Used to iterate over the keys (property names) of an object or array (as indexes).

let arr = ['a', 'b', 'c'];

for (let j in arr) {
  console.log(j);       // 0, 1, 2 (indexes)
  console.log(arr[j]);  // a, b, c (values)
}

// Best for: Objects or when you need indexes
// Don't use for arrays unless you specifically need indexes.


//x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

// 2. for...of Loop:- Used to iterate over the values of an iterable (like arrays, strings, maps, sets, etc.).

let arr2 = ['a', 'b', 'c'];

for (let val of arr2) {
  console.log(val);     // a, b, c (values)
}

// Best for: Arrays, Strings, Sets, Maps, etc.