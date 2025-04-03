document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedback-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const feedback = document.getElementById("feedback").value;
            if (feedback.trim() === "") {
                alert("Please enter your feedback.");
                return;
            }
            document.getElementById("response-message").textContent = "Thank you for your feedback!";
            form.reset();
        });
    }
});
