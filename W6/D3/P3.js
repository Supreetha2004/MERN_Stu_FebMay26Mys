//Readin and writing files asyncronously with callbacks
const fs  = require("fs");
const path = require("path");
const filepath = path.join(__dirname,"async-note.txt");
//To write to a file
fs.writeFile(
    filepath,"This is written asnchronously Using writeFile().",
    function(writeError){
        if(writeError){
            console.log("Write error:",writeError.message);
            return;
        }
        console.log("File written asynchronously.");
    }
);
const content = fs.readFile(filepath,"utf-8",
    function(readError,content) {
        if(readError){

        console.log("Read error",readError.message);
        return;
    }
    console.log(content);
}
);
console.log("Script continues while file operation are in progress.");