import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import InputText from '../../../components/InputText';

const InputT = () => (
  <View style={styles.container}>
    <InputText />
  </View>
);

InputT.navigationOptions = () => ({
  title: 'Entrada de Texto',
});


export default InputT;
