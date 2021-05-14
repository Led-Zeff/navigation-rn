import { StyleSheet } from 'react-native';

export const palette = {
  primary: '#102027',
  accent: '#29434e',
  secondary: '#34515e',
  foreColor: '#fafafa',
  foreColorAccent: '#eeffff',
  foreColorSecondary: '#bbdefb',
};

const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginHorizontal: 20,
  },
  menuText: {
    fontSize: 20,
  },
  text: {
    color: palette.foreColor,
    fontSize: 14,
  },
});

export default styles;
