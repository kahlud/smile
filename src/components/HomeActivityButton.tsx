import {Text, GestureResponderEvent, Pressable} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import {colors} from '../utils/constants/colors';

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
      style={{
        paddingVertical: 16,
        paddingHorizontal: 10,
        width: 94,
        marginHorizontal: 14,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopEndRadius: 14,
        borderTopStartRadius: 4,
        borderBottomEndRadius: 4,
        borderBottomStartRadius: 14,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.14,
        shadowRadius: 7.6,
        elevation: 5,
      }}>
      <ImageBottom width={50} />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 12,
          verticalAlign: 'top',
          color: colors.text,
          fontSize: 14,
          fontWeight: '300',
        }}>
        {text}
      </Text>
    </Pressable>
  );
};
