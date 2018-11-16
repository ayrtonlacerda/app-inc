import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import MyDatePicker from '../../components/date';

const Date = () => (
  <View style={styles.container}>
    <MyDatePicker />
  </View>
);


export default Date;
