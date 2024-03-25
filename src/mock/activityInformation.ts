import {TransactionType} from '../utils/constants/transactionType';

export const activityInformation = [
  {
    transactionType: TransactionType.TRANSFERENCIA,
    amount: '5.000',
    date: '12/02/2024',
    information: {
      senderInformation: {name: 'Guido Cotelesso'},
      recipientInformation: {name: 'Ludmila Diaz'},
    },
  },
  {
    transactionType: TransactionType.PAGO_QR,
    amount: '2.000',
    date: '13/02/2024',
    information: {
      senderInformation: {name: 'Ludmila Diaz'},
      recipientInformation: {name: 'Autoservicio'},
    },
  },
  {
    transactionType: TransactionType.RECIBISTE_DINERO,
    amount: '10.000',
    date: '13/02/2024',
    information: {
      senderInformation: {name: 'Guido Cotelesso'},
      recipientInformation: {name: 'Ludmila Diaz'},
    },
  },
];
