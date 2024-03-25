import {Text, GestureResponderEvent, Pressable} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import {colors} from '../../utils/constants/colors';
import StyleHomeActivityButton from './StyleHomeActivityButton';

interface Props {
  onPressBotton: (event: GestureResponderEvent) => void;
  image: React.FC<SvgProps>;
  text: string;
}

export const HomeActivityButton = ({onPressBotton, image, text}: Props) => {
  const ImageBottom = image;
  return (
    <Pressable
      onPress={onPressBotton}
      style={StyleHomeActivityButton.pressableButton}>
      <ImageBottom width={50} />
      <Text style={StyleHomeActivityButton.TextButton}>{text}</Text>
    </Pressable>
  );
};
