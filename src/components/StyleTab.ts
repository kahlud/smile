import {StyleSheet} from 'react-native';
import {colors} from '../utils/constants/colors';

export default StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    overflow: 'hidden',
    bottom: 30,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  selectIcon: {
    width: 65,
    height: 65,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    bottom: -2,
  },
  tabContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabPink: {
    shadowColor: colors.primaryPink,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5.62,
    elevation: 8,
  },
  tabBlue: {
    shadowColor: colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5.62,
    elevation: 8,
  },
  textButton: {
    color: colors.white,
  },
  pressTab: {
    flex: 1,
  },

  bottomTabNav: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 5.2,
    elevation: 8,
  },
});
