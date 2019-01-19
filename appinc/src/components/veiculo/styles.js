import { StyleSheet } from 'react-native';
import { colors, metrics,responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsividade.largura_tela,
    padding: 20,
    paddingBottom: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

   Name: {
    width: responsividade.LARGURABOX,
    height: 30,
    backgroundColor: colors.transparent,
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21,
   },

  input: {
     backgroundColor: 'white',
     height: responsividade.ALTURABOX,
     width: responsividade.LARGURABOX,
     margin: 5,
     borderRadius: 4,
     paddingLeft: 20,
     fontSize: 16,
  },

  input_o: {
     backgroundColor: 'white',
     height: responsividade.ALTURABOX,
     width: responsividade.LARGURABOX,
     margin: 5,
     borderRadius: 4,
     paddingLeft: 20,
     fontSize: 16,
     justifyContent: 'center',
     alignItems: 'flex-start',
  }
,
  button: {
    backgroundColor: "#B83E3E",
    borderRadius: 50,
    height: responsividade.ALTURAFORM,
    width: responsividade.LARGURAFORM,
    margin: 10,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  info_text: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: "black",
    opacity: 0.5,
  },
  button_view: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'blue'
  },

  button_text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },

   main:
   {
     justifyContent: 'center',
     alignItems: 'center',
   },

   Picker: {
     backgroundColor: 'white',
     height: responsividade.ALTURABOX,
     width: responsividade.LARGURABOX,
     margin: 5,
     borderRadius: 4,
     paddingLeft: 20,
     fontSize: 16,

   },

   estiloPicker: {
     backgroundColor: colors.white,
     borderRadius: 5,
     fontSize: 15,
     alignItems: 'center',
     justifyContent: 'center',
     color: "black",
     opacity: 0.5,
   },

hintview:{
  margin: 10,
  marginTop: 20,
},

hint:{
  fontSize: 14,
  fontWeight: 'bold',
},

numberType: {
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 13,
  color: 'black',
  fontWeight: 'bold',
},
miniball: {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  borderRadius: 30,
  width: responsividade.LARGURABOLA*0.73,
  height: responsividade.LARGURABOLA*0.73,
  backgroundColor: '#F9AA33',
  marginLeft: 20
},


hint_title:{
  alignItems: 'center',
  flexDirection: 'row',

},


});

export default styles;
