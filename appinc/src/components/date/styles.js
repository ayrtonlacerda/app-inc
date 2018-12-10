import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: 310,
    alignItems: 'flex-start',
  },
  titulo: {
    width: 300,
    height: 22,
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 5,
  },
  direcao: {
    flexDirection: 'row',
  },
  datecontainer: {
    elevation: 1,
    width: 175,
    height: 45,
    borderRadius: 10,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21,
  }

});

export default styles;
