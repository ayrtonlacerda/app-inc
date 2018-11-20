import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import axios from 'axios';

class Main extends Component {

  static navigationOptions ={
    title: 'Bem-vindo',
  }

requestFroms = () => {
  axios.get('http://35.231.239.168/api/pericia/formularios/1')
    .then((resp) => {
      console.tron.log(resp.data);
      AsyncStorage.setItem('@Form', resp.data);
    }).catch(err => {
      console.tron.log(err);
    });
} 

componentWillMount() {
  this.requestFroms();
}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#EEE" barStyle='dark-content' />    

        <View style={styles.bodyS}>
          <View style={styles.profile}>
            <Image source={require('../../assents/imgs/perfil.png')} style={styles.ImageStyle} />
          </View>

          <View style={styles.card}>
            <View>
              <Text style={styles.name}>Perito da Silva</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.info}>Seu token ainda é válido por 21 dias</Text>
            </View>

            <View style={styles.element}>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                  <Text style={styles.button_text}>Renovar Token</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

            <View style={styles.element}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('NewMenu')}>
                <View style={styles.button2}>
                  <Text style={styles.button_text}>Nova Pericia</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
    );
  }
}

export default Main;
