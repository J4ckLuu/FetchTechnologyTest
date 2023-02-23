import React from 'react';
import {View} from 'react-native';

export type DividerProps = {
  height?: number | string;
  width?: number | string;
};

const Divider = ({height, width}: DividerProps): JSX.Element => {
  return <View style={{height: height, width: width}} />;
};

export default Divider;
