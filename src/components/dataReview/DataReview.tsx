import React from 'react';
import {Text, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import styleDataReview from './styleDataReview';

interface Props {
  Image: React.FC<SvgProps>;
  title: string;
  data: string;
}

export const DataReview = ({Image, title, data}: Props) => {
  return (
    <View style={styleDataReview.container}>
      <Image width={30} height={30} />
      <View style={styleDataReview.containerTexts}>
        <Text style={styleDataReview.title}>{title}</Text>
        <Text style={styleDataReview.data}>{data}</Text>
      </View>
    </View>
  );
};
