import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerReason: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  separatorImage: {width: 20, height: 10},
  textReason: {fontSize: 20, marginRight: 14},
  arrow: {transform: [{rotate: '270deg'}], marginTop: 2},
});
