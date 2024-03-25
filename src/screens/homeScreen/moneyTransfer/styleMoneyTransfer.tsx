import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/colors';

export default StyleSheet.create({
  safeArea: {backgroundColor: colors.white, flex: 1},
  container: {marginTop: 20, paddingHorizontal: 24},
  containerMargin: {marginTop: 46},
  titleContacts: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.greySecondary,
    marginBottom: 18,
  },
});
