import {Text, GestureResponderEvent, Pressable} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import StyleHomeActivityButton from './StyleHomeActivityButton';

interface HomeActivityButtonProps {
  onPressBotton: (event: GestureResponderEvent) => void;
  image: React.FC<SvgProps>;
  text: string;
}

export const HomeActivityButton: React.FC<HomeActivityButtonProps> = ({
  onPressBotton,
  text,
  image,
}) => {
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
