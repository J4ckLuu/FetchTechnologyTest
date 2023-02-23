import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';

export type ButtonProps = {
  style: ViewStyle;
  children: JSX.Element | JSX.Element[];
} & TouchableOpacityProps;

const Button = ({style, children, ...props}: ButtonProps): JSX.Element => {
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
