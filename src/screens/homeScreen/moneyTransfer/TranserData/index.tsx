import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../../../../utils/constants/colors';
import {Header} from '../../../../components/header/Header';
import DateCard from '../../../../assets/images/icons/idCard.svg';
import {Input} from '../../../../components/input/Input';
import Camera from '../../../../assets/images/icons/camera.svg';
import {PrimaryBotton} from '../../../../components/PrimaryBotton';
import {useNavigation} from '@react-navigation/native';

interface Props {}

export const TransferData = ({}: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <Header title="Transferir a CBU / CVU / Alias" />
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 24,
        }}>
        <View
          style={{
            backgroundColor: colors.blueLigth,
            width: 58,
            height: 58,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 26,
            marginBottom: 30,
          }}>
          <DateCard width={50} height={50} />
        </View>
        <Input text="CBU / CVU / Alias" />
        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            marginLeft: 30,
            marginTop: 24,
          }}>
          <Camera width={24} height={24} />
          <Text
            style={{
              color: colors.grey,
              fontSize: 16,
              fontWeight: '300',
              marginLeft: 10,
              marginTop: 4,
            }}>
            Copiar desde una imagen
          </Text>
        </Pressable>
        <View
          style={{
            width: '100%',
            height: '38%',
            justifyContent: 'flex-end',
          }}>
          <PrimaryBotton
            color="BLUE"
            nameButton="Continuar"
            direction="CENTER"
            width={'100%'}
            OnPress={navigation}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
