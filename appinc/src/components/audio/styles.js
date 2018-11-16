import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.light,
      alignItems: 'center',
      justifyContent: 'center',
      padding: metrics.basePadding,
    },
    controls: {
      marginTop: metrics.baseMargin * 4,

      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      //flex: 1,
      //padding: metrics.basePadding,

    },
    progressText: {
      //paddingTop: 50,
      fontSize: 100,
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
      fontSize: 20,
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
