import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDF0F2',
    },
    salvarbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 40,
      width: responsividade.LARGURABUTTON,
      height: responsividade.ALTURABUTTON,
      borderRadius: 100,
      backgroundColor: '#F9AA33',
    },

    buttonText: {
      color: '#ffffff',
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 28,
    },
    numberType: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      color: 'black',
      fontWeight: 'bold',
    },
    ball: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 30,
      width: responsividade.LARGURABOLA,
      height: responsividade.LARGURABOLA,
      backgroundColor: '#F9AA33',
      margin: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },

    textType: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
    },

    coluna:{

      flexDirection: 'column',

    },

    linha:{
      flexDirection: 'row',
      alignItems: 'center',
    // distância entre componentes
      // marginTop: 30,
    },
});

export default styles;