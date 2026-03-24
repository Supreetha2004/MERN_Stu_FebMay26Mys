//Usage of bulit-in and third-party modules

//path is a bulit-in module,so it works without installation
const path = require("path");

const invoicePath = path.join("invoices","2026","invoice_001.txt");
console.log("built-in module result:",invoicePath);

//to use third-party package/module
try{
    const_=require("ladash");
    console.log("Third-party module example");
}
catch(error){
     console.log("third party module 'lodash' is not installed.");
}