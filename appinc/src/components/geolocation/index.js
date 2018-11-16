
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GeoActions } from '../../store/ducks/geolocation';


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
     this.props.submitGeoloc(this.state);
   }

  render() {
    return (
      <View styles={styles.main}>
        <View style={styles.image}>
          <Image source={require('../../assents/imgs/point.png')} />
        </View>


        <View styles={styles.main}>
          <TouchableOpacity
            onPress={this.refresh}
            style={styles.button}
          >
            <Text style={styles.button_text}>Verificar localização</Text>
          </TouchableOpacity>
        </View>

          {this.state.error
            ? <View style={styles.input}>
                <Text style={styles.info_text}>Error: {this.state.error}</Text>
              </View>
            : <ScrollView>

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

              </ScrollView>
          }

          <View styles={styles.main}>
            <TouchableOpacity
              onPress={this.submitGeolocation}
              style={styles.button}
            >
              <Text style={styles.button_text}>Submit</Text>
            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocation);
