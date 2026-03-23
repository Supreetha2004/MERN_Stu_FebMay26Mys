//Using a custom commonJS module
const {calculateTax,applydiscount,formatcurrency} = require("./P2")
const itemName = "labtop";
const basePrice = 60000;
const discountedprice = applydiscount(basePrice,10);
const taxAmount = calculateTax(discountedprice);
const finalprice = discountedprice + taxAmount;

console.log("Item:",itemName);
console.log("base price:",formatcurrency(basePrice));
console.log("discounted price:",formatcurrency(discountedprice));
console.log("GST Tax @18%:",formatcurrency(taxAmount));
console.log("finalprice",formatcurrency(finalprice));


