// Intruduction to node.js

const runtimeName = "Node.js"
// console.log("Intruduction to Node.js");
// console.log("${runtimeName} runs javascript outside the browser");

const commonuses = [
    "used for server-side app",
    "automation scripts can be created"
];
// array desctrureing
// console.log(commonuses[0]);
// console.log(commonuses[1]);
commonuses.forEach((commonuses,index)=>{
      console.log('${index+1}.${commonuses}');
});