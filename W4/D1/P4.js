// LOgging 

console.log("console logging");

console.warn("warning message");

console.error("error message");

let users = [
    {id:1,name:"amit"},
    {id:2,name:"rahul"},
];

console.log(users);
console.table(users);

// group related logs
console.group("Grouped logs");
console.log("log 1");
console.log("log 2");
console.log("log 3");
console.groupEnd();

//measure execution time
console.time("looptimer");
for(let i = 0; i<1000; i++){}
console.timeEnd("looptimer");