import {Text, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils/constants/colors';
import stylePrimaryBotton from './stylePrimaryBotton';

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
  width: number;
  direction: keyof typeof Direction;
  color: keyof typeof Colors;
}

export const PrimaryBotton = ({nameButton, width, direction, color}: Props) => {
  return (
    <Pressable>
      <LinearGradient
        colors={
          color
            ? [colors.primaryPink, colors.secondaryPink]
            : [colors.primaryBlue, colors.secondaryBlue]
        }
        start={{x: 0.33, y: 0.1}}
        end={{x: 0.4, y: 0.9}}
        style={[
          stylePrimaryBotton.button,
          {width: width, alignSelf: Direction[direction]},
        ]}>
        <Text style={stylePrimaryBotton.textBotton}>{nameButton}</Text>
      </LinearGradient>
    </Pressable>
  );
};
