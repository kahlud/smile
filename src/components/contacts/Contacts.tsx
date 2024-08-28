import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../utils/constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import styleContactList from './styleContactList';

interface Props {
  name: string;
}

export const Contacts = ({name}: Props) => {
  const initials = name.split(' ');
  const letters = initials.map(item => {
    const letter = item.slice(0, 1);
    return letter;
  });
  return (
    <View style={styleContactList.container}>
      <LinearGradient
        colors={[colors.primaryBlue, colors.secondaryBlue]}
        style={styleContactList.containerLetters}>
        <Text style={styleContactList.textLetters}>{letters}</Text>
      </LinearGradient>
      <Text style={styleContactList.name}>{name}</Text>
    </View>
  );
};
