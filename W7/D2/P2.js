//Thrid-party middleware are avaliable @ npm registry
//npm install morgan
//npm install cors 
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { before } = require("lodash");
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.get("/",function(req,res){
    res.json({
        message:"Third-party middleware executed before this response"
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});

