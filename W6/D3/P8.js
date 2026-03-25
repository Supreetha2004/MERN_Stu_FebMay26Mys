//Allocating buffers 

const emptyBuffer = Buffer.alloc(8);
console.log("Contents of emptyBuffer:",emptyBuffer);
console.log("Allocated buffer bytes:",[...emptyBuffer]);
const textBuffer = Buffer.from([65,66,67]);
console.log("Buffer from byte Array:",textBuffer);
//Buffer.write() writes text into buffer
const buffer = Buffer.alloc(20);
const bytesWritten = buffer.write("Helloworld");
console.log("Bytes written:",bytesWritten);

//Subarray
const firstSlice = buffer.subarray(3,6);
console.log("First slice as bytes:",[...firstSlice]);

//decode bytes into text:toString()
console.log("Decode fristslice of buffer",firstSlice.toString("utf8"));
