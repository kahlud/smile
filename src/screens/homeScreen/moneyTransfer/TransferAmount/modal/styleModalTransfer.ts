import {StyleSheet} from 'react-native';
import {colors} from '../../../../../utils/constants/colors';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: colors.modal,
    flex: 1,
    flexDirection: 'column-reverse',
  },
  containerModal: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingBottom: 20,
    marginBottom: -34,
    height: '84%',
  },
  containerTitle: {alignItems: 'center'},
  divider: {
    backgroundColor: colors.greyLigth,
    width: '50%',
    height: 6,
    marginTop: 8,
    borderRadius: 6,
    marginBottom: 13,
  },
  title: {fontSize: 20, fontWeight: '400', marginBottom: 20},
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 8,
  },
  titleReason: {fontSize: 18, fontWeight: '300', marginLeft: 18},
});
