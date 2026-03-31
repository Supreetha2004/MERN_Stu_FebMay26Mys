const signupForm = document.getElementById("signupForm");
const signupPassword = document.getElementById("signupPassword");
const signupConfirmPassword = document.getElementById("signupConfirmPassword");
const signupEmail = document.getElementById("signupEmail");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function(event){
    event.preventDefault();

    const password = signupPassword.value;
    const confirmPassword = signupConfirmPassword.value;

    // Password required
    if(!password){
        message.textContent = "Password is required.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Length check
    if(password.length < 8){
        message.textContent = "Password must be at least 8 characters long.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Uppercase check
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must contain at least 1 UPPERCASE letter.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Lowercase check
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must contain at least 1 lowercase letter.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Number check
    if(!/\d/.test(password)){
        message.textContent = "Password must contain at least 1 digit.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Special character check
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must contain at least 1 special character.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Confirm password check
    if(password !== confirmPassword){
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        signupConfirmPassword.focus();
        return;
    }

    message.textContent = "Valid email & password entered....";
    message.style.color = "green";
});

// Clear message on input.....
signupEmail.addEventListener("input", () => message.textContent = "");
signupPassword.addEventListener("input", () => message.textContent = "");
signupConfirmPassword.addEventListener("input", () => message.textContent = "");