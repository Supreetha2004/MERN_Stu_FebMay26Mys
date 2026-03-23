//commonjs export and import

function calculateTax(amount){
     return amount*0.18;
}

function applydiscount(amount,percent){
   return amount-amount * (percent/100);
}
function formatcurrency(amount){
    return "INR "+amount.toFixed(2);
}
//module.exports makes these function avaliable to require()
module.exports = {calculateTax,applydiscount,formatcurrency};