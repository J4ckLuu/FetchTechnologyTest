import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

export const fontStyle = StyleSheet.create({
  header1: {
    fontSize: 48,
    color: COLORS.black,
    fontWeight: 'normal',
    lineHeight: 56,
  },
  header3: {
    fontSize: 32,
    color: COLORS.white,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  para1: {
    fontSize: 16,
    color: COLORS.gray05,
    fontWeight: 'normal',
    lineHeight: 24,
  },
  para3: {
    fontSize: 14,
    color: COLORS.gray05,
    fontWeight: 'normal',
    lineHeight: 20,
  },
  title1: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  title2: {
    fontSize: 16,
    color: COLORS.sub,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  title3: {
    fontSize: 14,
    color: COLORS.gray05,
    fontWeight: 'bold',
    lineHeight: 24,
  },
});
