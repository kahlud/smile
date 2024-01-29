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
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 6,
  },
});
