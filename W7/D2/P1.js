//Routing
//"/" base url
//"api/users"
const express = require("express");
const app = express();
//"api/users"/create/delete/update/:id
//Router objects help organize route Group
const apiRouter = express.Router();
apiRouter.get("/user",function(req,res){
    res.json({
        route:"/api/users",
        message:"User route inside apl router"
    });
});
apiRouter.get("/orders",function(req,res){
    res.json({
        route:"/api/orders",
        message:"User route inside apl router"
    });
});
app.use("/api",apiRouter);
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});