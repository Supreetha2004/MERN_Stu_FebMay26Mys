//Asynchronous approach of Node.js

console.log("Step 1: Script started.");

setTimeout(() => {
   console.log("step3:delayed callback finished.F1.");
},10000);

setTimeout(function(){
    console.log("step3:delayed callback finished.F2.");
},3000);
console.log("step2:script did not stop while waiting.");