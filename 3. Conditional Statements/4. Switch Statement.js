let age = 18;
switch (age){
    case '0':
        console.log("Get Born");
    case '13':
        console.log("Teenager Already?");
    case '18':
        console.log("Learn to Drive, You can get a License");
    case '30':
        console.log("Open a StartUp");
    case '45':
        console.log("Do a World Tour");
        break;
    case '60':
        console.log("Take Retirement");
    default:
        console.log("You Shouldn't Stop Moving")
}


// In switch case whenever any case matches, the output of that case as well the cases following that case are all executed.

// Example here case '18' , '30' , '45' & Default case will be executed but not 'case 60' Because 'case 45' has 'break';