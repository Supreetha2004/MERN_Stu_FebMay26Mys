// chaining promise with centralized error handling
function validateLogin(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("login validated");
        },400);
    });
}
function fetchAccountData(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const accountFound = false;
            if(accountFound){
                resolve("account data loaded.");
            }else{
                reject("account data could not be found");
            }
        },700);
    });
}
validateLogin()
    .then(function(message){
        console.log(message);
        return fetchAccountData();
    })
    .then(function(accountmessage){
        console.log(accountmessage);
    })
    .catch(function(error){
        console.log("chain error:",error);
    });