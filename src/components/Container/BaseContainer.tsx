import React from 'react';
import {Platform, SafeAreaView, StatusBar, ViewStyle} from 'react-native';
import {COLORS} from '../../constant/colors';

const BaseContainer = ({
  children,
  style,
  ...props
}: {
  children: JSX.Element | Array<JSX.Element>;
  style: ViewStyle;
}): JSX.Element => {
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
