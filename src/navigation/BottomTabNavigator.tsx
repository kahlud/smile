import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/homeScreen';
import {WalletScreen} from '../screens/walletScreen';
import {QrScreen} from '../screens/qrScreen/intex';
import {ProfileScreen} from '../screens/profileScreen';
import {BalanceScreen} from '../screens/balanceScreen/index copy';
import {CustomBottomTab} from '../components/tab/CustomBottomTab';
import {View} from 'react-native';
import StyleTab from '../components/tab/StyleTab';

const Tab = createBottomTabNavigator<BottomTabParamList>();
export type BottomTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Qr: undefined;
  Balance: undefined;
  Profile: undefined;
};

const BottomTabNav = (props: BottomTabBarProps) => {
  return (
    <View style={StyleTab.bottomTabNav}>
      <CustomBottomTab {...props} />
    </View>
  );
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={BottomTabNav} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Qr" component={QrScreen} />
      <Tab.Screen name="Balance" component={BalanceScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
