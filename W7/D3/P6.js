//Generting token using login function and verifying the token
const jwt = require("jsonwebtoken");
const secretkey = "Supreetha2004";
//const wrongsecretkey = "manga2004";
function loginUser(email,passward){
    if(email === "correct@email.com" && passward === "mp123"){
        const token = jwt.sign({
            userId:101,
            email:email,
            role:"student"
        
         }, secretkey,{expiresIn:"1h"});
         return{
            success:true,
            token:token
         };
    }
    return{
            success:false,
            message:"invaild Credentials"
         };
}
const loginResult = loginUser("correct@email.com","mp123");
console.log("login result",loginResult);
if(loginResult.success){
    try{
        //const verifiedPayload = jwt.verify(loginResult.token,wrongsecretkey);
        const verifiedPayload = jwt.verify(loginResult.token,secretkey);
            console.log("verified payload: ",verifiedPayload);
    }
    catch(error){
    console.log("verification failed:",error.message);
}
}
