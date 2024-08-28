import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  containerImage: {
    justifyContent: 'center',
    flex: 5,
    width: '100%',
    alignItems: 'center',
  },
  linearGradient: {
    width: 250,
    height: 250,
    borderRadius: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 24, fontWeight: '600', marginTop: 20},
  containerButton: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});
