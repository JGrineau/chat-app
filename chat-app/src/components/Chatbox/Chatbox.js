import React, { useState } from 'react';
import './Chatbox.css';

const Chatbox = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter'){
        handleSendClick();
    }
  }

  

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.reverse().map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
        
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
