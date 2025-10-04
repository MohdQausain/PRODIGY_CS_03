const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    let messages = [];

    if (password.length < 8) messages.push("at least 8 characters");
    if (!/[A-Z]/.test(password)) messages.push("at least one uppercase letter");
    if (!/[a-z]/.test(password)) messages.push("at least one lowercase letter");
    if (!/\d/.test(password)) messages.push("at least one digit");
    if (!/[\W_]/.test(password)) messages.push("at least one special character");

    if (messages.length === 0) {
        feedback.textContent = "✅ Strong: Password meets all criteria!";
        feedback.className = "strong";
    } else {
        feedback.textContent = "❌ Weak: Your password should contain:\n- " + messages.join("\n- ");
        feedback.className = "weak";
    }
});
