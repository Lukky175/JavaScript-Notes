let obj = {
    Lukky : 96, 
    Sasha : 69, 
    Munnu : 70, 
    Chunnu : 55
}

for(let i = 0; i<Object.keys(obj).length;i++){
    console.log(Object.keys(obj)[i] + " = " + obj[Object.keys(obj)[i]]);
}