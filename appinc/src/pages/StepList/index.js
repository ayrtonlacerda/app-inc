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
import axios from 'axios';
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
    const valueForm = await AsyncStorage.getItem('@Formulario');
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


  async enviaDados() {
    const dadosDenatran = await AsyncStorage.getItem('@InfoPlaca');
    const dadosFipe = await AsyncStorage.getItem('@InfoFipe');
    const geoloc = await AsyncStorage.getItem('@Geolocalizacao');
    const date = await AsyncStorage.getItem('@Date');
    const foto = await AsyncStorage.getItem('@Foto');

    console.tron.log(['Geoloc', geoloc]);
    console.tron.log(['DadosFipe', dadosFipe]);

    axios({     
      method: 'post',
      url: 'http://35.231.239.168/api/pericia/formulario/envio',
      data: {
        form_name: this.state.form.form_name,
        data_inicio: '2019-01-18',
        data_despacho:  date,
        data_final: '2019-01-18',
        info_veiculo: dadosDenatran,
        local_pericia: geoloc,
        foto: foto,

      }
 
    });
    
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
            <TouchableOpacity style={styles.enviarbutton} onPress={() => this.enviaDados()}>
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
  title: 'Perícia',
};

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
