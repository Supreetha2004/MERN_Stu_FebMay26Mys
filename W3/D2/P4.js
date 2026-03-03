//Conditional statements
let age = 20;
if(age < 13){
   console.log("Child");
}
else if(age<18){
     console.log("Teenager");
}
else{
    console.log("Adult");
}

//Switch Statements
console.log("Switch statements");
let day = 'C';
switch (day) {
    case"Monday":
    console.log("start of the week");
    break;
     case"wednesday":
    console.log("mid of the week");
    break;
     case"C":
    console.log("end of the week");
    break;
    default:
        console.log("some day in the week");
        break;
}
// Type conversion
let n = Number("ABC");
console.log("n:",n,"Type of n:",typeof n,"isNan",isNaN(n));