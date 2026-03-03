//Immediately Invoked Function Expression (IIFE)
//with parameter
(function(){
    console.log("basic ITFE executed immediately");
})();
//without parameter
(function(appName,version){
    console.log("app:",appName,"version:",version);
})("nodejs","v22.22.0");
//with return value
const result = (function(){
    const a = 10,b = 20;
    return a+b;
})();
console.log("Sum is: ",result);