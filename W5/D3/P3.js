//Handling errors with try/catch
function loadCustomProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvaliable = true;

        if(isServiceAvaliable){
            resolve("Success! Customer profile loaded.");
        }
        else{
            reject("Unsuccessful!! Customer profile unavailable.");
        }
    });
}
async function showCustomProfile(){
    try{
        const message = await loadCustomProfile();
    console.log(message);
    }
    catch(error){
        console.error("error:",error);
    }
}
showCustomProfile();
