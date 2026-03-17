//chanining promises with returned values
function getBaseAmount(){
    return new Promise(function(resolved){
        setTimeout(function(){
            resolved(1000);
        },500);
    });
}
getBaseAmount()
.then(function(amount){
    console.log("Base amount:",amount);
    return amount+200;
})
.then(function(updatedAmount){
   console.log("amount After service charge:",updatedAmount);
   return updatedAmount - 100;
})
.then(function(finalAmount){
    console.log("final amount After discount:",finalAmount);
});