//Basics of embedding and referencing
const mongoose = require("mongoose");
async function main() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");
        const orderSchema = new mongoose.Schema({
            product:String,
            price:Number
        });
        const userSchema = new mongoose.Schema({
            name:String,
            orders:[orderSchema]//embedded document
        });
        const User = mongoose.model('User',userSchema);
        const embeddedUser = await User.create({
            name:"Rakesh",
            orders:[
                {product:"Laptop",price:50000},
                {product:"Printer",price:10000},
                {product:"Projector",price:70000},
            ]
        });
        console.log("Users:\n");
        //console.log("embeddedUser");(fetch only one realated data)
        console.log(await User.find());
        //const Users = await User.find().lean();
        //console.log(JSON.stringify(Users,null,2));
        //Referncing
        const userRefSchema = new mongoose.Schema({
            name:String
        });
        const orderRefSchema = new mongoose.Schema({
            product:String,
            price:Number,
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'UserRef'
            }
        });
        const UserRef = mongoose.model('UserRef',userRefSchema);
        const OrderRef = mongoose.model('OrderRef',orderRefSchema);
        const user = await UserRef.create({
            name: "Supreetha"
        });
      console.log("User created:", user);
      const order1 = await OrderRef.create({
            product: "Pen",
            price: 50000,
            user: user._id
        });

        const order2 = await OrderRef.create({
            product: "pencil",
            price: 1500,
            user: user._id
        });
        //console.log("Refrence orders");
        console.log("Orders created:", order1, order2);
        //console.log(await OrderRef.find().populate('user'));//populate is used  specifies the objects


    }
    catch(error){
        console.error("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();