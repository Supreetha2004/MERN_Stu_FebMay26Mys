const asyncfetchBtn = document.getElementById("asyncfetchBtn");
const output = document.getElementById("output");
const postidinput = document.getElementById("postidinput");
asyncfetchBtn.addEventListener("click",
    async function(){
        //output.textContent = "loading user...";
        const id = postidinput.value.trim();
            if(id===""){
               output.textContent = "post id is required.";
               return;
            }
          const numreicid=Number(id);
          if(numreicid < 1 || numreicid >100){
            output.textContent("enter the vaild id b/w 1 amd 100");
            return;
          }
        try{
            output.textContent="Fetch Post...";
            const response = await
            fetch("https://jsonplaceholder.typicode.com/posts/"+numreicid);
            if(!response.ok) throw new console.error("http error:"+response.status);
            const data =await response.json();
            output.textContent=JSON.stringify(data,null,2);
            
        }
        catch(error){
            output.textContent="error: "+error.message;
        }
    }
)