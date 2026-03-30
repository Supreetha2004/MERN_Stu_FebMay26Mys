//Gobal middleware usage in express
const express=require("express");

const app=express();

//global middleware runs for every request
app.use(function(req,res,next){
    console.log("Global middleware",req.method,req.url);
//next()nisrequired when this middleware does not finish the response
    next();
});

app.get("/",function(req,res){
    res.send("Home route.");
});
app.get("/admain",function(req,res,next){
    console.log("Route specific middleware for /admain");
    next();
},function(req,res){
    res.send("Admain route reached,");
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});