import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    width: responsividade.largura_tela,
    padding: 20,
    paddingBottom: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',

  },
  cabecalho: {
    width: responsividade.LARGURABOX,
    height: responsividade.ALTURABOX,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 4,

  },

  texto_geo:{

    marginLeft: 10,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
    height: 25,
    width: 25,
  },
  label: {
    fontSize: 18,
    color: '#000'
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
    flexDirection: 'row',
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
    fontWeight: 'bold',
    marginLeft: 5,
  },
  input: {
    backgroundColor: 'white',
    height: responsividade.ALTURABOX,
    width: responsividade.LARGURABOX,
    margin: 5,
    borderRadius: 4,
    paddingLeft: 20,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
   },
   main:
   {
     margin: 100,
   },


});

export default styles;
