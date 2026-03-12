const asyncfetchBtn = document.getElementById("asyncfetchBtn");
const output = document.getElementById("output");

asyncfetchBtn.addEventListener("click",
    async function(){
        output.textContent = "loading user...";
        try{
            const response = await
            fetch("https://jsonplaceholder.typicode.com/posts/10");
            if(!response.ok) throw new console.error("http error:"+response.status);
            const data =await response.json();
            output.textContent=JSON.stringify(data,null,2);
            
        }
        catch(error){
            output.textContent="error: "+error.message;
        }
    }
)