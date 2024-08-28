import {View, Text} from 'react-native';
import React from 'react';
import {imageTransaction} from '../../utils/transactionUtils';
import {TransactionType} from '../../utils/constants/transactionType';
import {colors} from '../../utils/constants/colors';
import styleActivityInformation from './styleActivityInformation';

interface SenderInformation {
  name: string;
}

interface RecipientInformation {
  name: string;
}
interface Information {
  senderInformation: SenderInformation;
  recipientInformation: RecipientInformation;
}
interface Props {
  transactionType: TransactionType;
  transactionDate: string;
  transactionAmount: string;
  transactionInformation: Information;
}

export const ActivityInformation = ({
  transactionType,
  transactionDate,
  transactionAmount,
  transactionInformation,
}: Props) => {
  const Image = imageTransaction[transactionType];

  return (
    <View style={styleActivityInformation.continer}>
      <View style={styleActivityInformation.containerTransaction}>
        <View
          style={[
            transactionType === TransactionType.RECIBISTE_DINERO
              ? {backgroundColor: colors.activityHappy}
              : {backgroundColor: colors.activityRelaxed},
            styleActivityInformation.containerImage,
          ]}>
          {Image}
        </View>
        <View style={styleActivityInformation.containerInformation}>
          {transactionType === TransactionType.RECIBISTE_DINERO ? (
            <Text style={styleActivityInformation.nameTrasaction}>
              {transactionInformation.senderInformation.name}
            </Text>
          ) : (
            <Text style={styleActivityInformation.nameTrasaction}>
              {transactionInformation.recipientInformation.name}
            </Text>
          )}

          <Text style={styleActivityInformation.ditailsTransaction}>
            {transactionType} {transactionDate}
          </Text>
        </View>

        <Text
          style={[
            styleActivityInformation.amount,
            transactionType === TransactionType.RECIBISTE_DINERO
              ? {color: colors.green}
              : {color: colors.red},
          ]}>
          ${transactionAmount}
        </Text>
      </View>
      <View style={styleActivityInformation.divider} />
    </View>
  );
};
