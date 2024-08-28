import React from 'react';
import styleReasonModal from './styleReasonModal';
import Arrow from '../../assets/images/icons/arrow-left.svg';
import {Text, View} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface Props {
  name?: string | null;
  image?: React.FC<SvgProps> | null;
}

export const ReasonModal = ({name, image: ImageSvg}: Props) => {
  return (
    <View style={styleReasonModal.containerReason}>
      {ImageSvg ? (
        <ImageSvg width={24} height={24} />
      ) : (
        <View style={styleReasonModal.separatorImage} />
      )}
      {name ? (
        <Text style={styleReasonModal.textReason}>{name}</Text>
      ) : (
        <Text style={styleReasonModal.textReason}>Motivo</Text>
      )}
      <Arrow style={styleReasonModal.arrow} width={24} />
    </View>
  );
};
