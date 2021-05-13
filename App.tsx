import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SideMenu } from './src/navigation/SideMenu';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <SideMenu />
    </NavigationContainer>
  );
};

export default App;
