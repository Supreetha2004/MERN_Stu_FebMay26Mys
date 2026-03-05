//array map
let prices = [100,200,300,400];

let priceswithGST = prices.map(price => price + price*0.18);
console.log("price w/o tax: ",prices);
console.log("price with tax:",priceswithGST);

//using map to extract files
let users = [
    {name:"arjun",age:24},
     {name:"krish",age:28},
];

let names = users.map(user => user.name);
console.log("",names);
