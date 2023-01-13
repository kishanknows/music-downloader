import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
  },
  customButtonStyle: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: 100,
    alignSelf: 'center',
  },
  customButtonFontStyle: {
    color: 'white',
    fontSize: 15,
  },
  avatarStyle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
  },
  avatarDetailStyle: {
    height: 200,
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'powderblue',
  },
  avatarDetailFontStyle: {
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: '600',
    color: 'black',
    // fontFamily: 'serif',
  },
});

export default Styles;
