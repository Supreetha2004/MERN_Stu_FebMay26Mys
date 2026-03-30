//Handling different http methods in express
const express = require("express");
const app = express();
app.get("/users",function(req,res){
     res.status(200).json([
        {message:"success"},
        {id:1,name:"rakesh"},
        {id:1,name:"supree"},
        {id:1,name:"manu"}
     ]);
    //res.send("Returning all users");
});
//to create
app.post("/users",function(req,res){
    //res,status() sets the HTTP status code before
    //sending the 
    res.status(201).send("user created.");
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});