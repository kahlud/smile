import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants/colors';

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
    shadowOpacity: 0.2,
    shadowRadius: 3.6,
    elevation: 2,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  containerTitle: {flexDirection: 'row'},
  imageTitle: {marginRight: 10},
  titleHeader: {textAlign: 'center', fontSize: 20, fontWeight: '400'},
});
