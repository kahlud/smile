import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import StyleCard from './StyleCard';
import {BanksEnum, bankLogo} from '../../utils/constants/bankImages';
import {colors} from '../../utils/constants/colors';
import {EmiterEnum} from '../../utils/constants/cardEmiter';
import {AvailableMoney} from './AvailableMoney';
import {CreditCardNumber} from './CreditCardNumber';
import {CardDetails} from './CardDetails';

interface CardExpiration {
  month: string;
  year: string;
}

interface Props {
  cardType: string;
  bank: keyof typeof BanksEnum;
  cardEmiter: keyof typeof EmiterEnum;
  numberCard: string;
  expiration: CardExpiration;
  availableMoney: string;
  isOddBackground: boolean;
}

export const Card = ({
  cardType,
  bank,
  cardEmiter,
  numberCard,
  expiration,
  availableMoney,
  isOddBackground,
}: Props) => {
  const BankLogo = bankLogo[bank];
  return (
    <LinearGradient
      colors={
        isOddBackground
          ? [colors.primaryBlue, colors.secondaryBlue]
          : [colors.primaryPink, colors.secondaryPink]
      }
      start={{x: 0.2, y: 0.1}}
      end={{x: 0.3, y: 0.7}}
      style={StyleCard.cardContainer}>
      <BankLogo width={60} />
      {cardType === 'Debito' ? (
        <AvailableMoney availableMoney={availableMoney} />
      ) : (
        <CreditCardNumber numberCard={numberCard} />
      )}
      <CardDetails
        expiration={expiration}
        cardEmiter={cardEmiter}
        cardType={cardType}
      />
    </LinearGradient>
  );
};
