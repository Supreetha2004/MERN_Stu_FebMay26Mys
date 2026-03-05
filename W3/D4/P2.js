// Array iteration
let numarray = [1,2,3,4];

for(let i = 0; i<numarray.length;i++){
    console.log("",numarray[i]);
}
//for..of
for(let num of numarray){
    console.log("",num);
}
//foreach
numarray.forEach((Val,idx) => {
    console.log(" ",idx ,Val);
});