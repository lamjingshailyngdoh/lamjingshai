document.addEventListener("DOMContentLoaded", function () {
    const chatbot = document.getElementById("chatbot");
    const chatContainer = document.getElementById("chat-container");
    const chatBtn = document.getElementById("chat-btn");
    const closeChat = document.getElementById("close-chat");
    const chatBody = document.getElementById("chat-body");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    const faqResponses = {
        "hello": "Hello! Welcome to Lamjingshai. How can I assist you today?",
        "hi": "Hi there! How can I help?",
        "contact": "You can reach us at lamjingshailyngdohm@gmail.com or call +91 9362696449.",
        "address": "We are located in Rtiang, Ri Bhoi District, Meghalaya, India.",
        "social media": "Follow us on Twitter, Instagram, and YouTube for updates.",
        "services": "We offer software development, mobile apps, eCommerce solutions, and electronic hardware innovations.",
        "pricing": "Our pricing varies based on project requirements. Please contact us for a quote.",
        "support": "We provide 24/7 customer support. Email us anytime for assistance.",
        "payment": "We accept online payments, UPI, and bank transfers. Secure transactions are guaranteed.",
        "team": "Our team consists of skilled developers, designers, and engineers passionate about technology.",
        "history": "Lamjingshai was founded to revolutionize software and electronics, just like Google!",
        "founder": "Lamjingshai was founded with a vision to create innovative solutions. Let us know if you want more details!",
        "thank you": "You're welcome! 😊 Let me know if you need anything else.",
        "okay": "Okay! 😊 Let me know if you need anything else.",
        "bye": "Goodbye! Have a great day! 😊",
        "download": "You can download our app from the Google Play Store and Apple App Store. Just search for 'Lamjingshai'!",
        "app": "Yes! We have a mobile app available. Download it from the Play Store or App Store.",
        "where is your app": "You can find our app on the Play Store and App Store. Let me know if you need a direct link!",
        
        "online store": "We have an online store where you can browse and purchase our products. Visit our website for more details.",
        "buy products": "You can purchase our products directly from our online store on our website.",
        "order tracking": "After placing an order, you will receive a tracking link via email. Need help tracking? Contact us!",
        
        "partnership": "We are open to collaborations! If you are interested, email us at partnerships@lamjingshai.com.",
        "careers": "We're hiring! Check our Careers page for job openings and internship opportunities.",
        "job opportunities": "Interested in joining Lamjingshai? Visit our Careers page to see open positions.",
    
        "refund policy": "Our refund policy allows returns within 14 days of purchase. Please check our website for details.",
        "shipping information": "We offer nationwide shipping with fast delivery options. Check our website for estimated delivery times.",
        
        "default": "I'm sorry, I didn't understand. Could you try rephrasing your question?"
    };
    

    chatBtn.addEventListener("click", function () {
        chatbot.style.display = "flex";
        addMessage("Hello! Welcome to Lamjingshai. How can I assist you today?", "bot-message");
    });

    closeChat.addEventListener("click", function () {
        chatbot.style.display = "none";
    });

    sendBtn.addEventListener("click", function () {
        sendMessage();
    });

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        let userText = userInput.value.toLowerCase().trim();
        if (userText === "") return;

        addMessage(userText, "user-message");

        setTimeout(() => {
            let response = getResponse(userText);
            addMessage(response, "bot-message");
        }, 500);

        userInput.value = "";
    }

    function addMessage(text, className) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add(className);
        messageDiv.innerText = text;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getResponse(userInput) {
        let responseFound = null;

        // Check for keywords in user input
        for (let keyword in faqResponses) {
            if (userInput.includes(keyword)) {
                responseFound = faqResponses[keyword];
                break;
            }
        }

        // Return response or ask for clarification
        return responseFound || "I'm not sure about that. Could you provide more details?";
    }
});
