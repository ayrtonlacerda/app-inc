
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';
import styles from './styles';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { Creators as GeoActions } from '../../store/ducks/geolocation';


class GeoLocation extends Component {

   state = {
     latitude: null,
     longitude: null,
     acuracia: null,
     error: null,
     teste: 'hahahha'
   }

   refresh = () => {
     this.setState({
       latitude: null,
       longitude: null,
       acuracia: null,
       error: null,
       view: true,
     });
  // método navigator.geolocation ( nativo do react native)
  // usando função getCurrentLocation, que retorna uma mensagem JSON com campos :
  /** {
     "timestamp": 1484669056399.49,
     "coords": {
       "accuracy": 5,
       "altitude": 0,
       "altitudeAccuracy": -1,
       "heading": -1,
       "latitude": 37.785834,
       "longitude": -122.406417,
       "speed": -1
    } **/
     navigator.geolocation.getCurrentPosition(
       // acessando os campos retornados na mensagem JSON e atribuindo a variavel de estado correspondente
      (position) => {

        AsyncStorage.setItem('@Geolocalizacao', (JSON.stringify( position)));

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          acuracia: position.coords.accuracy,
          altitude: position.coords.altitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    
   };

   submitGeolocation = () => {


   }

 
  render() {
    const { label } = this.props.data;
    return (
      <View style={styles.container}>
      <View>
          <View style={styles.cabecalho}>
            <Image source={require('../../assents/imgs/point.png')} style={styles.image} />
              <View style ={styles.texto_geo}>
                <Text style={styles.label}>{label}</Text>
              </View>
          </View>
        <View styles={styles.main}>
          <TouchableOpacity onPress={this.refresh} style={styles.button}>
            <Text style={styles.button_text}>Verificar localização</Text>
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
                  <Text style={styles.info_text}>Latitude: {this.state.latitude}</Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Longitude: {this.state.longitude}</Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Altitute: {this.state.altitude} </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.info_text}>Acurácia: {this.state.acuracia} </Text>
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

export default GeoLocation;
