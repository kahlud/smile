import {View, Text} from 'react-native';
import React from 'react';
import StyleCard from './StyleCard';

interface Props {
  numberCard: string;
}

export const CreditCardNumber = ({numberCard}: Props) => {
  const leakedCardNumbers = numberCard.split(' ');
  return (
    <View style={StyleCard.moneyContainer}>
      <Text style={StyleCard.cardCreditNumber}>
        {leakedCardNumbers[0]} .... .... {leakedCardNumbers[3]}
      </Text>
    </View>
  );
};
