function initAutoSave() {
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");

    if (!nameInput || !emailInput) return;

    const STORAGE_KEY = "contactFormData";

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const data = JSON.parse(saved);
        nameInput.value = data.name || "";
        emailInput.value = data.email || "";
    }

    function save() {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                name: nameInput.value,
                email: emailInput.value
            })
        );
    }

    nameInput.addEventListener("input", save);
    emailInput.addEventListener("input", save);
}