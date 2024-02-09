import {StyleSheet} from 'react-native';
import {colors} from '../utils/constants/colors';

export default StyleSheet.create({
  button: {
    height: 40,
    borderTopLeftRadius: 4,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 4,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
  },
  textBotton: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.white,
    fontWeight: '600',
  },
});
