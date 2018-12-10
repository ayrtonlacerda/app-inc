import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: metrics.basePadding,
      //flexDirection: 'row',
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
      borderWidth: 2,
      borderColor: colors.dark,
      borderRadius: 25,
      paddingHorizontal: 5,
      width: 340,

    },
    progressText: {
      //paddingTop: 50,
      marginLeft: 10,
      fontSize: 34,
      color: '#000'
    },
    button: {
      //padding: 20,
      margin: metrics.baseMargin / 2,
      backgroundColor: colors.darker,
      borderRadius: 20,
      padding: 3,
      elevation: 5,
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
    }
});

export default styles;
