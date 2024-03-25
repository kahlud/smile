import React from 'react';
import {TransactionType} from './constants/transactionType';
import HappyActivity from '../assets/images/icons/happyActiviti.svg';
import RelaxedActivity from '../assets/images/icons/emojiRelaxed.svg';

type ComponentMap = {
  [key in TransactionType]: React.ReactElement;
};

export const imageTransaction: ComponentMap = {
  [TransactionType.PAGO_QR]: <RelaxedActivity />,
  [TransactionType.TRANSFERENCIA]: <RelaxedActivity />,
  [TransactionType.RECIBISTE_DINERO]: <HappyActivity />,
  [TransactionType.PAGO_SERVICIO]: <RelaxedActivity />,
  [TransactionType.RECARGA]: <RelaxedActivity />,
};
