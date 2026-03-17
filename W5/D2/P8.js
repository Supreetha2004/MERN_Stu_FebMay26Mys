//Introduction to promises
console.log("program started.");
function getWelcomeMessage(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("welcome to promises")
        },1000);
    });
}
const messagepromise = getWelcomeMessage();
console.log("promise created.result not ready yet.");
messagepromise.then(function(message){
    console.log(message);
});

console.log("program continues while the promise is pending.");
