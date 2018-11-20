import React from 'react';
import { View, Text } from 'react-native';
import Camera from '../../../components/camera';

import styles from './styles';

const CameraPage = () => (
  <View style={styles.container}>
    <Camera />
  </View>
);

Camera.navigationOptions = () => ({
  title: 'Pagina Inicial',
});


export default CameraPage;
