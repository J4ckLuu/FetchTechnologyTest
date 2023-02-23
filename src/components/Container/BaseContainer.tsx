import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../constant/colors';

export type BaseContainerProps = {
  children: JSX.Element | Array<JSX.Element>;
  style: ViewStyle;
} & ViewProps;

const BaseContainer = ({
  children,
  style,
  ...props
}: BaseContainerProps): JSX.Element => {
  return (
    <SafeAreaView {...props} style={style}>
      <StatusBar
        barStyle={Platform.select({
          ios: 'dark-content',
          android: 'light-content',
        })}
        backgroundColor={COLORS.main}
      />
      {children}
    </SafeAreaView>
  );
};

export default BaseContainer;
