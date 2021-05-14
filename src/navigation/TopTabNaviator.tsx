import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { palette } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

export const TopTabNaviator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <TopTab.Navigator
      style={{ paddingTop: top }}
      sceneContainerStyle={{ backgroundColor: palette.primary }}
      tabBarOptions={{
        showIcon: true,
        pressColor: palette.primary,
        indicatorStyle: { backgroundColor: palette.accent },
      }}>
      <TopTab.Screen
        name="Tab1"
        options={{
          tabBarIcon: ({ color }) =>
            getIcon({ name: 'apps-outline', color, size: 20 }),
        }}
        component={Tab1Screen}
      />
      <TopTab.Screen name="Tab2" component={Tab2Screen} />
      <TopTab.Screen name="Tab3" component={Tab3Screen} />
    </TopTab.Navigator>
  );
};

const getIcon = (props: { name: string; color: string; size: number }) => (
  <Icon {...props} />
);
