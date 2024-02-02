import {StyleSheet} from 'react-native';
import {colors} from '../utils/constants/colors';

export default StyleSheet.create({
  pressableBottonHeader: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.6,
    elevation: 2,
  },
});
