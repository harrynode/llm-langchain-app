import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

const MessageContainer = styled.div`
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  max-width: 80%;
  ${props => props.isUser ? `
    background-color: #007AFF;
    color: white;
    align-self: flex-end;
  ` : `
    background-color: #F0F0F0;
    color: black;
    align-self: flex-start;
  `}
`;

const ChatMessage = ({ message, isUser }) => {
  return (
    <MessageContainer isUser={isUser}>
      <ReactMarkdown>
        {message}
      </ReactMarkdown>
    </MessageContainer>
  );
};

export default ChatMessage;
