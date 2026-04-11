//Virtual fields in Mongoose
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
        fristname:String,
        lastname:String,
        email:String
       },
       {
        //This allows virtuals to appear when converting document to json or object
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
       }
    );
    //a virtual field is not stored on MongoDB and it is computed dynamically from existing stored fields
    userSchema.virtual("fullname").get(function(){
        return this.fristname + " "+this.lastname;
    });
    const User = mongoose.model("virtualUser",userSchema);
    const user = new User({
        fristname:"Supreetha",
        lastname:"C.R",
        email:"r@r.com"
    });
    console.log("Hello ",user.fullname);
    console.log("Object output includes virtual ",user.toObject());