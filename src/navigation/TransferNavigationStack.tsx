import React from 'react';
import {MoneyTransfer} from '../screens/homeScreen/moneyTransfer/index';
import {createStackNavigator} from '@react-navigation/stack';
import {TransferData} from '../screens/homeScreen/moneyTransfer/TranserData';
import {TransferAmount} from '../screens/homeScreen/moneyTransfer/TransferAmount/TransferAmount';

export type RootStackParamList = {
  MoneyTransfer: undefined;
  TransferData: undefined;
  TransferAmount: undefined;
};

const TransferStack = createStackNavigator<RootStackParamList>();

export const TransferRootNavigation = () => {
  return (
    <TransferStack.Navigator>
      <TransferStack.Screen
        name="MoneyTransfer"
        component={MoneyTransfer}
        options={{headerShown: false}}
      />
      <TransferStack.Screen
        name="TransferData"
        component={TransferData}
        options={{headerShown: false}}
      />
      <TransferStack.Screen
        name="TransferAmount"
        component={TransferAmount}
        options={{headerShown: false}}
      />
    </TransferStack.Navigator>
  );
};
