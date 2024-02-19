import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigator} from './BottomTabNavigator';
import {MoneyTransfer} from '../screens/homeScreen/moneyTransfer';

export type RootStackParamList = {
  HomeTab: undefined;
  MoneyTransfer: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MoneyTransfer"
        component={MoneyTransfer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
