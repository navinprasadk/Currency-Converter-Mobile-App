import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: { flexDirection: 'row', alignItems: 'center' },
  icon: { width: 19, marginHorizontal: 11 },
  text: {
    color: '$white', fontWeight: '300', fontSize: 14, paddingVertical: 20,
  },
});
