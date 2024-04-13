import React from 'react'
import ChatBox from '../Chatbox/Chatbox'
// import ChatContainer from '../ChatContainer/ChatContainer'

const Chat1 = () => {

    const handleSend = (message) => {
        // Handle sending the message (e.g., send it to a server, update state, etc.)
        console.log('Message sent:', message);
      };

  return (
    <div>
      <h1>Chat 1</h1>
      <ChatBox onSend={handleSend}/>
    </div>
  )
}

export default Chat1
