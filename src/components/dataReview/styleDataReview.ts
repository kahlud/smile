import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 28,
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  containerTexts: {marginLeft: 20},
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: -2,
    color: colors.grey,
  },
  data: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primaryBlue,
    marginTop: 8,
  },
});
