
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Image, ScrollView, Picker} from 'react-native';
import styles from './styles';
import axios from 'axios';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { Creators as GeoActions } from '../../store/ducks/geolocation';

const categories = [{ id: 0, text: 'hasan' },
{ id: 1, text: 'erkan' },
{ id: 2, text: 'veli' }];

var options = [{ id: 0, text: 'hasan' },
{ id: 1, text: 'erkan' },
{ id: 2, text: 'veli' }];

class Veiculos extends Component {

   state = {
     dadosVeiculo: '',
     dadosFipe:'',
     urlFipe: '',
     placa: '',
     marcas: null,
     marcaAtual:'',
     dadosMarcas: '',
     viewDenatran: false,
     viewFipe: false,
     dadosModelos: '',
     modelos: '',
     renderPickerModelos: false,
     renderPickerAno: false,
     listaMarcas: 'paulo',
     renderPicker: false,
     ano: '',



   }

  async componentWillMount() {
   axios.get('http://fipeapi.appspot.com/api/1/carros/marcas.json')
   .then((resp) => {
     AsyncStorage.setItem('@Marcas', JSON.stringify(resp.data));
     this.getMarcas();
   }).catch(err => {
     console.tron.log(err);
   });



 }

 consultaPlaca = () => {
    this.setState({
      viewDenatran: true,
    }),

      axios.get('http://35.231.239.168/api/pericia/denatran/' +this.state.placa)
      .then((resp) => {
        AsyncStorage.setItem('@InfoPlaca', JSON.stringify(resp.data));
        this.getDadosPlaca();
      }).catch(err => {
        console.tron.log(err);
      });
  }

  async getDadosPlaca() {
    const dadosPuro = await AsyncStorage.getItem('@InfoPlaca');
    const dadosVeiculo = JSON.parse(dadosPuro);
    this.setState({ dadosVeiculo: dadosVeiculo});

  }



  consultaFipe = () => {
    console.tron.log(['MARCA PICKER', this.state.anos])

    this.setState({
      urlFipe: 'http://fipeapi.appspot.com/api/1/carros/veiculo/'+this.state.marca+'/'+this.state.modelo+'/'+this.state.anos+'.json',
    }),
      axios.get(this.state.urlFipe)
      .then((resp) => {
        AsyncStorage.setItem('@InfoFipe', JSON.stringify(resp.data));
        this.getDadosFipe();
      }).catch(err => {
        console.tron.log(err);
      });
  }

  async getDadosFipe() {
    const dadosPuro = await AsyncStorage.getItem('@InfoFipe');
    const dadosFipe = JSON.parse(dadosPuro);
    this.setState({ dadosFipe: dadosFipe, viewFipe: true});
  }


  consultaMarcas = () => {

      axios.get('http://fipeapi.appspot.com/api/1/carros/marcas.json')
      .then((resp) => {
        AsyncStorage.setItem('@Marcas', JSON.stringify(resp.data));
        this.getMarcas();
      }).catch(err => {
        console.tron.log(err);
      });
  }

  async getMarcas() {

    const dadosPuro = await AsyncStorage.getItem('@Marcas');
    const dadosMarcas = JSON.parse(dadosPuro);
    this.setState({
      dadosMarcas: dadosMarcas,
    });


    const marcas = this.state.dadosMarcas;
    await this.setState({ marcas });
    const listaDeMarcas = marcas.map(item => item.name);
    const listaDeValor = marcas.map(item => item.id);

    this.setState({ renderPicker:true })

  }



  pegaModelos = (value) => {
    this.setState({ marca : value});
    axios.get('http://fipeapi.appspot.com/api/1/carros/veiculos/'+value+'.json')
    .then((resp) => {
      AsyncStorage.setItem('@Modelos', JSON.stringify(resp.data));
      this.getModelos();
    }).catch(err => {
      console.tron.log(err);
    });
}

async getModelos() {

  const dadosPuro = await AsyncStorage.getItem('@Modelos');
  const dadosModelos = JSON.parse(dadosPuro);
  this.setState({
    dadosModelos: dadosModelos,
  });


  const modelos = this.state.dadosModelos;
  await this.setState({ modelos });
  this.setState({ renderPickerModelos:true })


}




pegaAno = (value) => {
  this.setState({ modelo : value});
  axios.get('http://fipeapi.appspot.com/api/1/carros/veiculo/'+this.state.marca+'/'+value+'.json')
  .then((resp) => {
    AsyncStorage.setItem('@Ano', JSON.stringify(resp.data));
    this.getAno();
  }).catch(err => {
    console.tron.log(err);
  });
}

async getAno() {

const dadosPuro = await AsyncStorage.getItem('@Ano');
const dadosAno = JSON.parse(dadosPuro);
this.setState({
  dadosAno : dadosAno,
});
console.tron.log(["Ano", dadosAno]);


const ano = this.state.dadosAno;
await this.setState({ ano });
this.setState({ renderPickerAno:true })


}


  render() {
    const { label, hint } = this.props.data;
    const { dadosVeiculo, dadosFipe, dadosMarcas, marcas, modelos, renderPicker, renderPickerModelos, ano, anos, renderPickerAno } = this.state;
    return (
      <View style={styles.container}>



          <View style = {styles.main}>

          <View style = {styles.hint_title}>
          <View style={styles.miniball}>
            <Text style={styles.numberType}>1</Text>
          </View>
          <View style = {styles.hintview}>
            <Text style = {styles.hint}>Preencha os campos abaixo para consultar a tabela FIPE</Text>
          </View>
          </View>

            {

              renderPicker && (
                <View style={styles.Picker}>
                <Picker
                    style={styles.estiloPicker}
                    onValueChange={(marca => this.setState({ marca }), this.pegaModelos)}
                    selectedValue={this.state.marca}
                    collapsable = {true}
                    >

                      <Picker.Item label='Fabricante'/>
                      {
                        marcas.map(item => <Picker.Item label={item.name} value={item.id}></Picker.Item>)
                      }

                </Picker>
              </View>
              )
             }


            {
              renderPickerModelos && (
                <View style={styles.Picker}>
                <Picker
                    style={styles.estiloPicker}
                    selectedValue={this.state.modelo}
                    onValueChange={(modelo => this.setState({ modelo }), this.pegaAno )}
                    >

                      <Picker.Item label='Modelo'/>
                      {
                        modelos.map(item => <Picker.Item label={item.name} value={item.id}></Picker.Item>)
                      }

                </Picker>
              </View>
              )
             }

{
              renderPickerAno && (
                <View style={styles.Picker}>
                <Picker
                    style={styles.estiloPicker}
                    selectedValue={this.state.anos}
                    onValueChange={(anos => this.setState({ anos }) )}
                    >

                      <Picker.Item label='Ano'/>
                      {
                        ano.map(item => <Picker.Item label={item.id} value={item.id}></Picker.Item>)
                      }

                </Picker>
              </View>

              )
             }
          </View>

          <View>
              <View style={styles.cabecalho}>
              </View>

            {
              this.state.error && (
                <View style={styles.input}>
                    <Text style={styles.info_text}>Error: {this.state.error}</Text>
                  </View>
              )
            }
            {
              this.state.viewFipe && (
                <View style={styles.info}>

                <View style={styles.input_o}>
                      <Text style={styles.info_text}>Data deferência: {dadosFipe.referencia}</Text>
                    </View>
                    <View style={styles.input_o}>
                      <Text style={styles.info_text}>Código Fipe: {dadosFipe.fipe_codigo}</Text>
                    </View>
                    <View style={styles.input_o}>
                      <Text style={styles.info_text}>Modelo: {dadosFipe.name} </Text>
                    </View>
                    <View style={styles.input_o}>
                      <Text style={styles.info_text}>Combustível: {dadosFipe.combustivel} </Text>
                    </View>
                    <View style={styles.input_o}>
                      <Text style={styles.info_text}>Fabricante: {dadosFipe.marca}</Text>
                    </View>
                    <View style={styles.input_o}>
                      <Text style={styles.info_text}>Ano Modelo: {dadosFipe.ano_modelo}</Text>
                    </View>
                    <View style={styles.input_o}>
                      <Text style={styles.info_text}>Preço: {dadosFipe.preco} </Text>
                    </View>


                  </View>
              )
            }

          </View>


          <View styles={styles.main}>
          <TouchableOpacity onPress={this.consultaFipe} style={styles.button}>
          <Text style={styles.button_text}>Consultar Tabela FIPE</Text>
          </TouchableOpacity>
          </View>

          <View style = {styles.hint_title}>
          <View style={styles.miniball}>
            <Text style={styles.numberType}>2</Text>
          </View>
          <View style = {styles.hintview}>
            <Text style = {styles.hint}>Informe a placa para recuperar dados do DENATRAN</Text>
          </View>
          </View>


          <View style={styles.cabecalho} >
              <View style ={styles.texto_geo}>

                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  multiline
                  placeholder={hint}
                  maxLength={72}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  onChangeText={(placa) => this.setState({ placa })}
              />
              </View>
          </View>



        <View styles={styles.main}>
          <TouchableOpacity onPress={this.consultaPlaca} style={styles.button}>
            <Text style={styles.button_text}>Consultar "DENATRAN"</Text>
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
          this.state.viewDenatran && (
            <View style={styles.info}>
                <View style={styles.input_o}>
                  <Text style={styles.info_text}>Placa: {dadosVeiculo.placa}</Text>
                </View>
                <View style={styles.input_o}>
                  <Text style={styles.info_text}>Fabricante: {dadosVeiculo.marca}</Text>
                </View>
                <View style={styles.input_o}>
                  <Text style={styles.info_text}>Modelo: {dadosVeiculo.modelo} </Text>
                </View>
                <View style={styles.input_o}>
                  <Text style={styles.info_text}>Procedência: {dadosVeiculo.procedencia} </Text>
                </View>
                <View style={styles.input_o}>
                  <Text style={styles.info_text}>Ano Fabricação: {dadosVeiculo.ano_fab}</Text>
                </View>
                <View style={styles.input_o}>
                  <Text style={styles.info_text}>Ano Modelo: {dadosVeiculo.ano_mod}</Text>
                </View>
                <View style={styles.input_o}>
                  <Text style={styles.info_text}>Combustível: {dadosVeiculo.combustivel} </Text>
                </View>
                <View style={styles.input_o}>
                  <Text style={styles.info_text}>Chassi: {dadosVeiculo.chassi} </Text>
                </View>
                <View style={styles.input_o}>
                  <Text style={styles.info_text}>Número Motor: {dadosVeiculo.numero_motor} </Text>
                </View>
                <View style={styles.input_o}>
                  <Text style={styles.info_text}>Etiquetas: {dadosVeiculo.etiquetas} </Text>
                </View>
              </View>
          )
        }

      </View>



    );
  }
}

export default Veiculos;