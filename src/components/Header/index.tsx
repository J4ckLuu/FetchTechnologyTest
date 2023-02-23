import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

export type HeaderProps = {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
};

const Header = ({children, style}: HeaderProps): JSX.Element => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default Header;
