let a = 45;
let b = 4;

console.log(a == b);

console.log(a != b);

console.log(a === b);

console.log(a !== b);

console.log(a > b);

console.log(a < b);

console.log(a >= b);

console.log(a <= b);

console.log(a ? b : "fallback");     //if (a) return b, else return string;



// Expression	    Result	               Explanation
// a == b      	    false	        45 is not equal to 4
// a != b        	true	        45 is not equal to 4
// a === b      	false	        45 strictly not equal to 4
// a !== b       	true	        45 strictly not equal to 4
// a > b	        true        	45 is greater
// a < b	        false       	45 is not less
// a >= b        	true        	45 is greater or equal
// a <= b        	false           45 is not less or equal
// a ? b	        4	            Since a is truthy, returns b