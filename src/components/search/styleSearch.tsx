import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.greyLigth,
    flexDirection: 'row',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  textInput: {fontSize: 18, marginLeft: 14},
});
