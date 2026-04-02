//JWT flow with login,refresh-style logic ans secure verification
const express = require("express");//importing
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());//midlleware
const secretKey = "Mysecretkey";
const refreshsecretKey = "Mynewsecretkey";
//in-memory storage for refersh token
const refreshTokens = [];
//createing the tokens
function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];//split menas split the given input
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });
    }
    try {
        req.user = jwt.verify(token, secretKey, {//try block means verify the tokenks and handled by the cath block error
            algorithms: ["HS256"],
            issuer: "jwt-example"
        });
        next();
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Access token has expired"
            });
        }
        return res.status(401).json({
            success: false,
            message: "Access token is invalid"
        });
    }
}
app.post("/login", function (req, res) {
    const { email, password } = req.body;
    if (email !== "email@email.com" || password !== "pass@123") {
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials"
        });
    }
    const accessToken = jwt.sign({
        userId: 101,
        email: email,
        role: "member"
    }, 
    secretKey,
        {
            expiresIn: "10m",
            algorithm: "HS256",
            issuer: "jwt-example"
        },
    );
    const refreshToken = jwt.sign(
        {
        userId: 101,
        email: email
    }, 
    refreshsecretKey,
        {
            expiresIn: "10d",
            algorithm: "HS256",
            issuer: "jwt-example"
        },
    );
    refreshTokens.push(refreshToken);
    res.json({
        success:true,
        message:"login sucessful",
        accessToken:accessToken,
        refreshToken:refreshToken

    });

});
app.post("/refresh",function(req,res){
    const {refreshToken} = req.body;
    if(!refreshToken || !refreshTokens.includes(refreshToken)){
        return res.status(401).json({
            success:false,
            message:"Refresh token is missing or invalid"
        });
    }
    try{
        const decoded = jwt.verify(refreshToken,refreshsecretKey,
            {
                algorithms: "HS256",
                issuer: "jwt-example"
            }
        );
        const newAccessToken = jwt.sign(
            {
            userId:decoded.userId,
            email:decoded.email,
            role:"member"
        },
        secretKey,
        {
            expiresIn: "15m",
            algorithm: "HS256",
            issuer: "jwt-example"
        },
    );
        res.json({
            success:true,
            accessToken:newAccessToken
        });
    }
    catch(error){
        res.status(403).json({
            success:false,
            message:"Refersh token verification failed."
        });
    }
});
app.get("/me",authenticateAccessToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route",
        user:req.user
    });
});
app.listen(4000,function(){
    console.log("JWT demo server running @ http://localhost:4000");
});
//curl -X POST http://localhost4000/refresh -H "Content-Type:application/json" -d "{\"refreshToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE3NzUxMTQ0NDQsImV4cCI6MTc3NTk3ODQ0NCwiaXNzIjoiand0LWV4YW1wbGUifQ.-IlrxOpmsOF6mGfqYo8k_oXT0_V5bSXxEMQWbDoAmcM\"}"

//curl http://localhost:4000/me -H "Authorization:Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNzc1MTEzOTQxLCJleHAiOjE3NzUxMTQ1NDEsImlzcyI6Imp3dC1leGFtcGxlIn0.-WGL160Z-E2VaQFkU_XCRoPvIJpwBA7x8kcu0J_3acU"