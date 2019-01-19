import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import axios from 'axios';
import { Header } from '../../globalComponents';
import { Sketch } from '../../components';

import { NavigationActions, withNavigation } from 'react-navigation';

const dias = 23;
class Hist extends Component {

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
    axios.get('http://35.231.239.168/api/pericia/formularios/1')
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
          title='Minhas Perícias'
        />
      </View>
    );
  }
}

export default Hist;
