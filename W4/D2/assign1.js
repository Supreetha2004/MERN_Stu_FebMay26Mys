const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addFAQ");
const faqContainer = document.getElementById("faqContainer");
const message = document.getElementById("message");

addBtn.addEventListener("click", function(){

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    // Validation
    if(question.length < 5){
        message.textContent = "Question must be at least 5 characters.";
        return;
    }

    if(answer.length < 15){
        message.textContent = "Answer must be at least 15 characters.";
        return;
    }

    message.textContent = "";

    // Remove "No FAQs available"
    const noFaq = document.getElementById("noFaq");
    if(noFaq){
        noFaq.remove();
    }

    // Create FAQ block
    const faqBox = document.createElement("div");
    faqBox.classList.add("faq-box");

    // Question
    const qHeading = document.createElement("h3");
    qHeading.textContent = question;

    // Answer
    const ansPara = document.createElement("p");
    ansPara.textContent = answer;

    // Badge using insertAdjacentHTML
    qHeading.insertAdjacentHTML("beforeend",
        '<span class="badge">FAQ</span>'
    );

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(){
        faqBox.remove();

        // Show message if no FAQs left
        if(faqContainer.children.length === 0){
            faqContainer.innerHTML = "<p id='noFaq'>No FAQs available</p>";
        }
    });

    faqBox.appendChild(qHeading);
    faqBox.appendChild(ansPara);
    faqBox.appendChild(deleteBtn);

    faqContainer.appendChild(faqBox);

    // Clear inputs
    questionInput.value = "";
    answerInput.value = "";
});