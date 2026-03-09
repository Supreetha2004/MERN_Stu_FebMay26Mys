// try catch basics
// refrence error
// const error = document.getElementById("error");
// try{
//    console.log("Trying to access undefined variable");
//    console.log(notDefined);
  
// }
// catch(err){
//     console.log("Error caught", err.name,"-",err.message);
// }
//  console.log("Program execution continues");

//JSON Parsing error.
let jSONtext = "{json}";
try{
    let data = JSON.parse(jSONtext);
    console.log(data);
}
catch(err){
    console.log("JSON parse error: ",err.message);
}
try{
    let num = 10;
    num();
}
catch(err){
    console.log("Caught error: ",err.name);
}