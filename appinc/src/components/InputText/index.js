import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';
import { Creators as NewActions } from '../../store/ducks/new';

// styles
import { View, TextInput, Text } from 'react-native';
import styles from './styles';


class InputText extends Component {
  state = {
    inputSave: null,
  }

  componentDidMount() {
    this.setState({ inputSave: this.props.default_value });
  }  

  saveFormInput = data => {
    const { inputSave } = this.state;
    const { form, getSaveStateForm, startControlArray } = this.props;
    
    console.tron.log(form.step);
    if ( inputSave ) {
      for (var key in form.step) {       
        if ( key === data.data_name) {
          const form = {};
          form[data.data_name] = inputSave;
          console.tron.log(['formsavecampo', form])
          getSaveStateForm(form);
        }
      } 
    }      
    startControlArray();
  }

  render() {

    const { data_name, label, hint, default_value, newState} = this.props.data;
    const { saveStep, step } = this.props.form;
    console.tron.log(['props', this.props]);
    // this.props.startControlArray();    
   
    if (saveStep) {
      this.saveFormInput({data_name, default_value});
    }  
    return (
      <View style={styles.container}>
      <Text style={styles.Name}>{label}:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          multiline
          placeholder={hint}
          maxLength={72}
          underlineColorAndroid="rgba(0,0,0,0)"
          onChangeText={inputSave => this.setState({ inputSave })}
        />
      </View>
    );
  }
}

 const mapStateToProps = state => ({
  form: state.formState, 
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FormActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputText);
