const out = document.getElementById("out");

function explain(code) {
    if (code === 1) return "permission denied";
    if (code === 2) return "permission unavalible";
    if (code === 3) return "permission timed out";
    return "Unknown user";
}
document.getElementById("locateBtn").addEventListener("click", 
    function() {
        if (!navigator.geolocation) {
            out.textContent = "gealocation is not supports in this browser"
        }
        out.textContent = "requesting the current location....";
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const data = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                };
                console.log(data);
                out.textContent = JSON.stringify(data, null, 2);
            },
            function (error) {
                out.textContent = "error code:"+explain(error.code) +
                    explain(error.code) + "message:" + error.message;
            },
            { enablehighaccuracy: true, timeout: 10000, maximumage: 0 }
        );

    });