import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  header: {
    backgroundColor: colors.dark,
    padding: 14,
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.regular,
    borderBottomWidth: 0.4,
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

  forms1: {
    margin: metrics.basePadding,
    marginTop: 30,

  },

  forms2: {
    margin: metrics.basePadding,
  },

  textType: {
    fontSize: 22,
    color: colors.dark,
    fontWeight: 'bold',
  },

  Picker: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    borderColor: '#777',
    // borderWidth: 1,
    paddingVertical: 10,
    marginTop: metrics.basePadding / 2,
    borderRadius: 10
    //alignItems: 'center'
  },

  estiloPicker: {
    backgroundColor: colors.white,
    //alignSelf: 'center',
  },

  button: {
    backgroundColor: colors.dark,
    borderRadius: metrics.baseRadius,
    height: 50,
    marginTop: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },

});

export default styles;
