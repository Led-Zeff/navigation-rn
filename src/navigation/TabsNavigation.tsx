import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from '../screens/Tab2Screen';
import { palette } from '../theme/appTheme';
import { StackNavigator } from './StackNavigator';
import { TopTabNaviator } from './TopTabNaviator';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: palette.primary }}
      tabBarOptions={{
        activeTintColor: palette.foreColorAccent,
        activeBackgroundColor: palette.accent,
        inactiveTintColor: palette.foreColorSecondary,
        inactiveBackgroundColor: palette.secondary,
        style: { borderColor: palette.primary, borderTopWidth: 0 },
        labelStyle: { marginBottom: 2, fontSize: 12 },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          tabBarIcon: ({ color, size }) =>
            getIcon({ color, size, name: 'apps-outline' }),
        }}
        component={TopTabNaviator}
      />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Tab3" component={StackNavigator} />
    </Tab.Navigator>
  );
};

const getIcon = (props: { name: string; color: string; size: number }) => (
  <Icon {...props} />
);
