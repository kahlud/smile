import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Header} from '../../../../components/header/Header';
import Person from '../../../../assets/images/icons/accountData/profile.svg';
import Money from '../../../../assets/images/icons/accountData/dollar-square.svg';
import Bank from '../../../../assets/images/icons/accountData/bank.svg';
import Alias from '../../../../assets/images/icons/accountData/attach-square.svg';
import Card from '../../../../assets/images/icons/accountData/card.svg';
import PersonalCard from '../../../../assets/images/icons/accountData/personalcard.svg';
import MoneySend from '../../../../assets/images/icons/accountData/money-send.svg';
import Reason from '../../../../assets/images/icons/reason.svg';
import {DataReview} from '../../../../components/dataReview/DataReview';
import {PrimaryBotton} from '../../../../components/PrimaryBotton';
import {useNavigation} from '@react-navigation/native';
import {
  RootStackParamList,
  Navigation,
} from '../../../../navigation/TransferNavigationStack';
import {StackNavigationProp} from '@react-navigation/stack';
import styleTransferDataVerification from './styleTransferDataVerification';

type SuccessfulTransferScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SuccessfulTransfer'
>;

export const TransferDataVerification = ({
  route,
}: Navigation<RootStackParamList, 'TransferDataVerification'>) => {
  const navigation = useNavigation<SuccessfulTransferScreenNavigationProp>();

  return (
    <SafeAreaView style={styleTransferDataVerification.safeArea}>
      <Header title="" />
      <View style={styleTransferDataVerification.container}>
        <Text style={styleTransferDataVerification.title}>
          Verificá que esté todo bien antes de continuar
        </Text>
        <DataReview Image={Person} title="Vas a enviar a" data="Karen Diaz" />
        <DataReview
          Image={Money}
          title="Monto"
          data={`$${route.params.amount}`}
        />
        <DataReview Image={Reason} title="Motivo" data={route.params.reason} />
        <DataReview Image={Bank} title="Banco" data="Naranjax · CA 0922 " />
        <DataReview Image={Alias} title="Alias" data="kdiaz.NX" />
        <DataReview
          Image={Card}
          title="CBU / CVU"
          data="43500000000111867889"
        />
        <DataReview
          Image={PersonalCard}
          title="cuil / cuit"
          data="27 - 39999419 - 2"
        />
      </View>
      <View style={styleTransferDataVerification.containerButton}>
        <PrimaryBotton
          color="BLUE"
          nameButton="Enviar"
          width="80%"
          direction="CENTER"
          Image={MoneySend}
          OnPress={() => {
            navigation.navigate('SuccessfulTransfer');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
