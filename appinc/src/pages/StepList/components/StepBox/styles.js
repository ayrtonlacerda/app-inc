import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../../../styles';

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsividade.LARGURACARD,
    height: responsividade.ALTURACARD,
    backgroundColor: "white",
    borderRadius: 4,
    marginTop: 8,
  },
  viewicon: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#111111',
  },
  titulo: {
    width: 200,
    height: 20,
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21,
  },
  descricao: {
    width: 216,
    height: 49,
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
  },
  icon: {
    color: '#000000',
  },

  card_titulo:{
    marginTop: 8,
    marginLeft: 10,
  },

  card_descricao:{
    marginTop: 10,
    marginLeft: 10,
  },

  bar:{
    width: (responsividade.LARGURACARD * 0.9),
    marginHorizontal: 10,
    padding: 10,

  },

});

export default styles;
