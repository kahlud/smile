import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';
import React from 'react';
import {Header} from '../../../components/header/Header';
import {SelectionOptions} from '../../../components/selectionOfOptions/SelectionOptions';
import ScanQr from '../../../assets/images/icons/qr.svg';
import OwnAccount from '../../../assets/images/icons/reload.svg';
import Transfer from '../../../assets/images/icons/idCard.svg';
import {Search} from '../../../components/search/Search';
import {Contacts} from '../../../components/contacts/Contacts';
import {contactList} from '../../../mock/contactsList';
import styleMoneyTransfer from './styleMoneyTransfer';

interface Props {}

export const MoneyTransfer = ({}: Props) => {
  return (
    <SafeAreaView style={styleMoneyTransfer.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Header title="Transferir Pesos" />
        <View style={styleMoneyTransfer.container}>
          <SelectionOptions
            image={Transfer}
            text="CBU / CVU / Alias"
            navigationScreen="TransferData"
          />
          <SelectionOptions
            image={ScanQr}
            text="Escanear Qr personal"
            navigationScreen=" "
          />
          <SelectionOptions
            image={OwnAccount}
            text="Cuenta propia"
            navigationScreen=" "
          />
          <View style={styleMoneyTransfer.containerMargin}>
            <Search />
          </View>
          <View style={styleMoneyTransfer.containerMargin}>
            <Text style={styleMoneyTransfer.titleContacts}>Contactos</Text>
            <FlatList
              data={contactList}
              renderItem={({item}) => {
                return <Contacts name={item.contactName} />;
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
