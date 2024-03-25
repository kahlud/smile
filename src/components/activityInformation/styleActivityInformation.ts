import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants/colors';

export default StyleSheet.create({
  continer: {
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  containerTransaction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  containerImage: {
    margin: 2,
    width: 56,
    height: 56,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInformation: {marginLeft: 14},
  nameTrasaction: {fontSize: 16, fontWeight: '400'},
  ditailsTransaction: {fontSize: 12, fontWeight: '200', marginTop: 4},
  amount: {
    flex: 1,
    textAlign: 'right',
    fontSize: 18,
    fontWeight: '400',
  },
  divider: {
    width: 350,
    height: 1,
    backgroundColor: colors.divider,
  },
});
