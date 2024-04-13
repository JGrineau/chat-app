import React from 'react'
import ChatBox from '../Chatbox/Chatbox'

const Chat1 = () => {

    const handleSend = (message) => {
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
