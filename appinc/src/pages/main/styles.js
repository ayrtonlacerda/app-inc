import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  header: {
    backgroundColor: colors.dark,
    padding: 14,
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.regular,
    borderBottomWidth: 0.4,
  },

  icon: {
    color: colors.black,
    marginLeft: 15,
  },

  viewIcon: {
    marginLeft: 4,
  },

  viewTitle: {
    flex: 1,
    //marginLeft: 120,
  },

  headerTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  bodyS: {
    justifyContent: 'center',
    alignSelf: 'center',

  },

  concerto: {
    width: 15,
    height: 15,
  },

  profile: {
    alignSelf: 'center',
    margin: metrics.baseMargin,
    marginTop: 20,
    //height: 250,
  },

  ImageStyle: {
    width: 180,
    height: 179,
  },

  card:{
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  name:{
    fontSize: 21,
    fontWeight: 'bold',
    color: colors.dark,
    marginVertical: 5,

  },

  info:{
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.dark
  },

  element: {
    marginVertical: 3,
    alignItems: 'center',
  },

  button:{
    backgroundColor: colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.baseMargin / 2,
    //paddingHorizontal: 80,
    //paddingVertical: 15,
    borderRadius: 100,
    height: 50,
    width: 300,
  },

  button2:{
  backgroundColor: colors.dark,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: metrics.baseMargin / 2,
  //paddingHorizontal: 80,
  //paddingVertical: 15,
  borderRadius: 100,
  height: 50,
  width: 300,
},

  button_text:{
    color: colors.white,
    fontWeight: 'bold',
  },


});

export default styles;
