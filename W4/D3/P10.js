const asyncfetchBtn = document.getElementById("asyncfetchBtn");
const output = document.getElementById("output");

asyncfetchBtn.addEventListener("click",
    async function(){
        try{
            const response = await
            fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok) throw new error("+response.status");
            const users =await response.json();
            console.log(users);

            const fristthree = users.slice(0,3);
            output.textContent=JSON.stringify(fristthree,null,2);
            
        }
        catch(error){
            output.textContent = "error:"+error.message;
        }
    });