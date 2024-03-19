import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/constants/colors';

export default StyleSheet.create({
  safeArea: {backgroundColor: colors.white, flex: 1},
  containerAmount: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 56,
  },
  amount: {alignItems: 'center'},
  containerInput: {
    flexDirection: 'row',
    marginTop: 120,
    justifyContent: 'center',
  },
  moneySymbol: {fontSize: 60, color: colors.grey, fontWeight: '600'},
  input: {fontSize: 60, fontWeight: '600', color: colors.grey},
  placeholder: {color: colors.grey},
  pressableBalance: {
    color: colors.primaryBlue,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 4,
  },
  pressableReason: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.greyLigth,
    width: '60%',
    justifyContent: 'center',
    borderTopLeftRadius: 4,
    borderTopEndRadius: 16,
    borderBottomEndRadius: 4,
    borderBottomLeftRadius: 16,
    paddingVertical: 4,
    marginTop: 90,
  },
  textReason: {fontSize: 20, marginRight: 14},
  arrow: {transform: [{rotate: '270deg'}], marginTop: 2},
});
