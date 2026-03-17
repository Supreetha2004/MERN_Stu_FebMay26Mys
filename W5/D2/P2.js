//Basic callback variations
//1.a callback with no input data
//2.a callback that receives data from main function

function runTask(callback){
    console.log("task is runing");
    callback();
}
function runTaskwithresult(taskname,callback){
    console.log("Processing task:",taskname);
    callback("Task" +taskname+"finish successfully.");
}

function showSimpleDoneMessage(){
    console.log("simple callback executed.");
}

function showdetaliledMessage(message){
    console.log(message);
}

//runTask(showSimpleDoneMessage);
runTaskwithresult("send monthly report",showdetaliledMessage);