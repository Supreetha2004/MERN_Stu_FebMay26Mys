//Timestamp and advanced quries
const mongoose = require("mongoose");
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/datedb');
        console.log("MongoDB connected");
        const demoSchema = new mongoose.Schema(//demoschema object and Schema are function to mongoose
            {
                name: String,

            },
            {
                timestamps: true
            }
        );
        const Model = mongoose.model('LogTime', demoSchema);
        //  await Model.deleteMany();
        //  await Model.create([
        //              {name:"Amogh"},
        //              {name:"Suman"},
        //              {name:"Rani"}
        //          ]);
        const recent = await Model.find({
            createdAt: {
                $gte: new Date(Date.now() -300*1000)
            }
        });
        console.log("Recent:", recent);
        const files = await Model.find().sort({ createdAt: -1 });
        console.log("Sorted:", files);

    }
    catch (err) {
        console.error("Error:", err.message);
    }
    finally {
        await mongoose.disconnect();
        console.log("Db disconnected");
    }
}
main();