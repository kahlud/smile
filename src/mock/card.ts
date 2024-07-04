export type Bank = 'BBVA' | 'ICBC';
export type CardEmiter = 'Visa' | 'MasterCard';

interface CardData {
  bank: Bank;
  cardEmiter: CardEmiter;
  cardType: string;
  numberCard: string;
  expiration: {
    month: string;
    year: string;
  };
  availableMoney: string;
}

export const cardsDetails: CardData[] = [
  {
    bank: 'BBVA',
    cardEmiter: 'MasterCard',
    cardType: 'Debito',
    numberCard: '5566 0989 4567 1776',
    expiration: {
      month: '7',
      year: '27',
    },
    availableMoney: '790,567.13',
  },
  {
    bank: 'ICBC',
    cardEmiter: 'Visa',
    cardType: 'Credito',
    numberCard: '4476 0989 4567 0966',
    expiration: {
      month: '9',
      year: '26',
    },
    availableMoney: '370,427.33',
  },
];
