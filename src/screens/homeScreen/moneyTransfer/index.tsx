import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {Header} from '../../../components/header/Header';
import {SelectionOptions} from '../../../components/selectionOfOptions/SelectionOptions';
import ScanQr from '../../../assets/images/icons/qr.svg';
import OwnAccount from '../../../assets/images/icons/reload.svg';
import Transfer from '../../../assets/images/icons/idCard.svg';
import {Search} from '../../../components/search/Search';
import {colors} from '../../../utils/constants/colors';

interface Props {}

export const MoneyTransfer = ({}: Props) => {
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <Header title="Transferir Pesos" />
      <View style={{marginTop: 20, paddingHorizontal: 24}}>
        <SelectionOptions
          image={Transfer}
          text="CBU / CVU / Alias"
          onPress={() => {}}
        />
        <SelectionOptions
          image={ScanQr}
          text="Escanear Qr personal"
          onPress={() => {}}
        />
        <SelectionOptions
          image={OwnAccount}
          text="Cuenta propia"
          onPress={() => {}}
        />
        <View style={{marginTop: 40}}>
          <Search />
        </View>
      </View>
    </SafeAreaView>
  );
};
