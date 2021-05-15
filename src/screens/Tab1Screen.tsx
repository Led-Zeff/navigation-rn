import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../theme/appTheme';

export const Tab1Screen = () => {
  const {
    signIn,
    logout,
    authState: { isloggedIn },
  } = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.text}>Tab1</Text>
      {!isloggedIn && <Button title="Sign in" onPress={signIn} />}
      {isloggedIn && <Button title="Logout" onPress={logout} />}
    </View>
  );
};
