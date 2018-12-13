import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity, StatusBar, AsyncStorage, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../globalComponents';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as NewActions } from '../../store/ducks/new';


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
    form: null,
  }

  async componentWillMount() {
    const value = await AsyncStorage.getItem('@Form');
    const arrayRef = [];
    // AsyncStorage.setItem('arrayRef', arrayRef );
    const form = JSON.parse(value);
    console.tron.log(['formulario', form]);
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

  retrieveData = async () => {

    try {
      console.tron.log(['value', value]);
      if (value !== null) {
        // We have data!!
        // console.tron.log([value]);
      }
    } catch (error) {
      // console.tron.log([value]);
      // Error retrieving data
    }
  }

  onPressButton = () => {
    const { navigation, getReference } = this.props;
    const { inputSave } = this.state;
    if(inputSave) {
      getReference(this.state.inputSave);
      navigation.navigate('StepList');
    } else {
      getReference('Laudo sem Nome');
      navigation.navigate('StepList');
    }    
  }

  render() {
    const { tipo, subtipo } = this.state;
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
            <View style={styles.ball}><Text style={styles.numberType}> 1 </Text></View>
            <Text style={styles.textType}> Tipo: </Text>
          </View>
            <View style={styles.Picker}>
              <Picker
                style={styles.estiloPicker}
                placeholder="Selecione a pericia desejada"
                selectedValue={this.state.tipo}
                onValueChange={(itemValue) => this.setState({ tipo: itemValue })}
              >
                <Picker.Item label='Area' />
                <Picker.Item label='Homicídio' value='homicidio' />
                <Picker.Item label='Perícia veicular' value='carro' />
                <Picker.Item label='Incêndio' value='incendio' />
                <Picker.Item label='Crime ambiental' value='crimeambiental' />
              </Picker>
            </View>
        </View>

        <View style={styles.forms2}>
            <View style={styles.Picker}>
              <Picker
                style={styles.estiloPicker}
                placeholder="Selecione a subárea da pericia desejada"
                selectedValue={this.state.subtipo}
                onValueChange={(itemValue) => this.setState({ subtipo: itemValue })}
              >
                <Picker.Item label='Classe' />
                <Picker.Item label='Morte violenta' value='morteviolenta' />
                <Picker.Item label='Estrangulamento' value='estrangulamento' />
                <Picker.Item label='Batida' value='batida' />
                <Picker.Item label='Roubo' value='roubo' />
              </Picker>
            </View>
        </View>
        <View style={styles.forms}>
          <View style={styles.title}>
              <View style={styles.ball}><Text style={styles.numberType}> 2 </Text></View>
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

            <TouchableOpacity style={styles.button} onPress={() => this.onPressButton()}>
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

const mapDispatchToProps = dispatch => bindActionCreators(NewActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(New);


/*
<View elevation ={5} style={styles.header}>
          <View style={styles.viewIcon}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('DrawerToggle'); }}>
              <Icon name="md-menu" size={28} style={styles.icon} />
            </TouchableOpacity>
          </View>
            <View style={styles.viewTitle}>
              <Text style={styles.headerTitle}>
                Nova Pericia
              </Text>
            </View>
            <View style={styles.concerto} />
      </View>
*/
