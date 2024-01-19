import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/homeScreen';
import {WalletScreen} from '../screens/walletScreen';
import {QrScreen} from '../screens/qrScreen/intex';
import {ProfileScreen} from '../screens/profileScreen';
import {BalanceScreen} from '../screens/balanceScreen/index copy';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Qr" component={QrScreen} />
      <Tab.Screen name="Balance" component={BalanceScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
