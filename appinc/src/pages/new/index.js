import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity, ScrollView, AsyncStorage, TextInput, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../globalComponents';
import axios from 'axios';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as NewActions } from '../../store/ducks/new';

// <Animated.View
// style={{
// ...this.props.style,
// opacity: fadeAnim,  }}>
// <Text>Deu certo?</Text>
// </Animated.View>

// <TouchableOpacity style={styles.button} onPress={() => this.iniciar()}>
//   <Text style={styles.buttonText}>
//     Continuar
//   </Text>
// </TouchableOpacity>


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
    fadeAnim: new Animated.Value(0),
    fadeAnim_l: new Animated.Value(0),
    fadeAnim_s: new Animated.Value(0), 
    fadeAnim_ref: new Animated.Value(0), 
     // Initial value for opacity: 0


    baseUrl: null,
    resposta: null,
    escolha: null,
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

  navigateToStepList = () => this.props.navigation.navigate('StepList', { form: this.state.resposta });

  areaPicker = (value) => {
    this.setState({ tipo: value},
      () => {
        this.incrementarFuncao();
        this.onAreaPickerChange();
      }
    );

    // FUNÇÂO RESPONSÁVEL PELA ANIMAÇÃO
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();

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

    // FUNÇÂO RESPONSÁVEL PELA ANIMAÇÃO
    Animated.timing(                  // Animate over time
      this.state.fadeAnim_s,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();
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

    // FUNÇÂO RESPONSÁVEL PELA ANIMAÇÃO
    Animated.timing(                  // Animate over time
      this.state.fadeAnim_ref,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();
  }

  onPressButton = () => {
    const { navigation, getReference } = this.props;
    const { inputSave } = this.state;
    if(inputSave) {
      getReference(this.state.inputSave);
      navigation.navigate('StepList' , { inputSave: this.state.inputSave });
    } else {
      getReference('Laudo sem Nome');
      navigation.navigate('StepList');
    }
  }

  reqUrl = (value) => {
    axios.get('http://35.231.239.168/api/pericia/formularios/'+value)
      .then((resp) => {
        console.tron.log(['Requisição New', resp.data]);
        AsyncStorage.setItem('@Formulario', JSON.stringify(resp.data));
        this.setUrl();
      }).catch(err => {
        console.tron.log(err);
      });
  }

  async setUrl() {
    const respPura = await AsyncStorage.getItem('@Formulario');
    const resposta = JSON.parse(respPura);
    this.setState({ 
      resposta: resposta,  
      showRef: true,  
    });
        // FUNÇÂO RESPONSÁVEL PELA ANIMAÇÃO
        Animated.timing(                  // Animate over time
          this.state.fadeAnim_ref,            // The animated value to drive
          {
            toValue: 1,                   // Animate to opacity: 1 (opaque)
            duration: 2000,              // Make it take a while
          }
        ).start();
    console.tron.log(['Opa', this.state.resposta])
  }

  render() {
    const { tipo, subtipo, ssubtipo, formQuerry, classe, subClasse, incrementar, contador, showRef ,fadeAnim_ref, fadeAnim , fadeAnim_l , fadeAnim_s, baseUrl } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Header
          title='Nova Pericia'
          showMenu
          openMenu={navigation.toggleDrawer}
        />
        <ScrollView>



        <View style={styles.forms1}>
          <View style={styles.title}>
            <View style={styles.ball}>
            <Text style={styles.numberType}>1</Text>
            </View>
            <Text style={styles.textType}> Perícia: </Text>
          </View>
            <View style={styles.Picker}>
              <Picker
                style={styles.estiloPicker}
                placeholder="Selecione a perícia"
                selectedValue={this.state.baseUrl}
                onValueChange={(baseUrl => this.setState({ baseUrl }), this.reqUrl )}
              >
                <Picker.Item label='Selecione a perícia' />
                <Picker.Item label='Agência Bancária' value='4' />
                <Picker.Item label='Perícia veicular' value='5' />
                <Picker.Item label='Incêndio' value='1' />
              </Picker>

            </View>
        </View>

        {
          showRef && (

            <Animated.View
            style={{ ...this.props.style , opacity: fadeAnim_ref }}>
            {this.props.children}
                  <View style={styles.forms}>
                  <View style={styles.title}>
                      <View style={styles.ball}><Text style={styles.numberType}> 2 </Text></View>
                      <Text style={styles.textType}> Referência: </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={72}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onChangeText={inputSave => this.setState({ inputSave })}
                  />
                </View>
                  </Animated.View>
          )
        }
            <TouchableOpacity style={styles.button} onPress={() => this.onPressButton()}>
              <Text style={styles.buttonText}>
                Continuar
              </Text>
            </TouchableOpacity>
        </ScrollView>
      </View>

    );
  }
}

const mapStateToProps = state => ({
  newState: state.newState
});


const mapDispatchToProps = dispatch => bindActionCreators(NewActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(New);
