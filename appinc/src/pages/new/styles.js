import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light2,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  icon: {
    color: colors.white,
    alignSelf: 'flex-start',
  },

  viewIcon: {
    marginLeft: 4,
  },

  viewTitle: {
    flex: 1,
    //marginLeft: 120,
  },

  headerTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  concerto: {
    width: 15,
    height: 15,
  },
  forms: {
    marginHorizontal: metrics.basePadding,
    marginTop: 30,
  },
  forms1: {
    marginHorizontal: metrics.basePadding,
    marginTop: 60,
  },

  forms2: {
    marginHorizontal: metrics.basePadding,
  },
  numberType: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: colors.halfblack,
    fontWeight: 'bold',
  },
  ball: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    width: responsividade.LARGURABOLA,
    height: responsividade.LARGURABOLA,
    backgroundColor: colors.secundary,
    marginTop: 10,

  },
  title: {

    alignItems: 'center',
    flexDirection: 'row',
    height: responsividade.ALTURABOX,

  },
  textType: {
    marginLeft: 10,
    marginTop: 8,
    fontSize: 18,
    color: colors.halfblack,
    fontWeight: 'bold',
  },

  Picker: {
    backgroundColor: colors.white,
    height: responsividade.ALTURABOX,
    borderRadius: 4,
    paddingHorizontal: 35,
    marginTop: 15,
  },

  estiloPicker: {
    backgroundColor: colors.white,
    color: colors.tercery,
  },

  button: {
    backgroundColor: colors.secundary,
    height: 50,
    marginTop: 110,
    marginBottom: 100,
    marginHorizontal: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    backgroundColor: colors.transparent,
    height: 46,
    borderBottomWidth: 1,
    color: colors.tercery,
    fontSize: 16,
  }


});

export default styles;