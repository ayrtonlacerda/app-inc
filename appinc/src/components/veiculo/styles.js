import { StyleSheet } from 'react-native';
import { colors, metrics,responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    width: responsividade.largura_tela,
    padding: 20,
    paddingBottom: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
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
     borderRadius: 4,
     paddingLeft: 20,
     fontSize: 16,
  },

  button: {
    backgroundColor: "#B83E3E",
    borderRadius: 50,
    height: responsividade.ALTURAFORM,
    width: responsividade.LARGURAFORM,
    margin: 10,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
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
  input: {
     backgroundColor: "white",
     borderRadius: metrics.baseRadius,
     marginTop: metrics.baseMargin / 4,
     height: 50,
     width: 330,
     margin: 5,
     paddingHorizontal: metrics.basePadding,
     justifyContent: 'center',
     alignItems: 'flex-start'
   },
   main:
   {
     margin: 100,
   },

   Picker: {
    backgroundColor: colors.white,
    height: 50,
    borderRadius: 4,
    paddingHorizontal: 35,
    marginTop: 15,
  },

  estiloPicker: {
    backgroundColor: colors.white,
    color: colors.tercery,
  },

});

export default styles;
