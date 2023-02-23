import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ICONS} from '../../assets/icon';
import {COLORS} from '../../constant/colors';
import {FONT} from '../../constant/fonts';
import Button from '../Button';
import Divider from '../Container/Divider';
import Header from '../Header';
import Icon from '../Icon';
import CardInfo from './CardInfo';

const WelcomeText = () => {
  return (
    <>
      <Text style={FONT.header3}>Silver Tier</Text>
      <Divider height={8} />
      <Text style={FONT.para1}>
        In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
        exclusive rewards.
      </Text>
    </>
  );
};

const HeaderSection = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header>
        <Button style={styles.backButtonContainer}>
          <Icon src={ICONS.left} style={styles.iconLeft} />
        </Button>
      </Header>
      <Divider height={16} />
      <WelcomeText />
      <Divider height={40} />
      <CardInfo style={styles.cardContainer} />
      <Divider height={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.main,
    paddingHorizontal: 24,
    paddingVertical: 8,
    paddingBottom: 152,
    marginBottom: 280,
    overflow: 'visible',
  },
  cardContainer: {
    position: 'absolute',
    top: 200,
    right: 24,
    left: 24,
    zIndex: 100,
  },
  backButtonContainer: {
    padding: 8,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  iconLeft: {width: 24, height: 24},
});

export default HeaderSection;
