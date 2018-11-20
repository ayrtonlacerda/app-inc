import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import axios from 'axios';
import { DrawerActions } from 'react-navigation-drawer';


class Main extends Component {
  
  static navigationOptions = {    
    headerTitle: 'Bem-Vindo',      
  }

  openDrawer = () => {
    const { drawerStatus } = this.state;
    
    if  (drawerStatus === true) {
      //this.props.navigation.toggleDrawer();
    }
  }

  requestFroms = () => {
    axios.get('http://35.231.239.168/api/pericia/formularios/1')
      .then((resp) => {
        console.tron.log(resp.data);      
       // AsyncStorage.setItem('@Form', JSON.stringify(resp.data));
      }).catch(err => {
        console.tron.log(err);
      });
  } 

  state ={
    drawerStatus: null,
  }

  componentWillMount() {  
    //this.requestFroms();
    console.tron.log(this.props);
  }

  componentDidMount() {
   
    //const drawer = this.props.navigation.setParams({ drawer: 'drawer' });
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
              <TouchableOpacity onPress={() => this.props.actions.toggleDrawer()}>
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
