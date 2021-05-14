import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';
import styles from '../theme/appTheme';
import { TabsNavigation } from './TabsNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 720 ? 'permanent' : 'front'}
      drawerStyle={{ width: 200 }}
      drawerContent={menu}>
      <Drawer.Screen name="Home" component={TabsNavigation} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const menu = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => (
  <DrawerContentScrollView>
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png',
        }}
      />
    </View>

    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={() => navigation.navigate('Home')}>
        <Icon name="apps-outline" color="black" size={18} />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>
    </View>
  </DrawerContentScrollView>
);
