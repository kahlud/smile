import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Arrow from '../../assets/images/icons/arrow-left.svg';
import {SvgProps} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import StyleComponentsHeader from './StyleComponentsHeader';

interface Props {
  title: string;
  image?: React.FC<SvgProps>;
  imageTitle?: React.FC<SvgProps>;
}

export const Header = ({title, image, imageTitle}: Props) => {
  const navigation = useNavigation();
  const ImageBotton = image;
  const ImageTitle = imageTitle;
  return (
    <View style={StyleComponentsHeader.containerHeader}>
      <Pressable onPress={navigation.goBack}>
        <Arrow width={34} height={34} />
      </Pressable>
      <View style={StyleComponentsHeader.containerTitle}>
        {imageTitle ? (
          <ImageTitle width={24} style={StyleComponentsHeader.imageTitle} />
        ) : null}
        <Text style={StyleComponentsHeader.titleHeader}>{title}</Text>
      </View>
      {image ? (
        <Pressable>
          <ImageBotton width={30} />
        </Pressable>
      ) : (
        <View style={{width: 40}} />
      )}
    </View>
  );
};
