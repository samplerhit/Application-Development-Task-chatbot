document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;

        // Append user message
        appendMessage("user", userMessage);

        // Generate bot response (Simulated API call)
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            appendMessage("bot", botResponse);
        }, 500);

        // Clear input field
        userInput.value = "";
    }

    function appendMessage(sender, message) {
        const msgElement = document.createElement("p");
        msgElement.classList.add(sender);
        msgElement.textContent = message;
        chatBox.appendChild(msgElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(input) {
        const responses = {
            "hello": "Hello! How can I assist you today?",
            "how are you": "I'm just a bot, but I'm doing great!",
            "bye": "Goodbye! Have a wonderful day!",
            "default": "I'm not sure I understand. Can you clarify?"
        };
        return responses[input.toLowerCase()] || responses["default"];
    }

    document.querySelector("button").addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });
});
