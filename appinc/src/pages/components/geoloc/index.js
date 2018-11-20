import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import GeoLocation from '../../../components/geolocation';

const GeoLoc = () => (
  <View style={styles.container}>
    <GeoLocation />
  </View>
);


export default GeoLoc;
