// await with non-promise values

function getReadyValue(){
    return 25;
}
function getDelayValue(){
    return Promise.resolve(75);
}

async function showValue(){
    const readyValue = await getReadyValue();
    const delayValue = await getDelayValue();
     console.log("Ready Value:",readyValue);
     console.log("Delayed Value:",delayValue);
     console.log("Delayed Value:",delayValue);
}
showValue();