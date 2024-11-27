import React, { useState } from 'react';
import styled from '@emotion/styled';

const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #ccc;
`;

const InputField = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ChatInput = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue('');
    }
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message..."
      />
      <SendButton onClick={handleSend}>Send</SendButton>
    </InputContainer>
  );
};

export default ChatInput;
