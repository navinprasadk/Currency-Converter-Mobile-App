import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
  button: {
    alignSelf: 'flex-end',
    // paddingVertical: 20,
    paddingHorizontal: 20,
  },
  icon: { width: 25 },
});
