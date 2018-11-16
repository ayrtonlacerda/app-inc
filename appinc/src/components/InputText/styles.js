import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 310,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
   Name: {
    width: 189,
    height: 22,
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
  }

});

export default styles;
