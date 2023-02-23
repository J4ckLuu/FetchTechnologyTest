import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';

const Button = ({
  style,
  children,
  ...props
}: {
  style: ViewStyle;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, style])}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Button;
