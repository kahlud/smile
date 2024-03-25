import {View, TextInput} from 'react-native';
import React from 'react';
import SearchImage from '../../assets/images/icons/search.svg';
import styleSearch from './styleSearch';
import {colors} from '../../utils/constants/colors';

interface Props {}

export const Search = ({}: Props) => {
  return (
    <View style={styleSearch.container}>
      <SearchImage />
      <TextInput
        placeholder="Buscar una cuenta"
        placeholderTextColor={colors.grey}
        keyboardType="default"
        style={styleSearch.textInput}
      />
    </View>
  );
};
