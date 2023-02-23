import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
  FlatList,
  Image,
} from 'react-native';
import {ICONS} from '../../assets/icon';
import {COLORS} from '../../constant/colors';
import {FONT} from '../../constant/fonts';
import {formatNumber} from '../../utils/Numbers';
import Button from '../Button';
import Divider from '../Container/Divider';
import Icon from '../Icon';

export type ProductItem = {
  source: ImageSourcePropType;
  price: number | string;
  description: string;
};

const PriceTag = ({
  price,
  isSufficient = true,
}: {
  price: string | number;
  isSufficient: boolean;
}) => {
  if (isSufficient) {
    return <Text style={FONT.title2}>{price} Coins</Text>;
  }

  return (
    <View style={styles.priceTagContainer}>
      <Icon src={ICONS.insufficientIcon} style={styles.insufficientIcon} />
      <Divider width={4} />
      <Text style={StyleSheet.flatten([FONT.title2, {color: COLORS.gray03}])}>
        {price} Coins
      </Text>
    </View>
  );
};

const InsufficientAlertText = ({isSufficient}: {isSufficient: boolean}) =>
  isSufficient ? (
    <></>
  ) : (
    <Text style={StyleSheet.flatten([FONT.para3, {color: COLORS.sub}])}>
      Insufficient coins
    </Text>
  );

const Separator = () => <Divider width={24} />;

const ProductList = ({
  availableBalance,
  data,
  listContainerStyle,
  style,
  title,
  titleStyle,
}: {
  availableBalance: number;
  data: ProductItem[];
  style?: ViewStyle;
  listContainerStyle?: ViewStyle;
  title: string;
  titleStyle: TextStyle;
}): JSX.Element => {
  return (
    <View style={style}>
      <Text
        style={StyleSheet.flatten([
          FONT.title1,
          {color: COLORS.grey01},
          titleStyle,
        ])}>
        {title}
      </Text>
      <Divider height={16} />
      <FlatList
        style={listContainerStyle}
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<Separator />}
        renderItem={({item}: {item: ProductItem}) => {
          const isSufficientBalance = availableBalance >= item?.price;
          return (
            <View style={styles.shadow}>
              <Button style={styles.productContainer}>
                <Image
                  source={item?.source}
                  style={{width: '100%', height: 98}}
                  resizeMode="stretch"
                />
                <View style={{padding: 16}}>
                  <PriceTag
                    price={formatNumber(item?.price)}
                    isSufficient={isSufficientBalance}
                  />
                  <Divider height={8} />
                  <Text
                    style={StyleSheet.flatten([
                      FONT.para1,
                      {color: COLORS.gray04},
                    ])}
                    numberOfLines={isSufficientBalance ? 3 : 2}>
                    {item?.description}
                  </Text>
                  <Divider height={8} />
                  <InsufficientAlertText isSufficient={isSufficientBalance} />
                </View>
              </Button>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  priceTagContainer: {flexDirection: 'row', alignItems: 'center'},
  insufficientIcon: {height: 16, width: 16},
  productContainer: {
    width: 200,
    height: 240,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray08,
    borderRadius: 4,
    overflow: 'hidden',
  },
  shadow: {
    shadowColor: COLORS.shadowLow,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.04,
    shadowRadius: 2.54,
    elevation: 2,
    marginVertical: 8,
  },
});

export default ProductList;
