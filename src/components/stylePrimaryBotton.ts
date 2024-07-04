import {StyleSheet} from 'react-native';
import {colors} from '../utils/constants/colors';

export default StyleSheet.create({
  button: {
    height: 50,
    borderTopLeftRadius: 4,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 4,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
  },
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {marginRight: 14},
  textBotton: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.white,
    fontWeight: '700',
  },
});
