Practice Set 2

a = prompt("Write a Number")
alert(typeof a)
a = Number.parseInt(a)
alert(typeof a)
if (a>10 && a<20){
    alert("Yes the number is between 10 & 20.")
}else {
    alert("Your Number does not lie between 10 & 20")
}


// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x


x = prompt("Type Your Age")
a = Number.parseInt(a)
switch(x){
    case '12':
        alert("You are almmost teen");
    case '18':
        alert("You can apply for Driving Licence")
    case '30':
        alert("You are going to be an Uncle")
    case '40':
        alert("Get a startup Bro")
        break;
    case '60':
        alert("Bro Retire")
}

// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x


p = prompt("Enter a Number")
a = Number.parseInt(a)
if(p%2==0 && p%3==0){
    alert("Your Number is divisible 2 by & 3")
}else{
    alert("Your Number is not divisible by 2 and 3")
}

// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x


p = prompt("Enter a Number")
a = Number.parseInt(a)
if(p%2==0 && p%3==0){
    alert("Your Number is divisible 2 by & 3")
}else if (p%2==0 && p%3!=0){
    alert("Your Number is Divisible by 2")
}else if (p%3==0 && p%2!=0){
    alert("Your Number is Divisible by 3")
}

// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x


a = prompt("Enter a number");
a = Number.parseInt(a)
x = a<18? "You Cannot Drive" : "You can Drive"
alert(x)