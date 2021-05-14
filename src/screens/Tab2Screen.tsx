import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles, { palette } from '../theme/appTheme';

export const Tab2Screen = () => {
  return (
    <View>
      <Text style={styles.text}>Icons</Text>
      <Icon name="airplane-outline" size={30} color={palette.foreColor} />
      <Icon
        name="battery-charging-outline"
        size={30}
        color={palette.foreColor}
      />
    </View>
  );
};
