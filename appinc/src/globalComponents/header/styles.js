import { StyleSheet } from 'react-native';
import { colors, metric } from '../../styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#344955",
    padding: 14,
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //borderColor: colors.regular,
    //borderBottomWidth: 0.4,
    height: 56,
    //elevation: 1,
  },

  iconMenu: {
    color: colors.white,
    alignSelf: 'flex-start',
  },
  iconExit: {
    color: colors.regular,
    alignSelf: 'flex-start',
  },

  viewIcon: {
    //marginLeft: 4,
  },

  viewTitle: {
    flex: 1,
  },

  headerTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    right: 10,
  },

});

export default styles;