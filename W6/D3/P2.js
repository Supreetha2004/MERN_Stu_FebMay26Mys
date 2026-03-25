//Reading & writing files synchronously

const fs = require("fs");
const Module = require("module");
const path = require("path");
const filepath = path.join(__dirname,"sync-note.txt");
//Syntax for function usage in a module
//ModuleName.functionName()

//fs.writeFileSync(filepath,"This file was written using writeFileSync().\nSynchronous operation block execution");
//Append to a file
fs.appendFile(filepath,"new text added using fs.appendfile.",
    function(error){
        if(error){
            console.log("Append error",error.message);
            return;
        }
        console.log("file content appended");
    }
)
console.log("File written synchronously.");
const content = fs.readFileSync(filepath,"utf-8");

console.log("File read synchronously.");
console.log("file content:\n",content);
