import { StyleSheet, PixelRatio } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    avatarContainer: {
      width: 300,
      height: 300,
      shadowColor: 'rgba(0, 0, 0, 0.35)',
      shadowOffset: { width: 4, height: 2 },
      shadowRadius: 4,
      borderRadius: 15,
      elevation: 5,
      borderColor: '#333333',
      borderStyle: 'solid',
      borderWidth: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    },

    avatar: {
      borderRadius: 15,
      width: 300,
      height: 300,
    },

    txt: {
      color: colors.dark,
      fontSize: 18,
      fontWeight: '200',
    },

    //input text
    containerText: {
      flex: 1,
      width: 310,
      //alignItems: 'center',
      //justifyContent: 'center',
    },
     Name: {
      width: 189,
      color: '#000000',
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 21,
     },

    input: {
       backgroundColor: colors.transparent,
       height: 46,
       borderBottomWidth: 1,
       color: '#000000',
       fontSize: 16,
       marginBottom: 15,
    }
  });

export default styles;
