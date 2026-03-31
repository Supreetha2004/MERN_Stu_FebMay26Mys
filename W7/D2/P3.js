//Custom-middleware
const express =  require("express");
const app = express();
function checkAdminAcess(req,res,next){
    if(req.query.role!=="admain") {
        return res.status(403).json({
            sucess:false,
            message:"Admin access denied"
        });
    }
    next();
}
app.get("/",function(req,res){
    res.send("Home route");
});
app.get("/admin",function(req,res){
    res.json({
        success:true,
        message:"Admin route accessed "
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});