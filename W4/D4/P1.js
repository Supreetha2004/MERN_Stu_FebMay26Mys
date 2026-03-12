const out=document.getElementById("out");
const inspectBtn=document.getElementById("inspectBtn");

inspectBtn.addEventListener("click",
    function(){
        const info = {
            htmllang : document.documentElement.lang,
            charset : document.characterSet,
            //browser primary preferred language
            browserlanguage : navigator.language,
            //array of all browser language
            browserlanguage : navigator.languages,
            sampletext : document.getElementById("sampletext").textContent
        };
        console.log(info);
        out.textContent = JSON.stringify(info,null,2);
    }
);