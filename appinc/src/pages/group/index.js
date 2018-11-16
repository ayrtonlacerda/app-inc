import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <Text>main</Text>
  </View>
);

Main.navigationOptions = () => ({
  title: 'Pagina Inicial',
});


export default Main;
