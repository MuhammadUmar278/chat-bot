function abc(userMessage) {
    let list = document.getElementById("chat-messages");

    if (userMessage.trim() !== "") {
       
        list.innerHTML += `<div class="chat-message user">
                        <p>${userMessage}</p>
                    </div>`;

       
        list.innerHTML += `<div class="chat-message bot" id="loading">
                        <div class="loading-spinner"></div> 
                    </div>`;

        list.scrollTop = list.scrollHeight;

        let lowerMessage = userMessage.toLowerCase();

        setTimeout(function () {
           
            let loadingElement = document.getElementById("loading");
            if (loadingElement) {
                loadingElement.remove();
            }

          
            let botResponse = "";
            if (lowerMessage === "hello" || lowerMessage === "hello!") {
                botResponse = "Bot: Hi, How are you?";
            } else if (lowerMessage === "what is saylani?" || lowerMessage === "what is saylani") {
                botResponse = "Bot: Saylani is a welfare department.";
            } else if (lowerMessage === "what is ramazan" || lowerMessage === "what is ramazan") {
                botResponse = "Bot: Ramazan is a blessed month.";
            } else if (lowerMessage === "what is js" || lowerMessage === "what is javascript") {
                botResponse = "Bot: JS is a programming language.";
            } else if (lowerMessage === "hi") {
                botResponse = "Bot: How can I help you?";
            } else if (lowerMessage.includes("tired")) {
                botResponse = "Bot: Oh no! You should take a break and rest. Maybe drink some water or take a nap.";
            } else if (lowerMessage === "show an image") {
                botResponse = `<img src="data:image/jpeg;base64,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" alt="Example Image" style="max-width: 100%; height: auto;">`;
            } else {
                botResponse = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXwHlXQW4Y_i8uDc8h1uJkexaYIg_j-rOWQ&s" alt="Example Image" style="max-width: 100%; height: auto;">`;
            }

            if (lowerMessage === "show me an image") {
             
                list.innerHTML += `<div class="chat-message bot">
                                ${botResponse}
                            </div>`;
            } else {
               
                list.innerHTML += `<div class="chat-message bot">
                                <p>${botResponse}</p>
                            </div>`;
            }

            list.scrollTop = list.scrollHeight;
        }, 1000); 
    }
}


document.getElementById("send-btn").addEventListener("click", function() {
    const userMessage = document.getElementById("user-messages").value;
    abc(userMessage);
    document.getElementById("user-messages").value = ""; 
});

document.getElementById("user-messages").addEventListener("keypress", function (e) {
    if (e.key === "Enter") { 
        const userMessage = document.getElementById("user-messages").value;
        abc(userMessage);  
        document.getElementById("user-messages").value = ""; 
        e.preventDefault();  // Prevent default "Enter" behavior like adding a newline
    }
});

// // Simulate messages only when this function is called manually (not automatically on page load)
// function simulateMessages() {
//     const messages = [
//         "what is js",
//         "hi",
//         "hello",
//         "what is saylani?",
//         "what is ramazan",
//         "how are you?",
//         "tell me a joke",
//         "what's your name?",
//         "what do you do?",
//         "where are you from?",
//         "I am so tired",
//         "show me an image" // Added this message
//     ];

//     for (let i = 0; i < 1000; i++) {
//         let randomMessage = messages[Math.floor(Math.random() * messages.length)];
//         setTimeout(() => {
//             abc(randomMessage);
//         }, i * 2000); // 2 seconds delay between each message
//     }
// }

// // Call simulateMessages manually by a button or another event
// document.getElementById("simulate-btn").addEventListener("click", function() {
//     simulateMessages();
// });