import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,
  container: {
    flexDirection: 'row',
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    marginVertical: 11,
    alignItems: 'center',
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    backgroundColor: '$white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '$primaryBlue',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
  },
  separator: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  inputText: {
    flex: 1,
    height: INPUT_HEIGHT,
    color: '$inputText',
    fontSize: 18,
    paddingHorizontal: 8,
  },
});
