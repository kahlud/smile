import {TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../utils/constants/colors';
import styleInput from './styleInput';

interface Props {
  text: string;
}

export const Input = ({text}: Props) => {
  return (
    <TextInput
      placeholder={text}
      placeholderTextColor={colors.grey}
      style={styleInput.textInput}
    />
  );
};
