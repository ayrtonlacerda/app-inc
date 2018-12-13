import { StyleSheet, PixelRatio } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // marginBottom: 20,
      // backgroundColor: 'pink',
    //   borderWidth: 2,
    //   borderColor: 'white',
    //   borderRadius: 10,
      padding: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: 'black',
      paddingBottom: 40,
    //   width: responsividade.LARGURAFOTO,
     },

    avatarContainer: {
      width: responsividade.LARGURAFOTO,
      height: responsividade.ALTURAFOTO,
      flexDirection: 'row',
      // margin: 10,
      backgroundColor: "white",
      padding: 15,
      // distância entre foto e título do input text
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    avatarContainer2: {
      flexDirection: 'row',
      backgroundColor: "white",
    },

    txt: {
      color: colors.dark,
      fontSize: 18,
      fontWeight: '200',
    },

    text_foto:{
      marginLeft: 4,
      justifyContent: 'center',
      alignItems: 'center',

    },


    //input text
    containerText: {
      flex: 1,
      width: responsividade.LARGURAFOTO,
      //alignItems: 'center',
      //justifyContent: 'center',
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
     }
,
    input: {
      backgroundColor: 'white',
      height: responsividade.ALTURABOX,
      borderRadius: 4,
      paddingLeft: 20,
      fontSize: 16,
    }
  });

export default styles;
