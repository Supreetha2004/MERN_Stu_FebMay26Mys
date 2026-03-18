//Sequantial await vs parallel promise execution
function taskA(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Task A complte.");
        },1000);
    });
}
function taskB(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Task B complte.");
        },1000);
    });
}
async function runSequantial(){
    console.time("Sequential");
    const a = await taskA();
    const b = await taskB();
    console.timeEnd("Sequantial");
    console.log(a);
    console.log(b);
}
await runSequantial();
async function runparallel(){
    console.time("parallel");
    const result = await Promise.all([taskA,taskB()]);
    console.timeEnd("parallel");
    console.log(result[0]);
    console.log(result[1]);
}
runparallel();
