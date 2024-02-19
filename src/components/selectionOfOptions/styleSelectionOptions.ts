import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants/colors';

export default StyleSheet.create({
  containerSerlection: {
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  containerItems: {flexDirection: 'row'},
  containerImage: {
    backgroundColor: colors.blueLigth,
    width: 46,
    height: 46,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
  },
  buttonPressable: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: '300',
    marginLeft: 16,
    alignSelf: 'center',
  },
  arrow: {
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  divider: {
    width: 350,
    height: 1,
    backgroundColor: colors.divider,
    marginTop: 16,
    alignContent: 'center',
  },
});
