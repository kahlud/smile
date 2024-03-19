import React from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {colors} from '../../../../utils/constants/colors';
import {Header} from '../../../../components/header/Header';
import BBVALogo from '../../../../assets/images/icons/tarjetas/BBVALogo.svg';
import Arrow from '../../../../assets/images/icons/arrow-left.svg';
import {PrimaryBotton} from '../../../../components/PrimaryBotton';
import styleTransferAmount from './styleTransferAmount';

export const TransferAmount = () => {
  return (
    <SafeAreaView style={styleTransferAmount.safeArea}>
      <Header title={'BBVA - CA 7938'} imageTitle={BBVALogo} />
      <View style={styleTransferAmount.containerAmount}>
        <View style={styleTransferAmount.amount}>
          <View style={styleTransferAmount.containerInput}>
            <Text style={styleTransferAmount.moneySymbol}>$</Text>
            <TextInput
              placeholder="0"
              placeholderTextColor={colors.grey}
              style={styleTransferAmount.input}
              keyboardType="numeric"
            />
          </View>
          <Pressable>
            <Text style={styleTransferAmount.pressableBalance}>
              Usar todo el saldo
            </Text>
          </Pressable>
        </View>
        <Pressable style={styleTransferAmount.pressableReason}>
          <Text style={styleTransferAmount.textReason}>Motivo</Text>
          <Arrow style={styleTransferAmount.arrow} width={24} />
        </Pressable>
      </View>
      <PrimaryBotton
        nameButton="Continuar"
        color="BLUE"
        width={'80%'}
        direction="CENTER"
      />
    </SafeAreaView>
  );
};
