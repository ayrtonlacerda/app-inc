import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({

  info_text: {
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    },

  button_view: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'blue'

  },

  button: {
    backgroundColor: colors.dark,
    borderRadius: metrics.baseRadius,
    height: 50,
    margin: 10,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',

  },

  button_text: {

    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },

  input: {
     backgroundColor: colors.white,
     borderRadius: metrics.baseRadius,
     marginTop: metrics.baseMargin / 4,
     height: 50,
     margin: 10,
     paddingHorizontal: metrics.basePadding,
     justifyContent: 'center',
     alignItems: 'center'

   },

   main:
   {
     margin: 100,
   },

   image: {
     justifyContent: 'center',
     alignItems: 'center',
     marginVertical: 15

   }

});

export default styles;
