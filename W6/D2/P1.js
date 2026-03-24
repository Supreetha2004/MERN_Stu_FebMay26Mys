//Understanding the event loop
console.log("1.Sychronous task started");
//settimeout schdules a callback for later.
setTimeout(() => {
    console.log("3.Timer callback executed.");
},0);

console.log("2.Sychronous task finished.");