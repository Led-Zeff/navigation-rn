import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {
  const { authState } = useContext(AuthContext);

  return (
    <View>
      <Text>Settings</Text>
      <Text>{JSON.stringify(authState, undefined, 2)}</Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={30} />
      )}
    </View>
  );
};
