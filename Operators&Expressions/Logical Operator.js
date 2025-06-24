let a = 45;
let b = 4;

console.log(a>b && a==45);                  //true

console.log(a<b || a==45);                  //true

console.log(!(a<b));                          //true


// Expression	       Evaluates To	                  Reason
// a > b && a == 45 	 true	           Both 45 > 4 and 45 == 45 are true → true && true = ✅ true
// a < b || a == 45      true              45 < 4 → false but 45 == 45 → true → false || true = ✅ true
// !(a < b)              true	          (a<b) → false → false but !(false) → ✅ true
