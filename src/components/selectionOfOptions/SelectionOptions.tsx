import {View, Text, Pressable, GestureResponderEvent} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import Arrow from '../../assets/images/icons/arrow-right.svg';
import styleSelectionOptions from './styleSelectionOptions';

interface Props {
  image: React.FC<SvgProps>;
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const SelectionOptions = ({image, text, onPress}: Props) => {
  const ImageOption = image;
  return (
    <View style={styleSelectionOptions.containerSerlection}>
      <View style={styleSelectionOptions.containerItems}>
        <View style={styleSelectionOptions.containerImage}>
          <ImageOption width={36} />
        </View>
        <Text style={styleSelectionOptions.text}>{text}</Text>
        <Pressable
          style={styleSelectionOptions.buttonPressable}
          onPress={() => onPress}>
          <Arrow style={styleSelectionOptions.arrow} />
        </Pressable>
      </View>
      <View style={styleSelectionOptions.divider} />
    </View>
  );
};
