// why use async/await
function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
           resolve({id:101,name:"kiran"});
        },1000);
    });
}
function getOrders(userId){
    return new Promise(function (resolve){
        setTimeout(function(){
            resolve(["order-A","order-B"]);
        },12000);
    });
}
async function showUserAndOrders(){
    const user = await getUser();
    //console.log("user loaded: ",user.name);
    const orders = await getOrders(user.id);
    console.log("orders loaded",orders);
}
showUserAndOrders();
