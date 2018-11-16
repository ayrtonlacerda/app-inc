import React, { Component } from 'react';
import { View, FlatList, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import ComponentList from './components/ComponentsList';


class StepPage extends Component {

  render() {
    const { navigation } = this.props;
    const step = navigation.getParam('step');

    return (
      <View style={styles.container}>
        <ScrollView>
         { step.form.map(item => <ComponentList data={item} />) }

         <View style={styles.container}>
          <TouchableOpacity style={styles.salvarbutton} onPress={this.navigateToLogged}>
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

export default StepPage;

