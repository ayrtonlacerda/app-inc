import { StyleSheet } from 'react-native';
import { colors, respoonsividade } from '../../styles';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 270,
        backgroundColor: colors.primary,                
    },
    profile: {
        flexDirection: 'row',        
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 0.5,
        borderColor: colors.regular,
        paddingVertical: 30,
        paddingLeft: 15,
        marginTop: 5,
    },
    profileImage: {
        width: 75,
        height:75,
        borderRadius: 50,
        marginRight: 15,
        elevation: 1
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
    },
    buttonsView: {        
        marginTop: 30,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'column',
        paddingLeft: 15,
    },
    buttonBox: {
        height: 50,               
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 0,
        flexDirection:'row',      
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white,
    },
    button: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.white,
    },
    icon: {
        marginRight: 20,
    }
});

export default styles;
