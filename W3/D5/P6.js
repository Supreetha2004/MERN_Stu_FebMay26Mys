const form = document.getElementById("loginform");
const username = document.getElementById("username");
const message = document.getElementById("message");

form.addEventListener("submit",function(event){
    //stop page reload
    event.preventDefault();

    if(username.value .trim() === ""){
       message.textContent = "username is required";
       console.log("from blocked: no input for username");
       return;
    }
    message.textContent = "form handled by js for user",username.value;
    console.log("from submitted with username",username.value);
});