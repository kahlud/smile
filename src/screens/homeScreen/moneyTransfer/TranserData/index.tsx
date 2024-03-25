import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {Header} from '../../../../components/header/Header';
import DateCard from '../../../../assets/images/icons/idCard.svg';
import {Input} from '../../../../components/input/Input';
import Camera from '../../../../assets/images/icons/camera.svg';
import {PrimaryBotton} from '../../../../components/PrimaryBotton';
import {useNavigation} from '@react-navigation/native';
import styleTransferData from './styleTransferData';

interface Props {}

export const TransferData = ({}: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styleTransferData.safeArea}>
      <Header title="Transferir a CBU / CVU / Alias" />
      <View style={styleTransferData.container}>
        <View style={styleTransferData.containerImage}>
          <DateCard width={50} height={50} />
        </View>
        <Input text="CBU / CVU / Alias" />
        <Pressable style={styleTransferData.pressableCamera}>
          <Camera width={24} height={24} />
          <Text style={styleTransferData.textCamera}>
            Copiar desde una imagen
          </Text>
        </Pressable>
        <View style={styleTransferData.containerBotton}>
          <PrimaryBotton
            color="BLUE"
            nameButton="Continuar"
            direction="CENTER"
            width={'100%'}
            OnPress={() => navigation.navigate('TransferAmount')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
