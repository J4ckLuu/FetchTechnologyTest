import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

export const fontStyle = StyleSheet.create({
  header1: {
    fontSize: 48,
    fontFamily: 'Hellix-Regular',
    color: COLORS.black,
    fontWeight: '400',
    lineHeight: 56,
  },
  header3: {
    fontSize: 32,
    fontFamily: 'Hellix-Regular',
    color: COLORS.white,
    fontWeight: '600',
    lineHeight: 40,
  },
  para1: {
    fontSize: 16,
    fontFamily: 'Hellix-Regular',
    color: COLORS.gray05,
    fontWeight: '400',
    lineHeight: 24,
  },
  para3: {
    fontSize: 14,
    fontFamily: 'Hellix-Regular',
    color: COLORS.gray05,
    fontWeight: '400',
    lineHeight: 20,
  },
  title1: {
    fontSize: 18,
    fontFamily: 'Hellix-Regular',
    color: COLORS.white,
    fontWeight: '600',
    lineHeight: 24,
  },
  title2: {
    fontSize: 16,
    fontFamily: 'Hellix-Regular',
    color: COLORS.sub,
    fontWeight: '600',
    lineHeight: 24,
  },
  title3: {
    fontSize: 14,
    fontFamily: 'Hellix-Bold',
    color: COLORS.gray05,
    fontWeight: '600',
    lineHeight: 24,
  },
});
