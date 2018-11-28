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
    descricao: 'Descrição teste',
    flag: null,
  }

  componentDidMount() {
    this.setState({ inputSave: this.props.default_value });
  }

  addInput = data => {
    this.props.getCreateForm({ data });
    this.setState({ flag: true });
  }

  render() {
    const { data_name, lenght_max, label, hint, default_value } = this.props.data;
    if (!this.state.flag) {
      this.addInput(data_name);
    }
    console.tron.log(['input text', this.props]);
    const max = lenght_max;
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
