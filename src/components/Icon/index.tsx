import React from 'react';
import {Image, ImageSourcePropType, ImageStyle} from 'react-native';

const Icon = ({
  src,
  style,
  ...props
}: {
  src: ImageSourcePropType;
  style: ImageStyle;
}) => {
  return <Image source={src} style={style} {...props} />;
};

export default Icon;
