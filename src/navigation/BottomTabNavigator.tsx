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
import {CustomBottomTab} from '../components/CustomBottomTab';
import {View} from 'react-native';

const Tab = createBottomTabNavigator<BottomTabParamList>();
export type BottomTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Qr: undefined;
  Balance: undefined;
  Profile: undefined;
};

const BottomTab = (props: BottomTabBarProps) => {
  return (
    <View
      style={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.62,
        elevation: 8,
      }}>
      <CustomBottomTab {...props} />
    </View>
  );
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={BottomTab} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Qr" component={QrScreen} />
      <Tab.Screen name="Balance" component={BalanceScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
