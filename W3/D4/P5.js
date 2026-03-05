// reduce method
let nums = [5,10,15];

let total = nums.reduce((intermediatedSum,current) => intermediatedSum+current,0);
console.log(total);
// average method
// let nums = [5, 10, 15];
// let total = nums.reduce((intermediatedSum, current) => intermediatedSum + current, 0);
// let average = total / nums.length;
// console.log("Total:", total);    
// console.log("Average:", average);

// console.log(total);

//reduce to object count by category
let items = ["pen","pencil","pen","eraser"];
let count = items.reduce((intermediatedvalue,item)=>{
    intermediatedvalue[item] = (intermediatedvalue[item] || 0) +1;
    return intermediatedvalue;
},{});
console.log("item count:",count);