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

/* Validation */

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

/* Dynamic label */

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

/* Create card */

const card = document.createElement("div");
card.classList.add("card");

/* Controlled template */

card.innerHTML = `
<h3 class="username"></h3>
<p class="email"></p>
<p class="type"></p>
<p class="text"></p>
<button class="deleteBtn">Delete</button>
`;

/* Safe text insertion */

card.querySelector(".username").textContent = name;
card.querySelector(".email").textContent = "Email: " + email;
card.querySelector(".type").textContent = "Type: " + type + " " + labelText;
card.querySelector(".text").textContent = feedback;

/* Delete button */

card.querySelector(".deleteBtn").addEventListener("click", function(){

card.remove();

feedbackCount--;

countDisplay.textContent = feedbackCount;

});

container.appendChild(card);

/* Update count */

feedbackCount++;

countDisplay.textContent = feedbackCount;

/* Clear form */

nameInput.value = "";
emailInput.value = "";
typeInput.value = "";
feedbackInput.value = "";

});