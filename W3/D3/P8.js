// json stringify parse
const employee = {
    id:101,
    name:"supree",
    dept:"ME",
    isActive:true
};
const jsonString = JSON.stringify(employee);
console.log(jsonString);
console.log(employee);

//JSON parsing
const parsedobject = JSON.parse(jsonString);
console.log(parsedobject);