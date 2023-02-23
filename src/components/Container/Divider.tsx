import React from 'react';
import {View} from 'react-native';

const Divider = ({
  height,
  width,
}: {
  height?: number | string;
  width?: number | string;
}) => {
  return <View style={{height: height, width: width}} />;
};

export default Divider;
