import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/constants/colors';

export default StyleSheet.create({
  safeArea: {backgroundColor: colors.white, flex: 1},
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  containerImage: {
    backgroundColor: colors.blueLigth,
    width: 58,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 26,
    marginBottom: 30,
  },
  pressableCamera: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginLeft: 30,
    marginTop: 24,
  },
  textCamera: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 10,
    marginTop: 4,
  },
  containerBotton: {
    width: '100%',
    height: '38%',
    justifyContent: 'flex-end',
  },
});
