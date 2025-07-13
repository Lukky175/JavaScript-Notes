// Normal Function
function sum1 (var1, var2){
    return var1+var2;
}

// Arrow Function
const sum2 = (var1, var2) => {
  return var1 + var2;
};



let a = 5;
let b = 6;
console.log(sum1(a, b));
console.log(sum2(a , b));