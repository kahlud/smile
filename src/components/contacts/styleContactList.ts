import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  containerLetters: {
    borderRadius: 14,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLetters: {fontSize: 18, color: colors.white},
  name: {marginLeft: 12, fontSize: 18, fontWeight: '300'},
});
