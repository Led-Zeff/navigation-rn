import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { useEffect } from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Screen1 = ({ navigation }: Props) => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ padding: 8, marginLeft: 8 }}
          onPress={navigation.toggleDrawer}>
          <Icon name="menu-outline" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 1: {width}</Text>

      <Button title="Screen 2" onPress={() => navigation.navigate('Screen2')} />
      <Button
        title="Person with params"
        onPress={() => navigation.navigate('Person', { name: 'esto' })}
      />
    </View>
  );
};
