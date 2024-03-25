import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants/colors';

export default StyleSheet.create({
  cardContainer: {
    width: 325,
    height: 210,
    borderTopLeftRadius: 8,
    borderTopEndRadius: 34,
    borderBottomLeftRadius: 34,
    borderBottomEndRadius: 8,
    marginVertical: 14,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  moneyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginEnd: 12,
    marginTop: 8,
  },
  MoneyVisibleContainer: {flexDirection: 'row'},
  textMoneyConteiner: {flexDirection: 'row', alignItems: 'center'},
  moneySymbol: {fontSize: 18, color: colors.white, marginEnd: 6},
  moneyNumber: {fontSize: 32, color: colors.white, fontWeight: '500'},
  centsNumber: {
    marginLeft: 6,
    marginTop: 4,
    color: colors.white,
    fontSize: 18,
  },

  eye: {marginLeft: 14},
  cardCreditNumber: {fontSize: 30, color: colors.white, fontWeight: '500'},
  cardDetailsConainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  containerCardDetails: {alignItems: 'flex-end'},
  cardNumber: {fontSize: 16, color: colors.white, fontWeight: '600'},
  CardExpiration: {fontSize: 14, color: colors.white, marginTop: 2},
  containerCardType: {justifyContent: 'center', alignItems: 'center'},
  cardType: {
    fontSize: 16,
    color: colors.white,
    marginTop: -8,
    fontWeight: '600',
  },
  creditCardExpirationContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  creditCardExpiration: {fontSize: 14, color: colors.white, fontWeight: '500'},
});
