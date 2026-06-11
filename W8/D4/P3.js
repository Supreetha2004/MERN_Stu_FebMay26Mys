//TTL time-to-live
const mongoose = require("mongoose");
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/datedb');
        console.log("MongoDB connected");
        const otpSchema = new mongoose.Schema({
            createAt:{
                type:Date,
                default:Date.now,
                expires:30 // 30 secounds

            }
        });
        const OTP = mongoose.model('OTP',otpSchema);
        await OTP.deleteMany();
        await OTP.create({code:"9999999"});
        console.log("OTP created")
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