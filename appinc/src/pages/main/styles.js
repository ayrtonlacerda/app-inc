import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    //alignItems: 'center',
  },
  bodyS: {
    justifyContent: 'center',
    alignItems: 'center',
    //paddingHorizontal: 21,
  },
  halfBody: {
    height: 170,
    width: 360,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffba08"
  },
  tokenView: {
    marginTop: 25,
    width: 320,
    height: 55,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  token: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  },
  tokenD: {
    fontFamily: "Roboto",
    fontSize: 19,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#2afe3f",
  },

  info: {
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: 80,
  },

  profile: {
    alignSelf: 'center',
    margin: metrics.baseMargin,
    elevation: 1,
  },

  ImageStyle: {
    width: 150,
    height: 150,
    borderColor: '#160f30',
    borderWidth: 3,
    borderRadius: 100,
  },

  name: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000",
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
    width: 320,
    height: 55,
    borderRadius: 200,
    backgroundColor: "rgba(0, 0, 0, 0.74)",
  },

  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
    width: 320,
    height: 55,
    borderRadius: 200,
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.74)",
    borderWidth: 2,

  },

  button_text2: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgba(0, 0, 0, 0.74)",
  },

  button_text: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff",
  },


});

export default styles;
