import {GestureResponderEvent, Pressable} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import StyleComponentsHeader from './StyleComponentsHeader';

interface Props {
  imageBotton: React.FC<SvgProps>;
  onPressBotton: (event: GestureResponderEvent) => void;
}

export const BotomHeader = ({imageBotton, onPressBotton}: Props) => {
  const ImageBotton = imageBotton;
  return (
    <Pressable
      onPress={onPressBotton}
      style={StyleComponentsHeader.pressableBottonHeader}>
      <ImageBotton width={30} />
    </Pressable>
  );
};
