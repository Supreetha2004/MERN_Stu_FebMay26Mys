//Basic routing in express
const express = require("express");
const app = express();
app.get("/",function(req,res){
     res.send("Home route in express server");
});
app.get("/about",function(req,res){
     res.send("about route in express server");
});
app.get("/product",function(req,res){
     res.send("product route in express server");
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
})