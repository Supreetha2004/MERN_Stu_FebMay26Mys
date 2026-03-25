//Renaming,deleting and checking the file existance

const fs = require("fs");
const path = require("path");
const originalpath = path.join(__dirname,"draft-report.txt");
const renamepath = path.join(__dirname,"final-report.txt");
fs.writeFileSync(originalpath,"Draft  report content");
console.log("does draft-report.txt exists?",fs,fs.existsSync(originalpath));

//Rename a file 
fs.renameSync(originalpath,renamepath);
console.log("does draft-report.txt exists?",fs,fs.existsSync(originalpath));
//delete file
fs.unlinkSync(renamepath);
console.log("Does final-report.txt exitsts?",fs.existSync(renamepath));5