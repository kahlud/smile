import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Header} from '../../../../components/header/Header';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../../utils/constants/colors';
import {PrimaryBotton} from '../../../../components/PrimaryBotton';
import Ticket from '../../../../assets/images/icons/resolution/ticket.svg';
import Check from '../../../../assets/images/icons/resolution/success.svg';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../navigation/RootNavigator';
import styleTransferResolutio from './styleTransferResolutio';

type HomeScreenNavigaitonProp = StackNavigationProp<
  RootStackParamList,
  'HomeTab'
>;

export const TransferResolutio = () => {
  const navigation = useNavigation<HomeScreenNavigaitonProp>();
  return (
    <SafeAreaView style={styleTransferResolutio.safeArea}>
      <Header title="" onBack={() => navigation.navigate('HomeTab')} />
      <View style={styleTransferResolutio.container}>
        <View style={styleTransferResolutio.containerImage}>
          <LinearGradient
            colors={[colors.primaryPink, colors.secondaryPink]}
            start={{x: 0.2, y: 0.1}}
            end={{x: 0.3, y: 0.7}}
            style={styleTransferResolutio.linearGradient}>
            <Check style={{}} />
          </LinearGradient>
          <Text style={styleTransferResolutio.text}>
            ¡ Transferencia exitosa !
          </Text>
        </View>
        <View style={styleTransferResolutio.containerButton}>
          <PrimaryBotton
            color="PINK"
            nameButton="Compartir comprobante"
            Image={Ticket}
            width="82%"
            direction="CENTER"
            OnPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
