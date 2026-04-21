const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        lowerCase:true,
        match:[/^\s+@\s+\.\s+$/,"please use a valid email"],
        index:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:6,
        select:false,

    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user",
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
},
{
    timestamps:true,
}
);
//Hash password before save
userSchema.pre("save",async function(){
    if (!this.isModified("password")) {
        return;
    }
    try{
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password,saltRounds);
    }
    catch(error){
        throw error;
    }
});
//Compare the password function
userSchema.methods.comparePassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password);
};
module.exports = mongoose.model("User",userSchema);
