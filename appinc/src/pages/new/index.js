import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity, StatusBar, AsyncStorage, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../globalComponents';
import axios from 'axios';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Creators as NewActions } from '../../store/ducks/new';


const formulario = [
    {
      area: 'homicidio',
      subareas: [
        {
          type: 'morteviolenta',
          data: [
            {
              titulo: 'Preparo',
              descricao: 'Numero do caso, inicio, termino, equipe',
              form: [
                {
                  type: 'text',
                },
                {
                  type: 'geoloc',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'date',
                },
                {
                  type: 'text',
                },
              ]
            },
            {
              titulo: '1. Reconhecimento',
              descricao: 'Nome da vitima, nascimento, narturalidade',
              form: [
                {
                  type: 'text',
                },
                {
                  type: 'date',
                },
                {
                  type: 'date',
                },
                {
                  type: 'date',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
              ]
            },
            {
              titulo: '2. Localização',
              descricao: 'Posicao geografica e etc',
              form: [
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'geo',
                },
                {
                  type: 'geo',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'date',
                },
                {
                  type: 'text',
                },
              ]
            },
            {
              titulo: '3. Posição',
              descricao: 'Nome da vitima, nascimento, naturalidade',
              form: [
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'text',
                },
                {
                  type: 'geoloc',
                },
                {
                  type: 'geoloc',
                },
                {
                  type: 'camera',
                },
                {
                  type: 'camera',
                },
                {
                  type: 'camera',
                },
                {
                  type: 'date',
                },
                {
                  type: 'text',
                },
              ]
            },
            {
              titulo: '4. Descrição',
              descricao: 'Individuo, compleição, estatura, particularidades',
              form: [
                {
                  type: 'text',
                },
                {
                  type: 'date',
                },
                {
                  type: 'text',
                },
                {
                  type: 'date',
                },
                {
                  type: 'text',
                },
                {
                  type: 'date',
                },
                {
                  type: 'camera',
                },
                {
                  type: 'camera',
                },
                {
                  type: 'camera',
                },
                {
                  type: 'camera',
                },
              ]
            },
          ]
        },
        {
          type: 'estrangulamento',
          data: 'Entrou na area homicido subarea estrangulamento'
        }
      ]
    },
    {
      area: 'carro',
      subareas: [
        {
          type: 'batida',
          data: 'Entrou na area carro subarea batida'
        },
        {
          type: 'roubo',
          data: 'Entrou na area carro subarea roubo'
        }
      ]
    },
];

class New extends Component {
  static navigationOptions = {
    title: 'Nova Pericia',
  }

  state ={
    tipo: null,
    subtipo: null,
    ssubtipo: null,
    form: null,
    formQuerry: null,
    classe: null,    
    incrementar: 2,
    contador: [1], 
    showRef: false,
  }

  async componentWillMount() {
    const valueForm = await AsyncStorage.getItem('@Form');
    const formLocal = JSON.parse(valueForm);
    this.setState({ form: formLocal});
    console.tron.log(["Form:",this.state.form]);
    const valueQuerry = await AsyncStorage.getItem('@Querry');
    const formQuerryLocal = JSON.parse(valueQuerry);
    this.setState({ formQuerry: formQuerryLocal});
    console.tron.log(["Query",this.state.formQuerry]);
    this.incrementarFuncao();
  }

  incrementarFuncao = () => {
    const { contador, incrementar} = this.state;
    const numeroBase = incrementar;
    const numeroFinal = numeroBase + 1;
    this.setState({ incrementar : numeroFinal});
    this.setState({ contador: [...contador,incrementar]})
    console.tron.log(["contador", contador]);
  } 

  navigateToStepList = () => this.props.navigation.navigate('StepList', { form: this.state.form });

  formulario = (tipo, subtipo) => {
    if (tipo === formulario[0].area) {
        if (subtipo === formulario[0].subareas[0].type) {
          console.tron.log(formulario[0].subareas[0].data);
          const data = formulario[0].subareas[0].data;
          if (data) {
            this.state.form = formulario[0].subareas[0].data;
            this.navigateToStepList('StepList', this.state.form);
          }
        }
        if (subtipo === formulario[0].subareas[1].type) {
          console.tron.log(formulario[0].subareas[1].data);
        }
    }
    if (tipo === formulario[1].area) {
      if (subtipo === formulario[1].subareas[0].type) {
        console.tron.log(formulario[1].subareas[0].data);
      }
      if (subtipo === formulario[1].subareas[1].type) {
        console.tron.log(formulario[1].subareas[1].data);
      }
    }
  }

  areaPicker = (value) => {
    this.setState({ tipo: value},
      () => {
        this.incrementarFuncao();
        this.onAreaPickerChange();
      }
    );
  }

  onAreaPickerChange = () => {
    console.tron.log(["onAreaPicker",this.state.formQuerry]);
    if(this.state.formQuerry[0].area_name == this.state.tipo)
    {
      //Renderiza o picker em relação a primeira selacao do Picker
      this.classePickerOne();
    }
    if(this.state.formQuerry[1].area_name == this.state.tipo)
    {
      //Renderiza o picker em relação a segunda selecao do Picker
      this.classePickerSecond();
    }
  }

  classePickerOne = async (value) => {
    const classe = this.state.formQuerry[0].classes;
    await this.setState({ classe });
    const testeclasse = classe.map(item => console.tron.log(item.classe_name));
    this.setState({ subtipo: value},
      () => {
      }
    );
  }

  classePickerSecond = async (value) => {
    const classe = this.state.formQuerry[1].classes;
    await this.setState({ classe })
    const teste = classe.map(item => console.tron.log(item.classe_name)); 
  }

  subClassePicker = (value) => {
    this.setState({ subtipo: value},
      () => {
        console.tron.log(["Funfou",this.state.subtipo])
        this.onSubClassePickerChange();
      }
    );
  }

  onSubClassePickerChange = () => {
    console.tron.log(["onSubClassePicker",this.state.formQuerry[0].classes[1].classe_name]);
    if(this.state.formQuerry[0].classes[0].classe_name == this.state.subtipo)
    {
      //Renderiza o picker em relação a primeira selacao do Picker
      this.subClassePickerOne();
    }
    if(this.state.formQuerry[0].classes[1].classe_name == this.state.subtipo)
    {
      //Renderiza o picker em relação a segunda selacao do Picker
      this.subClassePickerSecond();
    }
    if(this.state.formQuerry[1].classes[0].classe_name == this.state.subtipo)
    {
      //Renderiza o picker em relação a terceira selacao do Picker
      this.subClassePickerThird();
    }
    if(this.state.formQuerry[1].classes[1].classe_name == this.state.subtipo)
    {
      //Renderiza o picker em relação a quarta selacao do Picker
      this.subClassePickerFourth();
    }
  }

  subClassePickerOne = async (value) => {
    const subClasse = this.state.formQuerry[0].classes[0].sub_classe;
    await this.setState({ subClasse },
    () => {
      console.tron.log(["SubClasse",this.state.subClasse]);
    });
    const testeSubClasse = this.state.subClasse.map(item => console.tron.log(item.subclasse_name));
  }

  subClassePickerSecond = async (value) => {
    const subClasse = this.state.formQuerry[0].classes[1].sub_classe;
    await this.setState({ subClasse },
    () => {
      console.tron.log(["SubClasse",this.state.subClasse]);
    });
    const testeSubClasse = this.state.subClasse.map(item => console.tron.log(item.subclasse_name));
  }


  subClassePickerThird = async (value) => {
    const subClasse = this.state.formQuerry[1].classes[0].sub_classe;
    await this.setState({ subClasse },
    () => {
      console.tron.log(["SubClasse",this.state.subClasse]);
    });
    const testeSubClasse = this.state.subClasse.map(item => console.tron.log(item.subclasse_name));
  }


  subClassePickerFourth = async (value) => {
    const subClasse = this.state.formQuerry[1].classes[1].sub_classe;
    await this.setState({ subClasse },
    () => {
      console.tron.log(["SubClasse",this.state.subClasse]);
    });
    const testeSubClasse = this.state.subClasse.map(item => console.tron.log(item.subclasse_name));
  }

  lastPicker = () => {
    this.setState({ showRef : true});
  }

  render() {
    const { tipo, subtipo, ssubtipo, formQuerry, classe, subClasse, incrementar, contador, showRef } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          title='Nova Pericia'
          showMenu
          openMenu={navigation.toggleDrawer}
        />

        <View style={styles.forms1}>
          <View style={styles.title}>
            <View style={styles.ball}>
            <Text style={styles.numberType}>{contador[0]}</Text>
            </View>
            <Text style={styles.textType}> Área: </Text>
          </View>
            <View style={styles.Picker}>
              <Picker
                style={styles.estiloPicker}
                placeholder="Selecione a pericia desejada"
                selectedValue={this.state.tipo}
                onValueChange={this.areaPicker}
              >
                <Picker.Item label='Area' />
                <Picker.Item label='Homicídio' value='pessoa' />
                <Picker.Item label='Perícia veicular' value='agencia' />
                <Picker.Item label='Incêndio' value='incendio' />
                <Picker.Item label='Crime ambiental' value='crimeambiental' />
              </Picker>
              {this.incrementarFuncao}
            </View>
        </View>

        {
          tipo && classe && (
            <View style={styles.forms2}>
              <View style={styles.title}>
                <View style={styles.ball}>
                  <Text style={styles.numberType}> {contador[1]} </Text> 
                </View>
              <Text style={styles.textType}> Classe: </Text>
              </View>
                <View style={styles.Picker}>
                  <Picker
                    style={styles.estiloPicker}
                    placeholder="Selecione a subárea da pericia desejada"
                    selectedValue={this.state.subtipo}
                    onValueChange={this.subClassePicker}
                  >
                  <Picker.Item label='Classe'/>
                  {
                    classe.map(item => <Picker.Item label={item.classe_name} value={item.classe_name} />)
                  }
                    
                  </Picker>
                </View>
            </View>
          )
        }

        {
          subtipo && subClasse && (
            <View style={styles.forms2}>
            <View style={styles.title}>
              <View style={styles.ball}><Text style={styles.numberType}> {contador[2]} </Text></View>
              <Text style={styles.textType}> Subclasse: </Text>
            </View>
              <View style={styles.Picker}>
                <Picker
                  style={styles.estiloPicker}
                  placeholder="Selecione a subárea da pericia desejada"
                  selectedValue={this.state.ssubtipo}
                  onValueChange={this.lastPicker}
                >
                <Picker.Item label='Subclasse' />
                {
                  subClasse.map(item => <Picker.Item label={item.subclasse_name} value={item.subclasse_name} />)
                }
                  
                </Picker>
              </View>
          </View>
          )
        }
  
        {
          showRef && (
                  <View style={styles.forms}>
                  <View style={styles.title}>
                      <View style={styles.ball}><Text style={styles.numberType}> {incrementar} </Text></View>
                      <Text style={styles.textType}> Referência: </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    multiline
                    maxLength={72}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onChangeText={inputSave => this.setState({ inputSave })}
                  />
                </View>
          )
        }

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StepList')}>
              <Text style={styles.buttonText}>
                Continuar
              </Text>
            </TouchableOpacity>


      </View>
    );
  }
}

const mapStateToProps = state => ({
  newState: state.newState
});

export default connect(mapStateToProps, null)(New);