import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigator} from './BottomTabNavigator';
import {TransferRootNavigation} from './TransferNavigationStack';

export type RootStackParamList = {
  HomeTab: undefined;
  TransferNavigation: undefined;
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
        name="TransferNavigation"
        component={TransferRootNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
