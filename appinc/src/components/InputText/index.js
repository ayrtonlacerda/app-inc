import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { Creators as InputActions } from '../../store/ducks/input';

class InputText extends Component {
  state = {
    inputSave: '',
    descricao: 'Descrição teste',
  }

  componentDidMount() {
    this.setState({ inputSave: this.props.default_value });
  }

  addInput = () => {
    this.props.submitInput(this.state.inputSave);
  }
  render() {
    const { data_name, lenght_max, label, hint, default_value } = this.props.data;
    console.tron.log(['input text', this.props.data]);
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
  input: state.input,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(InputActions, dispatch);

export default InputText;
