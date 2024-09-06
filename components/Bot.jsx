import React, { useState } from "react";
import "./Bot.css";

const Bot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I am Joy ,How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const botResponses = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("hi")) {
        return "Hello! i am Your Assistant How can i help you";
    }
    if (lowerInput.includes("hello")) {
       return "You can view your available courses under the 'Courses' section.";
    }  
    if (lowerInput.includes("course")) {
      return "You can view your available courses under the 'Courses' section.";
    } else if (lowerInput.includes("progress")) {
      return "Your progress is tracked under the 'Progress' section.";
    } else if (lowerInput.includes("profile")) {
      return "You can manage your personal information under the 'Profile' section.";
    } else if (lowerInput.includes("help")) {
      return "I'm here to help! Ask me anything about the dashboard.";
    } else if (lowerInput.includes("courses")){
      return "Sorry, I didn't understand that. Try asking about 'courses', 'progress', or 'profile'.";
    } else{
        return "Sorry, I didn't understand that.Try Contacting abc@gmail.com" ;
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { from: "user", text: input }];
      setMessages(newMessages);
      setTimeout(() => {
        const botMessage = botResponses(input);
        setMessages([...newMessages, { from: "bot", text: botMessage }]);
      }, 1000);

      setInput("");
    }
  };

  return (
    <div className="bot-container">
      <button className="close-button" onClick={onClose}>Close</button>
      <div className="bot-header">Study Assistant</div>
      <div className="bot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.from === "bot" ? "bot-message" : "user-message"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="bot-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="bot-input"
        />
        <button onClick={handleSend} className="bot-send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Bot;
