//writing and reading bookings and its logs
const { resolve } = require("dns");
const fs = require("fs");
const path = require("path")
const dataDir = path.join(__dirname,"data");
const logsDir = path.join(dataDir,"logs");
const bookingsFile = path.join(dataDir,"booking.json");
const logFile = path.join(logsDir,"booking.log");
const archivedLogFile = path.join(logsDir,"booking-archived.log");

function ensureDirectories(){
    if(!fs.existsSync(dataDir)){
        fs.mkdirSync(dataDir);
    }
    if(!fs.existsSync(logsDir)){
        fs.mkdirSync(logsDir);
    }
}
function listDataFileSync(){
    ensureDirectories();
    return fs.readdirSync(dataDir);
}
function removeLogsDirectorySync(){
    if(fs.existsSync(logsDir)){
        fs.rmdirSync(logsDir,{recursive:true});
    }
}
//Read/write bookings
function initializeBookingFileSync(){
    ensureDirectories();
    if(!fs.existsSync(bookingsFile)){
        fs.writeFileSync(bookingsFile,JSON.stringify([],null,2),"utf-8");
    }
}
function readBookingSync(){
    initializeBookingFileSync();
    //Read synchronously using buffer first,then convert string
    const bufferData = fs.readFileSync(bookingsFile);
    const content = bufferData.toString("utf-8");
    return JSON.parse(content || "[]");
}
function readBookingASync(){
    initializeBookingFileSync();
    return new promise((resolve,reject)=>{
        fs.readFile(bookingsFile,(err,bufferData)=>{
            if(err){
                return reject(err);
            }
            try{
                 const content = bufferData.toString("utf-8");
                 const parsed = JSON.parse(content || "[]");
                 resolve(parsed);
            }
            catch(parseError){
                reject(parseError);
            }
        });

    });
}
function writeBookingsAsync(bookings){
    initializeBookingFileSync();
    return new promise((resolve,reject)=>{
        const jsonString = JSON.stringify(bookings,null,2);
        const buffer = Buffer.alloc(Buffer.byteLength(jsonString));
        buffer.write(jsonString);
        fs.writeFile(bookingsFile,buffer,(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Booking file written successfully");
        });

    });

}
async function appendBookingAsync(booking){
    const bookings = await readBookingASync();
    bookings.push(booking);
    await writeBookingsAsync(bookings);
    return booking;
}
function appendLogAsync(message){
    ensureDirectories();
    return new promise((resolve,reject)=>{
        const timestamp = new Date().toISOString();//genaral format isos
        const finalMessage = `[${timestamp}]${message}\n`;
        fs.appendFile(logFile,finalMessage,"utf-8",(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Log appended sucessfully.")
        });
    });
}
function renameLogFileSync(){
    ensureDirectories();
    if(fs.existsSync(logFile)) {
        fs.renameSync(logFile,archivedLogFile);
        return true;
    }
    return false;

}
function deleteArchivedLogSync(){
    if(fs.existsSync(archivedLogFile)) {
        fs.unlinkSync(archivedLogFile);
        return true;
    }
    return false;

}
module.exports = {
    dataDir,
    logsDir,
    bookingsFile,
    logFile,
    archivedLogFile,
    ensureDirectories,
    listDataFileSync,
    removeLogsDirectorySync,
    initializeBookingFileSync,
    readBookingASync,
    readBookingSync,
    writeBookingsAsync,
    writeFileSync,
    appendBookingAsync,
    renameLogFileSync,
    deleteArchivedLogSync,
    appendLogAsync
}