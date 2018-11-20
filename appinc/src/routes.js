import React from 'react';
//import { Dimensions } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { colors } from './styles';

import Login from './pages/login';
import Main from './pages/main';
import New from './pages/new';
import Testes from './pages/Testes';

// Componentes
import GeoLoc from './pages/components/geoloc';
import Audio from './pages/components/audio';
import InputT from './pages/components/input';
import Date from './pages/components/date';
import CameraPage from './pages/components/camera';

// import testes de tela
import StepPage from './pages/Step';
import StepList from './pages/StepList';


const Routes = createStackNavigator(
  {
    Login: { screen: Main },
    StepPage: { screen: StepPage },
    NewMenu: { screen: New },
    Logged: createDrawerNavigator(
      {
        Main: { screen: Main, drawerLabel: 'Bem-Vindo' },
        NewMenu: { screen: New },
        Exit: { screen: Login },
      },
      {
        navigationOptions: {
          headerStyle: {
            backgroundColor: colors.lighter,
            borderBottomWidth: 0,
          },
        headerTintColor: colors.halfblack,         
        },       
      }
    ),
    StepList: { screen: StepList },
    Testes: { screen: Testes },
    Audio: { screen: Audio },
    InputT: { screen: InputT },
    Geoloc: { screen: GeoLoc },
    Camera: { screen: CameraPage },
    Date: { screen: Date },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.lighter,
        borderBottomWidth: 0,
      },
      headerTintColor: colors.halfblack,
      // headerBackTitle: null,
      //header: null,
    },
  }
);

export default Routes;
