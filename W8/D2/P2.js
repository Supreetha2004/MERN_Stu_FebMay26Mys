//Indexing of performance improvemnt
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    email:{type:String,index:true},
    username:{type:String,unique:true},
    Role:String,
    createAdt:Date
});
//compound inedx
employeeSchema.index({role:1,createAt:-1});
const Employee = mongoose.model("IndexEmployee",employeeSchema);
console.log("Compound index: ");
console.log("{role:1,createdAt:-1}");