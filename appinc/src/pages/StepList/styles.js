import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  salvarbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 310,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#333333',
  },
  enviarbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: 310,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#127510',

  },
  cancelarbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: 310,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#cb1010',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 28,
  },
  //modal
  masterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  containerModal: {
    width: 310,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  tituloModal: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  textModal: {
    fontSize: 18,
    color: '#202020',
    textAlign: 'center',
    marginBottom: 10,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonYes: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 130,
    borderRadius: 100,
    backgroundColor: '#127510',
    margin: 10,
  },
  buttonNo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 130,
    borderRadius: 100,
    backgroundColor: '#cb1010',
    margin: 10,
  },


});

export default styles;
