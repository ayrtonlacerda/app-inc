import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 330,
    borderBottomWidth: 1,
    borderColor: '#000000',
    marginTop: 20,
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
    fontWeight: '400',
    lineHeight: 19,
  },
  icon: {
    color: '#000000',
  }

});

export default styles;
