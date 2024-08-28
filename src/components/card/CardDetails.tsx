import {View, Text} from 'react-native';
import React from 'react';
import StyleCard from './StyleCard';
import {EmiterEnum, emiterCardLogo} from '../../utils/constants/cardEmiter';

interface CardExpiration {
  month: string;
  year: string;
}

interface Props {
  expiration: CardExpiration;
  cardEmiter: keyof typeof EmiterEnum;
  cardType: string;
}

export const CardDetails = ({expiration, cardEmiter, cardType}: Props) => {
  const EmiterLogo = emiterCardLogo[cardEmiter];
  return (
    <View style={StyleCard.cardDetailsConainer}>
      {cardType === 'Debito' ? (
        <View style={StyleCard.containerCardDetails}>
          <Text style={StyleCard.cardNumber}>4566 .... .... 1776</Text>
          <Text style={StyleCard.CardExpiration}>
            Vencimiento {expiration.month}/{expiration.year}
          </Text>
        </View>
      ) : (
        <View style={StyleCard.creditCardExpirationContainer}>
          <Text style={StyleCard.creditCardExpiration}>Vencimiento</Text>
          <Text style={StyleCard.creditCardExpiration}>
            {expiration.month}/{expiration.year}
          </Text>
        </View>
      )}
      <View style={StyleCard.containerCardType}>
        <EmiterLogo width={40} />
        <Text style={StyleCard.cardType}>{cardType}</Text>
      </View>
    </View>
  );
};
