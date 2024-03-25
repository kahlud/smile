import React, {useState} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {colors} from '../../../../utils/constants/colors';
import {Header} from '../../../../components/header/Header';
import BBVALogo from '../../../../assets/images/icons/tarjetas/BBVALogo.svg';
import {PrimaryBotton} from '../../../../components/PrimaryBotton';
import styleTransferAmount from './styleTransferAmount';
import {ModalReason} from './modal/ModalReason';
import {ReasonModal} from '../../../../components/reasonModal/ReasonModal';

export const TransferAmount = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [titlePressable, setTitlePressable] = useState({
    name: null,
    ImageSvg: null,
  });
  console.log(titlePressable);
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
        <Pressable
          style={styleTransferAmount.pressableReason}
          onPress={() => setModalVisible(true)}>
          <ReasonModal
            name={titlePressable.name}
            image={titlePressable.ImageSvg}
          />
        </Pressable>
      </View>
      <PrimaryBotton
        nameButton="Continuar"
        color="BLUE"
        width={'80%'}
        direction="CENTER"
        OnPress={() => {}}
      />
      <ModalReason
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTitle={setTitlePressable}
      />
    </SafeAreaView>
  );
};
