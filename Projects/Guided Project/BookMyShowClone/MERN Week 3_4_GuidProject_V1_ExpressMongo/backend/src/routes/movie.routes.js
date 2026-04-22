const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");
//public route
router.get("/",(req,res)=>{
    res.send("Get movies");
});
//admin only route
router.post("/",protect,authorize("admin"),(req,res)=>{
    res.send("Created movie");
});
module.exports = router;
