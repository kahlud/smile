import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/constants/colors';

export default StyleSheet.create({
  safeArea: {backgroundColor: colors.white, flex: 1},
  container: {marginHorizontal: 20, marginTop: 20, flex: 1},
  title: {
    fontSize: 20,
    paddingRight: 60,
    lineHeight: 28,
    fontWeight: '600',
  },
  containerButton: {width: '100%', paddingBottom: 40},
});
