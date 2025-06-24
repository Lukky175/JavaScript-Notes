let a = 45, c = 45, e = 45, g = 45, i = 45, k = 45;
let b = 4, d = 4, f = 4, h = 4, j = 4, l = 4;

a = b;
console.log(a, b); // 4, 4

c += d;
console.log(c, d); // 49, 4

e -= f;
console.log(e, f); // 41, 4

g *= h;
console.log(g, h); // 180, 4

i /= j;
console.log(i, j); // 11.25, 4

k %= l;
console.log(k, l); // 1, 4



// Operation	         Meaning	            Result
// a = b	         Assign value	            a = 4
// c += d	         Add and assign	            c = 49
// e -= f  	       Subtract and assign	        e = 41
// g *= h          Multiply and assign	        g = 180
// i /= j	       Divide and assign	        i = 11.25
// k %= l	       Modulus and assign	        k = 1