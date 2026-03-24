//Handling the error event in EvenEmitter
const EventEmitter = require("events");

const fileEmitter = new EventEmitter();
//Register an error listener
fileEmitter.on("error",function(errorMessage){
    console.log("Emitter handler error",errorMessage);
});
//normal event listner:happy scenario
fileEmitter.on("error",function(fileName){
    console.log("file processed succesfully.",fileName);
});
fileEmitter.emit("fileProcessed","report.csv");
fileEmitter.emit("error","file processin failed");