
import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormsActions } from '../../../../store/ducks/form'

// styles
import { View, Text, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


class StepBoxComponent extends Component {
  state = {
    createdForms: null,
  }

  createFormsSave = () => { 
    const { getCreateForm, steps } = this.props;
    this.setState({ createdForms: true })

    steps.item.components.forEach(component => {
      // console.tron.log(component);
      const form = {};

      if(component.component_type === 'date') {
        form[component.data_name] = { key: component.data_name, value: '1980-01-21' };
      }else{
        form[component.data_name] = { key: component.data_name, value: component.default_value }; 
      }
      getCreateForm(form);      
    });
  }

  render() {
    // console.tron.log(this.props);
    const { steps } = this.props;
    const { createdForms } = this.state;
    const { item } = steps;
    if (!createdForms) {
      this.createFormsSave();
      console.tron.log('createFormSave');
    }

    return (
       <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('StepPage', { step: item })}>
          <View style={styles.card_titulo}>
            <Text style={styles.titulo}>{item.step_name}</Text>
          </View>
          <View style={styles.card_descricao}>
            <Text style={styles.descricao}>{item.step_description}</Text>
          </View>

          <View style={styles.bar}>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.1}
          />
          </View>

        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(FormsActions, dispatch);

const StepBox = connect(null, mapDispatchToProps)(StepBoxComponent);

export default withNavigation(StepBox);
