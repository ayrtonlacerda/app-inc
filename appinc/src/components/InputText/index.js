import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';

// styles
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';


class InputText extends Component {
  state = {
    inputSave: '',
    flag: null,
  }

  componentDidMount() {
    this.setState({ inputSave: this.props.default_value });
  }

  addFormInput = data => {
    const form = {};
    form[data] = null;
    this.props.getCreateForm(form);
    this.setState({ flag: true });
  }

  saveFormInput = data => {
    const { inputSave } = this.state;
    const form = {};
    form[data] = inputSave;
    this.props.getSaveStateForm(form);
  }

  render() {
    const { data_name, label, hint } = this.props.data;
    const { saveStep } = this.props.form;
    if (!this.state.flag) {
      this.addFormInput(data_name);
    }
    if (saveStep) {
      this.saveFormInput(data_name);
    }
    //this.saveFormInput(data_name);
    console.tron.log(['input text', this.props]);
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
