//throw custom errors
// function divide(a,b){
//     if(b===0){
//         throw new console.error("cannot divide by zero");
        
//     }
//     return a/b;
// }
// try{
//     //console.log(divide(10,2));
//     console.log(divide(10,0));
// } 
// catch(err){
//     console.log("cought: ",err.message);
// }
// function checkage(age){
//     if(age<18){
//         throw new console.error("age must be 18 and above");
        
//     }
//     console.log("you can vote");
//     return age;
// }
// try{
//     //console.log(divide(10));
//     console.log(checkage(20));
// } 
// catch(err){
//     console.log("cought: ",err.message);
// }


// create a custom error class
class validationerror extends error{
    constructor(message){
        super(message);
        this.name="validationerror";
    }
}
function createuser(name){
    if(!name){
       throw new validationerror("name is requried");
    }
    console.log("hi,"+name+"welcome");
    return{name};
}
try{
    //createuser("");
    createuser("rahul");
}
catch(err){
     console.log(err.name +":",err.message);
 }
