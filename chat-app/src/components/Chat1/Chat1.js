import React from 'react'
import ChatBox from '../Chatbox/Chatbox'

const Chat1 = () => {

    const handleSend = (message) => {
        // Handle sending the message (e.g., send it to a server, update state, etc.)
        console.log('Message sent:', message);
      };

  return (
    <div>
      Chat 1
      <ChatBox onSend={handleSend}/>
    </div>
  )
}

export default Chat1
