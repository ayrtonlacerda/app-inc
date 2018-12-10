import React from 'react';
//import { Dimensions } from 'react-native';
import { StackNavigator, createDrawerNavigator } from 'react-navigation';
//import { colors } from './styles';

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


const Routes = StackNavigator(
  {
    Login: { screen: New },
    StepPage: { screen: StepPage },
    Logged: createDrawerNavigator(
      {
        Main: { screen: Main },
        NewMenu: { screen: New },
        Exit: { screen: Login },
      },
      {
        drawerwidth: 120,
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
      /*headerStyle: {
        backgroundColor: colors.light,
        borderBottomWidth: 0,
      },
      headerTintColor: colors.halfblack,
      headerBackTitle: null,*/
      header: null,
    },
  }
);

export default Routes;
