import React, {Component} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  Text, 
} from 'react-native';
import styles from './styles';
import StepBox from './components/StepBox';
import { Load } from '../../components';
import { Header } from '../../globalComponents';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormAction} from '../../store/ducks/form';

  

class StepList extends Component {
  state ={
    modalVisible: false,
    load: false,
    form: '',
    teste: 10
  }

  async componentWillMount() {
    const valueForm = await AsyncStorage.getItem('@Form');
    const formLocal = JSON.parse(valueForm);
    this.setState({ form: formLocal});
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  cancel() { 
    this.props.navigation.goBack();
  }

  saveForm = () => {
    const { reference, saveForm } = this.props;
    console.tron.log(['saveformstep', reference]);
    saveForm(reference);
  }

  sendForm = async () => {
    try {
      const response = await AsyncStorage.getItem('arrayRef');
      console.tron.log(['sendForm', response]);
    } catch (error) {
      console.tron.log(['sendForm', 'error']);
    }
  }

  resetAsync = () => {
    AsyncStorage.clear();
  }


  render() {
    console.tron.log(this.props);
    const { navigation } = this.props;
    //const { steps } = this.props;
    const { modalVisible, load } = this.state;    
    const form = this.props.navigation.getParam('form', this.state.form);
    console.tron.log('FORMEEE',form);
   

    const { steps, form_name } = this.state.form;

    return (
      <View style={styles.container}>        
        <Header title={form_name} showArrow goBack={this.props.navigation.goBack} />
        <ScrollView>

        <FlatList
        data={steps}
        renderItem={item => <StepBox steps={item} />}
        />

          <View style={styles.container}>
            <TouchableOpacity style={styles.enviarbutton} onPress={() => this.sendForm()}>
              <Text style={styles.buttonText}>
                Enviar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.salvarbutton} onPress={() => this.saveForm()}>
              <Text style={styles.buttonTextsalvar}>
                Salvar
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {
          load && (
            <Load
              loadVisible
              textLoad='Salvando...'
            />
          )
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  form: state.newState.form,
  reference: state.newState.reference,
});

const mapDispatchToProps = dispatch => bindActionCreators(FormAction, dispatch);

StepList.navigationOptions = {
  title: 'Morte Violenta',
};

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
