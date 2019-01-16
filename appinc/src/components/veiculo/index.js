
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Image, ScrollView } from 'react-native';
import styles from './styles';
import axios from 'axios';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { Creators as GeoActions } from '../../store/ducks/geolocation';

class Veiculos extends Component {

   state = {
     dadosVeiculo: '',
   }

 consultaPlaca = () => {
  
    this.setState({
      view: true,
    }),

      axios.get('http://35.231.239.168/api/pericia/denatran/NLF7978')
      .then((resp) => {
        console.tron.log(['VEIIIIIICULO', resp.data]);
        AsyncStorage.setItem('@InfoVeiculo', JSON.stringify(resp.data));
        this.geraLog();
      }).catch(err => {
        console.tron.log(err);
      });
  }

  async geraLog() {
    const dadosPuro = await AsyncStorage.getItem('@InfoVeiculo');
    const dadosVeiculo = JSON.parse(dadosPuro);
    this.setState({ dadosVeiculo: dadosVeiculo});
  }

  render() {
    const { label, hint } = this.props.data;
    const { dadosVeiculo } = this.state;
    return (
      <View style={styles.container}>
      <View>
          <View style={styles.cabecalho}>
              <View style ={styles.texto_geo}>
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
          </View>
        <View styles={styles.main}>
          <TouchableOpacity onPress={this.consultaPlaca} style={styles.button}>
            <Text style={styles.button_text}>Verificar Veículo</Text>
          </TouchableOpacity>
        </View>
        {
          this.state.error && (
            <View style={styles.input}>
                <Text style={styles.info_text}>Error: {this.state.error}</Text>
              </View>
          )
        }
        {
          this.state.view && (
            <View style={styles.info}>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Placa: {dadosVeiculo.placa}</Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Fabricante: {dadosVeiculo.marca}</Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Modelo: {dadosVeiculo.modelo} </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Procedência: {dadosVeiculo.procedencia} </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Ano Fabricação: {dadosVeiculo.ano_fab}</Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Ano Modelo: {dadosVeiculo.ano_mod}</Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Combustível: {dadosVeiculo.combustivel} </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Chassi: {dadosVeiculo.chassi} </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Número Motor: {dadosVeiculo.numero_motor} </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Etiquetas: {dadosVeiculo.etiquetas} </Text>
                </View>
              </View>
          )
        }
      </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  geoloc: state.geolocation,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GeoActions, dispatch);

export default Veiculos;
 