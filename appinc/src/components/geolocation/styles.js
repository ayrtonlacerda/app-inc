import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  cabecalho: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 25,
  },
  label: {
    fontSize: 18,
    color: '#000'
  },
  button: {
    backgroundColor: colors.dark,
    borderRadius: metrics.baseRadius,
    height: 50,
    width: 330,
    margin: 10,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  info_text: {
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white
  },
  button_view: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'blue'
  },

  button_text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  input: {
     backgroundColor: colors.regular,
     borderRadius: metrics.baseRadius,
     marginTop: metrics.baseMargin / 4,
     height: 50,
     width: 330,
     margin: 5,
     paddingHorizontal: metrics.basePadding,
     justifyContent: 'center',
     alignItems: 'flex-start'
   },
   main:
   {
     margin: 100,
   },


});

export default styles;
