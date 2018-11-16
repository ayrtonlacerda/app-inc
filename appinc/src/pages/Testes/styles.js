import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box: {
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    height: 120,
    //backgroundColor: '#000',
    //padding: 1,
  },

  backgroundImage: {
    flex: 1,
    borderRadius: metrics.baseRadius,
  },

  button: {
    backgroundColor: colors.darkTransparent,
    //paddingHorizontal: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },

  header: {
    backgroundColor: colors.dark,
    padding: 14,
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.regular,
    //borderBottomWidth: 0.4,
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
  }
});

export default styles;
