import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';
import styles from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'Person'> {}

export const Person = ({ route: { params }, navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({ title: params.name });
  }, [navigation, params.name]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Person</Text>
    </View>
  );
};
