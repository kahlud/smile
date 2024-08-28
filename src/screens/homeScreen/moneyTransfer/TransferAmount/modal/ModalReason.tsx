import React from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {expenseReason} from '../../../../../utils/reason';
import styleModalTransfer from './styleModalTransfer';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<{name: any; ImageSvg: any}>>;
}

export const ModalReason = ({
  modalVisible,
  setModalVisible,
  setTitle,
}: Props) => {
  return (
    <Modal visible={modalVisible} transparent={true}>
      <SafeAreaView style={styleModalTransfer.safeArea}>
        <View style={styleModalTransfer.containerModal}>
          <View style={styleModalTransfer.containerTitle}>
            <View style={styleModalTransfer.divider} />
            <Text style={styleModalTransfer.title}>Motivo de transaccion</Text>
          </View>
          <FlatList
            data={expenseReason}
            renderItem={({item: {name, image: ImageSvg}}) => {
              return (
                <Pressable
                  onPress={() => {
                    setModalVisible(false);
                    setTitle({name, ImageSvg});
                  }}
                  style={styleModalTransfer.pressable}>
                  <ImageSvg width={32} height={32} />
                  <Text style={styleModalTransfer.titleReason}>{name}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};
