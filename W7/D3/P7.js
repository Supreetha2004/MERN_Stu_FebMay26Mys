// Protect routes with JWT middleware and role based access
const jwt=require("jsonwebtoken");
const express=require("express");
const app=express();
const secretKey="monkey123";
const userToken=jwt.sign({userId:1,role:"user",email:"correct@email.com"},secretKey,{expiresIn:"1hr"});
console.log("Usertoken:",userToken);
const adminToken=jwt.sign({userId:2,role:"admin",email:"correct1@email.com"},secretKey,{expiresIn:"1hr"});
console.log("Admintoken:",adminToken);
function authenticateToken(req,res,next){
    const authHeader=req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            success:false,
            message:"Authorization header is missing"
        });
    }
    const token=authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Bearer token is missing."
        });
    }
    try{
        // verify the token and attach trusted user data to the request
        req.user=jwt.verify(token,secretKey);
        next();
    }
    catch(error){
        if(error.name==="TokenExpiredError"){
            return res.status(401).json({
            success:false,
            message:"Token has expired."
        });
        }
        return res.status(403).json({
            success:false,
            message:"token is invalid."
        });
    }
}
function requireRole(role){
    return function(req,res,next){
        if(req.user.role!=role){
            return res.status(403).json({
            success:false,
            message:"Insufficient permission."
        });
        }
        next();
    };
}

app.get("/me",authenticateToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route accessed.",
        user:req.user
    });
});
app.get("/admin",authenticateToken,requireRole("admin"),function(req,res){
    res.json({
        success:true,
        message:"Protected user route accessed.",
        user:req.user
    });
});
app.listen(4000,function(){
    console.log("JWT protected route server running @ http://localhost:4000");
});
//curl http://localhost:4000/me -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJjb3JyZWN0QGVtYWlsLmNvbSIsImlhdCI6MTc3NTAzNTQ3NSwiZXhwIjoxNzc1MDM5MDc1fQ.KmCF8bGCjbcVCwK7wK8bBKsGdnTESYJ64r1TFX5admQ"
//curl http://localhost:4000/admin -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiY29ycmVjdDFAZW1haWwuY29tIiwiaWF0IjoxNzc1MDM1NDc1LCJleHAiOjE3NzUwMzkwNzV9.xaaOnXxvaK55SAW3ahgYh4xZp88-T8ZQgUjV3otDHso"
//importing
//midlleware
//split menas split the given input
//try block means verify the tokenks and handled by the cath block error
//JWT flow with login,refresh-style logic ans secure verification