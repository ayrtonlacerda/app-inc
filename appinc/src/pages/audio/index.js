import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import AudioRec from '../../components/audio';

const Audio = () => (
  <View style={styles.container}>
    <AudioRec />
  </View>
);

Audio.navigationOptions = () => ({
  title: 'Audio Gravação',
});


export default Audio;
