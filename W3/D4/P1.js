// Array basics
console.log("Array basics");
//Creating arrays
let emptyarray = [];
let numarray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name:"gola"}, [5,6]];
console.log(numarray);
console.log(emptyarray);
console.log(mixedArray);

//using constructor
let fruits = new Array("apple","mango");
console.log(fruits);
console.log("is fruits an array?",Array.isArray(fruits));

//push
fruits.push("cherry");
console.log(fruits);

//pop:remove
fruits.pop();

//unshift:adds to beginning
fruits.unshift("orange");
console.log(fruits);

//shift:remove from beginning
fruits.shift();
console.log(fruits);

