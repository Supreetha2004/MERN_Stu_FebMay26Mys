//try catch finally with async/await

function processPayment(isSucceeded) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isSucceeded) {
                resolve("Payment processed succssesfully");
            }
            else {
                resolve("Payment couldn't processed succssesfully");
            }
        }, 700);
    })
}
async function runPaymentFlow(isSucceeded) {
    try {
        const result = await processPayment(isSucceeded);
        console.log("Success", result);
    }
    catch (error) {
        console.log("failure:", error);
    }
    finally {
        console.log("payment flow completed.");
    }

}
runPaymentFlow(false).then(function () {
    return runPaymentFlow(true);
});