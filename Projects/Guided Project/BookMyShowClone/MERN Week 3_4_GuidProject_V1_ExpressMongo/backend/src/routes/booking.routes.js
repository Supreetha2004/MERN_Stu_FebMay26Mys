const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/auth.middleware");
//userbooking route
router.post("/",protect,(req,res)=>{
    res.send("Create booking");
});