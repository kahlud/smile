import {View, Text, Pressable, useWindowDimensions} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import StyleCustomBottom from './StyleCustomBottom';

export const CustomBottomTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const {width} = useWindowDimensions();
  const tabBarWidth = width - 2 * 20;
  const tabWidth = tabBarWidth / state.routes.length;
  return (
    <View style={[StyleCustomBottom.tabBarContainer, {width: tabBarWidth}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={StyleCustomBottom.contentContainer}>
              <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {route.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};
