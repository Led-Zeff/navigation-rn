import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export interface Props {
  name: string;
  size: number;
  color: string;
  onPress?: () => void;
}

export const TouchableIcon = ({ onPress, ...iconProps }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon {...iconProps} />
    </TouchableOpacity>
  );
};
