import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';

// styles
import { View, FlatList, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import ComponentList from './components/ComponentsList';


class StepPage extends Component {

  saveStep = () => {
    this.props.saveStepState();
  }

  render() {
    const { navigation } = this.props;
    const step = navigation.getParam('step');
    console.tron.log(this.props);

    return (
      <View style={styles.container}>
        <ScrollView>
         { step.components.map(item => <ComponentList data={item} />) }

         <View style={styles.container}>
          <TouchableOpacity style={styles.salvarbutton} onPress={() => this.saveStep()}>
              <Text style={styles.buttonText}>
                Salvar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelarbutton} onPress={this.navigateToLogged}>
              <Text style={styles.buttonText}>
                Cancelar
              </Text>
            </TouchableOpacity>
         </View>

        </ScrollView>
      </View>
    );
  }
}

StepPage.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.step.titulo,
});

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch);

export default connect(null, mapDispatchToProps)(StepPage);

