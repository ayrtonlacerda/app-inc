import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Animated,
  Easing
} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';


class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    progress: new Animated.Value(0),
  }

  navigateToLogged = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        // Logged
        NavigationActions.navigate({ routeName: 'Logged' }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  onPressAnimated = async () => {
    this.animation.play(30, 1000);
  }

  render() {
    return (
      <ImageBackground source={require('../../assents/imgs/local_crime.jpg')} style={styles.backgroundImage} >
        <View style={styles.container}>
          <StatusBar backgroundColor="rgba(34, 34, 34, 0.75)" />


          <Text style={styles.title}>Bem-Vindo</Text>
          <Text style={styles.descript}>Por favor digite seu CPF</Text>

          <View style={styles.forms}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite seu CPF"
              underlineColorAndroid="rgba(0,0,0,0)"
            />

            <TouchableOpacity style={styles.testebutton} onPress={this.navigateToLogged}>
              <Text style={styles.buttonText}>
                Entrar
               </Text>
             </TouchableOpacity>
           </View>
        </View>
       </ImageBackground>
    );
  }
}


export default Login;

/*
 <Image style={styles.image} source={require('../../assents/imgs/policia-federal-logo.png')} />
*/
