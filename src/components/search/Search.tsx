import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../utils/constants/colors';
import SearchImage from '../../assets/images/icons/search.svg';

interface Props {}

export const Search = ({}: Props) => {
  return (
    <View style={{backgroundColor: colors.greyLigth, flexDirection: 'row'}}>
      <SearchImage />
      <TextInput></TextInput>
    </View>
  );
};
