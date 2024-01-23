import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
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
    shadowColor: '#c58bf2',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5.62,
    elevation: 8,
  },
  tabBlue: {
    shadowColor: '#929EFD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5.62,
    elevation: 8,
  },
  textButton: {
    color: '#FFFFFF',
  },
  pressTab: {
    flex: 1,
  },

  bottomTabNav: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
});
