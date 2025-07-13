let obj = {
    Chunnu : 96,
    Chunni : 69,
    Munni: 66,
    Munnu : 99,
    Monty : 420
}

for(let i in obj){
    console.log("Roll Number: " + obj[i] + " - Name: " + i)
}

/*
for(let j of obj){
    console.log(j)
}
This Loop Will Not Work, This is because for of loop only works on objects which are iterable or arrays*/