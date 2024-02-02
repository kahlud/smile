import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
  textHeader: {fontWeight: '600', fontSize: 16},
  flatListCards: {paddingStart: 20},
  flatListCardsContainer: {
    paddingRight: 40,
  },
  itemSeparatorCards: {width: 20},
});
