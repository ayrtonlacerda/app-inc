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

const forms = {
  "steps": [
      {
          "step_name": "Preparo",
          "components": [
                {
                  "hint": "informe a geolocalização",
                  "group": "false",
                  "label": "Em que local você está?",
                  "required": "false",
                  "data_name": "position_gps",
                  "lenght_max": "60",
                  "length_min": "3",
                  "invalid_text": "O nome não atende os requisitos minimos",
                  "default_value": "de tal",
                  "component_type": "geoloc",
                  "required_message": ""
                },
                {
                  "hint": "Nota de audio",
                  "group": "false",
                  "label": "faça uma nota de audio",
                  "required": "false",
                  "data_name": "audio_nota",
                  "lenght_max": "60",
                  "length_min": "3",
                  "invalid_text": "O nome não atende os requisitos minimos",
                  "default_value": "de tal",
                  "component_type": "audiorec",
                  "required_message": ""
                },
                {
                  "hint": "informe o primeiro nome do usuário",
                  "group": "true",
                  "label": "Qual é o seu primeiro nome?",
                  "required": "true",
                  "data_name": "first_name1",
                  "lenght_max": "60",
                  "length_min": "3",
                  "invalid_text": "O nome não atende os requisitos minimos",
                  "default_value": "Fulano",
                  "component_type": "text",
                  "required_message": "O nome do usuário é obrigatório"
                },
                {
                  "hint": "informe o primeiro nome do usuário",
                  "group": "true",
                  "label": "Qual é o seu primeiro nome?",
                  "required": "true",
                  "data_name": "first_name2",
                  "lenght_max": "60",
                  "length_min": "3",
                  "invalid_text": "O nome não atende os requisitos minimos",
                  "default_value": "Fulano",
                  "component_type": "text",
                  "required_message": "O nome do usuário é obrigatório"
                },
                {
                  "hint": "Retire uma foto do local",
                  "group": "false",
                  "label": "Foto do local",
                  "required": "false",
                  "data_name": "foto",
                  "lenght_max": "0",
                  "length_min": "0",
                  "invalid_text": "a idade esta fora do intervalo",
                  "default_value": "99",
                  "component_type": "camera",
                  "required_message": ""
              },
              {
                "hint": "informe o primeiro nome do usuário",
                "group": "true",
                "label": "seu primeiro nome",
                "required": "true",
                "data_name": "first_name3",
                "lenght_max": "60",
                "length_min": "3",
                "invalid_text": "O nome não atende os requisitos minimos",
                "default_value": "Fulano",
                "component_type": "text",
                "required_message": "O nome do usuário é obrigatório"
              },
              {
                "hint": "informe o nome da mãe do usuário",
                "group": "true",
                "label": "Nome do mãe",
                "required": "true",
                "data_name": "first_name4",
                "lenght_max": "60",
                "length_min": "3",
                "invalid_text": "O nome não atende os requisitos minimos",
                "default_value": "Fulano",
                "component_type": "text",
                "required_message": "O nome do usuário é obrigatório"
              },
              {
                "hint": "informe o nome do pai do usuário",
                "group": "true",
                "label": "nome do pai",
                "required": "true",
                "data_name": "first_name5",
                "lenght_max": "60",
                "length_min": "3",
                "invalid_text": "O nome não atende os requisitos minimos",
                "default_value": "Fulano",
                "component_type": "text",
                "required_message": "O nome do usuário é obrigatório"
              },
              {
                "hint": "informe o primeiro nome do usuário",
                "group": "true",
                "label": "seu primeiro nome",
                "required": "true",
                "data_name": "first_name6",
                "lenght_max": "60",
                "length_min": "3",
                "invalid_text": "O nome não atende os requisitos minimos",
                "default_value": "Fulano",
                "component_type": "text",
                "required_message": "O nome do usuário é obrigatório"
              },
              {
                "hint": "informe o nome da mãe do usuário",
                "group": "true",
                "label": "Nome do mãe",
                "required": "true",
                "data_name": "first_name7",
                "lenght_max": "60",
                "length_min": "3",
                "invalid_text": "O nome não atende os requisitos minimos",
                "default_value": "Fulano",
                "component_type": "text",
                "required_message": "O nome do usuário é obrigatório"
              },
              {
                "hint": "informe o nome do pai do usuário",
                "group": "true",
                "label": "nome do pai",
                "required": "true",
                "data_name": "first_name8",
                "lenght_max": "60",
                "length_min": "3",
                "invalid_text": "O nome não atende os requisitos minimos",
                "default_value": "Fulano",
                "component_type": "text",
                "required_message": "O nome do usuário é obrigatório"
              },
              {
                "hint": "informe a data da pericia",
                "group": "true",
                "label": "Qual data de realização da pericia?",
                "required": "true",
                "data_name": "data_pericia",
                "lenght_max": "60",
                "length_min": "3",
                "invalid_text": "O nome não atende os requisitos minimos",
                "default_value": "Fulano",
                "component_type": "date",
                "required_message": "O nome do usuário é obrigatório"
            },
              {
                "hint": "Retire uma foto do local",
                "group": "false",
                "label": "Foto do local",
                "required": "false",
                "data_name": "foto1",
                "lenght_max": "0",
                "length_min": "0",
                "invalid_text": "a idade esta fora do intervalo",
                "default_value": "99",
                "component_type": "camera",
                "required_message": ""
              },
              {
                "hint": "Nota de audio",
                "group": "false",
                "label": "faça uma nota de audio",
                "required": "false",
                "data_name": "audio_nota1",
                "lenght_max": "60",
                "length_min": "3",
                "invalid_text": "O nome não atende os requisitos minimos",
                "default_value": "de tal",
                "component_type": "audiorec",
                "required_message": ""
            },
              {
                "hint": "Retire uma foto do local",
                "group": "false",
                "label": "Foto do local",
                "required": "false",
                "data_name": "foto2",
                "lenght_max": "0",
                "length_min": "0",
                "invalid_text": "a idade esta fora do intervalo",
                "default_value": "99",
                "component_type": "camera",
                "required_message": ""
              },
              {
                "hint": "informe a data da pericia",
                "group": "true",
                "label": "Qual data de realização da pericia?",
                "required": "true",
                "data_name": "data_pericia2",
                "lenght_max": "60",
                "length_min": "3",
                "invalid_text": "O nome não atende os requisitos minimos",
                "default_value": "Fulano",
                "component_type": "date",
                "required_message": "O nome do usuário é obrigatório"
              },
              {
                "hint": "informe a data da pericia",
                "group": "true",
                "label": "Qual data de realização da pericia?",
                "required": "true",
                "data_name": "data_pericia3",
                "lenght_max": "60",
                "length_min": "3",
                "invalid_text": "O nome não atende os requisitos minimos",
                "default_value": "Fulano",
                "component_type": "date",
                "required_message": "O nome do usuário é obrigatório"
              },

          ],
          "step_description": "Informações preliminares da pericia"
      },
      {
          "step_name": "Reconhecimento",
          "components": [
              {
                  "hint": "informe a data da pericia",
                  "group": "true",
                  "label": "Qual data de realização da pericia?",
                  "required": "true",
                  "data_name": "data_pericia4",
                  "lenght_max": "60",
                  "length_min": "3",
                  "invalid_text": "O nome não atende os requisitos minimos",
                  "default_value": "Fulano",
                  "component_type": "date",
                  "required_message": "O nome do usuário é obrigatório"
              },
              {
                  "hint": "Nota de audio",
                  "group": "false",
                  "label": "faça uma nota de audio",
                  "required": "false",
                  "data_name": "audio_nota2",
                  "lenght_max": "60",
                  "length_min": "3",
                  "invalid_text": "O nome não atende os requisitos minimos",
                  "default_value": "de tal",
                  "component_type": "audiorec",
                  "required_message": ""
              },
              {
                  "hint": "informe a idade do usuário",
                  "group": "false",
                  "label": "Qual é a sua idade?",
                  "required": "false",
                  "data_name": "age",
                  "lenght_max": "0",
                  "length_min": "0",
                  "invalid_text": "a idade esta fora do intervalo",
                  "default_value": "99",
                  "component_type": "text",
                  "required_message": ""
              }
          ],
          "step_description": "Informações do local e da cena"
      }
  ],
  "classe": "homicidio",
  "form_name": "Morte Violenta",
  "sub_classe": "Morte Violenta",
  "form_version": "1.0"
};

class StepList extends Component {
  state ={
    modalVisible: false,
    load: false,
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
      //const response = await AsyncStorage.getAllKeys();
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
    //const { steps } = this.props;
    const { modalVisible, load } = this.state;    
    //const form = this.props.navigation.getParam('form');
    //console.tron.log('seus steps');
    //console.tron.log(form);
    const { steps, form_name } = forms;

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
