import React from 'react';
import {MoneyTransfer} from '../screens/homeScreen/moneyTransfer/index';
import {createStackNavigator} from '@react-navigation/stack';
import {TransferData} from '../screens/homeScreen/moneyTransfer/transerData';
import {TransferAmount} from '../screens/homeScreen/moneyTransfer/transferAmount/TransferAmount';
import {TransferDataVerification} from '../screens/homeScreen/moneyTransfer/transferDataVerification/TransferDataVerification';
import {TransferResolutio} from '../screens/homeScreen/moneyTransfer/transferResolution/TransferResolution';
import {TransitionPresets} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Navigation<
  P extends ParamListBase = ParamListBase,
  R extends keyof P = keyof ParamListBase,
> = NativeStackScreenProps<P, R>;

export type RootStackParamList = {
  MoneyTransfer: undefined;
  TransferData: undefined;
  TransferAmount: undefined;
  TransferDataVerification: {amount: string};
  SuccessfulTransfer: undefined;
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
      <TransferStack.Screen
        name="TransferDataVerification"
        component={TransferDataVerification}
        options={{headerShown: false}}
      />
      <TransferStack.Screen
        name="SuccessfulTransfer"
        component={TransferResolutio}
        options={{
          headerShown: false,
          ...TransitionPresets.FadeFromBottomAndroid,
        }}
      />
    </TransferStack.Navigator>
  );
};
