//JWT Fundamentals: token generation and verification
//npm install jsonwebtoken
const jwt = require("jsonwebtoken");
const secretkey = "Supreetha2004";
//payload holds small non-sensitive data
const payload = {
    userId:101,
    role:"member"
};
//jwt.sign() creates signed jwt token
const token = jwt.sign(payload,secretkey,{expiresIn:"1h"});
console.log("Token generated successfully\n",token);
const tokenParts = token.split(".");
console.log("Header section:",tokenParts[0]);
console.log("payload section:",tokenParts[1]);
console.log("Signature section:",tokenParts[2]);
console.log("jwt part count:",tokenParts.length);
try{
    //jwt.verify() checks trust,signature and expriration
    const verifiedPayload = jwt.verify(token,secretkey);
    console.log("verified payload: ",verifiedPayload);
}
catch(error){
    console.log("verification failed",error.message);
}
const decodewithoutverification = jwt.decode(token);
console.log("Decoded token",decodewithoutverification);