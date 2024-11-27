import React from 'react';
import ChatWindow from './components/ChatWindow';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #e5e5e5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      <ChatWindow />
    </AppContainer>
  );
};

export default App;
