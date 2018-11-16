import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDFDFD'
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
    cancelarbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
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
    }
});

export default styles;
