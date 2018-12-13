import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import axios from 'axios';
import { Header } from '../../globalComponents';
// import { DrawerActions } from 'react-navigation-drawer';

const dias = 23;
class Main extends Component {

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
    axios.get('http://35.231.239.168/api/pericia/formularios/1')
      .then((resp) => {
        console.tron.log(resp.data);
        AsyncStorage.setItem('@Form', JSON.stringify(resp.data));
      }).catch(err => {
        console.tron.log(err);
      });
  }

  state ={
    drawerStatus: null,
  }

  componentWillMount() {
    this.requestFroms();
    console.tron.log(this.props);
  }

  componentDidMount() {

    //const drawer = this.props.navigation.setParams({ drawer: 'drawer' });
  }
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
              <Text style={styles.token}>Token valido por </Text>
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

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.button}>
                <Text style={styles.button_text}>Nova Perícia</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
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
