import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import { InputText } from '../../components/InputText';

import styles from './styles';

export default class Testes extends Component {

  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#666" />
        <View elevation={7} style={styles.header}>
            <View style={styles.viewIcon}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('DrawerToggle'); }}>
                <Icon name="md-menu" size={28} style={styles.icon} />
              </TouchableOpacity>
            </View>
              <View style={styles.viewTitle}>
                <Text style={styles.headerTitle}>
                  Testes
                </Text>
              </View>
            <View style={styles.concerto} />
        </View>

      <ScrollView>
        <View elevation={5} style={styles.box}>
          <ImageBackground source={require('../../assents/imgs/camera.jpg')} style={styles.backgroundImage} >
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Camera')} activeOpacity={0.9}>
              <Text style={styles.buttonText}>
                Camera
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View elevation={5} style={styles.box}>
          <ImageBackground source={require('../../assents/imgs/microfone-1.jpg')} style={styles.backgroundImage} >
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Audio')}  activeOpacity={0.9}>
              <Text style={styles.buttonText}>
                Gravador de Audio
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View elevation={5} style={styles.box}>
          <ImageBackground source={require('../../assents/imgs/inputText.jpg')} style={styles.backgroundImage} >
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('InputT')} activeOpacity={0.9}>
              <Text style={styles.buttonText}>
                Entrada de Texto
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View elevation={5} style={styles.box}>
          <ImageBackground source={require('../../assents/imgs/codicgoBars.jpg')} style={styles.backgroundImage} >
            <TouchableOpacity style={styles.button} onPress={this.navigateToLogged} activeOpacity={0.9}>
              <Text style={styles.buttonText}>
                Codigo de Barras
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View elevation={5} style={styles.box}>
          <ImageBackground source={require('../../assents/imgs/location.png')} style={styles.backgroundImage} >
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Geoloc')} activeOpacity={0.9}>
                <Text style={styles.buttonText}>
                  Geolocalização
                </Text>
              </TouchableOpacity>
          </ImageBackground>
        </View>

            <View elevation={5} style={styles.box}>
          <ImageBackground source={require('../../assents/imgs/forms.jpg')} style={styles.backgroundImage}>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Date')} activeOpacity={0.9}>
                <Text style={styles.buttonText}>
                  Data e Hora
                </Text>
              </TouchableOpacity>
          </ImageBackground>
        </View>

        <View elevation={5} style={styles.box}>
          <ImageBackground source={require('../../assents/imgs/forms.jpg')} style={styles.backgroundImage}>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Forms')} activeOpacity={0.9}>
                <Text style={styles.buttonText}>
                  Exemplo de Formulario
                </Text>
              </TouchableOpacity>
          </ImageBackground>
        </View>


          </ScrollView>
      </View>
    );
  }
}

Testes.navigationOptions = () => ({
  header: null,
});
