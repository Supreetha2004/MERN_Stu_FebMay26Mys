//callback nesting
console.log("Starting nested callback flow");

setTimeout(function () {
    console.log("Step1:user loaded");

    setTimeout(function () {
        console.log("step2:orders loaded.");
        setTimeout(function () {
            console.log("step3:payments loaded.");

            setTimeout(function () {
                console.log("step4:shipment loaded.");
                console.log("we are in callback hell!!!");
            }, 1000);
        }, 800);
    }, 600);
}, 400);