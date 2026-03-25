//Introduction to buffers in NodeJS
//A buffer stores raw bytes
//Here we create buffer directly form a string
const textBuffer = Buffer.from("BA");
//The value in the buffre is the encode form the text
console.log("Buffer object:",textBuffer);
console.log("Buffer length in bytes:",textBuffer.length);
console.log("Byte at index 0",textBuffer[0]);
console.log("Byte at index 0",textBuffer[1]);

//Each charcter is store internally as byte data
//For standard ASCII letters there will be a equivalent code 
//Buffer stores numeric value between 0 to 255

