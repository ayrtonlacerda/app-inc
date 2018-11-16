import React from 'react';
//import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
//import { colors } from './styles';

import Login from './pages/login';
import Main from './pages/main';
import New from './pages/new';
import Testes from './pages/Testes';
import GeoLoc from './pages/geoloc';


import Audio from './pages/audio';
import InputT from './pages/input';
import Date from './pages/date/index';
import CameraPage from './pages/camera/index';

// import testes de tela
import StepPage from './pages/Step';
import StepList from './pages/StepList';


const Routes = StackNavigator(
  {
    Login: { screen: New },
    StepPage: { screen: StepPage },
    Logged: DrawerNavigator(
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
      //header: null,
    },
  }
);

export default Routes;
