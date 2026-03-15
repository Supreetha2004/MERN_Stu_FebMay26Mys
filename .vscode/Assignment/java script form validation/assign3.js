const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const typeInput = document.getElementById("type");
const feedbackInput = document.getElementById("feedback");

const message = document.getElementById("message");
const container = document.getElementById("feedbackContainer");
const countDisplay = document.getElementById("count");

const submitBtn = document.getElementById("submitBtn");

let feedbackCount = 0;

submitBtn.addEventListener("click", function(){

const name = nameInput.value.trim();
const email = emailInput.value.trim();
const type = typeInput.value;
const feedback = feedbackInput.value.trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!name || !email || !type || !feedback){
message.textContent = "All fields are required.";
return;
}

if(!emailPattern.test(email)){
message.textContent = "Enter a valid email.";
return;
}

if(feedback.length < 20){
message.textContent = "Feedback must be at least 20 characters.";
return;
}

message.textContent = "";

let labelText = "";

if(type === "Bug"){
labelText = "[Needs Review]";
}
else if(type === "Suggestion"){
labelText = "[Idea]";
}
else if(type === "Appreciation"){
labelText = "[Positive]";
}


const card = document.createElement("div");
card.classList.add("card");


card.innerHTML = `
<h3 class="username"></h3>
<p class="email"></p>
<p class="type"></p>
<p class="text"></p>
<button class="deleteBtn">Delete</button>
`;


card.querySelector(".username").textContent = name;
card.querySelector(".email").textContent = "Email: " + email;
card.querySelector(".type").textContent = "Type: " + type + " " + labelText;
card.querySelector(".text").textContent = feedback;


card.querySelector(".deleteBtn").addEventListener("click", function(){

card.remove();

feedbackCount--;

countDisplay.textContent = feedbackCount;

});

container.appendChild(card);


feedbackCount++;

countDisplay.textContent = feedbackCount;



nameInput.value = "";
emailInput.value = "";
typeInput.value = "";
feedbackInput.value = "";

});