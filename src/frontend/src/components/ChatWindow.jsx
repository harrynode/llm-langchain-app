import React, { useState } from 'react';
import styled from '@emotion/styled';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const WindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: #f9f9f9;
`;

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, { text: newMessage, isUser: true }]);
    // Here you would also send the message to the backend or LLM
  };

  return (
    <WindowContainer>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </MessagesContainer>
      <ChatInput onSend={handleSend} />
    </WindowContainer>
  );
};

export default ChatWindow;
