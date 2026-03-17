// Chaining promises with returned promises
function getOrderID(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
    },500);
});
}
function getOrderDetails(OrderID){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:OrderID,
                product:"labtop",
                quantity:2
            },700);
        })
    })
}
getOrderID()
.then(function(OrderID){
    console.log("orderId recevied:",OrderID);
    return getOrderDetails(OrderID);
})
.then(function(OrderDetails){
    console.log("order details looaded.");
    console.log("product:",OrderDetails.product);
    console.log("quantity:",OrderDetails.quantity);
});