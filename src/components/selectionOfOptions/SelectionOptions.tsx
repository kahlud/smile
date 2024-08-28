import {View, Text, Pressable, GestureResponderEvent} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import Arrow from '../../assets/images/icons/arrow-right.svg';
import styleSelectionOptions from './styleSelectionOptions';
import {useNavigation} from '@react-navigation/native';

interface Props {
  image: React.FC<SvgProps>;
  text: string;
  navigationScreen: string;
}

export const SelectionOptions = ({image, text, navigationScreen}: Props) => {
  const ImageOption = image;
  const navigation = useNavigation();
  return (
    <View style={styleSelectionOptions.containerSerlection}>
      <View style={styleSelectionOptions.containerItems}>
        <View style={styleSelectionOptions.containerImage}>
          <ImageOption width={36} height={36} />
        </View>
        <Text style={styleSelectionOptions.text}>{text}</Text>
        <Pressable
          style={styleSelectionOptions.buttonPressable}
          onPress={() => navigation.navigate(navigationScreen)}>
          <Arrow style={styleSelectionOptions.arrow} />
        </Pressable>
      </View>
      <View style={styleSelectionOptions.divider} />
    </View>
  );
};
