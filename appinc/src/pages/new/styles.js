import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

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
    marginTop: 30,
  },

  forms2: {
    marginHorizontal: metrics.basePadding,
  },
  numberType: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: colors.halfblack,
    fontWeight: 'bold',
    right: 2,
  },
  ball: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    width: 35,
    height: 35,
    backgroundColor: colors.secundary,
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textType: {
    marginLeft: 18,
    fontSize: 18,
    color: colors.halfblack,
    fontWeight: 'bold',
  },

  Picker: {
    backgroundColor: colors.white,
    height: 50,
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
    marginHorizontal: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },

  buttonText: {
    color: colors.primary,
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
