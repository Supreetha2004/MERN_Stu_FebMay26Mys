//Removeing EventEmitter listeners
const EventEmitter = require("events");
const jobEmitter = new EventEmitter();
function showjobprogress(status){
    console.log("job status:",status);
}
//add listener
jobEmitter.on("progress",showjobprogress);

//Emit the event 
jobEmitter.emit("progress","50% completed");

//remove the listener
jobEmitter.off("progress",showjobprogress);

//Emit the event 
jobEmitter.emit("progress","100% completed");
