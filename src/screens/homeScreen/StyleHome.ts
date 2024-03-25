import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants/colors';

export default StyleSheet.create({
  safeAreaHome: {flex: 1, backgroundColor: colors.white},
  headerContainer: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
  scrollView: {flex: 1, marginBottom: 80},
  textHeader: {fontWeight: '600', fontSize: 16},
  shadowCard: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  flatListCards: {paddingStart: 20},
  flatListCardsContainer: {
    paddingRight: 40,
  },
  itemSeparatorCards: {width: 20},
  containerBottonActivity: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  recentActivity: {
    marginTop: 26,
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 18,
    marginBottom: 8,
  },
  containerBotton: {marginRight: 20, marginTop: 12},
});
