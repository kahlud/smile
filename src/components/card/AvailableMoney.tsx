import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import EyeActive from '../../assets/images/icons/tarjetas/eyeActive.svg';
import EyeInactive from '../../assets/images/icons/tarjetas/eyeInactive.svg';
import StyleCard from './StyleCard';

interface Props {
  availableMoney: string;
}

export const AvailableMoney = ({availableMoney}: Props) => {
  const [visible, setVisible] = useState(true);
  const amountOfMoney = availableMoney.split('.');
  return (
    <View style={StyleCard.moneyContainer}>
      <View style={StyleCard.textMoneyConteiner}>
        <Text style={StyleCard.moneySymbol}>$</Text>
        {visible ? (
          <View style={StyleCard.MoneyVisibleContainer}>
            <Text style={StyleCard.moneyNumber}>{amountOfMoney[0]}</Text>
            <Text style={StyleCard.centsNumber}>{amountOfMoney[1]}</Text>
          </View>
        ) : (
          <Text style={StyleCard.moneyNumber}>¡ zZz ! ...</Text>
        )}
      </View>
      <Pressable onPress={() => setVisible(!visible)}>
        {visible ? (
          <EyeActive width={26} style={StyleCard.eye} />
        ) : (
          <EyeInactive width={26} style={StyleCard.eye} />
        )}
      </Pressable>
    </View>
  );
};
