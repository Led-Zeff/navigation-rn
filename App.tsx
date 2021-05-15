import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SideMenu } from './src/navigation/SideMenu';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <SideMenu />
      </AuthProvider>
    </NavigationContainer>
  );
};

// const AppState = ({ children }: any) => <AuthProvider>{children}</AuthProvider>;

export default App;
