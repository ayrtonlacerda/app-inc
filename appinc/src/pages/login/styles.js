import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.basePadding * 2,
    // backgroundColor: colors.lighter,
    backgroundColor: 'rgba(45, 45, 45, 0.8)',
  },

  image: {
    marginBottom: metrics.baseMargin * 6,
    alignSelf: 'center',
    height: 210,
    width: 170,
    padding: metrics.basePadding,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.white,
  },

  descript: {
    fontSize: 15,
    color: colors.lighter,
    marginBottom: metrics.baseMargin,
    marginTop: metrics.baseMargin / 2,
  },

  input: {
     backgroundColor: 'rgba(255, 255, 255, 0.6)',
     borderRadius: 25,
     marginTop: metrics.baseMargin * 2,
     height: 50,
     width: 270,
     paddingHorizontal: metrics.basePadding,

   },

   testebutton: {
     backgroundColor: 'rgba(41, 42, 41, 0.65)',
     borderWidth: 2,
     borderColor: 'rgb(225, 200, 133)',
     borderRadius: 25,
     height: 50,
     marginTop: metrics.baseMargin,
     paddingHorizontal: metrics.basePadding,
     justifyContent: 'center',
     alignItems: 'center',

   },

   buttonText: {
     color: 'rgb(225, 200, 133)',
     fontWeight: 'bold',
     fontSize: 16,
   },

   estiloPicker: {
     //height: 50,
     //paddingHorizontal: metric.basePadding,
     flex: 7,
     },

   forms2: {
     height: 50,
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
     flexDirection: 'row',
     padding: metrics.basePadding,
     borderRadius: metrics.baseRadius,
     marginTop: metrics.baseMargin / 3,
     backgroundColor: colors.whiteTransparent
   },
});

export default styles;
