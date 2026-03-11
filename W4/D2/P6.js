const livepassword = document.getElementById("livepassword");
const message = document.getElementById("message");

livepassword.addEventListener("",function(){
    // Password validation
    const password = livepassword.value;
    if(!password){
        message.textContent = "Password is required.";
        message.style.color = "red";
        livepassword.focus();
        return;
    }

// check length of password
if(password.length < 8){
    message.textContent = "Password must be atleast 8 characters long.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // check UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must be atleast 1 UPPERCASE character.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // check LOWERCASE characters 
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must be atleast 1 LOWERCASE character.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // check number
    if(!/\d/.test(password)){
        message.textContent = "Password must be atleast 1 digit in it.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // check special character
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must be atleast 1 special character @#$%&*!.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    } 
    message.textContrent = "Valid email & password entered";
    message.style.color="green";
    console.log("Success!",{email,password});
});

//clear message on input
signupEmail.addEventListener("input",() => message.textcontent = "");
signupPassword.addEventListener("input",() => message.textcontent = "");
