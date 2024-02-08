import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants/colors';

export default StyleSheet.create({
  pressableButton: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    width: 94,
    marginHorizontal: 14,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopEndRadius: 14,
    borderTopStartRadius: 4,
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 14,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 7.6,
    elevation: 5,
  },
  TextButton: {
    textAlign: 'center',
    marginTop: 12,
    verticalAlign: 'top',
    color: colors.text,
    fontSize: 14,
    fontWeight: '300',
  },
});
