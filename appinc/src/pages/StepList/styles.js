import { StyleSheet } from 'react-native';
import { colors, metrics,responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EDF0F2',
  },

  salvarbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: responsividade.LARGURASUBMIT,
    height: responsividade.ALTURASUBMIT,
    borderRadius: 100,
    borderWidth: 1.5,
    fontWeight: 'bold',
    borderColor: 'green',
        marginBottom: 30,
  },
  enviarbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: responsividade.LARGURASUBMIT,
    height: responsividade.ALTURASUBMIT,
    borderRadius: 100,
    backgroundColor: '#F9AA33',

  },
  buttonText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 28,
  },

  buttonTextsalvar: {
    color: 'green',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
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
