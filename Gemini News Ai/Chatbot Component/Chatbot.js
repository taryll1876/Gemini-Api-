import React, { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        const userInput = e.target.message.value;
        // Process user input, handle queries, or interaction with the chatbot
        // Add logic here to interact with the chatbot (not implemented in this example)
        setMessages([...messages, { text: userInput, sender: 'user' }]);
        // Call API or perform actions based on user input
        // Update 'messages' state with responses from the chatbot
        e.target.reset();
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleMessageSubmit} className="chatbot-form">
                <input type="text" name="message" placeholder="Type your message..." />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
