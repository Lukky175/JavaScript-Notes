let age = prompt("Enter a Number")
    if(age < 0){
        alert("Invalid Age! Are You Even Human!?")
    } else if (age > 120){
        alert("Invalid Age! I think you entered your age wrong!!")
    } else if (age < 18) {
        alert("You Connot Drive");
    } else {
        alert("You Can Drive");
    }