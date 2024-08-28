import {Text, Pressable, GestureResponderEvent, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils/constants/colors';
import stylePrimaryBotton from './stylePrimaryBotton';
import {SvgProps} from 'react-native-svg';

enum Colors {
  PINK = 'pink',
  BLUE = 'blue',
}

enum Direction {
  END = 'flex-end',
  CENTER = 'center',
  START = 'flex-start',
}
interface Props {
  nameButton: string;
  width: string;
  direction: keyof typeof Direction;
  color: keyof typeof Colors;
  OnPress: (event: GestureResponderEvent) => void;
  Image?: React.FC<SvgProps>;
}

export const PrimaryBotton = ({
  nameButton,
  width,
  direction,
  color,
  OnPress,
  Image,
}: Props) => {
  return (
    <Pressable onPress={OnPress}>
      <LinearGradient
        colors={
          color === 'BLUE'
            ? [colors.primaryBlue, colors.secondaryBlue]
            : [colors.primaryPink, colors.secondaryPink]
        }
        start={{x: 0.59, y: 0.2}}
        end={{x: 0.6, y: 0.9}}
        style={[
          stylePrimaryBotton.button,
          {width: width, alignSelf: Direction[direction]},
        ]}>
        <View style={stylePrimaryBotton.viewContainer}>
          {Image ? (
            <Image width={28} height={28} style={stylePrimaryBotton.image} />
          ) : null}
          <Text style={stylePrimaryBotton.textBotton}>{nameButton}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
