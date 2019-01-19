import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';
import {Header} from '../../globalComponents';

// styles
import { View, FlatList, ScrollView, TouchableOpacity, Text,ProgressBarAndroid  } from 'react-native';
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
      <Header   title={this.props.navigation.state.params.step.step_name} showArrow goBack={this.props.navigation.goBack}/ >
        <ScrollView>
        { step.components.map((item , i) =>
          <View style = {styles.coluna}>
            <View style = {styles.linha}>
              <View style={styles.ball}>
                <Text style={styles.numberType}>{i + 1}</Text>
              </View>
              <Text style={styles.textType}> {item.label}: </Text>
            </View>
            <View style={styles.container}>
            </View>
            <ComponentList data={item}/>
          </View>
        ) }


         <View style={styles.container}>
          <TouchableOpacity style={styles.salvarbutton} onPress={() => this.saveStep()}>
              <Text style={styles.buttonText}>
                Salvar
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