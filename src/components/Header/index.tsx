import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

const Header = ({
  children,
  style,
}: {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
}) => {
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
