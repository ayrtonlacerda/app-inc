import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'pink',
      width: responsividade.largura_tela,
      padding: 10,
      paddingBottom: 40,
      paddingTop: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: 'black',
    },
    label: {
      fontSize: 18,
      color: '#000'
    },
    hint: {
      fontSize: 14,
      color: colors.regular
    },
    controls: {
      marginTop: metrics.baseMargin,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      width: responsividade.LARGURABOX,
    },
    progressText: {
      //paddingTop: 50,
      // marginLeft: 10,
      fontSize: 34,
      color: '#000'
    },
    button: {
      //padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      margin: metrics.baseMargin / 2,
      backgroundColor: 'white',
      borderRadius: 50,
      padding: 5,
      paddingHorizontal: 3,
      width: (responsividade.LARGURABOLA*1.5),
      height: (responsividade.LARGURABOLA*1.5),
    },
    disabledButtonText: {
      color: '#000'
    },
    buttonText: {
      fontSize: 15,
      color: '#fff',
      margin: 5,
    },
    activeButtonText: {
      fontSize: 20,
      color: "#B81F00",
    },

    avatarContainer: {
      borderColor: colors.dark,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    txt: {
      color: colors.dark,
      fontSize: 18,
      fontWeight: '200',
    },


    icon:{
      color: 'black',
    },

    seconds:{
      justifyContent: 'center',
      alignItems: 'center',
      margin: metrics.baseMargin / 2,
      backgroundColor: 'white',
      borderRadius: 50,
      padding: 5,
      paddingHorizontal: 3,
      // width: (responsividade.LARGURABOLA*1.5),
      // height: (responsividade.LARGURABOLA*1.5),
    },
});

export default styles;
