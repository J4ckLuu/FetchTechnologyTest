/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import BaseContainer from './src/components/Container/BaseContainer';
import Divider from './src/components/Container/Divider';
import {IMAGES} from './src/assets/image';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HeaderSection from './src/components/Home/HeaderSection';
import ProductList from './src/components/Home/ProductList';
import Icon from './src/components/Icon';
import {ICONS} from './src/assets/icon';
import {FONT} from './src/constant/fonts';

const Tab = createBottomTabNavigator();

const PETROL_DATA = [
  {
    source: IMAGES.petroProduct,
    price: 15,
    description: '50% discount for every $100 top-up on your Shell Petrol Card',
  },
  {
    source: IMAGES.petroProduct,
    price: 1000,
    description: '50% discount for every $100 top-up on your Shell Petrol Card',
  },
  {
    source: IMAGES.petroProduct,
    price: 340,
    description: '50% discount for every $100 top-up on your Shell Petrol Card',
  },
];

const RENTAL_DATA = [
  {
    source: IMAGES.rentalProduct,
    price: 20,
    description: 'Get $20 Rental rebate',
  },
  {
    source: IMAGES.petroProduct,
    price: 15,
    description: 'Get $20 Rental rebate',
  },
  {
    source: IMAGES.petroProduct,
    price: 20,
    description: 'Get $20 Rental rebate',
  },
];

const FOOD_DATA = [
  {
    source: IMAGES.foodProduct,
    price: 25,
    description: 'NTUC Fairprice $50 Voucher',
  },
  {
    source: IMAGES.foodProduct,
    price: 5,
    description: 'Free Cold Stone Sundae at any flavour!',
  },
  {
    source: IMAGES.foodProduct,
    price: 20,
    description: 'NTUC Fairprice $50 Voucher',
  },
];

const HomeScreen = () => {
  const availableBalance = 340;
  return (
    <BaseContainer style={styles.screenContainer}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HeaderSection />
        <ProductList
          availableBalance={availableBalance}
          data={PETROL_DATA}
          listContainerStyle={{paddingLeft: 24}}
          title={'Petrol'}
          titleStyle={{marginLeft: 24}}
        />
        <Divider height={32} />
        <ProductList
          availableBalance={availableBalance}
          data={RENTAL_DATA}
          listContainerStyle={{paddingLeft: 24}}
          title={'Rental Rebate'}
          titleStyle={{marginLeft: 24}}
        />
        <Divider height={32} />
        <ProductList
          availableBalance={availableBalance}
          data={FOOD_DATA}
          listContainerStyle={{paddingLeft: 24}}
          title={'Food and Beverage'}
          titleStyle={{marginLeft: 24}}
        />
        <Divider height={32} />
      </ScrollView>
    </BaseContainer>
  );
};

const ComingSoonScreen = () => {
  return (
    <BaseContainer style={styles.screenContainer}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={FONT.header1}>Coming Soon</Text>
      </View>
    </BaseContainer>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {marginTop: 24},
          tabBarIcon: () => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = ICONS.home;
                break;
              case 'Notification':
                iconName = ICONS.noti;
                break;
              case 'Card':
                iconName = ICONS.card;
                break;
              case 'Account':
                iconName = ICONS.account;
                break;
              default:
                iconName = ICONS.home;
                break;
            }

            return <Icon src={iconName} style={{marginTop: 24}} />;
          },
          headerShown: false,
          tabBarLabel: '',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Notification"
          component={ComingSoonScreen}
          options={{
            tabBarBadge: '',
          }}
        />
        <Tab.Screen name="Card" component={ComingSoonScreen} />
        <Tab.Screen name="Account" component={ComingSoonScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
