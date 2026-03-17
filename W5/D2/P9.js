//promise state:pending,fullfiiled,rejected
const fullfiiledPromise = new Promise(function(resolve){
    console.log("fulfilledPromise is pending");

    setTimeout(function(){
        resolve("fullfillrdPromise is fulfilled.");
    },1000);
});

const rejectedPromise = new Promise(function(resolve,reject){
    console.log("rejectedPromise is pending.");
    setTimeout(function(){
        reject("rejectedpromise is rejected.");
    },1500);
});
fullfiiledPromise.then(function(message){
    console.log(message);
});
rejectedPromise.catch(function(message){
    console.log(message);
});