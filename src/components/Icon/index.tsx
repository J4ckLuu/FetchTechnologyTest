import React from 'react';
import {Image, ImageSourcePropType, ImageStyle} from 'react-native';

export type IconProps = {
  src: ImageSourcePropType;
  style: ImageStyle;
};

const Icon = ({src, style, ...props}: IconProps) => {
  return <Image source={src} style={style} {...props} />;
};

export default Icon;
