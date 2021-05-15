import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { TouchableIcon } from '../components/TouchableIcon';
import { AuthContext } from '../context/AuthContext';
import styles, { palette } from '../theme/appTheme';

export const Tab2Screen = () => {
  const { changeIcon } = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.text}>Icons</Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableIcon
          name="airplane-outline"
          size={30}
          color={palette.foreColor}
          onPress={() => changeIcon('airplane-outline')}
        />
        <TouchableIcon
          name="battery-charging-outline"
          size={30}
          color={palette.foreColor}
          onPress={() => changeIcon('battery-charging-outline')}
        />
      </View>
    </View>
  );
};
