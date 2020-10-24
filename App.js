import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { MainStack } from './app/navigation/Navigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        {MainStack()}
      </NavigationContainer>
    </>
  );
};

export default App;
