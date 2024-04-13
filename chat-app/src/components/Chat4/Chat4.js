import React from 'react'
import ChatBox from '../Chatbox/Chatbox'

const Chat4 = () => {

  const handleSend = (message) => {
    console.log('Message sent:', message);
  };
  return (
    <div>
      <h1>Chat 4</h1>
      <ChatBox onSend={handleSend}/>
      
    </div>
  )
}

export default Chat4
