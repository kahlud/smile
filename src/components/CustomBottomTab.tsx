import {View, Text, Pressable, useWindowDimensions} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import StyleCustomBottom from './StyleTab';
import {BottomTab} from './BottomTab';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils/constants/colors';

export const CustomBottomTab = ({state, navigation}: BottomTabBarProps) => {
  const nameRoute = state.index;

  const {width} = useWindowDimensions();
  const tabBarWidth = width - 2 * 20;
  const tabWidth = tabBarWidth / state.routes.length;

  const translateAnimation = useAnimatedStyle(() => {
    return {transform: [{translateX: withTiming(tabWidth * state.index)}]};
  });

  return (
    <View style={[StyleCustomBottom.tabBarContainer, {width: tabBarWidth}]}>
      <Animated.View
        style={[
          StyleCustomBottom.tabContainer,
          {width: tabWidth},
          translateAnimation,
          nameRoute === 2
            ? StyleCustomBottom.tabBlue
            : StyleCustomBottom.tabPink,
        ]}>
        <LinearGradient
          colors={
            nameRoute === 2
              ? [colors.primaryBlue, colors.secondaryBlue]
              : [colors.primaryPink, colors.secondaryPink]
          }
          style={StyleCustomBottom.selectIcon}
          start={{x: 0.0, y: 0.2}}
          end={{x: 0.4, y: 1.0}}
        />
      </Animated.View>
      {state.routes.map((route, index) => {
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

        return (
          <Pressable onPress={onPress} style={StyleCustomBottom.pressTab}>
            <View style={StyleCustomBottom.contentContainer}>
              <BottomTab route={route.name} isfocused={isFocused} />
              <Text style={StyleCustomBottom.textButton}>{route.name}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};
