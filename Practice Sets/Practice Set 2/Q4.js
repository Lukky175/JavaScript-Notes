p = Number(prompt("Enter a Number"))

if(p%2==0 && p%3==0){
    alert("Your Number is divisible 2 by & 3")
}else if (p%2==0 && p%3!=0){
    alert("Your Number is Divisible by 2")
}else if (p%3==0 && p%2!=0){
    alert("Your Number is Divisible by 3")
}