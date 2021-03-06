import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import axios from 'axios';
import { Header } from '../../globalComponents';
import { Sketch } from '../../components';

import { NavigationActions, withNavigation } from 'react-navigation';

const dias = 23;
class Main extends Component {

  navigateToScreen = (route) => () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);
    }


  static navigationOptions = {
    header: null,
  }

  openDrawer = () => {
    const { drawerStatus } = this.state;

    if  (drawerStatus === true) {
      //this.props.navigation.toggleDrawer();
    }
  }

  requestFroms = () => {
    axios.get('http://35.231.239.168/api/pericia/formularios/4')
      .then((resp) => {
        console.tron.log(['Requisição', resp.data]);
        AsyncStorage.setItem('@Form', JSON.stringify(resp.data));
      }).catch(err => {
        console.tron.log(err);
      });
  }

  requestQuerry = () => {
    axios.get('http://35.243.140.44/api/query')
    .then((resp) => {
      AsyncStorage.setItem('@Querry', JSON.stringify(resp.data));
    }).catch(err => {
      console.tron.log(err);
    });
  }

  state ={
    drawerStatus: null,
  }

  componentWillMount() {
    this.requestFroms();
    this.requestQuerry();
    console.tron.log(this.props);
  }

  componentDidMount() {

    //const drawer = this.props.navigation.setParams({ drawer: 'drawer' });
  }

  renderSketch = () => {};

  render() {
    const { navigation } = this.props;
    console.tron.log(navigation);

    return (
      <View style={styles.container}>
        <Header
          showMenu
          showExit
          openMenu={navigation.toggleDrawer}
          title='Inicial'
        />

        <View style={styles.bodyS}>
          <View style={styles.halfBody}>
            <View style={styles.tokenView}>
              <Text style={styles.token}>Token válido por </Text>
              <Text style={styles.tokenD}>{dias}</Text>
              <Text style={styles.token}> dias</Text>
            </View>
          </View>


          <View style={styles.info}>
            <View style={styles.profile}>
              <Image source={require('../../assents/imgs/perfil.png')} style={styles.ImageStyle} />
            </View>


            <View style={styles.name_view}>
              <Text style={styles.name}>Nome Sobrenome</Text>
            </View>

            <TouchableOpacity onPress={this.navigateToScreen('NewMenu')}>
              <View style={styles.button}>
                <Text style={styles.button_text}>Nova Perícia</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.navigateToScreen('Hist')}>
              <View style={styles.button}>
                <Text style={styles.button_text}>Minhas Perícias</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.button2}>
                <Text style={styles.button_text2}>Renovar Token</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Main;