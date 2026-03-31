function auditReport(reportJSON) {

    // 1. Parse JSON
    const report = JSON.parse(reportJSON);

    let okCount = 0;
    let failCount = 0;

    // 2. Loop through modules
    for (let module in report.modules) {

        if (report.modules[module] === "OK") {
            okCount++;
        }

        if (report.modules[module] === "FAIL") {
            failCount++;
            break; // 4. Stop scanning when FAIL is found
        }
    }

    // 5. Create summary object
    const summary = {
        app: report.app,
        okCount: okCount,
        failCount: failCount
    };

    // Return object and JSON string
    return {
        summaryObject: summary,
        summaryJSON: JSON.stringify(summary)
    };
}


// Example JSON string
const reportJSON = `{
    "app": "Portal",
    "status": "OK",
    "modules": {
        "auth": "OK",
        "payment": "OK",
        "results": "FAIL",
        "profile": "OK"
    }
}`;


// Function call
const result = auditReport(reportJSON);
console.log(result);