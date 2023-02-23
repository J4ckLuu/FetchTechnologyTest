import React from 'react';
import {View, Text, ImageBackground, StyleSheet, ViewStyle} from 'react-native';
import {ICONS} from '../../assets/icon';
import {IMAGES} from '../../assets/image';
import {COLORS} from '../../constant/colors';
import {fontStyle} from '../../constant/fonts';
import Button from '../Button';
import Divider from '../Container/Divider';
import Icon from '../Icon';

const ProgressBar = ({
  fillPercentage,
}: {
  fillPercentage: number;
}): JSX.Element => {
  const filledBarStyle = {flex: fillPercentage};
  const unfilledBarStyle = {flex: 100 - fillPercentage};

  return (
    <View style={styles.progressBarContainer}>
      <View
        style={StyleSheet.flatten([
          filledBarStyle,
          {backgroundColor: COLORS.sub},
        ])}
      />
      <View style={unfilledBarStyle} />
    </View>
  );
};

const CardInfo = ({style}: {style: ViewStyle}): JSX.Element => {
  return (
    <ImageBackground
      style={StyleSheet.flatten([styles.container, style])}
      source={IMAGES.cardBackground}
      resizeMode={'stretch'}>
      <Text style={fontStyle.title3}>Available Coin balance</Text>
      <Divider height={8} />
      <Text style={fontStyle.header1}>340</Text>
      <Divider height={32} />
      <ProgressBar fillPercentage={70} />
      <Divider height={32} />
      <Text
        style={StyleSheet.flatten([fontStyle.para1, {color: COLORS.gray04}])}>
        You have paid rental fee for $1,200.{'\n'}Pay more $800 to achieve Gold
        Tier.
      </Text>
      <Divider height={16} />
      <Button style={styles.viewTierButtonContainer}>
        <Text
          style={StyleSheet.flatten([fontStyle.para1, {color: COLORS.sub}])}>
          View tier benefits
        </Text>
        <Icon src={ICONS.right} style={styles.rightIcon} />
      </Button>
      <Divider height={24} />
      <Button style={styles.myCouponButton}>
        <Text style={fontStyle.title1}>My Coupons</Text>
      </Button>
      <Divider height={16} />
      <Text
        style={StyleSheet.flatten([fontStyle.para3, {textAlign: 'center'}])}>
        Updated : 02/11/2021
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray09,
    padding: 24,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.shadowLow,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.04,
    shadowRadius: 2.54,
    elevation: 2,
  },
  myCouponButton: {
    width: '100%',
    backgroundColor: COLORS.main,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 4,
  },
  progressBarContainer: {
    flex: 1,
    height: 5,
    width: '100%',
    backgroundColor: COLORS.gray07,
    borderRadius: 2.5,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  rightIcon: {
    width: 24,
    height: 24,
  },
  viewTierButtonContainer: {flexDirection: 'row'},
});

export default CardInfo;
